export default function DetailCard({ segment }) {
  if (!segment) return null;
  const isRest = segment.type === "rest";
  const lightBg = ["ainy", "impact"].includes(segment.id);
  const tagColor = isRest || lightBg ? "var(--ink)" : "#fff";
  const tagLabel = isRest ? segment.short : `${segment.order}. ${segment.short}`;

  return (
    <div className="detail-card">
      <span className="tag" style={{ background: segment.color, color: tagColor }}>
        {tagLabel}
      </span>
      <h3>{segment.name}</h3>
      <div className="dates">
        {segment.dates} · {segment.duration}
      </div>

      <div className="detail-grid">
        <div className="detail-box" style={isRest ? { gridColumn: "1 / -1" } : undefined}>
          <h4>{isRest ? "الغرض من الفترة" : "الهدف"}</h4>
          <p>{segment.goal}</p>
        </div>
        {segment.pillars.length > 0 && (
          <div className="detail-box">
            <h4>المحاور</h4>
            <ul>
              {segment.pillars.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="why-box">
        <h4>ليه المدة والتوقيت دول بالذات؟</h4>
        {segment.why.map((w, i) => (
          <p key={i}>{w}</p>
        ))}
      </div>

      {segment.note && <div className="note">⚠️ {segment.note}</div>}
    </div>
  );
}
