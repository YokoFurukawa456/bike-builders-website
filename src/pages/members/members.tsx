import MemberCard from "./components/member_card/member_card";
import { sophia } from "@/assets/members";
import "./members.css";

function MembersPage() {
  return (
    // Make a member section
    <div className="member-grid">
      <div className="member-row">
        <span className="row-label">President</span>
        <div className="cards">
          <MemberCard
            src={sophia}
            name="Sophia"
            major="Mechanical Eng."
            year="Junior"
            pronouns="She/Her"
          />
        </div>
      </div>

      <div className="member-row">
        <span className="row-label">Lead</span>
        <div className="cards">
          <MemberCard
            src={sophia}
            name="Sophia"
            major="Mechanical Eng."
            year="Junior"
            pronouns="She/Her"
          />
          <MemberCard
            src={sophia}
            name="Sophia"
            major="Mechanical Eng."
            year="Junior"
            pronouns="She/Her"
          />
        </div>
      </div>
    </div>
    
     // Make a founders and leaders section
  );
}

export default MembersPage;
