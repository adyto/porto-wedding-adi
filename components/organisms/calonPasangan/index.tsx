import React from "react";
import { FiInstagram } from "react-icons/fi";
import foto1 from "../../../public/img/AYXE0057.jpg";
import foto2 from "../../../public/img/MempelaiPria.jpg";
import Image from "next/image";

export default function CalonPasangan() {
  return (
    <div className="container calon">
      <div className="row mt-5">
        <div className="col">
          <div className="d-flex justify-content-end">
            <Image
              src={foto2}
              className="img-fluid"
              width={200}
              max-width={"400px"}
              height={360}
            />
          </div>
        </div>
        <div className="col">
          <div className="d-flex justify-content-start">
            <h5>Adi Hidayatuloh, S.Pd.</h5>
          </div>
          <div className="d-flex justify-content-start">
            <h5>Didi Mulyadi dan Yayah Adiah</h5>
          </div>
          <div className="d-flex justify-content-start">
            <div className="footer__socials">
              <a
                href="https://www.instagram.com/adihidayatuloh/"
                className="sosmed"
              >
                <FiInstagram />
              </a>
              {/* <a href="https://www.facebook.com/iaz.zaen/" className='sosmed'><FaFacebookF/></a>                */}
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <div className="d-flex justify-content-end">
            <Image
              src={foto1}
              className="img-fluid"
              width={200}
              max-width={"400px"}
              height={360}
            />
          </div>
        </div>
        <div className="col">
          <div className="d-flex justify-content-start">
            <h5>Dewi Astri, S.E.</h5>
          </div>
          <div className="d-flex justify-content-start">
            <h5>Iwa Kartiwa dan Tuti Tohati</h5>
          </div>
          <div className="d-flex justify-content-start">
            <div className="footer__socials">
              <a
                href="https://www.instagram.com/dedew_astri/"
                className="sosmed"
              >
                <FiInstagram />
              </a>
              {/* <a href="https://www.facebook.com/iaz.zaen/" className='sosmed'><FaFacebookF/></a>                */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
