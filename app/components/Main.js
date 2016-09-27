import React from 'react';
import ReactDOM from 'react-dom';

var Main = React.createClass({
  render() {
    return (
      <div>
        Hello Jimmy
      </div>
    );
  }
});

ReactDOM.render(<Main />, document.getElementById('app'));
