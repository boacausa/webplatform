import React from 'react';
import styles from './AdoptionCard.sass'

const AdoptionCard = () => {
    return (
      <div className={styles.AdoptionCard}>
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
      </div>
    );
};

export default AdoptionCard;
