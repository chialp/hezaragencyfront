import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "نام کاربری الزامی است"],
      trim: true,
      maxlength: [50, "نام کاربری نمی‌تواند بیشتر از ۵۰ کاراکتر باشد"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "رمز عبور الزامی است"],
      minlength: [6, "رمز عبور باید حداقل ۶ کاراکتر باشد"],
    },
    role: {
      type: String,
      enum: ["admin", "author"],
      default: "author",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    lastLogin: {
      type: Date,
      default: null,
    },
    loginCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

userSchema.methods.comparePassword = async function (candidatePassword) {
  return candidatePassword === this.password;
};

userSchema.methods.updateLoginStats = function () {
  this.loginCount += 1;
  this.lastLogin = new Date();
  return this.save();
};

userSchema.methods.getPublicProfile = function () {
  const userObject = this.toObject();
  delete userObject.password;
  delete userObject.__v;
  return userObject;
};

export default mongoose.models.User || mongoose.model("User", userSchema);
