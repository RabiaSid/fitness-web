import Layout from "../../layout";
import HomeSectionFive from "../../section/home-section-5";
import { Styles } from "../../style";

export default function Gallery() {
  return  <>
      <Layout>
      <div className="row m-0 p-0 justify-content-center pb-5 pb-md-0 align-items-end align-items-md-center" style={Styles.pagesBanner}>
          <div className="col-11 col-md-6 col-lg-4 text-center pb-5 pb-md-0 " style={Styles.pagesBannerText}>
          Gallery
          </div>
        </div>
        <div className="row py-5 my-5 m-0 p-0">
        <HomeSectionFive />
        </div>
      </Layout>
    </>
}
