import styled from 'styled-components';
import ReactModal from 'react-modal';

export const Modal = styled(ReactModal)`
  background-color: #f29d4e;
  margin: auto;
  margin-top: 10px;
  padding: 15px;
  border-radius: 4px;
  box-shadow: 1px 1px 5px black;
  width: 75%;
  height: 75%;
`;

export const Container = styled.div`
  display: flex;
  height: 100%;
  flex: 1;

  form {
    display: flex;
    flex-direction: column;
    height: 100%;
    flex: 1;

    input {
      margin-bottom: 10px;
      padding: 5px;
      background-color: #c4a689;
      border: 1px solid gray;
      border-radius: 4px;

      ::placeholder {
        color: black;
      }
    }

    .title {
    }

    .content {
      margin-bottom: 10px;
      padding: 5px;
      background-color: #c4a689;
      border: 1px solid gray;
      border-radius: 4px;
      resize: none;
      flex: 1;

      ::placeholder {
        color: black;
      }
    }

    .completed {
      align-self: flex-end;
      height: 25px;
      width: 25px;
    }

    button {
      height: 55px;
      border-radius: 4px;
      border: 1px solid gray;
      background: #cce290;

      font-weight: bold;
    }
  }
`;
