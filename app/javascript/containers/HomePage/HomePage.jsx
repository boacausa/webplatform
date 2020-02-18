import React, {Component} from "react"
import classes from './HomePage.sass'

class HomePage extends Component {
    render() {

        return (
            <div className={classes.HomePage}>
                <div className={classes.initialBox} style={styles.initialBoxHeight}>
                    <div className={classes.insideBorder}>
                        <div className={classes.titleBox}>
                            <h1 className={classes.title}>Por uma boa causa</h1>
                            <h2 className={classes.subtitle}> Para fazer do mundo um lugar melhor para todos.</h2>
                        </div>
                    </div>
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
