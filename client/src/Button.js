import styled from "styled-components";
const Button = styled.button`
  margin: 5px;
  font-weight: bold;
  font-size: 1.1rem;
  margin-top: 10px;
  margin-bottom: 20px;
  border-radius: 8px;
  padding: 15px 20px 10px 10px;
  height: 50px;
  width: 165px;
  background: white;
  border: none;
  border-radius: 3px;
  color: black;
  ${props => (props.type === "primary" ? `border: 3px solid #2196F3` : null)}
  ${props => (props.type === "success" ? `border: 3px solid #4CAF50` : null)}
  ${props => (props.type === "danger" ? `border: 3px solid #F44336` : null)}
  ${props => (props.type === "warning" ? `border: 3px solid #502394` : null)}
`;
export default Button;
