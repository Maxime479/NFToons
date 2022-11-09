import React, { useEffect } from "react";

import "../../css/components/PopIn.css";
import buyNft from "../functions/buyNft";

const PopIn = ({ setShowPopIn, metadata }) => {

    const { title, imgUrl, price, id } = metadata;

    const gasFee = 0.01;

    //case gestion after buy
    const [showBasePopin, setShowBasePopin] = React.useState(true);
    const [transactionSuccess, setTransactionSuccess] = React.useState(null);
    useEffect(() => {
        if(transactionSuccess === true || transactionSuccess === false){
            setTimeout(() => {
                setShowBasePopin(false);
            }, 1000);
        }
    })

    //target user clicks to close the Popin
    const [bgClicked, setBgClicked] = React.useState(false);
    const [popInClicked, setPopInClicked] = React.useState(false);
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
                            <span className="nft_price">{price + gasFee} GETH</span>
                        </div>


                        <button
                            className="buy_btn last_buy_btn"
                            // onClick={() => buyNft(gasFee, metadata, setTransactionSuccess)}
                            onClick={() => setTransactionSuccess(true)}
                            // onClick={() => setShowBasePopin(false)}
                            id={id}
                        >
                            Acheter
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
                            La transaction a échoué
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
