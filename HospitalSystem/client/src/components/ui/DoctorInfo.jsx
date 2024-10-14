import React from "react";

function DoctorInfo() {
  return (
    <div className="mt-4 border flex gap-36 font-semibold ">
      <div className="doctor-photo border">
        {" "}
        <div className="w-[150px]">
          <img src="../../public/MGIT_New_Logo.webp" />
        </div>
      </div>
      <div className="doctor-info-1stcol mt-5">
        <div className="flex flex-col justify-center">
          <span className="text-3xl">
            Doctor ID : 0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199
          </span>
          <span className="text-3xl">First Name : Karthik</span>
          <span className="text-3xl">Last Name : T</span>
        </div>
      </div>
      <div className="doctor-info-2ndcol mt-5 mr-24">
        <div className="flex flex-col justify-center">
          <span className="text-3xl">Email: k@gmail.com</span>
          <span className="text-3xl">Speciality : General</span>
          <span className="text-3xl">DOJ : 13/11/2002</span>
        </div>
      </div>
    </div>
  );
}

export default DoctorInfo;
