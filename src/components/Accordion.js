<<<<<<< HEAD
import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex) => {
    setExpandedIndex((currentExpandedIndex) => {
      if (currentExpandedIndex === nextIndex) {
        return -1;
      } else {
        return nextIndex;
      }
    });
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

=======
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
>>>>>>> b21cf685f40276f3a7d750cf696c7f44a57deec8
    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    return (
      <div key={item.id}>
        <div
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
<<<<<<< HEAD
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedItems}</div>;
=======
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
>>>>>>> b21cf685f40276f3a7d750cf696c7f44a57deec8
}

export default Accordion;
