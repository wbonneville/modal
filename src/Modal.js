import React, { Component } from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 500px;
  max-width: 100%;
  background-color: white;
  margin: 0 auto;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 10px 20px 40px;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  margin-left: 85%;
  border: none;
  font-size: 14px;
  color: gray;
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Tag = styled.h4`
  margin-top: 1%;
`;

const Btns = styled.div`
  margin-left: 76%;
  display: flex;
  margin-top: 5%;
  margin-bottom: -5%;

  & button {
    margin: 5px;
    font-weight: 800;
    font-size: 14px;
    border-radius: 8%;
    padding: 4px 10px;
  }

  & .ok {
    background-color: salmon;
    color: white;
    border: 1px solid salmon;
  }

  & .close {
    color: salmon;
    border: 1px solid salmon;
  }
`;

export default class Modal extends Component {
  render() {
    let modal = (
      <Backdrop>
        <Div>
          <Tag>
            Modal <Button onClick={this.props.isClosed}>X</Button>
          </Tag>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            libero!
          </div>
          <Btns>
            {" "}
            <button onClick={this.props.isClosed} className="ok">
              ok
            </button>
            <button onClick={this.props.isClosed} className="close">
              close
            </button>
          </Btns>
        </Div>
      </Backdrop>
    );

    if (!this.props.isOpen) {
      modal = null;
    }

    return <div>{modal}</div>;
  }
}
