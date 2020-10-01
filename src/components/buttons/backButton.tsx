import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import CSS from "csstype";

interface ILoveButtonProps {
  customStyles?: CSS.Properties;
  onClick?: () => void;
}

export default function LoveButton(props: ILoveButtonProps) {
  return (
    <FontAwesomeIcon
      icon={faArrowLeft}
      style={props?.customStyles}
      onClick={(e) => {
        e.preventDefault();
        props?.onClick();
      }}
    />
  );
}
