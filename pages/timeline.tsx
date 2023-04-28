import React, { useRef, useEffect } from "react";
import Timeline from "@/components/Timeline";

function TimelinePage() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    timelineRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div ref={timelineRef}>
      <Timeline />
    </div>
  );
}

export default TimelinePage;
