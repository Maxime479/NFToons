
import React from "react";
import Web3 from "web3";

export default async function connectWallet() {

        var state = {
            web3: null,
            accounts: null,
            ethBalance: null,
            networkId: null
        };

    console.log("wallet connected");
    try {
        const web3 = new Web3(Web3.givenProvider);
        state.web3 = web3;
        const accounts = await web3.eth.requestAccounts();
        console.log(accounts);
        if(accounts.length > 0) {
            state.accounts = accounts;
            state.ethBalance = await web3.eth.getBalance(accounts[0]);
            state.networkId = await web3.eth.net.getId();
        }

    } catch (e) {
        console.log(e);
    }

    document.getElementById("bouton de connexion").innerHTML = "Votre solde est de " + Web3.utils.fromWei(state.ethBalance).slice(0,6) + " GETH";
}

