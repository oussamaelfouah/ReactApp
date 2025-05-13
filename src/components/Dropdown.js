import { useState } from "react";
import { GoChevronDown } from "react-icons/go";

function Dropdown({ options, value, onChange }) {
  const [isopen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isopen);
  };
  const handleOption = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedOpions = options.map((option) => {
    return (
      <div>
        <div onClick={() => handleOption(option)} key={option.value}>
          {option.label}
        </div>
      </div>
    );
  });

  return (
    <div className="w-48 relative">
      <div
        className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full"
        onClick={handleClick}
      >
        {value?.label || "select..."}
        <GoChevronDown />
      </div>
      {isopen && (
        <div className="absolute top-full border rounded p-3 shadow bg-white w-full ">
          {renderedOpions}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
