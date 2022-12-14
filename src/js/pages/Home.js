
import '../../css/pages/Home.css';
import {nft_data} from "../../assets/data/data.js";
import React, {useState} from "react";
import NftCard from "../components/NftCard";
import lion_logo from "../../assets/lazy_lion_base.png";
import Header from "../components/Header";


export default function Home({...props}) {

    const [data, setData] = useState(nft_data);


    return (
        <div className="Home">

            <Header/>

            <main>

                <div className="upper">
                    <div className="upper_left">

                        <p className="welcome_message">
                            Bienvenue sur NF<span>Toons</span> !
                        </p>
                        <p className="welcome_message">
                            Le site de vente de NFTs dédié aux fans de dessins animés (ou pas).
                        </p>


                    </div>

                    <img src={lion_logo} alt="lion logo" className="upper_image"/>
                </div>


                <div className="nft_card_container">
                    {data?.map((item) => (
                        <NftCard metadata={item} key={item.id} />
                    ))}
                </div>
            </main>






        </div>
    );
}

