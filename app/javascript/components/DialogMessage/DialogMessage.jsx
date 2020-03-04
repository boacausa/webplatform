import React from 'react'
import SimpleModal from "../SimpleModal/SimpleModal";
import {createStructuredSelector} from "reselect";
import {connect} from "react-redux";
import {cleanDialogMessage} from "../../actions/dialogMessage";
import * as Sentry from "@sentry/browser";
import classes from './DialogMessage.sass';

const DialogMessage = ({dialogMessage, cleanDialogMessage}) => {
    if (!dialogMessage.message) {
        return null;
    }

    Sentry.captureException(dialogMessage.error);

    return <SimpleModal
        show={true}
        modalClosed={cleanDialogMessage}
        classStyleModifier={classes.DialogMessageError}
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
