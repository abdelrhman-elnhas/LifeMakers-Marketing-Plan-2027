import copy from "../data/copy.json";

export default function Hero() {
  const { eyebrow, title, lead, stats } = copy.hero;
  return (
    <div className="hero">
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      {/* <p className="lead">{lead}</p> */}
      <div className="stat-row">
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <div className="num">{s.num}</div>
            <div className="lbl">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
