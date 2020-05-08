import * as Sentry from "@sentry/browser";
import React from "react";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";

const ErrorFallback = ({
  error,
  componentStack,
  resetErrorBoundary,
}: FallbackProps) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error?.message}</pre>
      <pre>{componentStack}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

const errorHandler = (error: Error, componentStack: string) => {
  Sentry?.withScope(scope => {
    scope.setExtras({ componentStack });
    const eventId = Sentry?.captureException(error);
    Sentry?.showReportDialog({ eventId });
  });
};

const ErrorWrapper: React.FunctionComponent<{}> = props => {
  Sentry.init({
    dsn: process.env.SENTRY_DSN,
    environment: process.env.NODE_ENV,
  });

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // reset the state of your app so the error doesn't happen again
      }}
      onError={errorHandler}
    >
      {props.children}
    </ErrorBoundary>
  );
};

export default ErrorWrapper;
