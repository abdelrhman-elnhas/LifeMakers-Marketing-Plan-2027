import { useState } from "react";
import teams from "../data/teams.json";
import copy from "../data/copy.json";

function Pipeline({ steps }) {
  return (
    <div className="pipeline">
      {steps.map((s) => (
        <div className="pipe-step" key={s.n}>
          <span className="n">{s.n}</span>
          <h5>{s.t}</h5>
          <p>{s.d}</p>
        </div>
      ))}
    </div>
  );
}

function CampaignTable({ rows, headers }) {
  return (
    <div className="table-shell">
      <table className="campaign-table">
        {
          headers && (
            <thead>
              <tr>
                <th>{headers[0]}</th>
                <th>{headers[1]}</th>
              </tr>
            </thead>
          )
        }
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]}>
              <td className="camp-name">{row[0]}</td>
              <td>{row[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function TeamsSection() {
  const [activeTeam, setActiveTeam] = useState(teams[0].id);
  const { kicker, title, description, tableHeaders } = copy.teamsSection;

  return (
    <section id="teams">
      <div className="section-head">
        <span className="kicker">{kicker}</span>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <div className="team-tabs">
        {teams.map((team) => (
          <button
            key={team.id}
            type="button"
            className={"team-tab" + (team.id === activeTeam ? " active" : "")}
            onClick={() => setActiveTeam(team.id)}
          >
            <span className="dot" style={{ background: team.color }} />
            {team.name}
          </button>
        ))}
      </div>

      <div>
        {teams.map((team) => (
          <div
            key={team.id}
            className={"team-panel" + (team.id === activeTeam ? " active" : "")}
          >
            <Pipeline steps={team.pipeline} />
            <CampaignTable rows={team.perCampaign || []} headers={null} />
          </div>
        ))}
      </div>
    </section>
  );
}
