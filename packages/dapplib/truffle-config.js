require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom arena brave food trap renew sad miss gesture light army gesture'; 
let testAccounts = [
"0x5a4f934a891d8db4b1074a91998af89e6268dfef268389e8a399b1d8805696d1",
"0xec14f4ba6e626e5a40202605c994a9429ac2926e81c64d10ec43c2a5d55a1b7f",
"0x956129b36f597f04d2e11c18398d4bf67568c8e651d96fa9b6d9c520a073dd92",
"0x2803a4f9d566e3c38e514a474e585a2f08b8d379d0a5fa35f79bae4ffae3c468",
"0xc6e6ec9532e19a1ef31e091afc3010d50bb1bb20bc3b66132631010d17755150",
"0x079f6a2c1375ff4523307b63f3aaf672ea82b83c6a549f67a35de39b4169148a",
"0x2d8c22a94d859e1294419449e7d214267551e0ef38bc54ca2831508daf7d75b9",
"0x879d86a5bc5ed7e3f14b839032064470f6f71eabc99fd4d4e3640f0e9ac7ad25",
"0x9bfa6ba2019e3191775b904578c4a08db84c831b010554fa4dbe859742601002",
"0x71bdb23f5bcb4c90b92829705f18ce63c4623df1816badb248aef9e715003eba"
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


