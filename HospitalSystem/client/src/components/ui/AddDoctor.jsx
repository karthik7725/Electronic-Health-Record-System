import { Input } from "@/components/ui/input";
import React from "react";
import { Button } from "./button";
function AddDoctor() {
  return (
    <div className="flex flex-col items-center p-4 w-[1400px]">
      <h1 className="text-6xl font-bold mb-8">Enter Doctor Details</h1>
      <div className="w-[800px] flex flex-col border border-green-300 gap-4">
        {[
          { label: "Doctor-ID:", placeholder: "Enter doctor ID" },
          { label: "First Name:", placeholder: "Enter first name" },
          { label: "Last Name:", placeholder: "Enter last name" },
          { label: "E-mail:", placeholder: "Enter email address" },
          { label: "Speciality:", placeholder: "Enter speciality" },
          { label: "DOJ:", placeholder: "Enter date of joining" },
        ].map((field, index) => (
          <div key={index} className="flex items-center  p-3 rounded-md">
            <span className="text-3xl font-semibold whitespace-nowrap w-[250px]">
              {field.label}
            </span>
            <Input
              placeholder={field.placeholder}
              className="flex-grow placeholder:text-xl placeholder:text-slate-400 rounded-xl h-12"
            />
          </div>
        ))}
        <div className="flex justify-center items-center gap-3">
          <Button className="text-xl hover:bg-gray-800 p-5 duration-500 ease-in-out rounded-2xl border border-slate-700">
            {" "}
            Choose Image
          </Button>
          <span className="selected-image text-xl tracking-tighter">
            {" "}
            this is the selected image
          </span>
          <Button className="text-xl hover:bg-gray-800 p-5 duration-500 ease-in-out rounded-2xl border border-slate-700">
            {" "}
            Upload Image{" "}
          </Button>
        </div>
        <Button className="text-3xl hover:bg-stone-700 p-7 duration-500 ease-in-out rounded-2xl border border-slate-700">
          {" "}
          Submit Doctor Details{" "}
        </Button>
      </div>
    </div>
  );
}

export default AddDoctor;
