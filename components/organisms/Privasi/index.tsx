import React from "react";
import aman from "../../../public/img/keamanan.png";
import Image from "next/image";

export default function Privasi() {
  return (
    <section id="privasi">
      <div className="section w-details-area center-text">
        <div className="container">
          <div className="privasi">
            <h4>
              Acara ini mengikuti protokol kesehatan covid-19. Senantiasa
              kenakan masker dan jaga jarak
            </h4>
            <Image className="kali" src={aman} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
