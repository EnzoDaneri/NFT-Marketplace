require("@nomiclabs/hardhat-waffle");
const fs = require("fs")
const privateKey= fs.readFileSync(".secret").toString();

const projectId = "8b9bf1f37c0843e5a581aebbc3987233"
module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${projectId}`,
      accounts: [ privateKey]
    },
    mainnet: {
      url :`https://palm-mainnet.infura.io/v3/${projectId}`,
      accounts: [ privateKey]

    }
  },
  solidity: "0.8.4",
};