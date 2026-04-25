import MemberCard from "./components/member_card/member_card";
import {sophia} from "@/assets/members";

function MembersPage() {
  
  return (
  <div>
    <MemberCard src={sophia} name="Sophia" major="Mechanical Eng." year="Junior" pronouns="She/Her"/>
  </div>
  );
}

export default MembersPage;
