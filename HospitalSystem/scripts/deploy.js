const hre = require("hardhat");

async function main() {
  try {
    const Hospital = await hre.ethers.getContractFactory("Hospital");
    const hospital = await Hospital.deploy();
    await hospital.deployed();
    console.log("Library deployed to:", hospital.address);
  } catch (err) {
    console.error(err); // Use 'err' to log the caught error
    process.exitCode = 1;
  }
}

main();
