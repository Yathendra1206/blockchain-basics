/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle")

const ALCHEMY_API_KEY = "FpWssxsn1LbbDGSLVpUBCTDk6_HA_hFE";
const ROPSTEN_PRIVATE_KEY = "42a9ca6eecef96171cc27871c06404bce3baead22babfb3d7c74e537e63e3f2e";

module.exports = {
  solidity: "0.8.9",

  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${ROPSTEN_PRIVATE_KEY}`]
    }
  }

};
