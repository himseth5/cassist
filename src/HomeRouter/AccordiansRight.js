import React, { useEffect } from "react";
import { useState } from "react";
import Accordion from "../components/Accordion/Accordion";
export default function AccordiansRight({ tableData, domain }) {
  // const [activeSection, setActiveSection] = useState("ClaimLine");

  const [accordionData, setAccordionData] = useState([]);

  useEffect(() => {
    const accordiondataperdomain = tableData.filter(
      (item) => item.domain === domain
    );

    const accordionData = accordiondataperdomain.map((item) => item);

    setAccordionData(accordionData);
  }, [tableData, domain]);

  return (
    <div className="accordion">
      <Accordion accordionData={accordionData} originalData={tableData} />
    </div>
  );
}
