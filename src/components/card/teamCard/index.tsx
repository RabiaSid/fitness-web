import { BsFacebook } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";

type TeamCardProps = {
  id: number;
  image: any;
};

export default function TeamCard(props: TeamCardProps) {
  const { id, image } = props;

  return  <>
      <div
        className="col-11 col-xs-8 col-sm-7 col-md-5 col-lg-3 pt-5 my-2 Servicecard_div2 d-flex flex-column justify-content-end"
        style={{
          background: `url(${image})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          // backgroundSize: "cover",
        }}
        key={id}
      >
        <div className="row">
          <div className="customized-flat-btn2 flat-btn2 ">
            <p className="">
              <span className="flat-btn2_text"></span>
              <span className="ps-5 ms-5 text-uppercase flat-btn2_Greytext">
                with patrick potter
              </span>
            </p>
            <div className="flat_btn2_textWhite ">Jhon Sunsaev</div>
            <div className="flat_btn2_icon  ">
              <span className="pe-2">
                <BsFacebook size={20} />
              </span>
              <span className="pe-2">
                <TfiWorld size={20} />
              </span>
              <span className="pe-2">
                <AiOutlineTwitter size={25} />
              </span>
              <span className="pe-2">
                <AiFillInstagram size={25} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
}
