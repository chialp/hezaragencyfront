"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import * as BABYLON from "@babylonjs/core";
import "@babylonjs/loaders/glTF";
import "@babylonjs/core/";
import { motion, AnimatePresence } from "framer-motion";
import { DracoCompression } from "@babylonjs/core/Meshes/Compression/dracoCompression";
import {
  Home,
  Briefcase,
  Info,
  RotateCcw,
  X,
  Menu,
  Users,
  Phone,
  Code,
  Layers,
  Target as TargetIcon,
  ArrowRight,
  Globe,
  Headphones,
  Box,
  TrendingUp,
  Instagram,
  Send,
  MapPin,
  Mail,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AgencyHero3D() {
  const canvasRef = useRef();
  const engineRef = useRef();
  const [modelLoaded, setModelLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadError, setLoadError] = useState(null);
  const modelRef = useRef(null);
  const [showInfo, setShowInfo] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState("default");
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const animationRefs = useRef([]);
  const [currentScale, setCurrentScale] = useState(1.0);
  const [isMobile, setIsMobile] = useState(false);
  const [modelFullyLoaded, setModelFullyLoaded] = useState(false);
  const lastBetaRef = useRef(Math.PI / 2.5);

  // اضافه کردن state برای کنترل چرخش خودکار
  const [autoRotate, setAutoRotate] = useState(true);
  const autoRotateRef = useRef(true);
  const autoRotateSpeedRef = useRef(0.2); // سرعت پایه - کاهش داده شد
  const rotationEnabledRef = useRef(true); // همیشه چرخش فعال باشد

  useEffect(() => {
    if (typeof window === "undefined") return;

    DracoCompression.Configuration = {
      decoder: {
        wasmUrl: "/draco/draco_wasm_wrapper_gltf.js",
        wasmBinaryUrl: "/draco/draco_decoder_gltf.wasm",
        fallbackUrl: "/draco/draco_decoder_gltf.js",
      },
    };
  }, []);

  const cameraPresets = {
    home: {
      alpha: -Math.PI / 2,
      beta: Math.PI / 2.5,
      radius: 15,
      targetX: 0,
      targetY: -1,
      targetZ: 0,
    },
    services: {
      alpha: -Math.PI / 3,
      beta: Math.PI / 2.5,
      radius: 15,
      targetX: 2,
      targetY: -2,
      targetZ: 2,
    },
    portfolio: {
      alpha: Math.PI / 4,
      beta: Math.PI / 2.5,
      radius: 15,
      targetX: -2,
      targetY: -2,
      targetZ: -2,
    },
    contact: {
      alpha: Math.PI / 2,
      beta: Math.PI / 2.5,
      radius: 15,
      targetX: 0,
      targetY: 2,
      targetZ: -3,
    },
    about: {
      alpha: 0,
      beta: Math.PI / 2.5,
      radius: 15,
      targetX: 3,
      targetY: 2,
      targetZ: -1,
    },
  };

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const createAnimation = useCallback(
    (object, property, targetValue, duration) => {
      if (!sceneRef.current) return null;

      const animation = new BABYLON.Animation(
        `${property}Anim`,
        property,
        60,
        BABYLON.Animation.ANIMATIONTYPE_FLOAT,
        BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT,
      );

      const keys = [
        { frame: 0, value: object[property] },
        { frame: 60 * duration, value: targetValue },
      ];

      animation.setKeys(keys);
      const easingFunction = new BABYLON.CircleEase();
      easingFunction.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);
      animation.setEasingFunction(easingFunction);

      sceneRef.current.beginDirectAnimation(
        object,
        [animation],
        0,
        60 * duration,
        false,
        1,
      );
      return animation;
    },
    [],
  );

  const applyCameraSettings = useCallback(
    (settings, animate = true) => {
      if (!cameraRef.current || !sceneRef.current) return;

      animationRefs.current.forEach((anim) => {
        try {
          sceneRef.current?.stopAnimation(anim);
        } catch (e) {}
      });

      const camera = cameraRef.current;
      if (animate) {
        const anim1 = createAnimation(camera, "alpha", settings.alpha, 0.8);
        const anim2 = createAnimation(camera, "beta", settings.beta, 0.8);
        const anim3 = createAnimation(camera, "radius", settings.radius, 0.8);
        const anim4 = createAnimation(
          camera.target,
          "x",
          settings.targetX,
          0.8,
        );
        const anim5 = createAnimation(
          camera.target,
          "y",
          settings.targetY,
          -0.8,
        );
        const anim6 = createAnimation(
          camera.target,
          "z",
          settings.targetZ,
          0.8,
        );

        animationRefs.current = [
          anim1,
          anim2,
          anim3,
          anim4,
          anim5,
          anim6,
        ].filter(Boolean);

        // بعد از اتمام انیمیشن، چرخش را ادامه بده
        setTimeout(() => {
          if (autoRotateRef.current) {
            rotationEnabledRef.current = true;
          }
        }, 800);
      } else {
        camera.alpha = settings.alpha;
        camera.beta = settings.beta;
        camera.radius = settings.radius;
        camera.target.x = settings.targetX;
        camera.target.y = settings.targetY;
        camera.target.z = settings.targetZ;
      }
    },
    [createAnimation],
  );

  const goToHome = useCallback(() => {
    setShowInfo(false);
    setCurrentView("home");
    setMenuOpen(false);
    applyCameraSettings(cameraPresets.home);
  }, [applyCameraSettings]);

  const showServices = useCallback(() => {
    setShowInfo(true);
    setCurrentView("services");
    setMenuOpen(false);
    applyCameraSettings(cameraPresets.services);
  }, [applyCameraSettings]);

  const showContact = useCallback(() => {
    setShowInfo(true);
    setCurrentView("contact");
    setMenuOpen(false);
    applyCameraSettings(cameraPresets.contact);
  }, [applyCameraSettings]);

  const showAbout = useCallback(() => {
    setShowInfo(true);
    setCurrentView("about");
    setMenuOpen(false);
    applyCameraSettings(cameraPresets.about);
  }, [applyCameraSettings]);

  const toggleAutoRotate = useCallback(() => {
    autoRotateRef.current = !autoRotateRef.current;
    setAutoRotate(autoRotateRef.current);
    if (autoRotateRef.current) {
      rotationEnabledRef.current = true;
    }
  }, []);

  const setupAgencyLighting = useCallback((scene) => {
    const ambientLight = new BABYLON.HemisphericLight(
      "ambient",
      new BABYLON.Vector3(0, -2, 0),
      scene,
    );
    ambientLight.intensity = 0.9;
    ambientLight.groundColor = new BABYLON.Color3(0.05, 0.08, 0.15);
    ambientLight.diffuse = new BABYLON.Color3(0.9, 0.95, 1.0);

    const mainLight = new BABYLON.DirectionalLight(
      "main",
      new BABYLON.Vector3(-1, -2, -1),
      scene,
    );
    mainLight.position = new BABYLON.Vector3(20, 40, 20);
    mainLight.intensity = 1.5;

    scene.fogMode = BABYLON.Scene.FOGMODE_EXP2;
    scene.fogDensity = 0.005;
    scene.fogColor = new BABYLON.Color3(0.03, 0.05, 0.1);

    return { ambientLight, mainLight };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // تنظیمات موتور برای آفلاین
    const engine = new BABYLON.Engine(canvas, true, {
      preserveDrawingBuffer: true,
      stencil: true,
      antialias: true,
      doNotHandleContextLost: true,
      audioEngine: false,
    });
    engineRef.current = engine;

    const scene = new BABYLON.Scene(engine);
    sceneRef.current = scene;
    scene.clearColor = new BABYLON.Color4(0.05, 0.06, 0.12, 1.0);

    setupAgencyLighting(scene);

    const camera = new BABYLON.ArcRotateCamera(
      "camera",
      cameraPresets.home.alpha,
      cameraPresets.home.beta,
      isMobile ? 18 : 15,
      new BABYLON.Vector3(0, -2, 0),
      scene,
    );
    cameraRef.current = camera;
    camera.lowerBetaLimit = cameraPresets.home.beta;
    camera.upperBetaLimit = cameraPresets.home.beta;
    camera.lowerRadiusLimit = 15;
    camera.upperRadiusLimit = 15;
    camera.attachControl(canvas, true);

    // کنترل‌های ساده
    let isPointerDown = false;
    let lastPointerX = 0;
    let lastInteractionTime = Date.now();
    let isUserInteracting = false;
    const BASE_ROTATION_SPEED = 0.06; // سرعت پایه چرخش - کاهش داده شد
    const IDLE_TIME_BEFORE_AUTO_ROTATE = 2000; // 2 ثانیه عدم تعامل
    const ROTATION_ACCELERATION = 0.0005; // شتاب برای نرم‌تر شدن
    let currentRotationSpeed = 0;
    let isAnimating = false;
    let animationTimeout = null;

    const onPointerDown = (e) => {
      isPointerDown = true;
      isUserInteracting = true;
      lastInteractionTime = Date.now();
      lastPointerX = e.clientX || e.touches?.[0]?.clientX || 0;

      // هنگام تعامل کاربر، انیمیشن را متوقف کن
      isAnimating = false;
      if (animationTimeout) {
        clearTimeout(animationTimeout);
        animationTimeout = null;
      }

      return false;
    };

    const onPointerUp = () => {
      isPointerDown = false;
      lastInteractionTime = Date.now();
      setTimeout(() => {
        isUserInteracting = false;
      }, 100);
      return false;
    };

    const onPointerMove = (e) => {
      if (!isPointerDown || !camera) return;
      const currentX = e.clientX || e.touches?.[0]?.clientX || 0;
      const deltaX = currentX - lastPointerX;
      lastPointerX = currentX;
      lastInteractionTime = Date.now();
      camera.alpha -= deltaX * (isMobile ? 0.005 : 0.003);
      camera.beta = lastBetaRef.current;
      return false;
    };

    canvas.addEventListener("pointerdown", onPointerDown);
    canvas.addEventListener("pointerup", onPointerUp);
    canvas.addEventListener("pointerleave", onPointerUp);
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("touchstart", onPointerDown);
    canvas.addEventListener("touchend", onPointerUp);
    canvas.addEventListener("touchmove", onPointerMove);

    // تابع چرخش خودکار دوربین - بهبود یافته
    const autoRotateCamera = () => {
      if (!camera) return;

      const now = Date.now();

      // اگر کاربر در حال تعامل است، چرخش را متوقف کن
      if (isUserInteracting || isAnimating) {
        currentRotationSpeed = 0;
        return;
      }

      // اگر چرخش خودکار فعال نیست
      if (!autoRotateRef.current) {
        currentRotationSpeed = 0;
        return;
      }

      // محاسبه زمان عدم تعامل
      const idleTime = now - lastInteractionTime;

      // اگر کاربر برای مدتی تعامل نداشته و چرخش مجاز است
      if (
        idleTime > IDLE_TIME_BEFORE_AUTO_ROTATE &&
        rotationEnabledRef.current
      ) {
        // به تدریج سرعت را افزایش بده (برای نرم‌تر شدن)
        if (currentRotationSpeed < BASE_ROTATION_SPEED) {
          currentRotationSpeed += ROTATION_ACCELERATION;
          currentRotationSpeed = Math.min(
            currentRotationSpeed,
            BASE_ROTATION_SPEED,
          );
        }

        // اعمال چرخش
        camera.alpha += currentRotationSpeed * 0.01; // ضریب کوچک برای سرعت مناسب

        // محدود کردن زاویه alpha بین 0 تا 2π
        if (camera.alpha > Math.PI * 2) {
          camera.alpha -= Math.PI * 2;
        } else if (camera.alpha < -Math.PI * 2) {
          camera.alpha += Math.PI * 2;
        }
      } else {
        // به تدریج سرعت را کاهش بده
        if (currentRotationSpeed > 0) {
          currentRotationSpeed -= ROTATION_ACCELERATION * 2;
          currentRotationSpeed = Math.max(currentRotationSpeed, 0);

          // اعمال چرخش باقیمانده
          camera.alpha += currentRotationSpeed * 0.01;
        }
      }

      // همیشه beta را ثابت نگه دار
      camera.beta = lastBetaRef.current;
    };

    // تشخیص انیمیشن با تابع ساده‌تر
    const checkIfAnimating = () => {
      // اگر آرایه انیمیشن‌ها خالی نیست، هنوز انیمیشن فعال است
      return animationRefs.current.length > 0;
    };

    // تابع برای تنظیم وضعیت انیمیشن
    const setAnimatingState = (animating) => {
      isAnimating = animating;
      if (animating) {
        if (animationTimeout) {
          clearTimeout(animationTimeout);
        }
        // بعد از مدت انیمیشن، وضعیت را به false برگردان
        animationTimeout = setTimeout(() => {
          isAnimating = false;
          animationTimeout = null;
        }, 800); // مدت انیمیشن تقریبی
      }
    };

    // شنونده برای انیمیشن‌ها
    const setupAnimationListener = () => {
      // در applyCameraSettings مقدار isAnimating را تنظیم می‌کنیم
      // بنابراین نیازی به بررسی پیچیده نیست
    };

    // اضافه کردن autoRotateCamera به انیمیشن لوپ
    scene.onBeforeRenderObservable.add(() => {
      autoRotateCamera();
    });

    const loadGLBModel = () => {
      const MODEL_URL = "/3d/tokyo.glb";

      BABYLON.SceneLoader.Append(
        "",
        MODEL_URL,
        scene,
        () => {
          console.log("✅ مدل با موفقیت لود شد:", MODEL_URL);
          setModelLoaded(true);
          setLoadingProgress(100);

          const root =
            scene.getMeshByName("__root__") ||
            scene.meshes.find((m) => m.name !== "camera");

          if (root) {
            modelRef.current = root;
            root.scaling.set(1, 1, 1);
            camera.radius = 20;
            camera.target.set(0, 0, 0);
          }

          setTimeout(() => setModelFullyLoaded(true), 500);
        },
        (progress) => {
          if (progress.lengthComputable) {
            setLoadingProgress(
              Math.min(99, (progress.loaded / progress.total) * 100),
            );
          }
        },
        (error) => {
          console.error("❌ خطا در لود مدل:", error);
          createAgencyModel(scene, camera);
        },
      );
    };

    // تابع ایجاد مدل آژانس (fallback)
    const createAgencyModel = (scene, camera) => {
      console.log("🛠️ ایجاد مدل آژانس دیجیتال ساده...");

      // ساختمان اصلی
      const building = BABYLON.MeshBuilder.CreateBox(
        "building",
        { width: 10, height: 8, depth: 6 },
        scene,
      );
      building.position.y = 4;

      const buildingMat = new BABYLON.StandardMaterial("buildingMat", scene);
      buildingMat.diffuseColor = new BABYLON.Color3(0.1, 0.3, 0.6);
      building.material = buildingMat;

      // صفحه جلویی (نمای آژانس)
      const frontPanel = BABYLON.MeshBuilder.CreatePlane(
        "front",
        { width: 8, height: 4 },
        scene,
      );
      frontPanel.position.z = 3;
      frontPanel.position.y = 4;

      const frontMat = new BABYLON.StandardMaterial("frontMat", scene);
      frontMat.emissiveColor = new BABYLON.Color3(0.2, 0.5, 0.8);
      frontPanel.material = frontMat;

      modelRef.current = building;
      setModelLoaded(true);
      setLoadingProgress(100);
      setTimeout(() => setModelFullyLoaded(true), 1000);
    };

    loadGLBModel();

    engine.runRenderLoop(() => {
      scene.render();
    });

    const handleResize = () => {
      engine.resize();
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      canvas.removeEventListener("pointerdown", onPointerDown);
      canvas.removeEventListener("pointerup", onPointerUp);
      canvas.removeEventListener("pointerleave", onPointerUp);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("touchstart", onPointerDown);
      canvas.removeEventListener("touchend", onPointerUp);
      canvas.removeEventListener("touchmove", onPointerMove);

      window.removeEventListener("resize", handleResize);
      animationRefs.current = [];
      if (animationTimeout) {
        clearTimeout(animationTimeout);
      }
      if (sceneRef.current) {
        sceneRef.current.onBeforeRenderObservable.clear();
      }
      scene.dispose();
      engine.dispose();
    };
  }, [isMobile]);

  // کامپوننت کنترل چرخش خودکار (اضافه شده به UI)
  const AutoRotateControl = () => (
    <motion.div
      className="absolute bottom-6 right-6 z-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      <button
        onClick={toggleAutoRotate}
        className={`flex items-center gap-2 px-4 py-3 rounded-xl backdrop-blur-lg border transition-all ${
          autoRotate
            ? "bg-blue-600/30 border-blue-500/50 hover:bg-blue-600/40"
            : "bg-gray-900/50 border-white/10 hover:bg-gray-800/50"
        }`}
      >
        <div
          className={`w-6 h-6 flex items-center justify-center rounded-lg ${
            autoRotate ? "bg-blue-500 animate-pulse" : "bg-gray-700"
          }`}
        >
          <TargetIcon
            className={`w-3 h-3 text-white ${autoRotate ? "" : "opacity-50"}`}
          />
        </div>
        <span className="text-white text-sm font-medium">
          {autoRotate ? "چرخش فعال" : "چرخش غیرفعال"}
        </span>
      </button>
    </motion.div>
  );

  // کامپوننت‌های پنل
  const ServicesPanel = () => (
    <motion.div className="absolute top-20 right-4 w-96 max-w-[calc(100%-2rem)] z-50">
      <div className="bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-2xl rounded-3xl p-6 border border-white/10 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Layers className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">خدمات ما</h3>
              <p className="text-gray-400 text-sm">
                راه‌حل‌های دیجیتال حرفه‌ای هزار
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowInfo(false)}
            className=" w-9 h-9 flex items-center justify-center bg-white/10 rounded-xl hover:bg-red-500/20 transition-all duration-300"
          >
            <X className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* Services */}
        <div className="space-y-4">
          {/* توسعه وبسایت */}
          <Link
            href="/web"
            className="group block bg-white/5 hover:bg-blue-600/10 rounded-2xl p-4 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 bg-blue-600/20 group-hover:bg-blue-600/30 rounded-xl flex items-center justify-center transition-all">
                <Globe className="w-5 h-5 text-blue-400" />
              </div>
              <span className="text-white font-medium">توسعه وبسایت</span>
            </div>
          </Link>

          {/* پشتیبانی */}
          <Link
            href="/support"
            className="group block bg-white/5 hover:bg-green-600/10 rounded-2xl p-4 border border-white/10 hover:border-green-500/30 transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 bg-green-600/20 group-hover:bg-green-600/30 rounded-xl flex items-center justify-center transition-all">
                <Headphones className="w-5 h-5 text-green-400" />
              </div>
              <span className="text-white font-medium">پشتیبانی</span>
            </div>
          </Link>

          {/* توسعه سه بعدی */}
          <Link
            href="/3d"
            className="group block bg-white/5 hover:bg-purple-600/10 rounded-2xl p-4 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 bg-purple-600/20 group-hover:bg-purple-600/30 rounded-xl flex items-center justify-center transition-all">
                <Box className="w-5 h-5 text-purple-400" />
              </div>
              <span className="text-white font-medium">
                توسعه وبسایت سه‌بعدی
              </span>
            </div>
          </Link>

          {/* سئو */}
          <Link
            href="/seo"
            className="group block bg-white/5 hover:bg-yellow-600/10 rounded-2xl p-4 border border-white/10 hover:border-yellow-500/30 transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 bg-yellow-600/20 group-hover:bg-yellow-600/30 rounded-xl flex items-center justify-center transition-all">
                <TrendingUp className="w-5 h-5 text-yellow-400" />
              </div>
              <span className="text-white font-medium">سئو و بهینه‌سازی</span>
            </div>
          </Link>

          {/* Back */}
          <Link
            href="/"
            className="block w-full mt-4 py-3 text-center bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 rounded-2xl text-white font-semibold transition-all duration-300 shadow-lg"
          >
            بازگشت به صفحه اصلی
          </Link>
        </div>
      </div>
    </motion.div>
  );

  const AboutPanel = () => (
    <motion.div className="absolute top-20 right-4 w-96 max-w-[calc(100%-2rem)] z-50">
      <div className="bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-2xl rounded-3xl p-6 border border-white/10 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-blue-500 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">درباره هزار</h3>
              <p className="text-gray-400 text-sm">
                اولین آژانس تخصصی طراحی سایت سه‌بعدی
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowInfo(false)}
            className="flex justify-center items-center w-8 h-8 bg-white/10 rounded-lg hover:bg-red-500/20 transition-all duration-300"
          >
            <X className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="text-gray-300 leading-7 text-sm space-y-3 mb-6">
          <p>
            آژانس{" "}
            <span className="text-white font-semibold">طراحی سایت هزار</span>
            به عنوان اولین آژانس تخصصی طراحی و توسعه
            <span className="text-indigo-400">
              {" "}
              وبسایت‌های سه‌بعدی (3D Website)
            </span>
            با استفاده از تکنولوژی‌های مدرن مانند WebGL و موتورهای گرافیکی
            پیشرفته فعالیت می‌کند.
          </p>

          <p>
            ما با ترکیب طراحی خلاق، توسعه فرانت‌اند حرفه‌ای و بهینه‌سازی سئو،
            تجربه‌ای متفاوت و تعاملی برای برندها خلق می‌کنیم تا در دنیای دیجیتال
            متمایز دیده شوند.
          </p>

          <p>
            خدمات ما شامل طراحی سایت سه‌بعدی، توسعه وبسایت شرکتی، سئو و
            بهینه‌سازی موتورهای جستجو و پشتیبانی تخصصی پروژه‌های وب است.
          </p>
        </div>

        {/* Button */}
        <button
          onClick={goToHome}
          className="w-full py-3 bg-gradient-to-r from-indigo-600 to-blue-500 hover:opacity-90 rounded-2xl text-white font-semibold transition-all duration-300 shadow-lg"
        >
          بازگشت به صفحه اصلی
        </button>
      </div>
    </motion.div>
  );

  const ContactPanel = () => (
    <motion.div className="absolute top-20 right-4 w-96 max-w-[calc(100%-2rem)] z-50">
      <div className="bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-2xl rounded-3xl p-6 border border-white/10 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">تماس با ما</h3>
              <p className="text-gray-400 text-sm">
                آماده پاسخگویی به شما هستیم
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowInfo(false)}
            className="flex justify-center items-center w-8 h-8 bg-white/10 rounded-lg hover:bg-red-500/20 transition-all duration-300"
          >
            <X className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* Contact Items */}
        <div className="space-y-4 text-sm">
          {/* Email */}
          <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
            <Mail className="w-5 h-5 text-blue-400" />
            <span className="text-gray-300">info@hezaragency.com</span>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
            <Phone className="w-5 h-5 text-green-400" />
            <span className="text-gray-300">09910111132</span>
          </div>

          {/* Address */}
          <div className="flex items-start gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
            <MapPin className="w-5 h-5 text-red-400 mt-1" />
            <span className="text-gray-300 leading-6">
              سنندج تکیه و چمن ساختمان آرین ، طبقه ۵{" "}
            </span>
          </div>

          {/* Social Links */}
          <div className="flex gap-3 pt-2">
            <Link
              href="https://t.me/hezaragency"
              target="_blank"
              className="flex-1 flex items-center justify-center gap-2 py-2 bg-sky-600/20 hover:bg-sky-600/30 rounded-xl text-sky-400 transition-all"
            >
              <Send className="w-4 h-4" />
              تلگرام
            </Link>

            <Link
              href="https://instagram.com/hezaragency"
              target="_blank"
              className="flex-1 flex items-center justify-center gap-2 py-2 bg-pink-600/20 hover:bg-pink-600/30 rounded-xl text-pink-400 transition-all"
            >
              <Instagram className="w-4 h-4" />
              اینستاگرام
            </Link>
          </div>

          {/* Back Button */}
          <Link
            href="/"
            className="block w-full mt-4 py-3 text-center bg-gradient-to-r from-green-600 to-emerald-500 hover:opacity-90 rounded-2xl text-white font-semibold transition-all duration-300 shadow-lg"
          >
            بازگشت به صفحه اصلی
          </Link>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-gray-950 via-black to-blue-950 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {(!modelFullyLoaded || !modelLoaded) && !loadError && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/95 backdrop-blur-sm z-50">
          <div className="text-center">
            <p className="text-white text-lg mb-3">
              در حال بارگذاری محیط آژانس...
            </p>
            <div className="w-72 h-2 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                initial={{ width: "0%" }}
                animate={{ width: `${loadingProgress}%` }}
              />
            </div>
            <p className="text-gray-400 text-sm mt-2">
              {loadingProgress.toFixed(0)}%
            </p>
          </div>
        </div>
      )}

      {loadError && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/95 z-50">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-3">
              خطا در بارگذاری
            </h3>
            <p className="text-gray-300 mb-4">{loadError}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-blue-600 rounded-xl text-white"
            >
              تلاش مجدد
            </button>
          </div>
        </div>
      )}

      {modelFullyLoaded && (
        <>
          <header className="absolute top-0 left-0 right-0 z-40 pt-6 px-6">
            <div className="flex items-center justify-between">
              <div
                className="flex items-center gap-3 group cursor-pointer"
                onClick={goToHome}
              >
                <Link href="/" className="flex items-center group">
                  <Image
                    width={110}
                    height={110}
                    src="/logo/logo.webp"
                    alt="Logo"
                    className="object-contain"
                  />
                </Link>
                <div>
                  <p className="text-lg font-bold text-white">
                    آژانس سه بعدی هزار
                  </p>
                  <p className="text-gray-400 text-xs">
                    توسعه و طراحی وبسایت سه بعدی
                  </p>
                </div>
              </div>

              <div className="hidden lg:flex items-center gap-3">
                <button
                  onClick={goToHome}
                  className="px-4 py-2 bg-blue-600/20 text-white rounded-lg"
                >
                  صفحه اصلی
                </button>
                <button
                  onClick={showServices}
                  className="px-4 py-2 bg-blue-600/20 text-white rounded-lg"
                >
                  خدمات
                </button>
                <button
                  onClick={showAbout}
                  className="px-4 py-2 bg-indigo-600/20 text-white rounded-lg"
                >
                  درباره ما
                </button>
                <button
                  onClick={showContact}
                  className="px-4 py-2 bg-green-600/20 text-white rounded-lg"
                >
                  تماس با ما
                </button>
              </div>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden flex justify-center items-center  w-9 h-9 bg-blue-600/20 rounded-lg"
              >
                {menuOpen ? (
                  <X className="w-4 h-4 text-white" />
                ) : (
                  <Menu className="w-4 h-4 text-white" />
                )}
              </button>
            </div>
          </header>

          {/* کنترل چرخش خودکار */}
          <AutoRotateControl />
        </>
      )}

      <AnimatePresence>
        {modelFullyLoaded && menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
            className="fixed top-0 right-0 h-full w-80 bg-gray-900/95 backdrop-blur-xl rounded-l-2xl p-6 border-l border-white/10 shadow-2xl z-50"
          >
            {/* Logo */}
            <div className="flex items-center justify-center mb-8">
              <Image
                src="/logo/logo.webp"
                alt="Hezar Agency"
                width={120}
                height={40}
                className="object-contain"
              />
            </div>

            <div className="space-y-4">
              <button
                onClick={goToHome}
                className="w-full flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-xl text-white transition-all duration-300"
              >
                <span>صفحه اصلی</span>
                <Home size={18} />
              </button>

              <button
                onClick={showServices}
                className="w-full flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-xl text-white transition-all duration-300"
              >
                <span>خدمات</span>
                <Briefcase size={18} />
              </button>

              <button
                onClick={showAbout}
                className="w-full flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-xl text-white transition-all duration-300"
              >
                <span>درباره ما</span>
                <Info size={18} />
              </button>

              <button
                onClick={showContact}
                className="w-full flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-xl text-white transition-all duration-300"
              >
                <span>تماس با ما</span>
                <Phone size={18} />
              </button>

              <button
                onClick={toggleAutoRotate}
                className="w-full flex items-center justify-between p-4 bg-purple-600/20 hover:bg-purple-600/30 rounded-xl text-white transition-all duration-300"
              >
                <span>
                  {autoRotate ? "غیرفعال کردن چرخش" : "فعال کردن چرخش"}
                </span>
                <RotateCcw size={18} />
              </button>
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="w-full flex items-center justify-between p-4 bg-blue-600/20 hover:bg-blue-600/30 rounded-xl text-white transition-all duration-300"
              >
                <span>بازگشت به صفحه اصلی</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {modelFullyLoaded && showInfo && currentView === "services" && (
          <ServicesPanel />
        )}
        {modelFullyLoaded && showInfo && currentView === "about" && (
          <AboutPanel />
        )}
        {modelFullyLoaded && showInfo && currentView === "contact" && (
          <ContactPanel />
        )}
      </AnimatePresence>
    </div>
  );
}
