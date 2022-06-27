import React from "react";
import Image from "next/image";
import bri from "../../../public/img/bri.png";
import gopay from "../../../public/img/gopay.jpeg";
import dana from "../../../public/img/dana.jpeg";

export default function Amplop() {
  return (
    <section>
      <div className="section w-details-area center-text">
        <div className="container">
          <div className="card">
            <div className="card-body">
              <h1 className="text-amplop text-white mb-4">Amplop</h1>
              <h4>
                Jika Bapak/Ibu/Saudara/i ingin mengirimkan hadiah pernikahan
                kepada mempelai pengantin, silahkan mengirimkannya ke :
              </h4>
              <div className="row mt-5">
                <div className="col">
                  <div className="d-flex justify-content-center">
                    <Image
                      src={gopay}
                      className="img-fluidd"
                      width={250}
                      height={250}
                      layout="intrinsic"
                    />
                  </div>
                  <div className="d-flex justify-content-center">
                    <h4>Gopay</h4>
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex justify-content-center">
                    <Image
                      src={bri}
                      className="img-fluidd"
                      width={250}
                      height={250}
                      layout="intrinsic"
                    />
                  </div>
                  <div className="d-flex justify-content-center">
                    <h4>Nama : Adi</h4>
                  </div>
                  <div className="d-flex justify-content-center">
                    <h4> No Rekening : 404401012253536</h4>
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex justify-content-center">
                    {" "}
                    <Image
                      src={dana}
                      className="img-fluidd"
                      width={250}
                      height={250}
                      layout="intrinsic"
                    />
                  </div>
                  <div className="d-flex justify-content-center">
                    <h4>Dana</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
