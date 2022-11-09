import React, {useState} from "react";

import { useParams } from "react-router-dom";
import {nft_data} from "../../assets/data/data.js";

import "../../css/pages/NftDetails.css";

import Header from "../components/Header";
import lion_logo from "../../assets/lazy_lion.png";
import PopIn from "../components/PopIn";

export default function NftDetails() {
    const { id } = useParams();

    const targetNft = nft_data.find((item) => item.id === id);

    const [showPopIn, setShowPopIn] = useState(false);

    return (
        <div>

            <Header/>

            <section>
                <div className="main_container">
                    <img
                        src={targetNft.imgUrl}
                        alt="nft image"
                        className="targetNft_img"
                    />

                    <div className="infos_container">

                        <h2>{targetNft.title}</h2>


                        <div className="targetNft_creator">
                            <div className="creator_img">
                                <img src={lion_logo} alt="creator logo"/>
                            </div>

                            <div className="targetNft_creator_info">
                                <p>Créé par</p>
                                <h6>{targetNft.creator}</h6>
                            </div>
                        </div>

                        <p className="targetNft_description">{targetNft.description}</p>
                        <button
                            className="targetNft_buy_btn"
                            onClick={() => setShowPopIn(true)}
                        >
                            Acheter
                        </button>

                        {showPopIn && <PopIn setShowPopIn={setShowPopIn} metadata={targetNft} />}

                    </div>
                </div>
            </section>
        </div>
    );
};
