// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract Hospital {
    struct Doctor {
        string firstname;
        string lastname;
        string dateofjoin;
        string email;
        address user;
        string speciality;
        string img_url;
    }

    struct Patient {
        string firstname;
        string lastname;
        string mobile;
        address user;
        string city;
        string state;
    }

    struct Insurance {
        address patient;
        string bank_name;
        uint bank_account_no;
        uint policy_no;
        string duration;
        string dependent_name;
        uint dependent_number;
    }

    struct Consult {
        address doctor;
        address patient;
        string prescription;
        string medicine;
        uint dosage;
        uint noofdays;
        string clinicaltest;
        string followup;
        string medicalfile_image_pinata_url;
    }

    struct Appointment {
        uint appointment_id; //Appointment ID
        address user; //Patient address
        address doctor; //Doctor address
        string date; //Appointment date
        string time; //Appointment time
        bool status; //Appointment status
    }

    struct AvailableDoctor {
        address user;
        bool available;
    }

    struct AppointmentLink {
        address patient;
        address doctor;
    }

    mapping(address => Insurance) public insurancelist;
    address[] public insuranceAccessArray;

    mapping(address => Consult) public consultlist;

    //ok
    mapping(address => Doctor) public doctorlist; //ok
    AvailableDoctor[] public availabledoctors; //ok

    mapping(address => Patient) public patientlist;
    address[] public patientAccessArray;

    //ok
    mapping(address => Appointment[]) public appointmentList;
    address[] public appointmentAccessArray;
    mapping(address => mapping(address => bool)) public appointmentLinkChecker; //patient to doctor mapping
    //ok

    mapping(address => mapping(string => bool)) ownership; //working on ownership of patient,doctor and admin                     //ok

    constructor() {
        ownership[msg.sender]["admin"] = true;
    }

    function addDoctor(
        address doc_address,
        string memory firstname,
        string memory lastname,
        string memory dateofjoin,
        string memory email,
        string memory speciality,
        string memory img_url
    ) public {
        doctorlist[doc_address] = Doctor(
            firstname,
            lastname,
            dateofjoin,
            email,
            doc_address,
            speciality,
            img_url
        );
        availabledoctors.push(AvailableDoctor(doc_address, true));
        ownership[doc_address]["doctor"] = true;
    }

    function getDoctorCount() public view returns (uint) {
        return availabledoctors.length;
    }

    function getActiveDoctorCount() public view returns (uint) {
        uint temp = 0;
        for (uint i = 0; i < availabledoctors.length; i++) {
            if (availabledoctors[i].available == true) {
                temp++;
            }
        }
        return temp;
    }

    function getPatientCount() public view returns (uint) {
        return patientAccessArray.length;
    }

    function getActivePatientCount() public view returns (uint) {
        uint temp = 0;
        for (uint i = 0; i < patientAccessArray.length; i++) {
            for (
                uint j = 0;
                j < appointmentList[patientAccessArray[i]].length;
                j++
            ) {
                if (appointmentList[patientAccessArray[i]][j].status == true) {
                    temp++;
                }
            }
        }
        return temp;
    }

    function viewDoctors() public view returns (Doctor[] memory) {
        Doctor[] memory temp = new Doctor[](availabledoctors.length); // Create a fixed-size array
        for (uint i = 0; i < availabledoctors.length; i++) {
            temp[i] = doctorlist[availabledoctors[i].user]; // Assign values directly to the array
        }
        return temp;
    }

    function checkDoctor() public view returns (bool) {
        require(
            ownership[msg.sender]["doctor"] == true,
            "You are not a doctor"
        ); //can be caught inside error and alerted
        return true;
    }

    function checkPatient() public view returns (bool) {
        require(
            ownership[msg.sender]["patient"] == true,
            "You are not a patient"
        ); //can be caught inside error and alerted
        return true;
    }
    // function checkInsurer() public view returns (bool) {       //removing this as Insurance page can be opened by anyone
    //     require(
    //         ownership[msg.sender]["insurer"] == true,
    //         "You are not a insurer"
    //     ); //can be caught inside error and alerted
    //     return true;
    // }
    function checkAdmin() public view returns (bool) {
        require(ownership[msg.sender]["admin"] == true, "You are not a admin"); //can be caught inside error and alerted
        return true;
    }

    //patient page functions

    function addPatient(
        address patient_address,
        string memory firstname,
        string memory lastname,
        string memory mobile,
        string memory city,
        string memory state
    ) public {
        patientlist[patient_address] = Patient(
            firstname,
            lastname,
            mobile,
            patient_address,
            city,
            state
        );
        patientAccessArray.push(patient_address);
        ownership[patient_address]["patient"] = true;
    }

    //appointment page functions
    function checkAppointment() public view returns (bool) {
        require(
            ownership[msg.sender]["patient"] == true,
            "You are not a patient"
        );
        return true;
    }

    // mapping(address => Appointment[]) public appointmentlist;
    // address[] public appointmentAccessArray;
    // mapping(address => mapping(address => bool)) public appointmentLinkChecker;
    //
    //
    //     struct Appointment {
    //     uint appointment_id; //Appointment ID
    //     address user; //Patient address
    //     address doctor; //Doctor address
    //     string date; //Appointment date
    //     string time; //Appointment time
    //     bool status; //Appointment status
    // }

    function bookAppointment(
        uint appointment_id,
        address doc_address,
        string memory date,
        string memory time
    ) public {
        require(
            ownership[msg.sender]["patient"] == true,
            "You are not a patient"
        );
        appointmentList[msg.sender].push(
            Appointment(
                appointment_id,
                msg.sender,
                doc_address,
                date,
                time,
                true
            )
        );
        appointmentAccessArray.push(msg.sender);
        appointmentLinkChecker[msg.sender][doc_address] = true;
    }
    function getAppointmentForPatient()
        public
        view
        returns (Appointment[] memory)
    {
        return appointmentList[msg.sender];
    }

    function getAppointmentForAdmin()
        public
        view
        returns (Appointment[] memory)
    {
        uint totalAppointments = 0;
        for (uint i = 0; i < appointmentAccessArray.length; i++) {
            totalAppointments += appointmentList[appointmentAccessArray[i]]
                .length;
        }

        Appointment[] memory temp = new Appointment[](totalAppointments);
        uint index = 0;
        for (uint i = 0; i < appointmentAccessArray.length; i++) {
            for (
                uint j = 0;
                j < appointmentList[appointmentAccessArray[i]].length;
                j++
            ) {
                temp[index] = appointmentList[appointmentAccessArray[i]][j];
                index++;
            }
        }
        return temp;
    }

    function getAppointmentForDoctor()
        public
        view
        returns (Appointment[] memory)
    {
        require(
            ownership[msg.sender]["doctor"] == true,
            "You are not a doctor"
        );

        uint count = 0;
        Appointment[] memory temp = new Appointment[](5); //max 5 appointments for a doctor
        for (uint i = 0; i < appointmentAccessArray.length; i++) {
            if (appointmentLinkChecker[appointmentAccessArray[i]][msg.sender]) {
                for (
                    uint j = 0;
                    j < appointmentList[appointmentAccessArray[i]].length;
                    j++
                ) {
                    if (
                        appointmentList[appointmentAccessArray[i]][j].doctor ==
                        msg.sender
                    ) {
                        temp[count] = appointmentList[
                            appointmentAccessArray[i]
                        ][j];
                        count++;
                    }
                }
            }
        }
        // Create a new array of the exact size to return
        Appointment[] memory result = new Appointment[](count);
        for (uint i = 0; i < count; i++) {
            result[i] = temp[i];
        }

        return result;
    }

    //DOCTOR'S PAGE CONSULTATION CLICKING FUNCTION
    //CLICK ON THE CONSULT BUTTON TO VIEW THE CONSULTATION DETAILS

    // struct Consult {
    //         address doctor;
    //         address patient;
    //         string prescription;
    //         string medicine;
    //         uint dosage;
    //         uint noofdays;
    //         string clinicaltest;
    //         string followup;
    //         string medicalfile_image_pinata_url;
    //     }

    // mapping(address => Consult) public consultlist;   //here address is of patient

    function consultPatient(
        address patient,
        string memory prescription,
        string memory medicine,
        uint dosage,
        uint noofdays,
        string memory clinicaltest,
        string memory followup,
        string memory medicalfile_image_pinata_url
    ) public {
        consultlist[patient] = Consult(
            msg.sender,
            patient,
            prescription,
            medicine,
            dosage,
            noofdays,
            clinicaltest,
            followup,
            medicalfile_image_pinata_url
        );

        for (uint i = 0; i < appointmentList[patient].length; i++) {
            if (appointmentList[patient][i].doctor == msg.sender) {
                appointmentList[patient][i].status = false;
            }
        }
    }

    // FETCH CONSULT DETAILS FOR PATIENT

    function getConsultDetails(
        uint appid
    ) public view returns (Consult memory) {
        //FETCH CONSULT DETAILS FOR PATIENT
        for (uint i = 0; i < appointmentList[msg.sender].length; i++) {
            if (appointmentList[msg.sender][i].appointment_id == appid) {
                if (appointmentList[msg.sender][i].status == false) {
                    return consultlist[msg.sender];
                } else {
                    revert("Doctor has not consulted yet");
                }
            }
        }
        revert("No such appointment found");
    }

    //DOCTOR'S PAGE CHANGING AVAILABILTIY STATUS OF DOCTOR

    function changeAvailabilityOfDoctor() public {
        require(
            ownership[msg.sender]["doctor"] == true,
            "You are not a doctor"
        );
        for (uint i = 0; i < availabledoctors.length; i++) {
            if (availabledoctors[i].user == msg.sender) {
                availabledoctors[i].available = !availabledoctors[i].available;
            }
        }
    }

    //DOCTORS'S PAGE GETTING HIS PERSONAL INFO

    function getDoctorInfo() public view returns (Doctor memory) {
        return doctorlist[msg.sender];
    }

    //PATIENTS'S PAGE ADDING OF INSURANCE

    //     struct Insurance {
    //     address patient;
    //     string bank_name;
    //     uint bank_account_no;
    //     uint policy_no;
    //     string duration;
    //     string dependent_name;
    //     uint dependent_number;
    // }

    //     mapping(address => Insurance) public insurancelist;
    // address[] public insuranceAccessArray;

    function addInsurance(
        string memory bank_name,
        uint bank_account_no,
        uint policy_no,
        string memory duration,
        string memory dependent_name,
        uint dependent_number
    ) public {
        require(
            ownership[msg.sender]["patient"] == true,
            "You are not a patient"
        );
        insurancelist[msg.sender] = Insurance(
            msg.sender,
            bank_name,
            bank_account_no,
            policy_no,
            duration,
            dependent_name,
            dependent_number
        );

        insuranceAccessArray.push(msg.sender);
    }

    //INSURANCE PAGE - GET ALL THE INSURANCE DETAILS

    function getInsuranceDetails() public view returns (Insurance[] memory) {
        //Limiting the insurace details to be viewed only by the admin
        require(
            ownership[msg.sender]["doctor"] != true &&
                ownership[msg.sender]["patient"] != true,
            "You are not an admin"
        );
        Insurance[] memory temp = new Insurance[](insuranceAccessArray.length);
        for (uint i = 0; i < insuranceAccessArray.length; i++) {
            temp[i] = insurancelist[insuranceAccessArray[i]];
        }
        return temp;
    }

    //PATIENT'S PAGE GETTING HIS PERSONAL INFO

    function getPatientInfo() public view returns (Patient memory) {
        return patientlist[msg.sender];
    }
}
