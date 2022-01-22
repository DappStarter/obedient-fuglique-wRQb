require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt basket flip spot finger deliver remain solid guess globe fox twenty'; 
let testAccounts = [
"0x1abe24e5ea80533cc7e73a3fba0a8122293a03b622452e82edeb368acb44fd94",
"0x33b3b1e37bf59e46b3e946872f4ffe220da0d4f037af260158fe5bc9ad976edd",
"0x364f8adfa0329cef1639d33e61589bfd63ed1b8dcf2701cf92b8153567be4d59",
"0xa0f1b235ced5d4b6fc40385495691433702b4027e97c5da09719fb37448a4813",
"0x09fa04a40bd63bc3870cbd394253ce99527ddea5d2d0a1475776c4b67bce8c02",
"0x128a7ec538b0f16510ec3a8c0eb3fc7a87b7cd87f8ae0a7c27dced1bdba710ad",
"0xb67718fd65059b8f1c4810a0f0b37e25bcd9761581aa99a83c85768d9bb22760",
"0x55dc1916927c3dc1c98b5ee3dbd94970fb9983701f44aed28aa21bb816712905",
"0xa9e8d5c82172a97b533c564e7be5b6cbc6171c461379c253af8a226a3cfd081c",
"0xe5d14bf66416b4d2967c8da28f2fa397b292010cf1306a82efeeadacc5163dad"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


