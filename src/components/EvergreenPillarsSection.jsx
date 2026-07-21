import pillars from "../data/evergreenPillars.json";
import copy from "../data/copy.json";

export default function EvergreenPillarsSection() {
  const { kicker, title, description } = copy.evergreenSection;

  return (
    <section id="evergreen">
      <div className="section-head">
        <span className="kicker">{kicker}</span>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <div className="pillar-grid">
        {pillars.map((p) => (
          <div className="pillar-card" key={p.id}>
            <h3>{p.name}</h3>
            <p className="pillar-tagline">{p.tagline}</p>

            <h4>ليه ثابت طول السنة؟</h4>
            <ul>
              {p.why.map((w, i) => (
                <li key={i}>{w}</li>
              ))}
            </ul>

            <h4>نصيبه من التقويم الأسبوعي</h4>
            <div className="pillar-alloc">
              {Object.entries(p.weeklyAllocation).map(([key, val]) => (
                <div className="pillar-alloc-row" key={key}>
                  <span className="pillar-alloc-tag">
                    {key === "mainChannels" && "الصفحات الرئيسية"}
                    {key === "atharAccount" && "أكونت انستاجرام"}
                    {key === "peakBoost" && "وقت الذروة"}
                  </span>
                  <span>{val}</span>
                </div>
              ))}
            </div>

            <h4>أفكار بوستات</h4>
            <ul>
              {p.contentIdeas.map((idea, i) => (
                <li key={i}>{idea}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
