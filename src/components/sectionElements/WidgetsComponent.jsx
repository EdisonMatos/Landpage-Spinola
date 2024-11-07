import React, { useEffect, useRef } from "react";
import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";

function ReviewWidget() {
  const widgetRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "(link unavailable)";
    widgetRef.current.appendChild(script);
  }, []);

  return (
    <SectionArea className="bg-bgSectionDark" paddingtop={false}>
      <SectionWrapper>
        <div
          ref={widgetRef}
          className="mx-auto"
        >
          <script
            src="https://static.elfsight.com/platform/platform.js"
            async
          ></script>
          <div
            class="elfsight-app-c34d9f0b-bfc6-4a61-aadb-8fc1fff2730c"
            data-elfsight-app-lazy
          ></div>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}

export default ReviewWidget;
