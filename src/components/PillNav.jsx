export default function PillNav({ segments, activeId, onSelect }) {
  return (
    <div className="pill-nav">
      {segments.map((seg) => (
        <button
          key={seg.id}
          type="button"
          className={"pill" + (seg.id === activeId ? " active" : "")}
          onClick={() => onSelect(seg.id)}
        >
          {seg.type !== "rest" && seg.order ? `${seg.order}. ` : ""}
          {seg.short}
        </button>
      ))}
    </div>
  );
}
