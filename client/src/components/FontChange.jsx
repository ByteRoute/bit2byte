import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFontClass } from "../redux/fontSlice";
import { PiStudentLight } from "react-icons/pi";
import { MdTextDecrease, MdTextFormat, MdTextIncrease } from "react-icons/md";
import { Menu } from "@headlessui/react";
// importing the actions from counter Slice
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

  const count = useSelector((state) => state.counter.value); // Get count from counterSlice
  const dispatch = useDispatch();

  const handleIncrement = (count) => {
    dispatch(increment()); // Dispatch the increment action to counterSlice
    console.log(count);
    const newFontClass = getFontClassBasedOnCount(count + 1); // Calculate the new font class based on the updated count
    console.log(newFontClass);
    dispatch(setFontClass(newFontClass)); // Dispatch the font class to fontSlice
  };

  const handleDecrement = (count) => {
    dispatch(decrement()); // Dispatch the decrement action to counterSlice
    console.log("decrementing: ");
    const newFontClass = getFontClassBasedOnCount(count - 1); // Calculate the new font class based on the updated count
    dispatch(setFontClass(newFontClass)); // Dispatch the font class to fontSlice
  };

  return (
    <div>
      {/*//todo: here add buttons to change contrast and language, and then implement functionality of font size, contrast and language*/}
      {/* just here for debugging purposes */}

      <div className="flex justify-center align-middle items-center gap-2   text-black bg-white">
        <span>
          <MdTextIncrease
            className="text-2xl"
            onClick={() => handleIncrement(count)}
          />
        </span>
        <span>
          <MdTextFormat className="text-2xl" />
        </span>
        <span>
          <MdTextDecrease
            className="text-2xl"
            onClick={() => handleDecrement(count)}
          />
        </span>
      </div>
    </div>
  );
};

export default FontChange;
