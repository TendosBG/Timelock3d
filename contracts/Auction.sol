// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

contract NFT{

    uint public auctionSalesStartTime;
    uint public auctionHighestBid;

    uint public constant AUCTION_PRICE_START = 1 ether;
    uint public constant AUCTION_DURATION = 300 seconds;

    constructor (uint _auctionSaleStartTime){
        auctionSalesStartTime = _auctionSaleStartTime;
    }

    function bid(uint amount) public  {
        if (block.timestamp > auctionSalesStartTime && (auctionSalesStartTime + AUCTION_DURATION) > block.timestamp && amount > auctionHighestBid){
            auctionHighestBid = amount ;
        }
    }

    function getPrice() public view returns(uint) {
        return auctionHighestBid ;
    }
}