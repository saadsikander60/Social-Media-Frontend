"use client";

import { useState } from "react";

import Link from "next/link";

import { useRouter } from "next/navigation";

import toast from "react-hot-toast";

import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";

import AuthLayout from "@/components/auth/AuthLayout";

import api from "@/services/api";

import { useAuth } from "@/context/AuthContext";

function LoginPage() {
  const router = useRouter();

  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // HANDLE INPUT
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // HANDLE LOGIN
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      if (!formData.email || !formData.password) {
        return toast.error("Please fill all fields");
      }

      const response = await api.post(
        "http://localhost:8000/api/users/login",
        formData,
      );

      const userData = response?.data?.data;

      // SAVE USER + PERSISTENCE
      login(userData);

      toast.success("Login successful 🚀");

      router.push("/dashboard");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
      min-h-screen
      overflow-hidden
      bg-[#030712]
      flex
      items-center
      justify-center
      p-6
      relative
      "
    >
      {/* BLURS */}
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
      ></div>

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
      ></div>

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

          <p className="text-gray-500 mt-4 text-lg">Flow Through Memories</p>
        </div>

        {/* TITLE */}

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
              name="email"
              value={formData.email}
              onChange={handleChange}
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

          {/* PASSWORD */}
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
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={handleChange}
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

          {/* OPTIONS */}
          <div className="flex items-center justify-between">
            <label
              className="
              flex
              items-center
              gap-3
              text-gray-400
              text-sm
              cursor-pointer
              "
            >
              <input type="checkbox" className="accent-blue-500" />
              Remember me
            </label>

            <Link
              href="/forgot-password"
              className="
              text-blue-400
              hover:text-blue-300
              transition-all
              duration-300
              text-sm
              font-medium
              "
            >
              Forgot Password?
            </Link>
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
            {loading ? "Please wait..." : "Login"}

            <ArrowRight className="w-5 h-5" />
          </button>

          {/* SIGNUP */}
          <div className="text-center pt-3">
            <p className="text-gray-400">
              Don&apos;t have an account?{" "}
              <Link
                href="/signup"
                className="
                text-blue-400
                hover:text-blue-300
                font-bold
                "
              >
                Signup
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
