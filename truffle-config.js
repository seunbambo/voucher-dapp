const path = require('path');
const fs = require('fs');
const provider = require('@truffle/hdwallet-provider');
const secrets = JSON.parse(fs.readFileSync('.secrets.json').toString().trim());
module.exports = {
  contracts_build_directory: path.join(__dirname, 'frontend/src/contracts'),

  networks: {
    development: {
      host: '127.0.0.1', // Localhost (default: none)
      port: 7545, // Standard Ethereum port (default: none)
      network_id: '*', // Any network (default: none)
    },
    rinkeby: {
      provider: () =>
        new provider(
          secrets.privateKeys,
          'https://rinkeby.infura.io/v3/1cb33653a20f4812b15d3afa5923e613',
          0,
          3
        ),
      network_id: 4,
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: '0.5.2',
    },
  },
};
