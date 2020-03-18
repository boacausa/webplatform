import React from "react"
import classes from './HomePage.sass'
import homePageDog from './../../images/home_page_dog.svg';
import homePageCat from './../../images/home_page_cat.svg';

const HomePage = () => {
    return (
        <div className={classes.HomePage}>
            <div className={classes.initialBox} style={styles.initialBoxHeight}>
                <div className={classes.insideBorder}>
                    <div />
                    <div className={classes.petImages}>
                        <img src={homePageDog} alt="Imagem de um cachorro" className={classes.imageDog} />
                        <img src={homePageCat} alt="Imagem de um gato" className={classes.imageCat} />
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles = {
    initialBoxHeight: {
        height: (window.innerHeight * 0.75) + "px"
    }
};

export default HomePage;
