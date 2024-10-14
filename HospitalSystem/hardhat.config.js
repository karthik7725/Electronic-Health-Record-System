require("@nomicfoundation/hardhat-toolbox");
module.exports = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      evmVersion: "london",
    },
  },

  networks: {
    hardhat: {
      chainId: 1337,
    },
  },
  paths: {
    artifacts: "./client/src/artifacts",
  },
};
