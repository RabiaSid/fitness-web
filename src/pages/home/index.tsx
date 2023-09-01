import Layout from "../../layout";
import HomeSectionOne from "../../section/home-section-1";
import HomeSectionTwo from "../../section/home-section-2";
import HomeSectionThree from "../../section/home-section-3";
import HomeSectionFour from "../../section/home-section-4";
import HomeSectionFive from "../../section/home-section-5";
import HomeSectionSix from "../../section/home-section-6";
import HomeSectionSeven from "../../section/home-section-7";

export default function Home() {
  return <>
      <Layout>
        <div className="row m-0 p-0 ">
          <div className="FixedBG1_img col-12 m-0 p-0">
            <div className="FixedBG1_row_1 m-0 p-0">
              <HomeSectionOne />
            </div>
            <div className="FixedBG1_row_2 m-0 p-0">
              <HomeSectionTwo />
            </div>
          </div>
        </div>
        <div className="row m-0 p-0 ">
          <div className="FixedBG2_img col-12 m-0 p-0">
            <div className="FixedBG2_1 m-0 p-0">
              <HomeSectionThree />
            </div>
            <div className="FixedBG2_2 m-0 p-0">
              <HomeSectionFour />
            </div>
          </div>
        </div>
          <HomeSectionFive />
          <HomeSectionSix />
          <HomeSectionSeven />
      </Layout>
    </>
}
