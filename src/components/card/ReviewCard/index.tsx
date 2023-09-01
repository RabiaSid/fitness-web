import { Styles } from "../../../style";

type ReviewCardProps = {
    id: number;
    description: any;
    title: string;
    subTitle: string;
  };

  export default function ReviewCard(props : ReviewCardProps) {
    const {id, description, title, subTitle } = props
    return (
        <div
        key={id}
        className="row py-3 "
      >
        <div className="row py-1 ">
          <p style={Styles.GreyText2}>
          {description}
          </p>
        </div>
        <div className="row">
          <p>
            <span className="text-uppercase" style={Styles.DarkText2}>{title}</span>
            <span className="text-captilized ps-2" style={Styles.GreyBoldText2}>{subTitle}</span>
          </p>
        </div>
      </div>
      );
  }
