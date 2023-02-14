module.exports = {
    solidity: "0.8.0",
    defaultNetwork: "goerli",
    networks: {
        goerli: {
            url: process.env.QUICKNODE_HTTP_URL,
            accounts: [process.env.PRIVATE_KEY],
        },
    },
};