// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TimeCapsuleNFT is ERC721, Ownable {
    uint256 public nextTokenId;
    mapping(uint256 => uint256) public unlockTime;
    mapping(uint256 => uint256) public unlockPrice;

    address payable public receiver;

    constructor(address payable _receiver) ERC721("TimeCapsuleNFT", "TCNFT") Ownable(msg.sender) {
        receiver = _receiver;
    }

    function mint(address to, uint256 lockDuration, uint256 price) public payable {
        require(msg.value == 0.01 ether,"Brokie");
        uint256 tokenId = nextTokenId;
        nextTokenId++;

        _safeMint(to, tokenId);

        unlockTime[tokenId] = block.timestamp + lockDuration;
        unlockPrice[tokenId] = price;
    }

    function unlock(uint256 tokenId) public payable {
        require(block.timestamp >= unlockTime[tokenId], "NFT is still time-locked");
        require(ownerOf(tokenId) == msg.sender, "Not the owner of this NFT");
        require(msg.value >= unlockPrice[tokenId], "Insufficient funds to unlock");

        (bool success, ) = receiver.call{value: msg.value}("");
        require(success, "Payment transfer failed");

        unlockTime[tokenId] = 0;
    }

    function setReceiver(address payable newReceiver) public onlyOwner {
        receiver = newReceiver;
    }

    function getUnlockDetails(uint256 tokenId) public view returns (uint256, uint256) {
        return (unlockTime[tokenId], unlockPrice[tokenId]);
    }
}