import { Mail, Phone } from "lucide-react";
import { team, type TeamMember } from "@/content/team";
import { useUi } from "@/content/ui";
import { useLocale } from "@/lib/i18n";

function Card({ member }: { member: TeamMember }) {
  const locale = useLocale();
  const ui = useUi();
  const role = member.role[locale];
  const { name } = member;

  return (
    <article className="team-card">
      <div className="team-photo">
        <img src={member.photo} alt={`${ui.team.photoAlt} ${name}`} width={640} height={640} loading="lazy" />
      </div>
      <h3 className="team-name">{name}</h3>
      <p className="team-role">{role}</p>
      <div className="team-links">
        <a href={`mailto:${member.email}`} className="team-link">
          <Mail size={14} aria-hidden="true" /> {member.email}
        </a>
        {member.phone && (
          <a href={`tel:${member.phone.replace(/\s/g, "")}`} className="team-link">
            <Phone size={14} aria-hidden="true" /> {member.phone}
          </a>
        )}
      </div>
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
