import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFontClass } from "../redux/fontSlice";
import { changeTheme } from "../redux/ThemeSlices/themeSlice";
import { MdTextDecrease, MdTextFormat, MdTextIncrease } from "react-icons/md";
import { increment, decrement } from "../redux/counterSlice";

const FontChange = () => {
  const getFontClassBasedOnCount = (count) => {
    if (count <= -4) return "text-xs";
    if (count === -3) return "text-sm";
    if (count === -2) return "text-base";
    if (count === -1) return "text-lg";
    if (count === 0) return "text-xl";
    if (count === 1) return "text-2xl";
    if (count === 2) return "text-3xl";
    if (count === 3) return "text-4xl";
    if (count === 4) return "text-5xl";
    if (count === 5) return "text-6xl";
    if (count === 6) return "text-7xl";
    if (count === 7) return "text-8xl";
    if (count >= 8) return "text-9xl";
  };

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrement = (count) => {
    dispatch(increment());
    const newFontClass = getFontClassBasedOnCount(count + 1);
    dispatch(setFontClass(newFontClass));
  };

  const handleDecrement = (count) => {
    dispatch(decrement());
    const newFontClass = getFontClassBasedOnCount(count - 1);
    dispatch(setFontClass(newFontClass));
  };
  const theme = useSelector((state) => state.theme.theme);
  return (
    <div className="flex justify-around">
      <div className="flex items-center gap-4 text-black bg-white">
        {/* Checkbox toggle */}
        {theme}
        <input
          type="checkbox"
          className="toggle border-blue-500 bg-blue-500 [--tglbg:gray] hover:bg-blue-700 my-2"
          onClick={() => dispatch(changeTheme())}
          defaultChecked
        />

        {/* Font size controls */}
        <MdTextDecrease
          className="text-2xl cursor-pointer"
          onClick={() => handleDecrement(count)}
        />
        <MdTextFormat className="text-2xl" />
        <MdTextIncrease
          className="text-2xl cursor-pointer"
          onClick={() => handleIncrement(count)}
        />
      </div>
    </div>
  );
};

export default FontChange;
