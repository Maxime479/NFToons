
import React from "react";
import lion_logo from "../../assets/lazy_lion_base.png";
import connectWallet from "../functions/connectWallet";
import '../../css/components/Header.css';
import { Link } from "react-router-dom";
import Web3 from "web3";


export default function Header() {


    return (
        <header className="Home-header">

            <div className="header_left">
                <img src={lion_logo} alt="lion logo" className="header_image" />


                <p className="header_title">
                    <Link to="/home">
                        NF<span>Toons</span>
                    </Link>

                </p>

            </div>

            <button
                onClick={() => connectWallet()}
                className="connect_wallet_btn"
                id="bouton de connexion"
            >
                Connecter le Wallet
            </button>
        </header>
    );
}

