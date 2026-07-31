import meetings from "../../data/meetingAgendas.json";
import copy from "../../data/copy.json";

const teamLabels = {
  strategy: "قائد الاستراتيجي",
  media: "قائد الميديا",
  pr: "قائد PR",
  digital: "قائد الديجيتال ماركتينج",
};

export default function MeetingsPage() {
  const { kicker, title, description } = copy.meetingsPage;
  const { weeklySync, oneOnOne, volunteerCoordination, otherMeetings, comparisonNote } = meetings;

  return (
    <section id="meetings-page">
      <div className="section-head">
        <span className="kicker">{kicker}</span>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      {/* Weekly sync */}
      <div className="pillar-card" style={{ marginBottom: 24 }}>
        <h3>{weeklySync.title}</h3>
        <p className="pillar-tagline">
          {weeklySync.attendees} · {weeklySync.cadence}
        </p>
        <p style={{ fontSize: 14.5, color: "var(--ink-soft)", marginBottom: 16 }}>{weeklySync.purpose}</p>
        <table className="campaign-table">
          <thead>
            <tr>
              <th>الوقت</th>
              <th>البند</th>
              <th>التفاصيل</th>
            </tr>
          </thead>
          <tbody>
            {weeklySync.agenda.map((row, i) => (
              <tr key={i}>
                <td className="camp-name">{row.time}</td>
                <td>{row.item}</td>
                <td>{row.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="note" style={{ marginTop: 16 }}>⚠️ {weeklySync.rule}</div>
      </div>

      {/* 1:1 */}
      <div className="pillar-card" style={{ marginBottom: 24 }}>
        <h3>{oneOnOne.title}</h3>
        <p className="pillar-tagline">
          {oneOnOne.attendees} · {oneOnOne.cadence}
        </p>
        <p style={{ fontSize: 14.5, color: "var(--ink-soft)", marginBottom: 16 }}>{oneOnOne.purpose}</p>

        <h4>الهيكل العام</h4>
        <ul>
          {oneOnOne.structure.map((s, i) => (
            <li key={i}>
              <strong>{s.step}</strong> — {s.detail}
            </li>
          ))}
        </ul>

        <h4>أسئلة مخصصة لكل تيم</h4>
        <div className="pillar-grid" style={{ marginTop: 8 }}>
          {Object.entries(oneOnOne.perTeamQuestions).map(([teamKey, questions]) => (
            <div key={teamKey} className="pillar-alloc-row" style={{ padding: 14 }}>
              <span className="pillar-alloc-tag">{teamLabels[teamKey]}</span>
              <ul style={{ margin: "6px 0 0", paddingInlineStart: 18 }}>
                {questions.map((q, i) => (
                  <li key={i} style={{ marginBottom: 4 }}>{q}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Volunteer coordination */}
      <div className="pillar-card" style={{ marginBottom: 24 }}>
        <h3>{volunteerCoordination.title}</h3>
        <p className="pillar-tagline">
          {volunteerCoordination.attendees} · {volunteerCoordination.cadence}
        </p>
        <ul>
          {volunteerCoordination.questions.map((q, i) => (
            <li key={i}>{q}</li>
          ))}
        </ul>
      </div>

      {/* Other meetings */}
      <h4 style={{ marginBottom: 16 }}>اجتماعات دورية أخرى</h4>
      <table className="campaign-table" style={{ marginBottom: 24 }}>
        <thead>
          <tr>
            <th>الاجتماع</th>
            <th>مين فيه</th>
            <th>كل قد إيه</th>
            <th>الغرض</th>
          </tr>
        </thead>
        <tbody>
          {otherMeetings.map((m, i) => (
            <tr key={i}>
              <td className="camp-name">{m.name}</td>
              <td>{m.attendees}</td>
              <td>{m.cadence}</td>
              <td>{m.purpose}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="why-box">
        <h4>الفرق الجوهري بين الاجتماعين</h4>
        <p>{comparisonNote}</p>
      </div>
    </section>
  );
}
