import React from 'react';
import styles from './SimpleModal.sass';
import Backdrop from '../Backdrop/Backdrop';

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
                    className={styles.SimpleModal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}
                >
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default SimpleModal;
