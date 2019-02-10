import React from "react";
import ReactDOM from "react-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Breakboard from './components/Breakboard';

function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Breakboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Breakboard />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));