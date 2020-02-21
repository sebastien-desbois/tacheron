import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppPanel from '../components/AppPanel';

function App() {
  return (
    <>
      <CssBaseline />
      <AppPanel />
    </>
  );
}
(App as React.SFC).displayName = 'App';

export default App;
