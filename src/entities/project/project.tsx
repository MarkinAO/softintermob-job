import style from "./project.module.scss";
import { useStore } from "@shared/index";
import type { Project as TProject } from "@shared/index";

interface IProject {
  props: TProject;
}

export const Project = (props: IProject) => {
  const togglePopup = useStore((state) => state.togglePopup);
  const { title, image, description, video } = props.props;
  return (
    <>
      <div className={style.background}></div>
      <div className={style.wrap}>
        <div className={style.container}>
          <div className={style.box}>
            <span className={style.cross} onClick={() => togglePopup()}></span>
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
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
