import { HomeSecTwoImage } from "../../assets";
import PrimaryButton from "../../components/button/primary-button";
import color from "../../constant";
import { Styles } from "../../style";

export default function HomeSectionTwo() {
  return <>
    <div
      className="row justify-content-center align-items-center m-0 p-0 py-5 "
      style={{ background: color.white }}
    >
      <div className="col-10 col-sm-8 col-md-6 col-lg-4 py-5">
        <img src={HomeSecTwoImage} style={Styles.HomeSecTwoImage} />
      </div>
      <div className="col-11 col-md-6 col-lg-6 col-xl-5 py-5 px-4  d-flex flex-column justify-content-between ">
        <p className="py-2">
          <span className="sidebar-first-item me-5 pe-3"></span>
          <span className="ps-5 ms-5 text-uppercase " style={Styles.pinkText}>
            with patrick potter
          </span>
        </p>
        <p className=" text-uppercase py-2" style={Styles.BlueHeading1}>
          Build Perfect body Shape for good and Healthy life.
        </p>
        <p className="py-2" style={Styles.DarkText}>
          Brook presents your services with flexible, convenient and cdpose
          layouts. You can select your favorite layouts & elements for cular ts
          with unlimited ustomization possibilities. Pixel-perfect replication
          of the designers is intended.
        </p>
        <p className="py-2" style={Styles.GreyText}>
          Brook presents your services with flexible, convefnient and chient
          anipurpose layouts. You can select your favorite layouts.
        </p>
        <div className="py-2">
          <PrimaryButton title="BECOME A MEMBER "/>
        </div>
      </div>
    </div>
    </>
}
