const { ethers } = require("hardhat");

var kingAddress = "0x2A7D74c4a3B539C76107BDAAe450955E4e3d1ea6";

async function main(){
  console.log("Deploying Attack contract...");
  const Attack = await ethers.getContractFactory("Attack");
  const attack = await Attack.deploy(Attack,[kingAddress]);
  await attack.deployed();
  console.log("Attack contract deployed at : ",attack.address);
}

main();