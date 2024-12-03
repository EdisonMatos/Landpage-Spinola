/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React, { useEffect, useRef } from "react";
import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";

function ReviewWidget() {
  const widgetRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "(link unavailable)";
    widgetRef.current.appendChild(script);
  }, []);

  return (
    <SectionArea paddingTopAndBottom={false} className="">
      <SectionWrapper>
        <MotionDivDownToUp>
          <div ref={widgetRef} className="mx-auto">
            <script
              src="https://static.elfsight.com/platform/platform.js"
              async
            ></script>
            <div
              className="h-[500px] tablet1:h-[430px] desktop1:h-[410px]"
              class="elfsight-app-c34d9f0b-bfc6-4a61-aadb-8fc1fff2730c"
              data-elfsight-app-lazy
            ></div>
          </div>
        </MotionDivDownToUp>
      </SectionWrapper>
    </SectionArea>
  );
}

export default ReviewWidget;
