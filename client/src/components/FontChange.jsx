import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFontClass } from "../redux/fontSlice";
import { PiStudentLight } from "react-icons/pi";
import { MdTextDecrease, MdTextFormat, MdTextIncrease } from "react-icons/md";
import { Menu } from "@headlessui/react";
// importing the actions from counter Slice
import { increment, decrement } from "../redux/counterSlice";
const FontChange = () => {
  const [fontSize, setFontSize] = useState(16); // Starting with 16px

  const handleIncrement = () => {
    setFontSize(prevSize => prevSize + 1);
    document.documentElement.style.fontSize = `${fontSize + 1}px`;
  };

  const handleDecrement = () => {
    setFontSize(prevSize => (prevSize > 12 ? prevSize - 1 : prevSize)); // Limit at 12px
    document.documentElement.style.fontSize = `${fontSize - 1}px`;
  };

  const handleDefault = () => {
    setFontSize(prevSize => 16);
    document.documentElement.style.fontSize = `${fontSize}px`;
  }

  return (
    <div>

      <div className="flex justify-center align-middle items-center gap-2   text-black bg-white">
        <span>
          <MdTextIncrease
            className="text-[24px]"
            onClick={handleIncrement}
          />
        </span>
        <span>
          <MdTextFormat className="text-[24px]" onClick={handleDefault} />
        </span>
        <span>
          <MdTextDecrease
              className="text-[24px]"
            onClick={handleDecrement}
          />
        </span>
      </div>
    </div>
  );
};

export default FontChange;
