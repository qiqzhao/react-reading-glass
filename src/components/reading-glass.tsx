import React, { useRef } from "react";
import "./index.css";

interface IProps {
  Img: any;
}

const ReadingGlass = ({ Img }: IProps) => {
  const mainRef = useRef<any>();
  const mirrorRef = useRef<any>();
  const imgRef = useRef<any>();

  const handleMouseMove = (e: any) => {
    let x_left = e.clientX - mainRef.current.offsetLeft;
    let y_top = e.clientY - mainRef.current.offsetTop;

    mirrorRef.current.style.left =
      x_left - mirrorRef.current.offsetWidth / 2 + "px";
    mirrorRef.current.style.top =
      y_top - mirrorRef.current.offsetHeight / 2 + "px";

    let mirrorImgLeft =
      (imgRef.current.offsetWidth / mainRef.current.offsetWidth) * x_left -
      mirrorRef.current.offsetWidth / 2;

    let mirrorImgTop =
      (imgRef.current.offsetHeight / mainRef.current.offsetHeight) * y_top -
      mirrorRef.current.offsetHeight / 2;

    imgRef.current.style.left = -mirrorImgLeft + "px";
    imgRef.current.style.top = -mirrorImgTop + "px";
  };
  return (
    <div ref={mainRef} className="main" onMouseMove={handleMouseMove}>
      <img src={Img} alt="img" className="img" />
      <div ref={mirrorRef} className="mirror">
        <img ref={imgRef} src={Img} alt="img" />
      </div>
    </div>
  );
};

export default ReadingGlass;
