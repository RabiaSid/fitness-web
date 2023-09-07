
import { Blog2 } from "../../../assets";
import { Styles } from "../../../style";
import color from "../../../constant";

type BlogZoomCardProps =  {
  image :any
}

export default function BlogZoomCard( props : BlogZoomCardProps ) {

  const { image } = props

  return  <>
        <div
        className="row m-0 p-0 justify-content-center "
          
        >
            <div className="col-12 Zoom_img_div" style={{
              backgroundImage:`url(${image}) `,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
            }}
            >
                <div className="position-absolute bottom-0 start-0 py-3 px-5" style={{background:color.darkPink}}>
                    <text style={Styles.whiteHeading2}>24</text>
                    <br></br>
                    <text style={Styles.whiteText2}>Nov</text>
                </div>
            </div>
        </div>
        <div className="row m-0 p-0">
          <p className="py-2">
            <span className="sidebar-first-item2 me-5 pe-3"></span>
            <span className="ps-5 ms-5 text-uppercase " style={Styles.blackText}>
              RECENT NEWS FORM BLOG
            </span>
          </p>
          <p className=" text-uppercase py-2" style={Styles.blackHeading1}>
            GYM TIPS NEWS FOR YOU THAT SELECTED BY US
          </p>
        </div>
    </>
}
