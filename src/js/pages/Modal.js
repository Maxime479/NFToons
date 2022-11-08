import React from "react";

import { useParams } from "react-router-dom";
import { nft_data } from "../../assets/data/data.js";

import "../../css/pages/Modal.css";

import Header from "../components/Header";
import buyNft from "../functions/buyNft";
import lion_logo from "../../assets/lazy_lion.png";

export default function Modal({ setShowModal }) {
    const { id } = useParams();

    const targetNft = nft_data.find((item) => item.id === id);

    return (
        <div className="modal__wrapper">
            <div className="modal">
                
                <div>
                    <input type="Number"/>
                </div>
                   
                <button className="buy_btn" onClick={()=>setShowModal(false)}> Close </button>
            </div>
        </div>
    );
};
