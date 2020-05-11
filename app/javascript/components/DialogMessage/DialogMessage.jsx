import React from 'react'
import SimpleModal from "../SimpleModal/SimpleModal";
import {createStructuredSelector} from "reselect";
import {connect} from "react-redux";
import {cleanDialogMessage} from "../../actions/dialogMessage";
import * as Sentry from "@sentry/browser";
import classes from './DialogMessage.sass';

const dialogMessageClass = (dialogMessage) => {
    switch (dialogMessage.type) {
        case "ERROR":
            return classes.DialogMessageError;
        case "SUCCESS":
            return classes.DialogMessageSuccess;
        default:
            return classes.DialogMessageNeutral;
    }
};

// TODO: click outside needs to close
// TODO: click inside needs to close
// TODO: fade away in a couple of seconds
// TODO: write tests
const DialogMessage = ({dialogMessage, cleanDialogMessage}) => {
    if (!dialogMessage.message) {
        return null;
    }

    if (dialogMessage.error) {
        Sentry.captureException(dialogMessage.error);
    }

    return <SimpleModal
        show={true}
        modalClosed={cleanDialogMessage}
        classStyleModifier={dialogMessageClass(dialogMessage)}
        showBackdrop={false}
    >
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
