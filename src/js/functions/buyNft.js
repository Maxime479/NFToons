
import React, { useState } from "react";
import Web3 from "web3";
import { ethers } from "ethers";
import ABI from "../../ABI.json";


export default async function buyNft(gasFee, metadata) {

    try {
        const { title, imgUrl, price, id } = metadata;
        const contractAddress = "0x304EB9444f0de898a59a9231Ee5396FC5bf84396";
        const creatoradress = "0x51B453BCdDEE5d5A0C964AE946161175ec0E2EA2";

        let validation = 0;

        const web3 = new Web3(Web3.givenProvider);
        const accounts = await web3.eth.requestAccounts();

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = await provider.getSigner();
        const erc20 = new ethers.Contract(contractAddress, ABI, signer);
        const gasPrice = await web3.eth.getGasPrice();
        console.log(gasPrice)
        erc20.nftvendu(id).then((result) => {
            console.log(result)
            if (result === true) {
                validation = false;                         //Vérification si le nft est déjà vendu
                document.getElementById(id).innerHTML = "Déja vendu !";
            } else {
                erc20.transferNFT(id, Web3.utils.toWei(String(0, "ethers"))).then((result) => { //Difficulté pour envoyer de l'argent (price) (overflow/underflow/transfer amount exceeds balance)
                    console.log(result);
                    result.wait().then((valide) => {
                        console.log(valide);
                        if (valide.confirmations === 1) {
                            validation = true;                  //Verification de la transaction
                        } else {
                            validation = false;
                        }
                        console.log(validation);
                    })
                }).catch((e) => {
                    console.log(e);
                })
                console.log(Web3.utils.toWei(String(0.013, "ethers")));
                document.getElementById(id).innerHTML = "NFT " + title + " (" + id + ") acheté !";

            }

        })

        console.log(erc20);

    }
    catch (e) {
        console.log(e);
    }

}

