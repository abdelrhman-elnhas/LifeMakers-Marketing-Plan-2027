import devSkills from "../data/devSkills.json";
import copy from "../data/copy.json";

export default function DevPlanSection() {
  const {
    kicker, title, description,
    ladderTitle, ladderSteps, ladderNote,
    trainingTitle, trainingNote,
    skillsTitle,
  } = copy.devSection;

  return (
    <section id="dev">
      <div className="section-head">
        <span className="kicker">{kicker}</span>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <h4 style={{ marginBottom: 6 }}>{ladderTitle}</h4>
      <div className="ladder">
        {ladderSteps.map((step, i) => (
          <span key={step}>
            <span className="ladder-step">{step}</span>
            {i < ladderSteps.length - 1 && <span className="ladder-arrow">←</span>}
          </span>
        ))}
      </div>
      <p style={{ color: "var(--ink-soft)", fontSize: 14.5, maxWidth: 700, marginTop: 14 }}>
        {ladderNote}
      </p>

      <h4 style={{ margin: "32px 0 16px" }}>{trainingTitle}</h4>
      <p style={{ color: "var(--ink-soft)", fontSize: 14.5, maxWidth: 760, marginBottom: 20 }}>
        {trainingNote}
      </p>

      <h4 style={{ marginBottom: 16 }}>{skillsTitle}</h4>
      <div className="dev-grid">
        {devSkills.map((d) => (
          <div className="dev-card" style={{ borderTop: `3px solid ${d.color}` }} key={d.team}>
            <h4>{d.team}</h4>
            <ul>
              {d.skills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
