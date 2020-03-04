import React from 'react'
import SimpleModal from "../SimpleModal/SimpleModal";
import {createStructuredSelector} from "reselect";
import {connect} from "react-redux";
import {cleanDialogMessage} from "../../actions/dialogMessage";
import * as Sentry from "@sentry/browser";

const DialogMessage = ({dialogMessage, cleanDialogMessage}) => {
    if (!dialogMessage.message) {
        return null;
    }

    Sentry.captureException(dialogMessage.error);

    return <SimpleModal show={true} modalClosed={cleanDialogMessage}>
        <p>{dialogMessage.message}</p>
    </SimpleModal>
};

const structuredSelector = createStructuredSelector({
    dialogMessage: state => state.dialogMessage,
});

const mapDispatchToProps = {
    cleanDialogMessage,
};

export default connect(structuredSelector, mapDispatchToProps)(DialogMessage);
