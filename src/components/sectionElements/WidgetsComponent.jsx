import React, { useEffect, useRef } from "react";

function ReviewWidget() {
  const widgetRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "(link unavailable)";
    widgetRef.current.appendChild(script);
  }, []);

  return (
    <div
      ref={widgetRef}
      className=" bg-bgSectionLight w-full px-4 rounded-[20px] h-auto"
    >
      <script
        src="https://static.elfsight.com/platform/platform.js"
        async
      ></script>
      <div
        class="elfsight-app-754574d8-641e-42a4-a7ba-b4fcd4705f8a"
        data-elfsight-app-lazy
      ></div>
    </div>
  );
}

export default ReviewWidget;
