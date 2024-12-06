import AccordionItem from './AccordionItem';
import { faqData } from '../data/faqData';

const Accordion = () => {
  return (
    <div className="accordion">
      {faqData.map((item) => (
        <AccordionItem
          key={item.id}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
  );
};

export default Accordion;