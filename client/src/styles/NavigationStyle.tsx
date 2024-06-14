import { styled } from 'styled-components';

export const SideBar = styled.div<{ width: number; onMouse: boolean }>`
  width: ${(props) => props.width}px;
  min-height: 100vh;

  background-color: #351b6f;
  transition: 0.7s;
  padding-inline: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

export const IconContainer = styled.div``;

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

export const LogoContainer = styled.div`
  width: 100%;
  height: 70px;
  position: relative;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
  }
`;

/**
 * 디테일 메뉴 부분
 */

export const IconBox = styled.div`
  width: 50px;
  height: 50px;

  opacity: 0.7;

  display: flex;
  justify-content: center;
  align-items: center;

  // background-color: #533f7c;
  border-radius: 10px;
`;

export const ListBox = styled.div<{ open: boolean }>`
  width: ${(props) => (props.open ? '200px' : '60px')};
  transition: 1s;
  height: 50px;
  opacity: 0.7;

  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.open ? 'flex-start' : 'center')};
  padding-inline: 10px;
  cursor: pointer;

  &:hover {
    opacity: 1;
    background-color: #533f7c;
    border-radius: 10px;
  }
`;

export const Title = styled.div<{ name: String }>`
  width: 175px;
  height: 50px;

  color: white;

  display: flex;

  align-items: center;
  padding-left: 20px;
`;

export const DetailMenuItem = styled.div`
  color: white;
  margin-block: 15px;
  opacity: 0.7;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    opacity: 1;
    font-weight: bold;
  }
`;
