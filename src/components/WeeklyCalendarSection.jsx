import weekly from "../data/weeklyCalendar.json";
import copy from "../data/copy.json";

const focusColors = {
  campaign: "#C97F1E",
  athar: "#E8C27E",
  hq: "#11395F",
  spiritual: "#3E6E96",
};

function WeekTable({ rows, title }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <h4 style={{ marginBottom: 12 }}>{title}</h4>
      <table className="campaign-table">
        <thead>
          <tr>
            <th>اليوم</th>
            <th>التوقيت</th>
            <th>المحور</th>
            {title == 'لمسات إضافية في أسابيع الضغط (بالإضافة لجدول الأسبوع العادي)' && <th>الشكل</th>}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              <td className="camp-name">{r.day}</td>
              <td>{r.time}</td>
              <td>
                <span
                  className="focus-dot"
                  style={{ background: focusColors[r.focus] || "#9CA6B0" }}
                />
                {r.focusLabel}
              </td>
              <td>{r.format}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function WeeklyCalendarSection() {
  const { kicker, title, description } = copy.weeklyCalendarSection;

  return (
    <section id="weekly-calendar">
      <div className="section-head">
        <span className="kicker">{kicker}</span>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <p style={{ color: "var(--ink-soft)", fontSize: 14.5, maxWidth: 760, marginBottom: 24 }}>
        {weekly.structureNote}
      </p>

      <WeekTable rows={weekly.normalWeek} title="الأسبوع العادي" />
      <WeekTable rows={weekly.peakWeek} title="لمسات إضافية في أسابيع الضغط (بالإضافة لجدول الأسبوع العادي)" />

      <div className="why-box">
        <h4>إمتى يبقى أسبوع مضغوط بالظبط؟</h4>
        <p style={{ marginBottom: 10 }}>{weekly.peakWeekDefinition}</p>
        <ul style={{ margin: 0, paddingInlineStart: 20 }}>
          {weekly.peakWeekTriggers.map((t, i) => (
            <li key={i} style={{ fontSize: 14.5, color: "var(--ink-soft)", marginBottom: 4 }}>
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
