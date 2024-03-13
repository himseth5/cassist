import React, { useEffect } from "react";
import { useState } from "react";
import { FaTimes, FaCheck } from "react-icons/fa";
import Table from "../components/Table/tables";
import Accordion from "../components/Accordion/Accordion";
export default function AccordiansRight({ tableData ,domain}) {
  const [activeSection, setActiveSection] = useState("ClaimLine");
  const [claimLine, setclaimLine] = useState([]);
  const [claimHeader, setClaimHeader] = useState([]);
  const [claimDiagnosis, setClaimDiagnosis] = useState([]);

  const [accordionData, setAccordionData] = useState([]);

  const handleAccordionClick = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  useEffect(() => {
    // const claimHeaderData = tableData
    //   .filter((item) => item.tableName === "Claim Header")
    //   .map((value) => {
    //     return {
    //       claimLine: value.columnLine,
    //       selected: "Yes",
    //       summarized: "No",
    //       usedinfilter: "No",
    //       usedinjoin: "No",
    //     };
    //   });
    // setClaimHeader(claimHeaderData);
    // const claimDiagnosisData = tableData
    //   .filter((item) => item.tableName === "Claim Diagnosis")
    //   .map((value) => {
    //     return {
    //       claimLine: value.columnLine,
    //       selected: "Yes",
    //       summarized: "No",
    //       usedinfilter: "No",
    //       usedinjoin: "No",
    //     };
    //   });
    // setClaimDiagnosis(claimDiagnosisData);
    const accordiondataperdomain=tableData.filter((item)=>item.domain===domain);

    console.log(accordiondataperdomain, 'accordiondataperdomain', domain)
    const accordionData = accordiondataperdomain.map((item) => item.tableName);
    const uniqueAccordionList = accordionData.filter(
      (value, index) => accordionData.indexOf(value) === index
    );

    setAccordionData(uniqueAccordionList);
  }, [tableData, domain]);

  return (
    <div className="accordion">
      <Accordion accordionData={accordionData} originalData={tableData} />
    </div>
  );
}
