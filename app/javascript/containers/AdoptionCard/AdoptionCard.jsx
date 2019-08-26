import React from 'react';
import styles from './AdoptionCard.sass'
import SimpleCircularButton from "../../components/SimpleCircularButton/SimpleCircularButton";

const AdoptionCard = () => {
    return (
        <div className={styles.AdoptionCard}>
            <div className={styles.sexLabel}><a>Femea</a></div>
            <div className={styles.ageLabel}><a>8 anos</a></div>
            <div className={styles.picture}>

            </div>
            <div className={styles.cardContent}>
                <a className={styles.city}>Içara, SC</a>
                <a className={styles.petName}>Marquinhos</a>
                <a className={styles.petDescription}>
                    Marquinhos é um cachorro muito brincalhão,
                    adora comer e rolar na grama. As vezes faz xixi
                    no lugar errado, mas ele ainda é neném e vai
                    aprender.
                </a>
                <div className={styles.postDetail}>
                    <div className={styles.ngoDetail}>
                        <div className={styles.ngoPicture}>
                        </div>
                        <a className={styles.ngoName}>ONG Amigo Bicho</a>
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
