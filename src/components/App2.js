import React from 'react';

import Form2 from './Form2'

class App2 extends React.Component {
  submit = values => {
    // print the form values to the console
    console.log(values)
  } 
  render() {
    return (
      <div className="App2">
        App
        <Form2 onSubmit={this.submit}/>
      </div>
    );
  }
}

export default App2;
