import React, { ReactElement } from 'react'
import { Styles } from '../../../style'
import color from '../../../constant'
import { Blog1Page } from '../../../assets'

type BlogCardProps = {
    image: any
}

export default function BlogCard(props : BlogCardProps ) {
const {image} = props

  return (
    <div className="col-11 col-lg-10 justify-content-center shadow-lg p-0 my-5 w-100">
                <div
                  className=" Zoom_img_div position-relative ps-5 mb-5 w-100"
                  style={{
                    backgroundImage: `url(${image}) `,
                    backgroundRepeat: "no-repeat",
                    backgroundSize:"cover",
                    minHeight:'55vh'
                  }}
                >
                  <div
                    className="position-absolute top-100 start-25 translate-middle ms-5 py-3 px-5 rounded"
                    style={{ background: color.pink }}
                  >
                    <text style={Styles.whiteHeading2}>24</text>
                    <br></br>
                    <text style={Styles.whiteText2}>Nov</text>
                  </div>
                </div>
                <div className="blog-head py-5 ps-0 ps-md-3 pe-0 pe-md-5">
                  <p style={Styles.blackHeading1}>
                    Google inks pact for new 35-storey office
                  </p>
                  <p style={Styles.DarkText}>
                    That dominion stars lights dominion divide years for fourth
                    have don't stars is that he earth it first without heaven in
                    place seed it second morning saying.
                  </p>
                  <text>
                    <span className="hoverGreyText">Travel, Lifestyle</span>
                    <span className="px-2">|</span>
                    <span className="hoverGreyText">03 Comments</span>
                  </text>
                </div>
              </div>
  )
}
