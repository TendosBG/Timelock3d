// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

contract DutchAuction {

    uint public auctionSalesStartTime;

    uint public constant AUCTION_PRICE_START = 1 ether;
    uint public constant AUCTION_PRICE_END = 0.05 ether;
    uint public constant AUCTION_DURATION = 300 seconds;
    uint public constant AUCTION_INTERVAL = 20 seconds;
    uint public constant AUCTION_DROP_PER_STEP = (AUCTION_PRICE_START - AUCTION_PRICE_END ) / (AUCTION_DURATION / AUCTION_INTERVAL);


    constructor (uint _auctionSaleStartTime){
        auctionSalesStartTime = _auctionSaleStartTime;
    }

    function getPrice() public view returns(uint) {
        if(block.timestamp < auctionSalesStartTime) {
            return AUCTION_PRICE_START;

        }
        if(block.timestamp - auctionSalesStartTime >= AUCTION_DURATION) {
            return AUCTION_PRICE_END;
        }
        else {
            uint step = (block.timestamp - auctionSalesStartTime) / AUCTION_INTERVAL;
            return AUCTION_PRICE_START - (step * AUCTION_DROP_PER_STEP);
        }
    }
}