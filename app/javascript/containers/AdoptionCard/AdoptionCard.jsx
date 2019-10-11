import React from 'react';
import styles from './AdoptionCard.sass'
import SimpleCircularButton from "../../components/SimpleCircularButton/SimpleCircularButton";
import {Link} from "react-router-dom";
import TimeAgo from 'javascript-time-ago'
// Load pt-BR locale for time ago
import br from 'javascript-time-ago/locale/pt'

TimeAgo.addLocale(br);

const AdoptionCard = (props) => {
    var moment = require('moment');
    const postedAtDateTime = moment(props.postedAt).toDate();
    const timeAgo = new TimeAgo('pt-BR');

    function ageLabelText(age) {
        if (age == null) {
            return "0 anos";
        } else if (age === 1) {
            return `${age} ano`;
        } else {
            return `${age} anos`;
        }
    }

    function getCity(ngo) {
        const city = ngo.city ? ngo.city : '';
        const state = ngo.state ? ngo.state : '';

        if (city === '' && state === '') {
            // TODO: should be required on ngos form
            return 'Endereço da ONG não cadastrado';
        }

        return city + ", " + state;
    }

    return (
        <div className={styles.AdoptionCard}>
            <div className={styles.sexLabel}><a>{props.sex === "f" ? "Fêmea" : "Macho"}</a></div>
            <div className={styles.ageLabel}><a>{ageLabelText(props.age)}</a></div>
            <div className={styles.pictureBox}>
                <img className={styles.picture} src={props.petImage} alt='Imagem do pet' />
            </div>
            <div className={styles.cardContent}>
                <a className={styles.city}>{getCity(props.ngo)}</a>
                <a className={styles.petName}>{props.name}</a>
                <a className={styles.petDescription}>{props.description}</a>
                <div className={styles.postDetail}>
                    <div className={styles.ngoDetail}>
                        <img className={styles.ngoPicture} src={props.ngo.logo_path} alt='Imagem da ONG' />
                        <Link className={styles.ngoName} to={`/new/ong/${props.ngo.fantasy_name}`}>{props.ngo.fantasy_name}</Link>
                    </div>
                    <div>
                        <a className={styles.postTime}>{timeAgo.format(postedAtDateTime)}</a>
                    </div>
                </div>
            </div>
            <div className={styles.adoptionButton}>
                <SimpleCircularButton clicked={props.modalOpen} name='Adote'/>
            </div>
        </div>
    );
};

export default AdoptionCard;
