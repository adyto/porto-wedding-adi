import React, { useState } from "react";
import Img1 from "../../../public/img/foto2.jpg";
import Img2 from "../../../public/img/foto3.jpg";
import Img3 from "../../../public/img/foto4.jpg";
import Img4 from "../../../public/img/foto8.jpg";
import Img6 from "../../../public/img/foto6.jpg";
import Img5 from "../../../public/img/foto7.jpg";

import Image from "next/image";

export default function Gallery() {
  let data = [
    {
      id: 1,
      imgSrc: Img1,
    },
    {
      id: 2,
      imgSrc: Img2,
    },
    {
      id: 3,
      imgSrc: Img3,
    },
    {
      id: 4,
      imgSrc: Img4,
    },
    {
      id: 5,
      imgSrc: Img5,
    },
    {
      id: 6,
      imgSrc: Img6,
    },
  ];
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");
  const getImg = (imgSrc: any) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };
  return (
    <div className="container">
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImg(item.imgSrc)}
            >
              <img src={item.imgSrc.src} style={{ width: "100%" }} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
