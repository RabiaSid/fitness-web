import Layout from "../../layout";
import HomeSectionEight from "../../section/home-section-8";
import { Styles } from "../../style";

export default function BecomeMember() {
  return  <>
      <Layout>
        <div
          className="row m-0 p-0 justify-content-center pb-5 pb-md-0 align-items-end align-items-md-center"
          style={Styles.pagesBanner}
        >
          <div
            className="col-11 col-md-6 col-lg-4 text-center pb-5 pb-md-0 "
            style={Styles.pagesBannerText}
          >
            New Member
          </div>
        </div>
        <div className="row m-0 p-0 py-5">
        <HomeSectionEight />
        </div>
      </Layout>
    </>
}
