import { HomeSecEightImage } from "../../assets";
import PrimaryButton from "../../components/button/primary-button";
import InputField from "../../components/input-field";
import InputSelect from "../../components/input-select";
import InputTextarea from "../../components/input-textarea";
import { Styles } from "../../style";

export default function HomeSectionEight() {
  return <>
    <div className="row p-0 m-0 my-5 py-5">
      <div
        className="col-6 d-none d-lg-block"
        style={{
          background: `url(${HomeSecEightImage})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="col-11 col-lg-6 py-5">
        <p className="py-2">
          <span className="sidebar-first-item me-5 pe-3"></span>
          <span className="ps-5 ms-5 text-uppercase " style={Styles.pinkText}>
            Client Feedback
          </span>
        </p>
        <p className=" text-uppercase py-2" style={Styles.BlueHeading1}>
          What Our Client thik about our gym
        </p>
        <div className="row p-0 m-0 py-2">
          <div className="col-12 col-md-6 pt-1 my-4 px-2">
            <InputField placeholder="Name" />
          </div>
          <div className="col-12 col-md-6 pt-1 my-4 px-2">
            <InputField placeholder="Phone" />
          </div>
          <div className="col-12 col-md-6 my-4 px-2">
            <InputSelect />
            {/* <InputField /> */}
          </div>
          <div className="col-12 col-md-6 pt-2 my-4 px-2">
            <InputField placeholder="Email" />
          </div>
          <div className="col-12 my-3 px-2">
            <InputTextarea />
          </div>
          <div className="col-4 my-3 px-2">
            <PrimaryButton title="SEND MESSAGE" />
          </div>
        </div>
      </div>
    </div>
    </>
}
