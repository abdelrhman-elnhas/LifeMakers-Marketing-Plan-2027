import { useState } from "react";
import principles from "../data/principles.json";
import copy from "../data/copy.json";

export default function PrinciplesSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const { kicker, title, description } = copy.principlesSection;

  return (
    <section id="principles">
      <div className="section-head">
        <span className="kicker">{kicker}</span>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div>
        {principles.map((p, i) => {
          const isOpen = openIndex === i;
          return (
            <div className={"acc-item" + (isOpen ? " open" : "")} key={p.q}>
              <button
                type="button"
                className="acc-btn"
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
              >
                {p.q}
                <span className="plus">+</span>
              </button>
              <div
                className="acc-panel"
                style={{ maxHeight: isOpen ? "600px" : "0px" }}
              >
                <div className="acc-panel-inner">
                  <p>{p.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
