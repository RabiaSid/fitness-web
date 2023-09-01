import PrimaryButton from "../../components/button/primary-button";
import { Styles } from "../../style";
import ServiceCard from "../../components/card/serviceCard/index";
import { serviceCardData } from "../../config";



export default function HomeSectionThree() {

  return <>
      <div className="row justify-content-between align-items-center m-0 p-0 py-5 mt-5 px-5">
        <div className="col-11 col-md-6 col-lg-9">
          <p className="">
            <span className="sidebar-first-item me-5 pe-3"></span>
            <span className="ps-5 ms-5 text-uppercase " style={Styles.pinkText}>
              with patrick potter
            </span>
          </p>
          <p className="text-uppercase" style={Styles.whiteHeading2}>
            Build Perfect body Shape for good and Healthy life.
          </p>
        </div>
        <div className="col-4 col-md-6 col-lg-3 text-end">
          <PrimaryButton />
        </div>
      </div>
      <div className="row justify-content-center align-items-center m-0 p-0 py-5 px-5 mb-5">
        <div className="container">
          <div className="row justify-content-evenly align-items-center">
          {serviceCardData.map((data) => (
          <ServiceCard key={data.id} {...data} />
        ))}
          </div>
        </div>
      </div>
    </>
}
