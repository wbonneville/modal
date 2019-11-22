import React, { Component } from "react";
import Modal from "./Modal";
import styled from "styled-components";
import { AddFunction } from "./Extras";

const Btn = styled.button`
  margin: 0 auto;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: salmon;
  border: none;
  color: white;
  font-size: 35px;
  font-weight: 100;
`;

class App extends Component {
  state = {
    isOpen: false
  };

  open = e => {
    this.setState({
      isOpen: true
    });
  };

  close = e => {
    this.setState({
      isOpen: false
    });
  };

  render() {
    return (
      <div className="App">
        <AddFunction />
        <Btn onClick={this.open}>open the modal</Btn>
        <Modal isOpen={this.state.isOpen} isClosed={this.close}></Modal>
      </div>
    );
  }
}

export default App;
