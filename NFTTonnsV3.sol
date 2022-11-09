// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts@4.7.3/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.7.3/access/Ownable.sol";
import "@openzeppelin/contracts@4.7.3/utils/Counters.sol";

contract TP_ECE is ERC20, Ownable {
    using Counters for Counters.Counter;
    bool public Enabled;
    mapping(address => uint256) public mintedwallets;
    mapping(uint256 => bool) public nftvendu;
    address Creator = 0x51B453BCdDEE5d5A0C964AE946161175ec0E2EA2;

    Counters.Counter private _tokenIdCounter;

    constructor() ERC20("TP_ECE", "ECE") {
        _tokenIdCounter.increment();
    }

    function toggleEnabled() external onlyOwner {
        Enabled = !Enabled;
    }


    function transferNFT(uint256 nftminte, uint256 price) external payable {
        
        uint256 tokenId = _tokenIdCounter.current();

        require(Enabled, 'Minting impossible');
        require(nftvendu[nftminte] == false,'Vendu');
        require(nftminte<31 && nftminte>0, 'Token inexistant');

        nftvendu[nftminte]=true;
        mintedwallets[msg.sender]++;
        _tokenIdCounter.increment();
        transfer(Creator, price);

    }

    
}
