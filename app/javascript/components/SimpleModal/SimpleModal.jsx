import React from 'react';
import classes from './SimpleModal.sass';
import Backdrop from '../Backdrop/Backdrop';
import cx from "classnames";

class SimpleModal extends React.Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.show !== this.props.show;
    }

    componentWillUpdate() {
        console.log('[SimpleModal] WillUpdate')
    }

    render() {
        return (
            <div>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div
                    className={cx(classes.SimpleModal, this.props.classStyleModifier)}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}
                >
                    <a onClick={this.props.modalClosed} className={classes.closeButton}>x</a>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default SimpleModal;
