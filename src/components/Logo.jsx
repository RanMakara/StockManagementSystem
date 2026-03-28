// src/components/Logo.jsx
const Logo = () => {
  return (
    <div className="flex justify-center mb-4">
      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center shadow-lg">
        <img src="p2.png" className="w-10 h-10 object-contain drop-shadow-sm" alt="logo" />
      </div>
    </div>
  );
};

export default Logo;