import React from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const AppointmentInfo = () => {
  const appointments = [
    {
      id: "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199",
      doctor: "Dr. Smith",
      patient: "John Doe",
      date: "2024-10-15",
      time: "14:30",
      status: "Consulted",
    },
    {
      id: "0x7135f6940E2eb28930eFb4CeF49B2d1F2C9C2288",
      doctor: "Dr. Johnson",
      patient: "Jane Smith",
      date: "2024-10-16",
      time: "10:00",
      status: "Not Consulted",
    },
    {
      id: "0x9247f6940E2eb28930eFb4CeF49B2d1F2C9C3377",
      doctor: "Dr. Brown",
      patient: "Mike Wilson",
      date: "2024-10-17",
      time: "11:15",
      status: "Consulted",
    },
  ];

  return (
    <div className="container mx-auto p-6 bg-black text-white mt-5">
      <Table>
        <TableHeader>
          <TableRow className="text-4xl">
            <TableHead className="text-white">App ID</TableHead>
            <TableHead className="text-white">Doctor</TableHead>
            <TableHead className="text-white">Patient</TableHead>
            <TableHead className="text-white">Date</TableHead>
            <TableHead className="text-white">Time</TableHead>
            <TableHead className="text-white">Status</TableHead>
            <TableHead className="text-white">Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-2xl">
          {appointments.map((appointment) => (
            <TableRow
              key={appointment.id}
              className="border-b border-gray-800 mb-6"
            >
              <TableCell className="font-medium break-all">
                {appointment.id}
              </TableCell>
              <TableCell>{appointment.doctor}</TableCell>
              <TableCell>{appointment.patient}</TableCell>
              <TableCell>{appointment.date}</TableCell>
              <TableCell>{appointment.time}</TableCell>
              <TableCell>
                <span
                  className={`px-2 py-1 rounded-full text-xl font-semibold ${
                    appointment.status === "Consulted"
                      ? "bg-green-900 text-green-200"
                      : "bg-red-900 text-red-200"
                  }`}
                >
                  {appointment.status}
                </span>
              </TableCell>
              <TableCell>
                <Button
                  variant="outline"
                  disabled={appointment.status !== "Consulted"}
                  className={`${
                    appointment.status === "Consulted"
                      ? "bg-black rounded-xl text-blue-200 hover:text-yellow-400"
                      : "bg-gray-800 text-gray-500 cursor-not-allowed"
                  } text-2xl`}
                >
                  Get Details
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppointmentInfo;
