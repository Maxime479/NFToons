
import React from "react";
import Web3 from "web3";


export default async function getGas(setGasFee) {

    try {

        const web3 = new Web3(Web3.givenProvider);

        const gasPrice = await web3.eth.getGasPrice().then((result) => {
            const gasFee = Web3.utils.fromWei(result, "micro");
            setGasFee(Number(gasFee))
        })

    }
    catch (e) {
        console.log(e);
    }

}

