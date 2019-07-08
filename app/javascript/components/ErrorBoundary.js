import React from 'react';
import InternalErrorBoundary from 'react-error-boundary';
import * as Sentry from '@sentry/browser';

Sentry.init({ dsn: process.env.SENTRY_DSN_REACT });

const defaultOnErrorHandler = (error, stack) => {
    console.error(error, stack);
    Sentry.captureException(error);
};

const ErrorBoundary = props => (
    <InternalErrorBoundary
        onError={defaultOnErrorHandler}
        {...props}
    />
);
export default ErrorBoundary;
