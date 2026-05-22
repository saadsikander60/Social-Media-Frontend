function AuthLayout({ children, title, subtitle }) {
  return (
    <div className="min-h-screen bg-[#030712] flex items-center justify-center p-6 overflow-hidden relative">
      {/* BLUR EFFECTS */}
      <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-blue-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-purple-500/20 blur-3xl rounded-full"></div>

      {/* CARD */}
      <div className="relative z-10 w-full max-w-[520px] bg-white/[0.04] border border-white/10 backdrop-blur-3xl rounded-[40px] p-10 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
        {/* LOGO */}
        <div className="text-center mb-10">
          <h1 className="text-6xl font-black bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-500 bg-clip-text text-transparent tracking-wider">
            Flowin
          </h1>

          <p className="text-gray-400 mt-4 text-lg">{subtitle}</p>
        </div>

        {/* TITLE */}
        <div className="mb-8">
          <h2 className="text-4xl font-black text-white text-center">
            {title}
          </h2>
        </div>

        {/* CONTENT */}
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;
