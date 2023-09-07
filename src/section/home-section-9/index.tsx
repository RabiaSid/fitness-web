import { Blog2, FooterSectionImage } from "../../assets";
import BlogZoomCard from "../../components/card/blogZoomCard";
import Blog from "../../pages/blog";
import { Styles } from "../../style";

export default function HomeSectionNine() {
  return  <>
      <div className="row p-0 m-0 justify-content-center py-5 my-5">
        <div className="col-10 col-md-9  col-lg-8 col-xl-6 text-center ">
          <p className="py-2">
            <span className="sidebar-first-item me-5 pe-3"></span>
            <span className="ps-5 ms-5 text-uppercase " style={Styles.pinkText}>
              RECENT NEWS FORM BLOG
            </span>
          </p>
          <p className=" text-uppercase py-2" style={Styles.BlueHeading1}>
            GYM TIPS NEWS FOR YOU THAT SELECTED BY US
          </p>
        </div>
        <div className="row justify-content-center m-0 p-0 py-2">
          <div className="col-11 col-md-6 col-lg-5">
            <BlogZoomCard image={Blog2} />
          </div>
          <div className="col-11 col-md-6 col-lg-5">
            <BlogZoomCard image={FooterSectionImage} />
          </div>
        </div>
        {/* <div className="col-6">
          <div className="row justify-content-center m-0 p-0">
           
          </div>
        </div>
        <div className="col-6">
          <div className="row justify-content-center m-0 p-0">
            
          </div>
        </div> */}
      </div>
    </>
}
