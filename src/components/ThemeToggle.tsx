import { useTheme } from "@/context/ThemeContext";
import React from "react";
import { MoonStars, SunDim } from "@phosphor-icons/react";
const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  //   console.log(theme?.theme);

  return (
    <button
      onClick={() => setTheme(theme == "light" ? "dark" : "light")}
      className={` px-3 py-1 rounded-md`}
    >
      {theme == "light" ? (
        <MoonStars size={32} color="#000" />
      ) : (
        <SunDim size={32} />
      )}
    </button>
  );
};

export default ThemeToggle;
