import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;

  height: 150px;
  width: 100%;
  background-color: #f29d4e;
  box-shadow: 0px 0px 4px #000;

  justify-content: center;

  > div {
    display: flex;
    flex-direction: row;

    margin: 0 16px;

    width: 1440px;

    button {
      display: flex;
      background: none;
      border: 0;

      margin: 16px 0;
      padding: 12px;

      border-radius: 50%;

      font-weight: bold;
      font-size: 18px;

      :hover {
        background-color: rgba(0, 0, 0, 0.1);
      }
    }
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  margin: 0 0 15px;

  > h3 {
    display: flex;
    flex: 1;
    flex-direction: column;

    margin: 0 0 5px;

    justify-content: flex-end;

    font-size: 26px;
  }
`;

export const Main = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  background: #fcfcfc;

  width: calc(100% - 16px);
  max-width: 720px;

  margin: -10px 16px 0;
  padding: 16px;

  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const FabAddTodo = styled.button`
  background-color: #f29d4e;
  border: 0;
  position: fixed;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin: 16px;
  top: ${window.screen.width};
  left: ${window.screen.height};
  bottom: 0;
  right: 0;
  box-shadow: 1px 1px 5px black;

  p {
    font-weight: bold;
    font-size: 28px;
  }
`;
