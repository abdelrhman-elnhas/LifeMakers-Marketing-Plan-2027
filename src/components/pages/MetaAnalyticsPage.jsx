import guide from "../../data/metaAnalyticsGuide.json";

function MetricAccordion({ metric }) {
  return (
    <div className="acc-item open">
      <div className="acc-btn">
        <span>
          <strong>{metric.term}</strong>
          {metric.label ? ` — ${metric.label}` : ""}
        </span>
      </div>
      <div className="acc-panel" style={{ maxHeight: "2000px" }}>
        <div className="acc-panel-inner">
          {metric.analogy && (
            <p style={{ fontStyle: "italic", color: "var(--ink-soft)" }}>{metric.analogy}</p>
          )}
          <p>{metric.meaning}</p>

          {metric.formula && (
            <div className="note" style={{ fontFamily: "monospace", direction: "ltr", textAlign: "left" }}>
              {metric.formula}
            </div>
          )}

          {metric.example && (
            <div className="why-box" style={{ marginTop: 12 }}>
              <h4>مثال بالأرقام</h4>
              <p>{metric.example}</p>
            </div>
          )}

          {metric.how_to_read && metric.how_to_read.length > 0 && (
            <>
              <h4 style={{ fontSize: 13.5, color: "var(--teal)", marginTop: 14 }}>إزاي تقرأ الرقم ده</h4>
              <ul style={{ paddingInlineStart: 20, margin: 0 }}>
                {metric.how_to_read.map((t, i) => (
                  <li key={i} style={{ fontSize: 14, color: "var(--ink-soft)", marginBottom: 4 }}>{t}</li>
                ))}
              </ul>
            </>
          )}

          {metric.how_to_improve && metric.how_to_improve.length > 0 && (
            <>
              <h4 style={{ fontSize: 13.5, color: "var(--teal)", marginTop: 14 }}>إزاي تحسّنه</h4>
              <ul style={{ paddingInlineStart: 20, margin: 0 }}>
                {metric.how_to_improve.map((t, i) => (
                  <li key={i} style={{ fontSize: 14, color: "var(--ink-soft)", marginBottom: 4 }}>{t}</li>
                ))}
              </ul>
            </>
          )}

          {metric.common_mistake && (
            <div className="note" style={{ marginTop: 14 }}>⚠️ {metric.common_mistake}</div>
          )}

          {metric.where_to_find && (
            <p style={{ fontSize: 12.5, color: "var(--gold-deep)", marginTop: 12 }}>
              📍 فين تلاقيه: {metric.where_to_find}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function CategorySection({ category }) {
  return (
    <div id={category.id} style={{ marginBottom: 40, scrollMarginTop: 90 }}>
      <h3 style={{ marginBottom: 4 }}>{category.title_ar} <span style={{ color: "var(--ink-soft)", fontWeight: 400, fontSize: 15 }}>({category.title_en})</span></h3>
      <p style={{ color: "var(--ink-soft)", fontSize: 14.5, marginBottom: 16 }}>{category.intro}</p>
      <div>
        {category.metrics.map((m) => (
          <MetricAccordion
            key={m.term}
            metric={m}
          />
        ))}
      </div>
    </div>
  );
}

export default function MetaAnalyticsPage() {
  const { hero, basics, categories, general_tips, footer_note } = guide;

  const anchorMap = {
    "الأساسيات": "basics",
    "الوصول": "reach",
    "التفاعل": "engagement",
    "التكلفة": "cost",
    "العائد": "conversion",
  };

  return (
    <section id="meta-analytics-page">
      <div className="section-head">
        <span className="kicker">دليل مرجعي</span>
        <h2>{hero.heading}</h2>
        <p>{hero.subtext}</p>
      </div>

      <div className="pill-nav" style={{ marginBottom: 32 }}>
        {hero.quick_links.map((label) => (
          <a key={label} className="pill" href={`#${anchorMap[label] || ""}`}>
            {label}
          </a>
        ))}
      </div>

      {/* BASICS */}
      <div id="basics" style={{ marginBottom: 40, scrollMarginTop: 90 }}>
        <h3 style={{ marginBottom: 4 }}>{basics.heading}</h3>
        <p style={{ color: "var(--ink-soft)", fontSize: 14.5, marginBottom: 16, maxWidth: 780 }}>{basics.intro}</p>

        <div className="dev-grid" style={{ marginBottom: 24 }}>
          {basics.cards.map((c) => (
            <div className="dev-card" key={c.title}>
              <h4>{c.title}</h4>
              <p style={{ fontSize: 14, color: "var(--ink-soft)", margin: 0 }}>{c.text}</p>
            </div>
          ))}
        </div>

        <h4 style={{ marginBottom: 12 }}>معجم سريع</h4>
        <table className="campaign-table">
          <thead>
            <tr>
              <th>المصطلح</th>
              <th>المعنى</th>
            </tr>
          </thead>
          <tbody>
            {basics.glossary.map((g) => (
              <tr key={g.term}>
                <td className="camp-name" style={{ direction: "ltr", textAlign: "right" }}>{g.term}</td>
                <td>{g.definition}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* CATEGORIES */}
      {categories.map((cat) => (
        <CategorySection category={cat} key={cat.id} />
      ))}

      {/* GENERAL TIPS */}
      <div className="why-box" style={{ marginBottom: 24 }}>
        <h4>نصائح عامة</h4>
        <ul style={{ margin: 0, paddingInlineStart: 20 }}>
          {general_tips.map((t, i) => (
            <li key={i} style={{ fontSize: 14.5, color: "var(--ink-soft)", marginBottom: 6 }}>{t}</li>
          ))}
        </ul>
      </div>

      <p style={{ fontSize: 13, color: "var(--ink-soft)", textAlign: "center" }}>{footer_note}</p>
    </section>
  );
}
