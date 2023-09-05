import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import {
  GalleryImage1,
  GalleryImage2,
  GalleryImage3,
  GalleryImage4,
  GalleryImage5,
} from "../../assets";
import { Styles } from "../../style";
import GalleryCard from "../../components/card/galleryCard";

export default function HomeSectionFive() {
  return <>
    <div className="row p-0 m-0 ">
      <div className="col-12 col-lg-6 ">
        <GalleryCard image={GalleryImage1} />
      </div>
      <div className="col-12 col-lg-6 d-flex flex-column justify-content-between  align-items-center">
        <div className="row p-0 m-0 justify-content-center ">
          <div className="col-11 col-md-6 py-2 py-lg-0 ">
            <GalleryCard image={GalleryImage2} />
          </div>
          <div className="col-11 col-md-6 py-2 py-lg-0">
            <GalleryCard image={GalleryImage3} />
          </div>
        </div>
        <div className="row p-0 m-0 justify-content-center ">
          <div className="col-11 col-md-6 py-2 py-lg-0 ">
            <GalleryCard image={GalleryImage4} />
          </div>
          <div className="col-11 col-md-6 py-2 py-lg-0 ">
            <GalleryCard image={GalleryImage5} />
          </div>
        </div>
      </div>
    </div>
    </>
}
