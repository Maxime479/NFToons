
import React from "react";
import Web3 from "web3";
import { ethers } from "ethers";
import ABI from "../../ABI.json";


export default async function buyNft(metadata, setTransactionSuccess, setFailureMsg) {

    try {
        const {price, id } = metadata;
        const contractAddress = "0x223e8E71955cB799C195E840577c8D552BBad57A";

        let validation = 0;

        const web3 = new Web3(Web3.givenProvider);
        const accounts = await web3.eth.requestAccounts();

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = await provider.getSigner();
        const erc20 = new ethers.Contract(contractAddress, ABI, signer);
        const gasPrice = await web3.eth.getGasPrice()

        erc20.nftvendu(id).then((result) => {
            if (result === true) {
                validation = false;
                setFailureMsg("Ce NFT est déjà vendu")
                setTransactionSuccess(false)//Vérification si le nft est déjà vendu

            } else {
                console.log("NFT pas encore vendu")

                let priceInWei = Web3.utils.toWei(price.toString(), "ether")
                priceInWei = "0"

                erc20.transferNFT(id, priceInWei).then((result) => { //Difficulté pour envoyer de l'argent (price) (overflow/underflow/transfer amount exceeds balance)
                    console.log("result");
                    console.log(result);
                    console.log("result");
                    result.wait().then((valide) => {
                        console.log(valide);
                        if (valide.confirmations === 1) {
                            setTransactionSuccess(true)              //Verification de la transaction
                        } else {
                            setFailureMsg("La transaction a échoué")
                            setTransactionSuccess(false)
                        }

                    })
                }).catch((e) => {
                    console.log(e);
                })

            }

        })

    }
    catch (e) {
        console.log(e);
    }

}

