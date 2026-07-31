import { useState, useMemo } from "react";
import ads from "../../data/adBudgetPlaybook.json";
import copy from "../../data/copy.json";

function Calculator() {
  const [goal, setGoal] = useState(100000);
  const [avgDonation, setAvgDonation] = useState(200);
  const [maxAdPct, setMaxAdPct] = useState(10);

  const result = useMemo(() => {
    const g = Number(goal) || 0;
    const avg = Number(avgDonation) || 0;
    const pct = Number(maxAdPct) || 0;
    if (avg <= 0) return null;

    const donationsNeeded = Math.ceil(g / avg);
    const maxCPA = (avg * pct) / 100;
    const maxTotalAdBudget = donationsNeeded * maxCPA;

    return { donationsNeeded, maxCPA, maxTotalAdBudget };
  }, [goal, avgDonation, maxAdPct]);

  return (
    <div className="pillar-card" style={{ marginBottom: 28 }}>
      <h3>حاسبة أقصى ميزانية إعلانات مقبولة</h3>
      <p className="pillar-tagline">حط أرقامك الخاصة، مش أرقام عامة من الإنترنت</p>

      <div className="calc-grid">
        <label className="calc-field">
          <span>هدف الحملة (جنيه)</span>
          <input
            type="number"
            min="0"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
          />
        </label>
        <label className="calc-field">
          <span>متوسط التبرع الواحد (جنيه)</span>
          <input
            type="number"
            min="1"
            value={avgDonation}
            onChange={(e) => setAvgDonation(e.target.value)}
          />
        </label>
        <label className="calc-field">
          <span>أقصى نسبة مقبولة من التبرع تُصرف على الإعلان (%)</span>
          <input
            type="number"
            min="0"
            max="100"
            value={maxAdPct}
            onChange={(e) => setMaxAdPct(e.target.value)}
          />
        </label>
      </div>

      {result && (
        <div className="calc-results">
          <div className="calc-result-item">
            <span className="calc-result-num">{result.donationsNeeded.toLocaleString("en-US")}</span>
            <span className="calc-result-label">تبرع محتاجينه للوصول للهدف</span>
          </div>
          <div className="calc-result-item">
            <span className="calc-result-num">{result.maxCPA.toLocaleString("en-US", { maximumFractionDigits: 1 })}</span>
            <span className="calc-result-label">أقصى تكلفة تبرع مقبولة (جنيه)</span>
          </div>
          <div className="calc-result-item">
            <span className="calc-result-num">{result.maxTotalAdBudget.toLocaleString("en-US", { maximumFractionDigits: 0 })}</span>
            <span className="calc-result-label">أقصى ميزانية إعلانات إجمالية (جنيه)</span>
          </div>
        </div>
      )}

      <p style={{ fontSize: 13, color: "var(--ink-soft)", marginTop: 14 }}>
        استخدم «أقصى تكلفة تبرع مقبولة» عشان تحكم على نتيجة أي اختبار إعلاني صغير: لو التكلفة الفعلية طلعت أقل منها، كمّل وزوّد الميزانية. لو أعلى، وقّف ده وجرب رسالة تانية.
      </p>
    </div>
  );
}

export default function AdBudgetPage() {
  const { kicker, title, description } = copy.adsPage;
  const {
    targetSettingMethods,
    paidAdsDecision,
    practicalRule,
    adCountRules,
    costCaveat,
    calculatorSteps,
  } = ads;

  return (
    <section id="ads-page">
      <div className="section-head">
        <span className="kicker">{kicker}</span>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <h4 style={{ marginBottom: 16 }}>أولًا: إزاي تحدد هدف الحملة</h4>
      <div className="pillar-grid" style={{ marginBottom: 28 }}>
        {targetSettingMethods.map((m, i) => (
          <div className="pillar-alloc-row" key={i} style={{ padding: 16 }}>
            <span className="pillar-alloc-tag">{m.method}</span>
            <span>{m.description}</span>
          </div>
        ))}
      </div>

      <h4 style={{ marginBottom: 16 }}>ثانيًا: تحتاج إعلانات ممولة ولا لأ؟</h4>
      <table className="campaign-table" style={{ marginBottom: 12 }}>
        <thead>
          <tr>
            <th>السؤال</th>
            <th>لو «أيوه»</th>
            <th>لو «لأ»</th>
          </tr>
        </thead>
        <tbody>
          {paidAdsDecision.map((q, i) => (
            <tr key={i}>
              <td className="camp-name">{q.question}</td>
              <td>{q.ifYes}</td>
              <td>{q.ifNo}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="note" style={{ marginBottom: 28 }}>💡 {practicalRule}</div>

      <h4 style={{ marginBottom: 16 }}>ثالثًا: كام إعلان ولمدة أد إيه</h4>
      <ul style={{ marginBottom: 28 }}>
        {adCountRules.map((r, i) => (
          <li key={i} style={{ fontSize: 14.5, color: "var(--ink-soft)", marginBottom: 6 }}>{r}</li>
        ))}
      </ul>

      <h4 style={{ marginBottom: 16 }}>رابعًا: بكام بالظبط</h4>
      <p style={{ fontSize: 14.5, color: "var(--ink-soft)", maxWidth: 780, marginBottom: 12 }}>{costCaveat}</p>
      <ol style={{ paddingInlineStart: 20, marginBottom: 28 }}>
        {calculatorSteps.map((s, i) => (
          <li key={i} style={{ fontSize: 14.5, color: "var(--ink-soft)", marginBottom: 6 }}>{s}</li>
        ))}
      </ol>

      <Calculator />
    </section>
  );
}
