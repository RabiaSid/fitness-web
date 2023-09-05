import { BsTelephone, BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import { FaGooglePlusG, FaXbox } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AppLogo } from "../../assets";
// import { Payment } from "../../assets";
// import EmailInput from "../InpuField/emailInput";

export default function AppFooter() {
  return  <>
      <div className="container-fluid pt-5">
        {/* middle section */}
        <div className="row d-flex justify-content-evenly align-items-start py-5 px-4">
          <div className="col-11 col-lg-3 text-start ">
            <h4 className="Footer_heading">COMPANY</h4>
            <div className="footer_div text-start">
              <div className="Footer_text">About Us</div>
              <br></br>
              <div className="Footer_text">Company</div>
              <br></br>
              <div className="Footer_text">Press & Blog</div>
              <br></br>
              <div className="Footer_text">Privacy Policy</div>
              <br></br>
            </div>
          </div>
          <div className="col-11 col-lg-3 text-start ">
            <h4 className="Footer_heading">OPEN HOUR</h4>
            <div className="footer_div text-start">
              <div className="Footer_text">Monday 11am-7pm</div>
              <br></br>
              <div className="Footer_text">Tuesday-Friday 11am-8pm</div>
              <br></br>
              <div className="Footer_text">Saturday 10am-6pm</div>
              <br></br>
              <div className="Footer_text">Sunday 11am-6pm</div>
              <br></br>
            </div>
          </div>
          <div className="col-11 col-lg-3 text-start ">
            <h4 className="Footer_heading">RESOURCES</h4>
            <div className="footer_div text-start">
              <div className="Footer_text">Home Insurance</div>
              <br></br>
              <div className="Footer_text">Travel Insurance</div>
              <br></br>
              <div className="Footer_text">Car Insurance</div>
              <br></br>
              <div className="Footer_text">Business Insurance</div>
              <br></br>
              <div className="Footer_text">Heal Insurance</div>
              <br></br>
            </div>
          </div>
          <div className="col-11 col-lg-3 text-start ">
            <img src={AppLogo} height="55rem" width="auto" />
            <div className="footer_div text-start">
              <div className="Footer_text mt-4 mb-2">
                GThe trade war currently ensuing between te US anfd several
                natxions around thdhe globe, most fiercely with.
              </div>
              <br></br>
              <div>
                <span className="social_icon_div">
                  <BsFacebook size={"25px"} className="social_icon" />
                </span>
                <span className="social_icon_div">
                  <BsTwitter size={"25px"} className="social_icon" />
                </span>
                <span className="social_icon_div">
                  <BsLinkedin size={"22px"} className="social_icon" />
                </span>
                <span className="social_icon_div">
                  <FaGooglePlusG size={"30px"} className="social_icon" />
                </span>
                <span className="social_icon_div">
                  <FaXbox size={"25px"} className="social_icon" />
                </span>
              </div>
              <br></br>
            </div>
          </div>
        </div>
        {/* bottom section */}
        <div className="row d-flex justify-content-center align-items-center  px-4">
          <div className="col-12 col-md-8 col-lg-6 text-center Secondery_paragraph_Top">
            <div className="Secondery_paragraph py-5">
              2019 - 2023 © Dorsin - Themesbrand payment
            </div>
            <br></br>
          </div>
        </div>
      </div>
    </>
}
