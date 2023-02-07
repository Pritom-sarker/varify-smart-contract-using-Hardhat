// scripts/deploy_upgradeable_box.js
const { ethers, upgrades } = require("hardhat");

async function main() {
    const NFT = await ethers.getContractFactory("mintingPassNFT");
    console.log("Deploying NFT Contract...");
    const NFT1155 = await NFT.deploy("https://gateway.pinata.cloud/ipfs/Qmd4GtL7JFfPveynRq9wo8krN5iBkit7zPc4esL3XBwP9m?_gl=1*1s1kitb*_ga*MjQxMDc2MTQyLjE2NjMwMTk4ODY.*_ga_5RMPXG14TE*MTY3NTgwNTc4MS43LjEuMTY3NTgwNTc5MS41MC4wLjA");
    await NFT1155.deployed();
    console.log("NFT deployed to:", NFT1155.address);
}

main();