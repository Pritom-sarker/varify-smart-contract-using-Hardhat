
require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {

    cronos: {
      url: 'https://node.croswap.com/rpc',
      accounts: ['667af5ed6a26fcfcb2ee40835308a72e866bd0743690a14840b73272213177e3'],
    },

    mumbai: {
      url: 'https://matic-mumbai.chainstacklabs.com',
      accounts: ['02e92ea268c29d20f29b4b7398a54dc389d6fd6ce4415ce67a0fe7c0d79b1a26'],
    },
    BSCTestnet:{
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
      accounts: ['02e92ea268c29d20f29b4b7398a54dc389d6fd6ce4415ce67a0fe7c0d79b1a26'],

    }

  },
  
  etherscan: {
    apiKey: {
      cronos: "9Y7CWS1C42UTB7H2YWG1624TNM717TZEN2",
      BSCTestnet: "4AMT3MF7ZUD8A8476UE79IGQINDNY24NDP"
    },
    customChains: [
      {
        network: "cronos",
        chainId: 25,
        urls: {
          apiURL: "https://api.cronoscan.com/api",
          browserURL: "https://cronoscan.com/"
        }
      },
      {
        network: "BSCTestnet",
        chainId: 97,
        urls: {
          apiURL: "https://api-testnet.bscscan.com/api",
          browserURL: "https://testnet.bscscan.com/"
        }
      }
    ]
  },

  
};
