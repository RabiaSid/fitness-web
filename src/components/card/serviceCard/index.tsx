import color from "../../../constant";
import { Styles } from "../../../style";

type ServiceCardProps = {
  id: number;
  icon: any;
  title: string;
  desc: string;
};

export default function ServiceCard(props: ServiceCardProps) {
  const { id, icon, title, desc } = props;
  const IconComponent = icon;
  return <>
    <div
      className="col-11 col-md-5 col-lg-3 pt-5 my-2 Servicecard_div "
      style={{ backgroundColor: color.white }}
      key={id}
    >
      <div className="row d-flex justify-content-center  align-items-center text-center px-5 py-3  ">
        <div className="col-3">
          <IconComponent
            className="Servicecard_icon"
            style={Styles.ServicecardIcon}
          />
        </div>
        <h1 className="heading1_Font2 py-3" style={Styles.ServicecardTitle}>
          {title}
        </h1>
        <text
          className="Secondery_paragraph py-1"
          style={Styles.ServicecardDesc}
        >
          {desc}
        </text>
      </div>
      <div className="row">
      <button className="customized-flat-btn flat-btn">Read More</button>
      </div>
    </div>
    </>
}
