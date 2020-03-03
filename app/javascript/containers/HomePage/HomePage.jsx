import React, {Component} from "react"
import classes from './HomePage.sass'
import homePageImage from './../../images/home_page_desktop.png';

class HomePage extends Component {
    render() {
        // TODO: image for phone
        return (
            <div className={classes.HomePage}>
                <div className={classes.initialBox} style={styles.initialBoxHeight}>
                    <img src={homePageImage} alt="Home page image" className={classes.petImages} />
                </div>
            </div>
        );
    }
}

const styles = {
  initialBoxHeight: {
      height: (window.innerHeight * 0.75) + "px"
  }
};

export default HomePage;
