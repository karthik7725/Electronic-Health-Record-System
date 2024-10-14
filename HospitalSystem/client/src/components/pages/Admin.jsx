import React from "react";
import "./../../index.css";
import { Button } from "../ui/button";
import DoctorInfo from "../ui/DoctorInfo";
import { useState } from "react";
import AddDoctor from "../ui/AddDoctor";
import AppointmentInfo from "../ui/AppointmentInfo";
function Admin() {
  const [viewDoctor, setViewDoctor] = useState(false);
  const [addDoctor, setAddDoctor] = useState(false);
  const [dashboardClick, setDashboardClick] = useState(false);
  const [doctorsClick, setDoctorsClick] = useState(false);
  const [appointmentsClick, setAppointmentsClick] = useState(false);

  return (
    <div className="flex h-screen">
      <div
        className=" w-[300px] border-r-4 border-slate-700 flex flex-col items-center gap-9"
        style={{
          width:
            !dashboardClick && !doctorsClick && !appointmentsClick
              ? "380px"
              : "300px",
        }}
      >
        <span className="text-4xl mt-4 border-b border-slate-700">
          Management
        </span>
        <div className="navbar_for_homepage grid gap-12">
          <Button
            className="text-3xl h-[100px] hover:bg-gray-800 p-7 duration-500 ease-in-out border-slate-700 rounded-2xl"
            onClick={() => {
              setDashboardClick((prev) => !prev);
              setDoctorsClick(false);
              setAppointmentsClick(false);
            }}
          >
            Dashboard
          </Button>
          <Button
            className="text-3xl h-[100px] hover:bg-gray-800 p-7 duration-500 border-slate-700 rounded-2xl"
            onClick={() => {
              setDoctorsClick((prev) => !prev);
              setDashboardClick(false);
              setAppointmentsClick(false);
              setViewDoctor(true);
            }}
          >
            Doctors
          </Button>
          <Button
            className="text-3xl h-[100px] hover:bg-gray-800 p-7 duration-500 border-slate-700 rounded-2xl"
            onClick={() => {
              setAppointmentsClick((prev) => !prev);
              setDashboardClick(false);
              setDoctorsClick(false);
            }}
          >
            Appointments
          </Button>
        </div>
      </div>
      {/* dashboard clicking div starts here */}
      {dashboardClick && (
        <div className=" m-12 flex flex-col justify-center border border-white w-[1400px] items-center">
          <div className="main_circle_rectangular w-[1200px] flex justify-center gap-9 text-6xl font-semibold border-4 rounded-3xl p-28 whitespace-nowrap">
            <div className="flex flex-col items-center gap-12 font-semibold">
              <div className="total_patients p-5 border rounded-xl ">
                {" "}
                Total Patients :{" "}
              </div>
              <div className="active_patients p-5 border rounded-xl">
                Active Patients :
              </div>
            </div>
            <div className="flex flex-col items-center gap-12">
              <div className="total_doctors p-5 border rounded-xl">
                {" "}
                Total Doctors :
              </div>
              <div className="active_doctors p-5 border rounded-xl">
                {" "}
                Active Doctors :
              </div>
            </div>
          </div>
        </div>
      )}
      {/* dashboard clicking div ends here */}
      {/* doctors clicking div starts here */}
      {doctorsClick && (
        <div className=" m-12 flex flex-col border border-white">
          <div className="flex border border-red-500">
            <div className="navbar_for_homepage justify-stretch grid grid-flow-col gap-20">
              <Button
                className="text-3xl hover:bg-gray-800 p-7 duration-500 ease-in-out border-slate-700 rounded-2xl"
                onClick={() => {
                  setViewDoctor((prev) => !prev);
                  setAddDoctor(false);
                }}
              >
                {" "}
                View Doctor{" "}
              </Button>
              <Button
                className="text-3xl hover:bg-gray-800 p-7 duration-500 border-slate-700 rounded-2xl"
                onClick={() => {
                  setAddDoctor((prev) => !prev);
                  setViewDoctor(false);
                }}
              >
                {" "}
                Add Doctor{" "}
              </Button>
            </div>
          </div>

          {viewDoctor && (
            <div
              className="view_doctors_will_come_here mt-10 border border-green-500 h-screen"
              style={{
                visibility: viewDoctor ? "visible" : "hidden",
                opacity: viewDoctor ? 1 : 0,
              }}
              disabled={addDoctor}
            >
              <DoctorInfo />
              <DoctorInfo />
            </div>
          )}
          {addDoctor && (
            <div
              className="add_doctors_will_come_here mt-10  border border-green-500 h-screen"
              style={{
                visibility: addDoctor ? "visible" : "hidden",
                opacity: addDoctor ? 1 : 0,
              }}
              disabled={addDoctor}
            >
              <AddDoctor />
            </div>
          )}
        </div>
      )}
      {/* doctors clicking div ends here */}
      {/* appointments clicking div starts here */}
      {appointmentsClick && (
        <div className=" m-12 flex flex-col border border-white">
          <div className="appointments_will_come_here mt-10 border flex flex-col border-green-500 h-screen">
            <span className="text-6xl font-bold ml-3"> Appointments </span>
            <AppointmentInfo />
          </div>
        </div>
      )}
      {/* appointments clicking div ends here */}
      {/* div to be displayed if none selected starts here*/}
      {!dashboardClick && !doctorsClick && !appointmentsClick && (
        <>
          <div className=" m-12 flex flex-col justify-center border border-white whitespace-nowrap w-full text-center">
            {" "}
            {/* need to find justify-center and items-center */}
            <span className="text-9xl font-semibold italic">
              {" "}
              Welcome back <span className="text-yellow-300"> admin! </span>
            </span>
          </div>
        </>
      )}
      {/* div to be displayed if none selected ends here*/}
    </div>
  );
}

export default Admin;
