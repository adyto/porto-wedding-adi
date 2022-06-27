import React from "react";
import { FiInstagram } from "react-icons/fi";
import Image from "next/image";
import foto1 from "../../../public/img/AYXE0057.jpeg";
import foto2 from "../../../public/img/MempelaiPria.jpeg";

export default function CalonPasangan() {
  return (
    <div className="container calon">
      <div className="row mt-1">
        <div className="col">
          <div className="d-flex justify-content-end">
            <Image src={foto2} className="img-fluid" width={200} height={360} />
          </div>
        </div>
        <div className="col">
          <div className="d-flex justify-content-center">
            <p className="nama-pengantin fw-bold mb-2">
              Adi Hidayatuloh, S.Pd.
            </p>
          </div>
          <div className="d-flex justify-content-start mb-1">
            <p>Didi Mulyadi dan Yayah Adiah</p>
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
            <Image src={foto1} className="img-fluid" width={200} height={360} />
          </div>
        </div>
        <div className="col">
          <div className="d-flex justify-content-center">
            <p className="nama-pengantin fw-bold mb-2">Dewi Astri, S.E.</p>
          </div>
          <div className="d-flex justify-content-start mb-1">
            <p>Iwa Kartiwa dan Tuti Tohati</p>
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
