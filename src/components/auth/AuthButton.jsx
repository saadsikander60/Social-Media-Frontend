function AuthButton({ text, loading, onClick, type = "submit" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading}
      className="
      w-full
      h-[65px]
      rounded-2xl
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
      shadow-[0_10px_40px_rgba(59,130,246,0.35)]
      disabled:opacity-70
      disabled:cursor-not-allowed
      "
    >
      {loading ? "Please wait..." : text}
    </button>
  );
}

export default AuthButton;
