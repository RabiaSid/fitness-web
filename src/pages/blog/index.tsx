import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import {
  Blog1Page,
  Blog2Page,
  Blog3Page,
  Blog4Page,
  Blog5Page,
  post1,
  post10,
  post2,
  post3,
  post4,
  post5,
  post6,
  post7,
  post8,
  post9,
} from "../../assets";
import BlogCard from "../../components/card/blogCard";
import BlogZoomCard from "../../components/card/blogZoomCard";
import color from "../../constant";
import Layout from "../../layout";
import { Styles } from "../../style";
import SearchField from "../../components/Search-field";
import FlatButton from "../../components/button/flat-primary";
import HoverButton from "../../components/button/blog-button";
import Input from "../../components/input";

export default function Blog() {
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
            Blog
          </div>
        </div>
        <div className="row m-0 p-0 justify-content-center px-0 px-md-5 ">
          <div className="col-11 col-lg-7 col-xl-8 order-1 order-lg-1">
            <div className="row  m-0 p-0 ps-0 ps-md-5">
              <BlogCard image={Blog1Page} />
              <BlogCard image={Blog2Page} />
              <BlogCard image={Blog3Page} />
              <BlogCard image={Blog4Page} />
              <BlogCard image={Blog5Page} />
            </div>
          </div>
          <div className="col-11 col-lg-5 col-xl-4 order-3 order-lg-2">
            <div
              className="py-4 px-5 my-5 mx-3"
              style={{ background: color.lightBackground }}
            >
              <SearchField />
              <FlatButton title="Search" />
            </div>
            <div
              className="py-4 px-5 my-5 mx-3"
              style={{ background: color.lightBackground }}
            >
              <p
                className="borderbottom_list pb-3 "
                style={Styles.blackHeading1}
              >
                Category
              </p>
              <p className="borderbottom_list py-3  hoverGreyText">
                Resaurant food (37)
              </p>
              <p className="borderbottom_list py-3  hoverGreyText">
                Travel news (10)
              </p>
              <p className="borderbottom_list py-3  hoverGreyText">
                Modern technology (03)
              </p>
              <p className="borderbottom_list py-3  hoverGreyText">
                Product (11)
              </p>
              <p className="borderbottom_list py-3  hoverGreyText">
                Health Care (21) 09 21
              </p>
              <p className="borderbottom_list py-3  hoverGreyText">
                Resaurant food (37)
              </p>
            </div>
            <div
              className="py-4 px-5 my-5 mx-3"
              style={{ background: color.lightBackground }}
            >
              <p
                className="borderbottom_list pb-3 "
                style={Styles.blackHeading1}
              >
                Recent Post
              </p>
              <div className="row py-2">
                <div className="col-4">
                  <img src={post1} style={{ height: "13vh" }} />
                </div>
                <div className="col">
                  <div className="row pt-3">
                    <p
                      style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        color: color.black,
                        fontFamily: `Teko,sans-serif`,
                      }}
                    >
                      From life was you fish...
                    </p>
                    <p
                      style={{
                        fontSize: 14,
                        color: color.DarkGrey,
                        fontFamily: `Teko,sans-serif`,
                      }}
                    >
                      January 12, 2019
                    </p>
                  </div>
                </div>
              </div>
              <div className="row py-2">
                <div className="col-4">
                  <img src={post2} style={{ height: "13vh" }} />
                </div>
                <div className="col">
                  <div className="row pt-3">
                    <p
                      style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        color: color.black,
                        fontFamily: `Teko,sans-serif`,
                      }}
                    >
                      Asteroids telescope
                    </p>
                    <p
                      style={{
                        fontSize: 14,
                        color: color.DarkGrey,
                        fontFamily: `Teko,sans-serif`,
                      }}
                    >
                      03 Hours ago
                    </p>
                  </div>
                </div>
              </div>
              <div className="row py-2">
                <div className="col-4">
                  <img src={post3} style={{ height: "13vh" }} />
                </div>
                <div className="col">
                  <div className="row pt-3">
                    <p
                      style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        color: color.black,
                        fontFamily: `Teko,sans-serif`,
                      }}
                    >
                      Astronomy Or Astrology
                    </p>
                    <p
                      style={{
                        fontSize: 14,
                        color: color.DarkGrey,
                        fontFamily: `Teko,sans-serif`,
                      }}
                    >
                      03 Hours ago
                    </p>
                  </div>
                </div>
              </div>
              <div className="row py-2">
                <div className="col-4">
                  <img src={post4} style={{ height: "13vh" }} />
                </div>
                <div className="col">
                  <div className="row pt-3">
                    <p
                      style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        color: color.black,
                        fontFamily: `Teko,sans-serif`,
                      }}
                    >
                      Asteroids telescope
                    </p>
                    <p
                      style={{
                        fontSize: 14,
                        color: color.DarkGrey,
                        fontFamily: `Teko,sans-serif`,
                      }}
                    >
                      01 Hours ago
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="py-4 px-5 my-5 mx-3"
              style={{ background: color.lightBackground }}
            >
              <p
                className="borderbottom_list pb-3 "
                style={Styles.blackHeading1}
              >
                Tag Clouds
              </p>
              <div className="row py-3">
                <div className="col-4 my-2">
                <HoverButton title="project"/>
                </div>
                <div className="col-4 my-2">
                <HoverButton title="love"/>
                </div>
                <div className="col-4 my-2">
                <HoverButton title="technology"/>
                </div>
                <div className="col-4 my-2">
                <HoverButton title="travel"/>
                </div>
                <div className="col-4 my-2">
                <HoverButton title="restaurant"/>
                </div>
                <div className="col-4 my-2">
                <HoverButton title="life style"/>
                </div>
                <div className="col-4 my-2">
                <HoverButton title="design"/>
                </div>
                <div className="col-4 my-2">
                <HoverButton title="illustration"/>
                </div>
              </div>
            </div>
            <div
              className="py-4 px-5 my-5 mx-3"
              style={{ background: color.lightBackground }}
            >
              <p
                className="borderbottom_list pb-3 "
                style={Styles.blackHeading1}
              >
                Instagram Feeds
              </p>
              <div className="row py-3">
                <div className="col-4 my-2">
                <img src={post5} style={{ height: "13vh" }} />
                </div>
                <div className="col-4 my-2">
                <img src={post6} style={{ height: "13vh" }} />
                </div>
                <div className="col-4 my-2">
                <img src={post7} style={{ height: "13vh" }} />
                </div>
                <div className="col-4 my-2">
                <img src={post8} style={{ height: "13vh" }} />
                </div>
                <div className="col-4 my-2">
                <img src={post9} style={{ height: "13vh" }} />
                </div>
                <div className="col-4 my-2">
                <img src={post10} style={{ height: "13vh" }} />
                </div>
              </div>
            </div>
            <div
              className="py-4 px-5 my-5 mx-3"
              style={{ background: color.lightBackground }}
            >
              <p
                className="borderbottom_list pb-3 "
                style={Styles.blackHeading1}
              >
                Newsletter
              </p>
              <div className="row py-3">
                <Input placeholder="Enter email"/>
              <FlatButton title="Search" />
              </div>
            </div>
          </div>
          <div className="col-11 order-2 order-lg-3">
          <nav className="blog-pagination justify-content-center d-flex ">
            <ul className="pagination">
              <li className="page-item">
                <a href="#" className="page-link" aria-label="Previous">
                  <AiOutlineArrowLeft />
                </a>
              </li>
              <li className="page-item">
                <a href="#" className="page-link">
                  1
                </a>
              </li>
              <li className="page-item active">
                <a href="#" className="page-link">
                  2
                </a>
              </li>
              <li className="page-item">
                <a href="#" className="page-link" aria-label="Next">
                  <AiOutlineArrowRight />
                </a>
              </li>
            </ul>
          </nav>
          </div>
        </div>
      </Layout>
    </>
  );
}
