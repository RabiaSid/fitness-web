import { BackTop } from "antd";
import color from "../../constant";
import { AiOutlineToTop } from "react-icons/ai";

const style = {
  btn: {
    background: color.pink,
    color: color.white,
    // borderRadius: "28px",
    width: "4rem",
    height: "4rem",
  },
};

export default function BackToTop() {
  return <>
      <div>
        <BackTop style={style.btn} className="shadow-lg rounded-circle">
          <div className="ant-back-top-inner text-center  fs-6 py-3 ">
            <AiOutlineToTop size={25} />
          </div>
        </BackTop>
      </div>
    </>
}
