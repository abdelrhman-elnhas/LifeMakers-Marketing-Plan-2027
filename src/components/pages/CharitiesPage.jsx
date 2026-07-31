import data from "../../data/charities.json";
import copy from "../../data/copy.json";

export default function CharitiesPage() {
  const { kicker, title, description } = copy.charitiesPage;
  const { researchNote, charities, notResearched, competitiveStrategy } = data;

  return (
    <section id="charities-page">
      <div className="section-head">
        <span className="kicker">{kicker}</span>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      {researchNote && researchNote.length > 0 && (
        <div className="note" style={{ marginBottom: 24 }}>ℹ️ {researchNote}</div>
      )}

      <div className="charity-cards">
        {charities.map((c) => (
          <div className="pillar-card charity-card" key={c.name}>
            <div className="charity-card-head">
              <h3>{c.name}</h3>
              {c.verified ? (
                <span className="verify-badge verified">✓ متحقق منه</span>
              ) : (
                <span className="verify-badge unverified">محتاج تحقق</span>
              )}
            </div>

            <div className="charity-grid">
              <div><span className="charity-label">النوع</span><span>{c.type}</span></div>
              <div><span className="charity-label">سنة التأسيس</span><span>{c.founded}</span></div>
              <div><span className="charity-label">المنطقة</span><span>{c.area}</span></div>
              <div><span className="charity-label">نطاق العمل</span><span>{c.scope}</span></div>
              <div><span className="charity-label">المتابعين</span><span>{c.followers}</span></div>
              <div>
                <span className="charity-label">فيسبوك</span>
                {c.facebook.startsWith("http") ? (
                  <a href={c.facebook} target="_blank" rel="noopener noreferrer">{c.facebook}</a>
                ) : (
                  <span>{c.facebook}</span>
                )}
              </div>
            </div>

            <div style={{ marginTop: 12 }}>
              <span className="charity-label">مجالات العمل</span>
              <div className="charity-tags">
                {c.fields.map((f, i) => (
                  <span className="charity-tag" key={i}>{f}</span>
                ))}
              </div>
            </div>

            <div style={{ marginTop: 12 }}>
              <span className="charity-label">الفئات المستهدفة</span>
              <div className="charity-tags">
                {c.targetGroups.map((t, i) => (
                  <span className="charity-tag" key={i}>{t}</span>
                ))}
              </div>
            </div>

            <div style={{ marginTop: 12 }}>
              <span className="charity-label">نوع المحتوى الأعلى تفاعلاً</span>
              <p style={{ fontSize: 13.5, color: "var(--ink-soft)", margin: "4px 0 0" }}>{c.contentType}</p>
            </div>

            {c.note && <div className="note" style={{ marginTop: 12 }}>⚠️ {c.note}</div>}
          </div>
        ))}
      </div>

      {notResearched && notResearched.length > 0 && (
        <>
          <h4 style={{ margin: "32px 0 12px" }}>أسامي لسه محتاجة بحث (مش اتغطت في الجولة دي)</h4>
          <div className="charity-tags" style={{ marginBottom: 12 }}>
            {notResearched.map((n, i) => (
              <span className="charity-tag" key={i}>{n}</span>
            ))}
          </div>
        </>
      )}

      <h4 style={{ margin: "32px 0 16px" }}>إزاي تنافس الجمعيات دي</h4>
      <div className="pillar-grid">
        {competitiveStrategy.map((s, i) => (
          <div className="pillar-alloc-row" key={i} style={{ padding: 16 }}>
            <span className="pillar-alloc-tag">{s.point}</span>
            <span>{s.detail}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
