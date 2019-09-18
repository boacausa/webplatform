import React from 'react';
import styles from './AdoptionCard.sass'
import SimpleCircularButton from "../../components/SimpleCircularButton/SimpleCircularButton";
import {Link} from "react-router-dom";

const AdoptionCard = (props) => {
    return (
        <div className={styles.AdoptionCard}>
            <div className={styles.sexLabel}><a>{props.sex === "f" ? "Fêmea" : "Macho"}</a></div>
            <div className={styles.ageLabel}><a>{props.age} anos</a></div>
            <div className={styles.picture}></div>
            <div className={styles.cardContent}>
                <a className={styles.city}>Içara, SC</a>
                <a className={styles.petName}>{props.name}</a>
                <a className={styles.petDescription}>{props.description}</a>
                <div className={styles.postDetail}>
                    <div className={styles.ngoDetail}>
                        <img className={styles.ngoPicture} src={props.ngo.logo_path} alt='Imagem da ONG' />
                        <Link className={styles.ngoName} to={`/new/ong/${props.ngo.fantasy_name}`}>{props.ngo.fantasy_name}</Link>
                    </div>
                    <div>
                        <a className={styles.postTime}>4 mêses atrás</a>
                    </div>
                </div>
            </div>
            <div className={styles.adoptionButton}>
                <SimpleCircularButton name='Adote'/>
            </div>
        </div>
    );
};

export default AdoptionCard;
