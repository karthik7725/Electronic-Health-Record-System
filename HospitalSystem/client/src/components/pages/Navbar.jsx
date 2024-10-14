import React from "react";
import "./../../index.css";
import { Button } from "./../ui/button";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="border-b border-b-slate-400 h-[50px] flex items-center justify-between">
      <Button
        className="text-2xl ml-1 text-gray-500 hover:bg-gray-800 rounded-2xl"
        onClick={() => {
          navigate("/");
        }}
      >
        EHR 2.0
      </Button>
      <span className="mr-3 text-xl">Current Metamask Account:</span>
    </div>
  );
}

export default Navbar;
