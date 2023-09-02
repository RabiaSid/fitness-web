import React, { useEffect } from "react";
import PrimaryButton from "../../components/button/primary-button";
import { Styles } from "../../style";

export default function HomeSectionOne() {
  useEffect(() => {
    const banner = document.querySelector(".banner-paragraph") as HTMLElement;
    if (banner) {
      banner.style.animation = "slideIn 1s forwards";
    }
  }, []);

  return <>
    <div className="home-Sec-background row m-0 p-0 pt-5">
      <div className="col-7 py-5 my-5">
        <div className="row py-5 my-5 ps-5">
          <div className="banner-container ">
            <p className="banner-paragraph"><span className="sidebar-first-item me-5 pe-3">
            </span><span className="ps-5 ms-5 text-uppercase " style={Styles.pinkText} >with patrick potter</span></p>
          </div>
          <div className="banner-container2   m-0 p-0">
            <p className="banner-paragraph2  text-uppercase" style={Styles.whiteHeading1}>
              Build Perfect body <br></br> Shape for good and <br></br> Healthy life.
            </p>
          </div>
          <div className="banner-container3   ">
            <div className="banner-paragraph3 ">
              <PrimaryButton title="BECOME A MEMBER "/>
            </div>
          </div>
        </div>
      </div>
      <div className="col-5"></div>
    </div>
    </>
}
