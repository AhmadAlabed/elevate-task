import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { dark, light } from "../../../assets/svg";
const ThemeSwitch = () => {
  const { mode, changeMode } = useContext(ThemeContext);
  return (
    <button
      onClick={changeMode}
      className="flex px-2  justify-center items-center bg-gray-200 hover:opacity-80 text-sm font-medium"
    >
      <img className=" w-6" src={mode === "light" ? dark : light} alt="" />
    </button>
  );
};

export default ThemeSwitch;
