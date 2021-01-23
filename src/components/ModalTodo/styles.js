import styled from 'styled-components';
import ReactModal from 'react-modal';

export const Modal = styled(ReactModal)`
  display: flex;

  position: absolute;
  bottom: 0;

  width: 100%;
  height: 50%;

  padding: 15px;

  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  background: white;
  box-shadow: 1px 1px 5px black;

  form {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
`;

export const HeaderModalTask = styled.div`
  display: flex;
  align-items: center;

  h3 {
    flex: 1;
    font-size: 32px;
  }

  button {
    height: 32px;
    padding: 0 16px;
    border-radius: 8px;
    border: none;
    background: #f29d4e;

    font-weight: bold;
  }
`;

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  > div {
    display: flex;
    flex-direction: row;
  }

  input {
    height: 42px;
    font-size: 16px;
    margin-bottom: 10px;
    padding: 5px;
    background-color: gainsboro;
    border: none;
    border-radius: 4px;

    :focus {
      border: 1px solid #f29d4e;
    }

    ::placeholder {
      color: black;
    }
  }

  .title {
    flex: 1;
    padding: 0 0 0 8px;
  }

  .content {
    padding: 0 0 0 8px;
    margin-bottom: 10px;
    padding: 5px;
    background-color: gainsboro;
    border: none;
    border-radius: 4px;
    resize: none;

    flex: 1;

    ::placeholder {
      color: black;
    }

    :focus {
      border: 1px solid #f29d4e;
    }
  }

  .completed {
    margin: 0 0 0 8px;
    height: 42px;
    width: 42px;
  }
`;
