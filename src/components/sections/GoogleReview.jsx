/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React, { useEffect, useRef } from "react";
import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";
import SectionHeader from "../sectionElements/SectionHeader";
import content from "../../content/content";
import ReviewWidget from "../sectionElements/WidgetsComponent";

function GoogleReview() {
  return (
    <SectionArea  className=" bg-secondary">
      <SectionWrapper className=" flex items-center">
        <SectionHeader
          className="text-center"
          miniTitle={content.texts.googleReview.miniTag}
          sectionHeaderTitle={content.texts.googleReview.title}
          sectionHeaderSubtitle={content.texts.googleReview.subtitle}
          color=""
          type=""
        />
        <ReviewWidget />
      </SectionWrapper>
    </SectionArea>
  );
}

export default GoogleReview;
