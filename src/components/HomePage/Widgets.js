import React from "react";
import "../../styles/widgets.scss";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subheading) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subheading}</p>
      </div>
    </div>
  );

  return (
    <div className="widget">
      <div className="widgets__header">
        <h2>Latest News</h2>
        <InfoIcon></InfoIcon>
      </div>
      {newsArticle("Data Theft", "Data breach costs hit record high")}
      {newsArticle("Scientists Discover New Planet That Could Support Life", "The planet, Kepler-186f, is located in the habitable zone of its star, meaning that it could have liquid water on its surface.")}
      {newsArticle("New Drug Shows Promise in Treating Alzheimer's Disease", "The drug, aducanumab, was shown to slow the progression of Alzheimer's disease in a clinical trial.")}
      {newsArticle("New Study Finds That Exercise Can Help Improve Mental Health", "The study, which was published in the journal JAMA Psychiatry, found that people who exercised regularly were less likely to experience depression and anxiety.")}
      {newsArticle("CS Placement", "Due to sudden rise of AI like chatGPT, CS engineers are facing recession.")}
    </div>
  );
}

export default Widgets;
