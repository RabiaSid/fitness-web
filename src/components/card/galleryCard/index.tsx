import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import { Styles } from "../../../style";

type CardProps = {
    image: any;
  };

export default function GalleryCard(props: CardProps) {
    const {image} = props
  return (
    <div className="container p-0">
              <img src={image} alt="Avatar" className="image" />
              <div className="overlay ">
          <div className="text text-center ">
            <p style={Styles.whiteText}>Best fitness gallery</p>
            <p style={Styles.whiteText2}>Fitness, Body</p>
            <div className="icon_div">
            <div className="icon_item_div col-3 d-flex flex-column justify-content-center  align-items-center">
            <HiOutlineArrowNarrowRight size={30} className="icon"/>
            </div>
            </div>
          </div>
          </div>
    </div>
  )
}
