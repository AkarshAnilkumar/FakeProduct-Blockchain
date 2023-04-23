// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Verification {

    event ProductCreated(uint256 indexed productID, address indexed manufacturer, bytes32 productDetailsCID);
    event ProductReceived(uint256 indexed productID, address indexed temporaryBuyerAddress);


    function declareProduct(uint256 productID, bytes32 productDetailsCID) public {
        emit ProductCreated(productID, msg.sender, productDetailsCID);
    }
    
    function claimProduct(uint256 productID) public {
        emit ProductReceived(productID, msg.sender)
    }
}
