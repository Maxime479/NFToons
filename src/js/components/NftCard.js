import React, {useState} from "react";
import { Link } from "react-router-dom";

import "../../css/components/NftCard.css";
import lion_logo from '../../assets/lazy_lion.png';
import PopIn from "../PopIn";


const NftCard = (props) => {
    const metadata = props.metadata
    const { id, title, imgUrl, creator, price} = metadata;

    const [showPopIn, setShowPopIn] = useState(false);


    return (
        <div className="nft_card">
            <div className="nft_img_container">
                <img src={imgUrl} alt="" className="nft_img" />
            </div>

            <div className="nft_content">
                <h5 className="nft_title">
                    <Link to={`/home/${id}`}>{title}</Link>
                </h5>

                <div className="creator_info_container">
                    <div className="creator_img">
                        <img src={lion_logo} alt="creator logo"/>
                    </div>

                    <div className="creator_info">
                        <div>
                            <h6>Créé par</h6>
                            <p>{creator}</p>
                        </div>

                        <div>
                            <h6>Prix actuel</h6>
                            <p>{price} GETH</p>
                        </div>
                    </div>
                </div>

                <div className="btn_container">
                    <button
                        className="buy_btn"
                        onClick={() => setShowPopIn(true)}
                    >
                        Acheter
                    </button>

                    {showPopIn && <PopIn setShowPopIn={setShowPopIn} metadata={metadata} />}

                </div>
            </div>
        </div>
    );
};

export default NftCard;
