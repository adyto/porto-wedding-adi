import React from "react";
import Image from "next/image";
import bismillah from "../../../public/img/kaligrafi-bismillah-unik.png";

export default function Invitation() {
  return (
    <section id="invitation">
      <div className="section w-detail-area center-text pt-1">
        <div className="container">
          <div className="about__me-image">
            <Image
              className="kali-graf"
              height={200}
              width={200}
              src={bismillah}
              alt="kaligrafi"
            />
            <h3 className="text-assalamualaikum">
              Assalamu&#39;alaikum Wr. Wb.
            </h3>
            <h5>
              Dengan memohon rahmat Allah S.W.T kami bermaksud menyelenggarakan
              pernikahan putra-putri kami:
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
}
