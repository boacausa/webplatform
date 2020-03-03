import React from 'react'
import SimpleModal from "../SimpleModal/SimpleModal";
import {createStructuredSelector} from "reselect";
import {connect} from "react-redux";

const DialogMessage = ({dialogMessage}) => {
    if (!dialogMessage.message) {
        return null;
    }

    return <SimpleModal show={true}>
        <p>Errou</p>
    </SimpleModal>
};

const structuredSelector = createStructuredSelector({
    dialogMessage: state => state.dialogMessage,
});

const mapDispatchToProps = {};

export default connect(structuredSelector, mapDispatchToProps)(DialogMessage);
