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
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  height: 55px;
  width: 100%;
  background-color: #f29d4e;
  box-shadow: 0px 0px 4px #000;
  padding-left: 10px;

  button {
    display: flex;
    align-items: center;
    padding: 25px;
    height: 100%;
    background: none;
    border: 0;

    font-weight: bold;
    font-size: 18px;

    :hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
`;

export const DivListTodos = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(2, 1fr);
  padding-top: 10px;
  padding-bottom: 10px;

  button {
    flex: 1;
    display: flex;
    padding: 10px;
    flex-direction: column;
    background: none;
    border: 0;
  }

  .content {
    display: flex;
    flex-direction: column;
    width: 200px;
    min-height: 100px;
    background: #f29d4e;
    border-radius: 8px;
    box-shadow: 0px 0px 4px #000;

    input {
      background-color: #c4a689;
      color: #000;
      :hover {
        cursor: pointer;
      }
    }

    .footer {
      display: flex;
      justify-content: space-between;
      padding: 5px;

      .deleteTodo {
        :hover {
          cursor: pointer;
        }
      }
    }
  }
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
