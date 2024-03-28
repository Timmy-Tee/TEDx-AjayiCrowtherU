import Header from "../TextHeader/TextHeader";
import CardHolder from "../Cards/CardHolder";
import { teamTitle } from "../../data/team";
import teamData from "../../data/team";

function Team() {
  return (
    <div className="bg-banner flex flex-col p-[10px] lg:p-[50px] text-main-section ">
      <Header
        main_header={teamTitle.main_header}
        mini_header={teamTitle.mini_header}
      />
      <br />
      <CardHolder dataProps={teamData} />
    </div>
  );
}

export default Team;
