import fb from "../../data/facebookGrowthPlaybook.json";
import copy from "../../data/copy.json";

export default function FacebookGrowthPage() {
  const { kicker, title, description } = copy.facebookPage;
  const { context, engagementCircle, rules, contentIdeas, checklist, followerGrowthNote } = fb;

  return (
    <section id="facebook-page">
      <div className="section-head">
        <span className="kicker">{kicker}</span>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <p style={{ color: "var(--ink-soft)", fontSize: 14.5, maxWidth: 780, marginBottom: 24 }}>{context}</p>

      <div className="pillar-card" style={{ marginBottom: 24 }}>
        <h3>{engagementCircle.title}</h3>
        <p style={{ fontSize: 14.5, color: "var(--ink-soft)", marginBottom: 12 }}>{engagementCircle.description}</p>
        <ul>
          {engagementCircle.steps.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      </div>

      <h4 style={{ marginBottom: 16 }}>قواعد النشر</h4>
      <div className="pillar-grid" style={{ marginBottom: 28 }}>
        {rules.map((r, i) => (
          <div className="pillar-alloc-row" key={i} style={{ padding: 16 }}>
            <span className="pillar-alloc-tag">{r.title}</span>
            <span>{r.detail}</span>
          </div>
        ))}
      </div>

      <h4 style={{ marginBottom: 16 }}>أفكار محتوى</h4>
      <div className="table-shell" style={{ marginBottom: 28 }}>
        <table className="campaign-table">
          <thead>
            <tr>
              <th>الفكرة</th>
              <th>ليه بتشتغل</th>
            </tr>
          </thead>
          <tbody>
            {contentIdeas.map((c, i) => (
              <tr key={i}>
                <td className="camp-name">{c.idea}</td>
                <td>{c.why}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="why-box" style={{ marginBottom: 24 }}>
        <h4>ملخص القواعد كـ Checklist سريع</h4>
        <ul style={{ margin: 0, paddingInlineStart: 20 }}>
          {checklist.map((c, i) => (
            <li key={i} style={{ fontSize: 14.5, color: "var(--ink-soft)", marginBottom: 4 }}>✅ {c}</li>
          ))}
        </ul>
      </div>

      <div className="note">💡 {followerGrowthNote}</div>
    </section>
  );
}
