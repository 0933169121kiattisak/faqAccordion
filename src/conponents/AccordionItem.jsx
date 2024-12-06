import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './AccordionItem.css'

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [isActive,setIsActive] = useState(false);

  const toggleClass = () => {
    setIsActive(!isActive)
  }

  return (
    <div className={`accordion-item ${isActive ? "active" : ""}`}>
      <button
        className="accordion-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span onClick={toggleClass}>{question}</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </button>
     
      {isOpen && (
        <div className="accordion-content">
          {answer}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;