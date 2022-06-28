import React from "react";
import { MdDateRange } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { BsClock } from "react-icons/bs";

export default function WeedingLocation() {
  return (
    <div className="section w-details-area center-text" id="weadingDate">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h3 className="text-akad-nikah ">Akad nikah</h3>
            <div className="row mt-4">
              <div className="col">
                <div className="d-flex justify-content-evenly">
                  <div className="d-flex mb-3">
                    <div className="p-2">
                      <a href="#blank" className="sosmedd">
                        <MdDateRange />
                      </a>
                    </div>
                    <div className="p-2">
                      <h4>Minggu, 3 Juli 2022</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col">
                <div className="d-flex justify-content-evenly">
                  <div className="d-flex mb-3">
                    <div className="p-2">
                      <a href="#blank" className="sosmedd">
                        <BsClock />
                      </a>
                    </div>
                    <div className="p-2">
                      <h4>08.00 WIB s.d 10.00 WIB</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h4 className="text-resepsi-nikah">Resepsi</h4>
            <div className="row mt-4">
              <div className="col">
                <div className="d-flex justify-content-evenly">
                  <div className="d-flex mb-3">
                    <div className="p-2">
                      <a href="#blank" className="sosmed">
                        <BsClock />
                      </a>
                    </div>
                    <div className="p-2">
                      <h4>11.00 WIB s.d Selesai</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col">
                <div className="d-flex justify-content-evenly">
                  <div className="d-flex mb-3">
                    <div className="p-2">
                      <a href="#blank" className="sosmed">
                        <GoLocation />
                      </a>
                    </div>
                    <div className="p-2">
                      <h4>
                        Dusun karang tengah RT003/17 desa Imbanagara kecamatan
                        kabupaten Ciamis
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
