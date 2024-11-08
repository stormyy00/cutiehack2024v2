import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { QUESTIONS } from "@/data/faq";
import UFO from "@/public/assets/ufo.svg";
import Image from "next/image";

const FAQ = () => {
  return (
    <div
      id="faq"
      className="w-ffull flex flex-col items-center bg-cutie-blue-300 py-10 font-righteous text-white"
    >
      <div className="z-50 flex items-center justify-center gap-2 py-4 align-middle text-7xl">
        <h1>F</h1>
        <Image
          src={UFO}
          alt="UFO"
          className="-mt-5 size-1/3 animate-jiggle-12s"
        />
        <h1>Q</h1>
      </div>
      <div className="w-11/12 rounded-3xl border-8 border-[#A22282] bg-[#61114D] p-6 shadow-lg md:w-5/12">
        <Accordion type="single" collapsible className="w-full">
          {QUESTIONS.map(({ question, answer }, index) => (
            <AccordionItem value={question} key={index}>
              <AccordionTrigger>{question}</AccordionTrigger>
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
