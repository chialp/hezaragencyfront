import { Suspense } from "react";
import dynamic from "next/dynamic";
const AgencyHero3D = dynamic(() => import("./AgencyHero3d"), {
  loading: () => (
    <div className="h-96 bg-gray-100 animate-pulse">
      در حال بارگذاری نمایشگر سه بعدی...
    </div>
  ),
});

export default function Agency3DClient() {
  return (
    <Suspense
      fallback={
        <div className="w-full h-screen bg-gradient-to-br from-gray-950 via-black to-blue-950" />
      }
    >
      <AgencyHero3D />
    </Suspense>
  );
}
