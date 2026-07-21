import meta from "../data/meta.json";
import {
  WHEEL_CX,
  WHEEL_CY,
  WHEEL_R_OUTER,
  WHEEL_R_INNER,
  polarToCartesian,
  describeArc,
  dayToAngle,
} from "../utils/wheelMath";

const { totalDays, monthNames, monthStarts } = meta;

export default function Wheel({ segments, activeId, onSelect }) {
  return (
    <svg
      id="wheel"
      viewBox="0 0 400 400"
      role="img"
      aria-label="عجلة حملات السنة"
    >
      {segments.map((seg) => {
        const startAngle = dayToAngle(seg.start, totalDays);
        const endAngle = dayToAngle(seg.end, totalDays);
        const isActive = seg.id === activeId;
        const d = describeArc(
          WHEEL_CX,
          WHEEL_CY,
          WHEEL_R_OUTER,
          WHEEL_R_INNER,
          startAngle,
          endAngle
        );

        const showBadge = seg.type !== "rest" && seg.order;
        let badge = null;
        if (showBadge) {
          const midAngle = (startAngle + endAngle) / 2;
          const rBadge = (WHEEL_R_OUTER + WHEEL_R_INNER) / 2;
          const bp = polarToCartesian(WHEEL_CX, WHEEL_CY, rBadge, midAngle);
          badge = (
            <g key={`${seg.id}-badge`} pointerEvents="none">
              <circle cx={bp.x} cy={bp.y} r="12" fill="#FFFFFF" opacity="0.92" />
              <text
                x={bp.x}
                y={bp.y}
                textAnchor="middle"
                dominantBaseline="central"
                style={{ fontFamily: "'Tajawal'", fontWeight: 900, fontSize: 13, fill: seg.color }}
              >
                {seg.order}
              </text>
            </g>
          );
        }

        return (
          <g key={seg.id}>
            <path
              d={d}
              fill={seg.color}
              className={"arc" + (isActive ? " active" : "")}
              tabIndex={0}
              role="button"
              aria-label={seg.name}
              onClick={() => onSelect(seg.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onSelect(seg.id);
                }
              }}
            />
            {badge}
          </g>
        );
      })}

      {monthStarts.map((d, i) => {
        const angle = dayToAngle(d, totalDays);
        const p = polarToCartesian(WHEEL_CX, WHEEL_CY, WHEEL_R_OUTER + 17, angle);
        return (
          <text
            key={monthNames[i]}
            x={p.x}
            y={p.y}
            textAnchor="middle"
            dominantBaseline="middle"
            className="month-label"
          >
            {monthNames[i]}
          </text>
        );
      })}

      {(() => {
        const active = segments.find((s) => s.id === activeId);
        if (!active) return null;
        return (
          <>
            <text
              x={WHEEL_CX}
              y={WHEEL_CY - 6}
              textAnchor="middle"
              className="wheel-center-label center-month"
            >
              {active.short}
            </text>
            <text
              x={WHEEL_CX}
              y={WHEEL_CY + 16}
              textAnchor="middle"
              className="center-sub"
            >
              {active.duration}
            </text>
          </>
        );
      })()}
    </svg>
  );
}
