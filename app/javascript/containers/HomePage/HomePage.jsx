import React from "react"
import classes from './HomePage.sass'
import homePageImageDesktop from './../../images/home_page_desktop.png';
import homePageImagePhone from './../../images/home_page_phone.png';

const SIZE_PHONE = window.innerWidth < 599;

const HomePage = () => {
    let homePageImage = homePageImageDesktop;

    if (SIZE_PHONE) {
        homePageImage = homePageImagePhone;
    }
    return (
        <div className={classes.HomePage}>
            <div className={classes.initialBox} style={styles.initialBoxHeight}>
                <img src={homePageImage} alt="Home page image" className={classes.petImages} />
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
