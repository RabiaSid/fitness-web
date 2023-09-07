import TextArea from "antd/es/input/TextArea";
import { MapImage, post2 } from "../../assets";
import color from "../../constant";
import Layout from "../../layout";
import { Styles } from "../../style";
import { GoMail } from "react-icons/go";
import Textarea from "../../components/textarea";
import Input from "../../components/input";
import FlatButton from "../../components/button/flat-primary";
import { HiOutlineHome } from "react-icons/hi";
import { TfiTablet } from "react-icons/tfi";

export default function Contact() {
  return (
    <>
      <Layout>
        <div
          className="row m-0 p-0 justify-content-center pb-5 pb-md-0 align-items-end align-items-md-center"
          style={Styles.pagesBanner}
        >
          <div
            className="col-11 col-md-6 col-lg-4 text-center pb-5 pb-md-0 "
            style={Styles.pagesBannerText}
          >
            Contact
          </div>
        </div>

        <div className="row m-0 p-0 justify-content-center py-5">
          <div
            className="col-11"
            style={{
              background: `url(${MapImage})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "70vh",
              // width:"100%"
            }}
          ></div>
        </div>

        <div className="row m-0 p-0 justify-content-center py-5">
          <div className="col-11 col-md-7 col-lg-8 my-3">
            <div className="row">
            <div className="col-11 col-md-8 col-md-4" style={Styles.BlueHeading1}>
              Get in Touch
              </div>
              <div className="col-12">
              <Textarea />
              </div>
              <div className="col-6">
              <Input placeholder="Enter Your Name"/>
              </div>
              <div className="col-6">
              <Input placeholder="Email"/>
              </div>
              <div className="col-12">
              <Input placeholder="Enter Subject"/>
              </div>
              <div className="col-11 col-md-8 col-lg-4">
              <FlatButton title="Send" />
              </div>
            </div>
          </div>
          <div className="col-11 col-md-5 col-lg-3 my-3">
            <div className="row py-2 ">
              <div className="col-4  text-center pt-2">
                <HiOutlineHome
                  className="Contact-icon" 
                  size={45}
                />
              </div>
              <div className="col ">
                <div className="row ">
                  <p
                    style={{
                      fontSize: 18,
                      letterSpacing:"0.1rem",
                      fontWeight: 500,
                      color: color.DarkGrey,
                      fontFamily: `Teko,sans-serif`,
                    }}
                  >
                   Buttonwood, California.
                  </p>
                  <p
                    style={{
                      fontSize: 18,
                      color: color.lightGrey,
                      fontFamily: `Teko,sans-serif`,
                    }}
                  >
                    Rosemead, CA 91770
                  </p>
                </div>
              </div>
            </div>
            <div className="row py-2 ">
              <div className="col-4  text-center pt-2">
                <TfiTablet
                  className="Contact-icon" 
                  size={38}
                />
              </div>
              <div className="col ">
                <div className="row ">
                  <p
                    style={{
                      fontSize: 18,
                      letterSpacing:"0.1rem",
                      fontWeight: 500,
                      color: color.DarkGrey,
                      fontFamily: `Teko,sans-serif`,
                    }}
                  >
                    +1 253 565 2365
                  </p>
                  <p
                    style={{
                      fontSize: 18,
                      color: color.lightGrey,
                      fontFamily: `Teko,sans-serif`,
                    }}
                  >
                    Mon to Fri 9am to 6pm
                  </p>
                </div>
              </div>
            </div>
            <div className="row py-2 ">
              <div className="col-4  text-center pt-2">
                <GoMail
                  className="Contact-icon" 
                  size={38}
                />
              </div>
              <div className="col ">
                <div className="row ">
                  <p
                    style={{
                      fontSize: 18,
                      letterSpacing:"0.1rem",
                      fontWeight: 500,
                      color: color.DarkGrey,
                      fontFamily: `Teko,sans-serif`,
                    }}
                  >
                    support@colorlib.com
                  </p>
                  <p
                    style={{
                      fontSize: 18,
                      color: color.lightGrey,
                      fontFamily: `Teko,sans-serif`,
                    }}
                  >
                    Send us your query anytime!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
