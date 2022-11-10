import React, {useEffect, useState} from "react";

import "../../css/components/PopIn.css";
import buyNft from "../functions/buyNft";
import getGas from "../functions/getGas";

const PopIn = ({ setShowPopIn, metadata }) => {

    const { title, imgUrl, price, id } = metadata;


    //Gas etimation
    const [gasFee, setGasFee] = useState(0)
    useEffect(() => {
        if(gasFee === 0){
            getGas(setGasFee)
        }
    })

    const [buttonText, setButtonText] = useState("Acheter")
    const [buyLoading, setBuyLoading] = useState(false)

    useEffect(() => {
        if(buyLoading === true){

            setTimeout(() => {
                setButtonText("Achat en cours.");
            }, 1000);
            setTimeout(() => {
                setButtonText("Achat en cours..");
            }, 2000);
            setTimeout(() => {
                setButtonText("Achat en cours...");
            }, 3000);

        }

    })




    //case gestion after buy
    const [showBasePopin, setShowBasePopin] = useState(true);
    const [transactionSuccess, setTransactionSuccess] = useState(null);
    const [failureMsg, setFailureMsg] = useState(null);
    useEffect(() => {
        if(transactionSuccess === true || transactionSuccess === false){
            setTimeout(() => {
                setShowBasePopin(false);
            }, 1000);
        }
    })

    //target user clicks to close the Popin
    const [bgClicked, setBgClicked] = useState(false);
    const [popInClicked, setPopInClicked] = useState(false);
    useEffect(() => {
        if (bgClicked) {
            if (!popInClicked) {
                setBgClicked(false);
                setShowPopIn(false);
            } else {
                setBgClicked(false);
                setPopInClicked(false);
            }
        }
    })

    if(showBasePopin) {
        return (
            <div onClick={() => setBgClicked(true)} className="popin_bg">

                <div onClick={() => setPopInClicked(true)} className="popin_container">


                    <div className="nft_image_container">
                        <img src={imgUrl} alt="" className="nft_img nft_img_preview" />

                    </div>

                    <div className="inner_container">

                        <h5>Acheter un NFT</h5>
                        <a className="info">
                            Vous allez acheter le NFT <span className="nft_title">{title}</span>
                        </a>

                        <div className="divider"></div>



                        <div>
                            <p>Prix du NFT</p>
                            <span className="nft_price">{price} GETH</span>
                        </div>

                        <div>
                            <p>Frais de service</p>
                            <span className="nft_price">{gasFee} GETH</span>
                        </div>

                        <div>
                            <p>Coût total de la transaction</p>
                            <span className="nft_price">
                                {(price + gasFee).toString().slice(0, 9)} GETH</span>
                        </div>


                        <button
                            className="buy_btn last_buy_btn"
                            onClick={() => {
                                buyNft(metadata, setTransactionSuccess, setFailureMsg)
                                setBuyLoading(true)
                            }}
                        >
                            {buttonText}
                        </button>


                    </div>




                </div>

            </div>
        )
    }else if(transactionSuccess === true){
        return (
            <div onClick={() => setBgClicked(true)} className="popin_bg">


                <div onClick={() => setPopInClicked(true)} className="popin_container success_container">


                    <div className="nft_image_container">
                        <img src={imgUrl} alt="" className="nft_img nft_img_preview" />

                    </div>

                    <div className="inner_container success_inner">

                        <h5 className="success">Succès !</h5>
                        <a className="info">
                            Vous avez acheté le NFT <span className="nft_title">{title}</span>
                        </a>


                        <button
                            className="buy_btn last_buy_btn"
                            onClick={() => setShowPopIn(false)}
                        >
                            OK
                        </button>

                    </div>

                </div>

            </div>
        )
    }else if(transactionSuccess === false){
        return (
            <div onClick={() => setBgClicked(true)} className="popin_bg">


                <div onClick={() => setPopInClicked(true)} className="popin_container failure_container">


                    <div className="nft_image_container">
                        <img src={imgUrl} alt="" className="nft_img nft_img_preview" />

                    </div>

                    <div className="inner_container failure_inner">

                        <h5 className="failure">Echec...</h5>
                        <a className="info">
                            {failureMsg}
                        </a>


                        <button
                            className="buy_btn last_buy_btn"
                            onClick={() => setShowPopIn(false)}
                        >
                            OK
                        </button>

                    </div>

                </div>

            </div>
        )
    }else{
        alert("Erreur serveur")
        setShowPopIn(false)
        setShowBasePopin(true)
        setTransactionSuccess(null)
    }


};

export default PopIn;
