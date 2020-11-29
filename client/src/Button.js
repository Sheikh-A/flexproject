import React from "react";
import styled from "styled-components";
const Button = styled.button`
  margin: 5px;
  font-weight: bold;
  font-size: 1.2rem;
  margin-top: 10px;
  margin-bottom: 20px;
  border-radius: 8px;
  padding: 15px 20px 10px 10px;
  height: 50px;
  width: 170px;
  border: none;
  border-radius: 3px;
  color: white;
  ${props => (props.type === "primary" ? `background: #2196F3` : null)}
  ${props => (props.type === "success" ? `background: #4CAF50` : null)}
  ${props => (props.type === "danger" ? `background: #F44336` : null)}
  ${props => (props.type === "warning" ? `background: #502394` : null)}
`;
export default Button;
