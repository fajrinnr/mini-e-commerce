import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHearRegular } from "@fortawesome/free-regular-svg-icons";
import CSS from "csstype";

interface ILoveButtonProps {
  loved?: boolean;
  customStyles?: CSS.Properties;
  onClick?: () => void;
}

export default function LoveButton(props: ILoveButtonProps) {
  return (
    <FontAwesomeIcon
      icon={props.loved ? faHeart : faHearRegular}
      style={props?.customStyles}
      onClick={(e) => {
        e.preventDefault();
        props?.onClick?.();
      }}
    />
  );
}
