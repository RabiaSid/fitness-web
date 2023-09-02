import Layout from "../../layout";
import HomeSectionSeven from "../../section/home-section-7";
import { Styles } from "../../style";

export default function Schedule() {
  return <>
  <Layout>
  <div className="row m-0 p-0 justify-content-center pb-5 pb-md-0 align-items-end align-items-md-center" style={Styles.pagesBanner}>
          <div className="col-11 col-md-6 col-lg-4 text-center pb-5 pb-md-0 " style={Styles.pagesBannerText}>
          Schedule
          </div>
        </div>
        
        <HomeSectionSeven />
  </Layout>
  </>
    
}

