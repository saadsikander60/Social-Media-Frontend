function AuthInput({ type = "text", placeholder, value, onChange, name }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      className="
      w-full
      h-[65px]
      bg-white/[0.05]
      border
      border-white/10
      rounded-2xl
      px-6
      text-white
      placeholder:text-gray-500
      outline-none
      focus:border-blue-500
      focus:bg-white/[0.07]
      transition-all
      duration-300
      text-lg
      font-medium
      "
    />
  );
}

export default AuthInput;
