import ScheduleCard from "../../components/card/scheduleCard";
import color from "../../constant";
import { Styles } from "../../style";

export default function HomeSectionSeven() {
  return (
    <>
      <div className="row p-0 m-0 justify-content-center py-5 my-5">
        <div className="col-10 col-md-9  col-lg-8 col-xl-5 text-center ">
          <p className="py-2">
            <span className="sidebar-first-item me-5 pe-3"></span>
            <span className="ps-5 ms-5 text-uppercase " style={Styles.pinkText}>
              OUR TIME SCHEDULE
            </span>
          </p>
          <p className=" text-uppercase py-2" style={Styles.BlueHeading1}>
            SELECT THE PERFECT TIME YOU NEED NOW
          </p>
        </div>
        <div className="col-10 py-5">
          <div className="row px-4 justify-content-center" style={{background:color.lightBackground}}>
              <div className="Week_item col text-center">Sunday</div>
              <div className="Week_item col text-center">Monday</div>
              <div className="Week_item col text-center">Tuesday</div>
              <div className="Week_item col text-center">Wednesday</div>
              <div className="Week_item col text-center">Thursday</div>
              <div className="Week_item col text-center">Friday</div>
              <div className="Week_item col text-center">Saturday</div>
          </div>
          <div className="row justify-content-around py-5">
            <ScheduleCard />
            <ScheduleCard />
            <ScheduleCard />
            <ScheduleCard />
            <ScheduleCard />
          </div>
        </div>
      </div>
    </>
  );
}
