import PrimaryButton from "../../components/button/primary-button";
import { Styles } from "../../style";
import TeamCard from "../../components/card/teamCard";
import { TeamCardData } from "../../config";
import { HomeSectionSixImage } from "../../assets";

export default function HomeSectionSix() {
  return  <>
      <div className="row justify-content-between align-items-center m-0 p-0 py-5 mt-5 px-5">
        <div className="col-11 col-md-6 col-lg-5">
          <p className="">
            <span className="sidebar-first-item me-5 pe-3"></span>
            <span className="ps-5 ms-5 text-uppercase " style={Styles.pinkText}>
              OUR TEAM MAMBERS
            </span>
          </p>
          <p className="text-uppercase" style={Styles.BlueHeadingBold1}>
            OUR MOST EXPRIENCED TRAINERS
          </p>
        </div>
        <div className="col-4 col-md-6 col-lg-3 text-end">
          <PrimaryButton title="MORE SERVICES"/>
        </div>
      </div>
      <div className="row justify-content-center align-items-center m-0 p-0 py-5 px-5 mb-5">
        <div className="container">
          <div className="row justify-content-evenly align-items-center">
            {TeamCardData.map((data) => (
              <TeamCard key={data.id} {...data} />
            ))}
          </div>
        </div>
      </div>
      <div
        className="row justify-content-center align-items-center m-0 p-0 py-5 mt-5 px-5"
        style={{
          background: `url(${HomeSectionSixImage})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="col-11 col-md-6 col-lg-6 py-5">
          <p className="text-uppercase" style={Styles.whiteHeading2}>
            April membership offer available Now
          </p>
        </div>
        <div className="col-4 col-md-6 col-lg-3 text-end py-5">
          <PrimaryButton title="MORE SERVICES"/>
        </div>
      </div>
    </>
}
