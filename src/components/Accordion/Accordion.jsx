import { useState } from "react";
import "./Accordion.css";
import AccordionItem from "./AccordionItem";

const Accordion = ({ accordionData, originalData }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="container">
      {accordionData.map((item, index) => (
        <AccordionItem
          key={index}
          header={item.tableName}
          data={item}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
