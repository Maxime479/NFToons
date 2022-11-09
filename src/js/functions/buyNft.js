
import React, { useState } from "react";
import Web3 from "web3";
import { ethers } from "ethers";
import ABI from "../../ABI.json";


export default async function buyNft(gasFee, metadata) {

    try {
        const { title, imgUrl, price, id } = metadata;
        const contractAddress = "0x6801D3C3B8583365e95160eCFe80F64dC4Be3b41";
        const creatoradress = "0x51B453BCdDEE5d5A0C964AE946161175ec0E2EA2";

        const web3 = new Web3(Web3.givenProvider);
        const accounts = await web3.eth.requestAccounts();

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = await provider.getSigner();
        const erc271 = new ethers.Contract(contractAddress, ABI, signer);
        if(erc271.nftvendu[id] == false) {
            erc271.safeMint(id);
            document.getElementById(id).innerHTML = "NFT "+ title +" ("+ id + ") acheté !";
        } else {
            document.getElementById(id).innerHTML = "Déja vendu !";
        }

        console.log(erc271);
        
    }
    catch (e) {
        console.log(e);
    }
    
}

