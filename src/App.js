import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SelectTestable from './components/select-testable';
import SelectNonTestable from './components/select-non-testable';
import ParentHoc from './components/parentHOC';

class App extends Component {
  render() {
    const SelectTestableHoc = ParentHoc(SelectTestable);
    const SelectNonTestableHoc = ParentHoc(SelectNonTestable);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            Showing Difference Between Testable and Non Testable Code
          </h1>
        </header>
        <p className="App-intro">This is Testable Select Component</p>
        <SelectTestableHoc />
        <p className="App-intro">This is Non Testable Select Component</p>
        <SelectNonTestableHoc />
        <p>
          To understand the difference check code of
          src/components/select-non-testable and src/components/select-testable
        </p>
      </div>
    );
  }
}

export default App;
