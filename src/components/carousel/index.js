import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Styles } from "../../style";
import ReviewCard from "../card/ReviewCard";

function ReviewCarousel() {
  const [sliderRef, setSliderRef] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderSettings = {
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    speed: 2000,
    beforeChange: (current, next) => setCurrentIndex(next),
  };

  const ReviewCards = [
    {
      id: 1,
      title: "Jhon Smith",
      subTitle: "Gym Trainer",
      description:
        "Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replica;ition of thei designers ijtls intended csents your se.",
    },
    {
      id: 2,
      title: "Jhon Smith",
      subTitle: "Gym Trainer",
      description:
        "Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replica;ition of thei designers ijtls intended csents your se.",
    },
    {
      id: 3,
      title: "Jhon Smith",
      subTitle: "Gym Trainer",
      description:
        "Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replica;ition of thei designers ijtls intended csents your se.",
    },
    {
      id: 4,
      title: "Jhon Smith",
      subTitle: "Gym Trainer",
      description:
        "Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replica;ition of thei designers ijtls intended csents your se.",
    },
  ];

  const nextSlide = () => {
    if (sliderRef) {
      const nextIndex =
        currentIndex + 1 >= ReviewCards.length ? 0 : currentIndex + 1;
      sliderRef.slickGoTo(nextIndex);
    }
  };

  useEffect(() => {
    const autoPlayInterval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(autoPlayInterval);
    };
  }, [currentIndex]);

  return (
    <div className="row justify-content-center m-0">
      <div className="col-12">
        <Slider ref={setSliderRef} {...sliderSettings}>
          {ReviewCards.map((data) => {
            return <ReviewCard key={data.id} {...data} />;
          })}
        </Slider>
      </div>
      <div className="col-4">
        <button
          onClick={() => sliderRef?.slickPrev()}
          style={Styles.slider_arrow_Prev}
        >
          <HiOutlineArrowNarrowLeft size={35} style={Styles.slider_arrow_Text} />
        </button>
        <button
          onClick={() => sliderRef?.slickNext()}
          style={Styles.slider_arrow_Back}
        >
          <HiOutlineArrowNarrowRight size={35}  style={Styles.slider_arrow_Text} />
        </button>
      </div>
    </div>
  );
}

export default ReviewCarousel;
