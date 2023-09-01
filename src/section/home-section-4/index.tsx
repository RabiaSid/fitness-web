import { HomeSectionFourImage } from "../../assets";
import PrimaryButton from "../../components/button/primary-button";
import ReviewCarousel from "../../components/carousel";
import color from "../../constant";
import { Styles } from "../../style";

export default function HomeSectionFour() {
  return <>
    <div
      className="row justify-content-center align-items-center m-0 p-0 py-5 "
      style={{ background: color.white }}
    >
      <div className="col-10 col-sm-8 col-md-6 col-lg-4 py-5 my-5">
        <img src={HomeSectionFourImage} style={Styles.HomeSecTwoImage} />
      </div>
      <div className="col-11 col-md-6 col-lg-6 col-xl-5 py-5 px-4 my-5 d-flex flex-column justify-content-between ">
      <p className="py-2">
          <span className="sidebar-first-item me-5 pe-3"></span>
          <span className="ps-5 ms-5 text-uppercase " style={Styles.pinkText}>
          Client Feedback
          </span>
        </p>
        <p className=" text-uppercase py-2" style={Styles.BlueHeading1}>
        What Our Client thik about our gym
        </p>
       <ReviewCarousel />
      </div>
    </div>
    </>
}
