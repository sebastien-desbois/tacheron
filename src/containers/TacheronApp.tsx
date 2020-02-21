import React, { ErrorInfo } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TacheronStore from './TacheronStore';
import TacheronServiceWorker from './TacheronServiceWorker'

class TacheronApp extends React.Component {
  static displayName: string = 'TacheronApp';
  render() {
    return (
      <>
        <CssBaseline />
        <TacheronServiceWorker>
          <TacheronStore />
        </TacheronServiceWorker>
      </>
    );
  }
  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(error)
    console.debug(info.componentStack)
  }
}

export default TacheronApp;
