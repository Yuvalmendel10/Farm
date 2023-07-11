import MeetHorsesCard from "./MeetHorsesCard";
import MeetFacilitiesCard from "./meetFacilitiesCard";

function MeetFarm() {
  return (
    <div>
      <div className="grid">
        <div>
          <MeetHorsesCard />
        </div>
        <div>
          <MeetFacilitiesCard />
        </div>
      </div>
      <div>meet our stuff</div>
    </div>
  );
}

export default MeetFarm;
