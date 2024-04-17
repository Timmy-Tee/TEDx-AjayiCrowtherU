import Header from "../TextHeader/TextHeader";
import CardHolder from "../Cards/CardHolder";
import Button from "../Button/Button";
import { speakerTitle } from "../../data/speakers";
import speakerData from "../../data/speakers";

function Speakers() {
  return (
    <div className="bg-banner flex flex-col p-[10px] lg:p-[50px]  text-main-section ">
      <Header
        main_header={speakerTitle.main_header}
        mini_header={speakerTitle.mini_header}
      />
      <br />
      <CardHolder dataProps={speakerData} />

      <div className="flex place-content-center p-[30px] mt-3">
        <Button text="Get To Know Them" link="/speakers"/>
      </div>
    </div>
  );
}

export default Speakers;
