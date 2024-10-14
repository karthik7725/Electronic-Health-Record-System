import React from "react";
import { Input } from "./input";
import { Button } from "./button";

function AddAppointment() {
  return (
    <div className="h-screen w-screen flex justify-center">
      <div className="flex flex-col items-center p-4 w-[1400px]">
        <h1 className="text-6xl font-bold mb-8">Make an Appointment</h1>
        <div className="w-[1000px] flex flex-col border border-green-300 gap-4">
          {[
            { label: "Appointment ID : ", placeholder: "Enter doctor ID" },
            { label: "Doctor ID :", placeholder: "Enter first name" },
            { label: "Date :", placeholder: "Enter last name" },
            { label: "Time :", placeholder: "Enter email address" },
          ].map((field, index) => (
            <div key={index} className="flex items-center  p-3 rounded-md">
              <span className="text-3xl font-semibold whitespace-nowrap w-[400px]">
                {field.label}
              </span>
              <Input
                placeholder={field.placeholder}
                className="flex-grow placeholder:text-xl placeholder:text-slate-400 rounded-xl h-12"
              />
            </div>
          ))}

          <Button className="text-3xl hover:bg-stone-700 p-7 duration-500 ease-in-out rounded-2xl border border-slate-700">
            {" "}
            Book{" "}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AddAppointment;
