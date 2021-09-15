const Token = artifacts.require("Token");
const EthSwap = artifacts.require("EthSwap");


module.exports = function (deployer) {

    //Deploy Token
    deployer.deploy(Token);
    
    //deploy EthSwap
  deployer.deploy(EthSwap);
};

