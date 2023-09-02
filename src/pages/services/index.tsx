import ServiceCard from "../../components/card/serviceCard";
import { serviceCardData } from "../../config";
import Layout from "../../layout";
import HomeSectionThree from "../../section/home-section-3";
import { Styles } from "../../style";

export default function Services() {
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
            our Services
          </div>
        </div>
        <HomeSectionThree />
        <div className="row justify-content-center align-items-center m-0 p-0 px-5 mb-5">
          <div className="container">
            <div className="row justify-content-evenly align-items-center">
              {serviceCardData.map((data) => (
                <ServiceCard key={data.id} {...data} />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
