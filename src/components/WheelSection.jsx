import { useState } from "react";
import segments from "../data/segments.json";
import copy from "../data/copy.json";
import Wheel from "./Wheel";
import PillNav from "./PillNav";
import DetailCard from "./DetailCard";

export default function WheelSection() {
  const [activeId, setActiveId] = useState(segments[0].id);
  const activeSegment = segments.find((s) => s.id === activeId);
  const { kicker, title, description } = copy.wheelSection;

  return (
    <section id="wheel-section">
      <div className="wheel-section" style={{ padding: 36 }}>
        <div className="section-head" style={{ marginBottom: 24 }}>
          <span className="kicker">{kicker}</span>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="wheel-layout">
          <div>
            <div className="wheel-holder">
              <Wheel segments={segments} activeId={activeId} onSelect={setActiveId} />
            </div>
            <PillNav segments={segments} activeId={activeId} onSelect={setActiveId} />
          </div>
          <DetailCard segment={activeSegment} />
        </div>
      </div>
    </section>
  );
}
