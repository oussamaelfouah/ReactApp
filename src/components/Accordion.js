import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ items }) {
  const handlClick = (nextIndex) => {
    if (expandedIndex === nextIndex) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(nextIndex);
    }
  };
  //setting use state
  const [expandedIndex, setExpandedIndex] = useState(-1);
  // function that itterarte through elements from an array

  const renderedItems = items.map((item, index) => {
    // varibale that check if current item matches the index
    const isExpanded = index === expandedIndex;
    // if it matches it returns a new jsx compents
    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    return (
      <div key={item.id}>
        <div
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => handlClick(index)}
        >
          {icon}
          {item.label}
        </div>
        {isExpanded && <div>{item.content}</div>}
      </div>
    );
  });
  return <div className="border-x border-t rounded">{renderedItems} </div>;
}

export default Accordion;
