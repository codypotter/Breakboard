import React from 'react'
import TextField from '@material-ui/core/TextField';
import Breaklist from './Breaklist'

class Breakboard extends React.Component {
  render() {
    return (
      <div>
        <form>
          <TextField
            id="date"
            label="Business Date"
            type="date"
            defaultValue="2019-02-09"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
        <Breaklist />
      </div>
    )
  }
}

export default Breakboard