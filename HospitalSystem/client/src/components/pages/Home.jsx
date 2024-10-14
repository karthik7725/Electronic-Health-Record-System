import React from "react";
import "./../../index.css";
import { Button } from "../ui/button";
import HealthQuotesTicker from "../ui/HealthQuotesTicker";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="main_thing">
        <div className="navbar_for_homepage justify-stretch grid grid-flow-col  gap-2">
          <Button className="text-3xl hover:bg-gray-800 p-7 duration-500 ease-in-out border-slate-700 rounded-2xl">
            {" "}
            Patient{" "}
          </Button>
          <Button className="text-3xl hover:bg-gray-800 p-7 duration-500 border-slate-700 rounded-2xl">
            {" "}
            Doctor{" "}
          </Button>
          <Button
            className="text-3xl hover:bg-gray-800 p-7 duration-500 border-slate-700 rounded-2xl"
            onClick={() => navigate("/admin")}
          >
            {" "}
            Admin
          </Button>
          <Button className="text-3xl hover:bg-gray-800 p-7 duration-500 border-slate-700 rounded-2xl">
            {" "}
            Insurer{" "}
          </Button>
        </div>
        <hr className="border border-slate-700" />
        <div className="flex flex-col justify-start items-center h-full w-full  p-3 gap-8 overflow-hidden ">
          <div className="image_and_mgitlogo text-9xl  font-bold mt-4  flex">
            <div className="">
              <span>Welcome to </span>
              <span
                style={{
                  color: "#FFD700",
                }}
              >
                EHR 2.0 HOSPITAL{" "}
              </span>
            </div>
            <div className="w-[300px]">
              <img src="../../public/MGIT_New_Logo.webp" />
            </div>
          </div>
          <div className="flex">
            <span className="text-5xl text-slate-400 italic">
              Your Health is our utomost priority !
            </span>
          </div>

          <div className=" flex justify-center grow shrink-0 ">
            <HealthQuotesTicker />
          </div>
          <div className=" flex justify-center gap-48">
            <Button
              className="text-3xl hover:bg-gray-800 p-7 duration-500 ease-in-out rounded-2xl border border-slate-700"
              onClick={() => {
                navigate("/register-patient");
              }}
            >
              {" "}
              Register as a Patient{" "}
            </Button>
            <Button
              className="text-3xl hover:bg-gray-800 p-7 duration-500 ease-in-out rounded-2xl border border-slate-700"
              onClick={() => {
                navigate("/make-appointment");
              }}
            >
              {" "}
              Make an Appointment
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
