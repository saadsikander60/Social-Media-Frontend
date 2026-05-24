"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import Link from "next/link";

import toast from "react-hot-toast";

import { Mail, ArrowRight } from "lucide-react";

import api from "@/services/api";

function ForgotPasswordPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(false);

  // HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      if (!email) {
        return toast.error("Email is required");
      }

      await api.post("/api/users/forgot-password", {
        email,
      });

      toast.success("OTP sent successfully");

      router.push(`/reset-password?email=${encodeURIComponent(email)}`);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to send OTP");
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

          <p className="text-gray-500 mt-4 text-lg">Reset your password</p>
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
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            {loading ? "Sending OTP..." : "Send OTP"}

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

export default ForgotPasswordPage;
