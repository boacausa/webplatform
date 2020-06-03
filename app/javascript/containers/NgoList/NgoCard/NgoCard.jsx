import React from "react"
import Masks from "../../../utils/Masks";
import {Link} from "react-router-dom";
import classes from "./NgoCard.sass";

// TODO: add test
const NgoCard = ({ngo}) => {
    const getCity = () => {
        // TODO: city needs to be a required field
        const city = ngo.city ? ngo.city : '';
        const state = ngo.state ? ngo.state : '';

        return city + "/" + state;
    };

    return (
        <Link to={`/new/ong/${ngo.fantasy_name_url}`} key={ngo.id} className={classes.NgoCard}>
            <img className={classes.image} src={ngo.logo_path} />
            <div className={classes.content}>
                <div className={classes.titleBox}>
                    <h1 className={classes.title}>{ngo.fantasy_name}</h1>
                </div>
                {/*TODO: This text needs to come from NGO model*/}
                <p className={classes.subTitle}>
                    Se o que você vê é bom de mais para ser verdade, tome cuidado com o que você não vê.
                </p>
                <div className={classes.labelBox}>
                    <span className={classes.label}>{getCity(ngo)}</span>
                    <span className={classes.label}>{ngo.email}</span>
                    <span className={classes.label}>{Masks.phoneMask(ngo.phone_number1)}</span>
                </div>
            </div>
        </Link>
    );
}

export default NgoCard;
