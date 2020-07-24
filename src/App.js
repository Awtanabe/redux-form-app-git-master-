import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form'

class App extends React.Component {
  submit = values => {
    // print the form values to the console
    console.log(values)
  } 
  render() {
    return (
      <div className="App">
        App
        <Form onSubmit={this.submit}/>
      </div>
    );
  }
}

export default App;
