// scripts/deploy_upgradeable_box.js
const { ethers, upgrades } = require("hardhat");

async function main() {
    const NFT = await ethers.getContractFactory("NFT");
    console.log("Deploying NFT Contract...");
    const NFT1155 = await NFT.deploy();
    await NFT1155.deployed();
    console.log("NFT deployed to:", NFT1155.address);
}

main();