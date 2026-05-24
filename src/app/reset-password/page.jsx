"use client";

import { useState } from "react";

import Link from "next/link";

import { useRouter, useSearchParams } from "next/navigation";

import toast from "react-hot-toast";

import { Mail, Lock, ShieldCheck, Eye, EyeOff, ArrowRight } from "lucide-react";

import api from "@/services/api";

function ResetPasswordPage() {
  const router = useRouter();

  const searchParams = useSearchParams();

  const emailFromQuery = searchParams.get("email") || "";

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: emailFromQuery,
    otp: "",
    newPassword: "",
    confirmPassword: "",
  });

  // HANDLE INPUT
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // HANDLE RESET
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const { email, otp, newPassword, confirmPassword } = formData;

      if (!email || !otp || !newPassword || !confirmPassword) {
        return toast.error("Please fill all fields");
      }

      if (otp.length !== 5) {
        return toast.error("OTP must be 5 digits");
      }

      if (newPassword !== confirmPassword) {
        return toast.error("Passwords do not match");
      }

      await api.post("/api/users/reset-password", {
        email,
        otp,
        newPassword,
      });

      toast.success("Password reset successfully");

      router.push("/login");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Password reset failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
      min-h-screen
      bg-[#030712]
      flex
      items-center
      justify-center
      p-6
      relative
      overflow-hidden
      "
    >
      {/* BLUR */}
      <div
        className="
        absolute
        top-[-120px]
        left-[-120px]
        w-[320px]
        h-[320px]
        bg-blue-500/20
        blur-3xl
        rounded-full
        "
      />

      <div
        className="
        absolute
        bottom-[-120px]
        right-[-120px]
        w-[320px]
        h-[320px]
        bg-purple-500/20
        blur-3xl
        rounded-full
        "
      />

      {/* CARD */}
      <div
        className="
        relative
        z-10
        w-full
        max-w-[520px]
        bg-white/[0.04]
        border
        border-white/10
        backdrop-blur-3xl
        rounded-[40px]
        p-10
        shadow-[0_20px_80px_rgba(0,0,0,0.45)]
        "
      >
        {/* LOGO */}
        <div className="text-center mb-10">
          <h1
            className="
            text-6xl
            font-black
            bg-gradient-to-r
            from-cyan-300
            via-blue-400
            to-indigo-500
            bg-clip-text
            text-transparent
            tracking-wider
            "
          >
            Flowin
          </h1>

          <p className="text-gray-500 mt-4 text-lg">Create your new password</p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-7">
          {/* EMAIL */}
          <div className="relative">
            <Mail
              className="
              absolute
              left-5
              top-1/2
              -translate-y-1/2
              text-gray-500
              w-5
              h-5
              "
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              autoComplete="email"
              className="
              w-full
              h-[72px]
              rounded-3xl
              bg-white/[0.05]
              border
              border-white/10
              pl-14
              pr-5
              text-white
              text-lg
              outline-none
              placeholder:text-gray-500
              focus:border-blue-500
              focus:bg-white/[0.07]
              transition-all
              duration-300
              "
            />
          </div>

          {/* OTP */}
          <div className="relative">
            <ShieldCheck
              className="
              absolute
              left-5
              top-1/2
              -translate-y-1/2
              text-gray-500
              w-5
              h-5
              "
            />

            <input
              type="text"
              name="otp"
              value={formData.otp}
              onChange={handleChange}
              placeholder="Enter OTP"
              maxLength={6}
              className="
              w-full
              h-[72px]
              rounded-3xl
              bg-white/[0.05]
              border
              border-white/10
              pl-14
              pr-5
              text-white
              text-lg
              outline-none
              placeholder:text-gray-500
              focus:border-blue-500
              focus:bg-white/[0.07]
              transition-all
              duration-300
              "
            />
          </div>

          {/* NEW PASSWORD */}
          <div className="relative">
            <Lock
              className="
              absolute
              left-5
              top-1/2
              -translate-y-1/2
              text-gray-500
              w-5
              h-5
              "
            />

            <input
              type={showPassword ? "text" : "password"}
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              placeholder="New password"
              autoComplete="new-password"
              className="
              w-full
              h-[72px]
              rounded-3xl
              bg-white/[0.05]
              border
              border-white/10
              pl-14
              pr-14
              text-white
              text-lg
              outline-none
              placeholder:text-gray-500
              focus:border-blue-500
              focus:bg-white/[0.07]
              transition-all
              duration-300
              "
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="
              absolute
              right-5
              top-1/2
              -translate-y-1/2
              text-gray-500
              "
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* CONFIRM PASSWORD */}
          <div className="relative">
            <Lock
              className="
              absolute
              left-5
              top-1/2
              -translate-y-1/2
              text-gray-500
              w-5
              h-5
              "
            />

            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
              autoComplete="new-password"
              className="
              w-full
              h-[72px]
              rounded-3xl
              bg-white/[0.05]
              border
              border-white/10
              pl-14
              pr-14
              text-white
              text-lg
              outline-none
              placeholder:text-gray-500
              focus:border-blue-500
              focus:bg-white/[0.07]
              transition-all
              duration-300
              "
            />

            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="
              absolute
              right-5
              top-1/2
              -translate-y-1/2
              text-gray-500
              "
            >
              {showConfirmPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="
            w-full
            h-[72px]
            rounded-3xl
            bg-gradient-to-r
            from-blue-600
            via-indigo-600
            to-purple-600
            hover:scale-[1.02]
            transition-all
            duration-300
            text-white
            text-xl
            font-black
            shadow-[0_15px_40px_rgba(59,130,246,0.35)]
            flex
            items-center
            justify-center
            gap-3
            "
          >
            {loading ? "Resetting..." : "Reset Password"}

            <ArrowRight className="w-5 h-5" />
          </button>

          {/* LOGIN */}
          <div className="text-center">
            <Link
              href="/login"
              className="
              text-blue-400
              hover:text-blue-300
              font-medium
              "
            >
              Back to Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ResetPasswordPage;
