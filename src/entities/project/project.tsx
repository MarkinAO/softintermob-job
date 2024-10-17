import style from "./project.module.scss";
import type { Project as TProject } from "@shared/index";
import { Popup } from "@shared/index";
import { useStore } from "@shared/index";

interface IProject {
  props: TProject;
}

export const Project = (props: IProject) => {
  const { title, image, description, video } = props.props;
  const togglePopup = useStore((state) => state.toggleProjectPopup);
  return (
    <Popup position="fixed" onClick={togglePopup}>
      <div className={style.row}>
        <img className={style.image} src={image} alt="" />
        <div>
          <div className={style.title}>{title}</div>
          <div className={style.description}>{description}</div>
        </div>
      </div>
      <div className={style.row}>
        <iframe
          className={style.video}
          src={video}
          frameBorder="0"
          allow="clipboard-write; autoplay"
        ></iframe>
      </div>
    </Popup>
  );
};
