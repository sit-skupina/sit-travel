import { Mail, Phone } from "lucide-react";
import { team, type TeamMember } from "@/content/team";
import { useUi } from "@/content/ui";
import { useLocale } from "@/lib/i18n";

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");
}

function Card({ member }: { member: TeamMember }) {
  const locale = useLocale();
  const ui = useUi();
  const role = member.role[locale];
  const name = member.name || ui.team.placeholderName;

  return (
    <article className="team-card">
      <div className="team-photo">
        {member.photo ? (
          <img src={member.photo} alt={`${ui.team.photoAlt} ${name}`} loading="lazy" />
        ) : (
          <span className="team-photo-initials" aria-hidden="true">
            {initials(member.name) || "SIT"}
          </span>
        )}
      </div>
      <h3 className={`team-name${member.name ? "" : " team-placeholder"}`}>{name}</h3>
      <p className={`team-role${role ? "" : " team-placeholder"}`}>
        {role || ui.team.placeholderRole}
      </p>
      {(member.email || member.phone) && (
        <div className="team-links">
          {member.email && (
            <a href={`mailto:${member.email}`} className="team-link">
              <Mail size={14} aria-hidden="true" /> {member.email}
            </a>
          )}
          {member.phone && (
            <a href={`tel:${member.phone.replace(/\s/g, "")}`} className="team-link">
              <Phone size={14} aria-hidden="true" /> {member.phone}
            </a>
          )}
        </div>
      )}
    </article>
  );
}

export function TeamGrid() {
  return (
    <div className="team-grid">
      {team.map((m) => (
        <Card key={m.id} member={m} />
      ))}
    </div>
  );
}
