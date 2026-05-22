"use client";

import { useState } from "react";

import Link from "next/link";

import { useRouter } from "next/navigation";

import toast from "react-hot-toast";

import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ImagePlus,
  ArrowRight,
} from "lucide-react";

import api from "@/services/api";

function SignupPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
  });

  const [profile, setProfile] = useState(null);

  const [coverImage, setCoverImage] = useState(null);

  // HANDLE INPUT
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // HANDLE SIGNUP
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      // VALIDATION
      if (
        !formData.fullname ||
        !formData.username ||
        !formData.email ||
        !formData.password
      ) {
        return toast.error("Please fill all fields");
      }

      if (!profile) {
        return toast.error("Profile image is required");
      }

      // FORMDATA
      const signupData = new FormData();

      signupData.append("fullname", formData.fullname);

      signupData.append("username", formData.username);

      signupData.append("email", formData.email);

      signupData.append("password", formData.password);

      signupData.append("profile", profile);

      if (coverImage) {
        signupData.append("coverImage", coverImage);
      }

      // API CALL
      const response = await api.post("/api/users/register", signupData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success(response?.data?.message || "Signup successful 🚀");

      router.push("/login");
    } catch (error) {
      console.log(error);

      toast.error(error?.response?.data?.message || "Signup failed");
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
        max-w-[560px]
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
        <div className="text-center mb-8">
          <h2 className="text-4xl font-black text-white">Create Account</h2>
        </div>

        {/* FORM */}
        <form autoComplete="off" onSubmit={handleSubmit} className="space-y-6">
          {/* FULLNAME */}
          <div className="relative">
            <User
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
              placeholder="Full Name"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              className="
              w-full
              h-[70px]
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
              "
            />
          </div>

          {/* USERNAME */}
          <div className="relative">
            <User
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
              placeholder="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="
              w-full
              h-[70px]
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
              "
            />
          </div>

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
              autoComplete="new-email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="
              w-full
              h-[70px]
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
              autoComplete="new-password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="
              w-full
              h-[70px]
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

          {/* PROFILE */}
          <div>
            <label
              className="
              flex
              items-center
              gap-3
              mb-3
              text-gray-400
              "
            >
              <ImagePlus className="w-5 h-5" />
              Profile Image
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={(e) => setProfile(e.target.files[0])}
              className="
              w-full
              text-gray-400
              "
            />
          </div>

          {/* COVER */}
          <div>
            <label
              className="
              flex
              items-center
              gap-3
              mb-3
              text-gray-400
              "
            >
              <ImagePlus className="w-5 h-5" />
              Cover Image (Optional)
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={(e) => setCoverImage(e.target.files[0])}
              className="
              w-full
              text-gray-400
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
            {loading ? "Please wait..." : "Create Account"}

            <ArrowRight className="w-5 h-5" />
          </button>

          {/* LOGIN */}
          <div className="text-center pt-2">
            <p className="text-gray-400">
              Already have an account?{" "}
              <Link
                href="/login"
                className="
                text-blue-400
                hover:text-blue-300
                font-bold
                "
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
