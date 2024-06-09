import { styled } from 'styled-components';

export const Main = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #dcdcdc;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginContainer = styled.div`
  width: 350px;
  height: 400px;
  background-color: #f5f5f5;
  box-shadow: 0 5px 18px -7px rgba(0, 0, 0, 1);
`;

/**
 * 로고 부분
 */
export const LogoContainer = styled.div`
  width: 100%;
  height: 150px;
  position: relative;
`;

interface Block {
  width: number;
  heigh: number;
  rotate: number;
  x: number;
  y: number;
}
export const Block = styled.div<Block>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.heigh}px;
  transform: ${(props) => `rotate(${props.rotate}deg)`};
  background-color: #ec008c;
  position: absolute;
  left: ${(props) => props.x}px;
  top: ${(props) => props.y}px;
`;

/**
 * 입력부분
 */

export const InputContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const InputBox = styled.input`
  width: 300px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #0507d4;
  background-color: transparent;
  padding-left: 10px;
  outline: none;
  font-size: small;
`;

export const LoginButton = styled.button`
  width: 300px;
  height: 40px;

  background-color: #351b6f;
  margin-top: 40px;
  font-weight: bold;
  color: white;
  border-radius: 5px;
  &:hover {
    opacity: 0.7;
    transition: 0.5s;
  }
`;
