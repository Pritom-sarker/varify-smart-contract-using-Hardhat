// // SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";



contract mintingPassNFT is ERC721URIStorage {
    uint256 public tokenCounter;
    address public owner;
    string public tokenURI;

    modifier onlyOwner(){
        require(msg.sender == owner,"Not owner!!");
        _;
    }

    /// @notice constructor function will pass collection name and symbol to the parent contract that we have inherited from openzeppelin
    constructor(string memory _tokenURI) ERC721("Minting Pass NFT", "mintingPassNFT") {
        tokenCounter = 0;
        owner = msg.sender;
        tokenURI = _tokenURI;
    }

    function changeOwner(address newOwner) public onlyOwner {
        owner = newOwner;
    }

    function changeTokenURI(string memory _tokenURI) external onlyOwner {
        tokenURI = _tokenURI;
    }

    /// @notice An aritst can mint their NFT using this function
    function createCollectibleMultiMinter(
        address _minter,
        uint256 _number
    ) public onlyOwner  {

        for (uint256 i=0;i<_number;i++){
        uint256 newTokenId = tokenCounter;
        _safeMint(_minter, newTokenId);
        _setTokenURI(newTokenId, tokenURI);
        tokenCounter+=1;

        }
        
    } 



    /// @notice An aritst can mint their NFT using this function
    function createCollectibleMinter(
        address _minter
    ) public onlyOwner  {
        uint256 newTokenId = tokenCounter;
        _safeMint(_minter, newTokenId);
        _setTokenURI(newTokenId, tokenURI);
        tokenCounter+=1;
    } 
}