import { Sun, Moon } from "lucide-react";
import { useTheme } from "../Context/theme";

export default function Themebtn() {
  const { themeMode, darkMode, lightMode } = useTheme();

  return (
    <div
      onClick={() => (themeMode === "light" ? darkMode() : lightMode())}
      className={`relative w-[100px] h-[35px] flex items-center rounded-full p-1 cursor-pointer transition-all duration-500 shadow-lg
        ${
          themeMode === "light"
            ? "bg-gradient-to-r from-yellow-300 to-orange-400"
            : "bg-gradient-to-r from-indigo-600 to-purple-700"
        }`}
    >
      {/* Sliding Circle */}
      <div
        className={`absolute left-1 flex items-center justify-center h-[26px] w-[26px] rounded-full bg-white shadow-md transition-transform duration-500
        ${themeMode === "light" ? "translate-x-0" : "translate-x-[64px]"}`}
      >
        {themeMode === "light" ? (
          <Sun size={14} className="text-yellow-500" />
        ) : (
          <Moon size={14} className="text-purple-600" />
        )}
      </div>
    </div>
  );
}