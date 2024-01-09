import React, { useState, useEffect, useRef } from "react";

// importing accordion component
import AccordionComponent from "../../reusableComponents/AccordionComponent";

export default function UseRefHookScrollAccordion() {
  const elem = useRef();

  console.log(elem);
  return (
    <div className="main-container">
      <h3>Task-13: useRef Hook Scroll Accordion</h3>

      <div>
        <AccordionComponent accordionNumber="Accordion 1" />
        <AccordionComponent accordionNumber="Accordion 2" />
        <AccordionComponent accordionNumber="Accordion 3" />
        <AccordionComponent accordionNumber="Accordion 4" />
        <AccordionComponent accordionNumber="Accordion 5" />
        <AccordionComponent accordionNumber="Accordion 6" />
        <AccordionComponent accordionNumber="Accordion 7" />
        <AccordionComponent accordionNumber="Accordion 8" />
        <AccordionComponent accordionNumber="Accordion 9" />
        <AccordionComponent accordionNumber="Accordion 10" />
        <AccordionComponent accordionNumber="Accordion 11" />
        <AccordionComponent accordionNumber="Accordion 12" />
        <AccordionComponent accordionNumber="Accordion 13" />
        <AccordionComponent accordionNumber="Accordion 14" />
        <AccordionComponent accordionNumber="Accordion 15" />
        <AccordionComponent accordionNumber="Accordion 16" />
        <AccordionComponent accordionNumber="Accordion 17" />
        <AccordionComponent accordionNumber="Accordion 18" />
        <AccordionComponent accordionNumber="Accordion 18" />
        <AccordionComponent accordionNumber="Accordion 18" />
        <AccordionComponent accordionNumber="Accordion 18" />
        <AccordionComponent accordionNumber="Accordion 18" />
        <AccordionComponent accordionNumber="Accordion 18" />
        <AccordionComponent accordionNumber="Accordion 18" />
        <AccordionComponent accordionNumber="Accordion 18" />
        <AccordionComponent accordionNumber="Accordion 18" />
        <AccordionComponent accordionNumber="Accordion 18" />
        <AccordionComponent accordionNumber="Accordion 18" />
        <AccordionComponent accordionNumber="Accordion 18" />
      </div>
    </div>
  );
}
