import "./member_card.css";

type MemberCardProps = {
  src: string;
  alt?: string;
  name: string;
  major: string;
  year: string;
  pronouns: string;
  className?: string;
};

function MemberCard({
  src,
  alt = "",
  name,
  major,
  year,
  pronouns,
  className = "",
}: MemberCardProps) {
  return (
    <div className={`member-card ${className}`}>
      <img src={src} alt={alt} className="member-card-image"/>
      <div className="card-overlay">
        <span className="member-name">{name}</span>
        <div className="tags">
          <span className="tag">{major}</span>
          <span className="tag">{year}</span>
          <span className="tag">{pronouns}</span>
        </div>
      </div>
    </div>
  );
}

export default MemberCard;
