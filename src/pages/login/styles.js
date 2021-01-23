import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DivLogin = styled.div`
  background: #fff;
  display: flex;
  margin: 16px;
  width: 400px;
  align-items: center;
  flex-direction: column;
  border: 1px solid #c5c5c5;
  border-radius: 8px;

  h3 {
    margin-top: 20px;
  }

  p {
    margin-top: 10px;
  }

  div {
    justify-content: center;
    align-items: center;
  }
`;

export const ButtonGoogleLogin = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 20px;
  margin-left: 8px;
  height: 40px;
  padding: 10px;
  background: white;
  border: 1px solid #dfdfdf;
  border-radius: 4px;

  img {
    height: 18px;
    width: 18px;
    margin-right: 12px;
  }

  span {
    font-family: sans-serif;
    size: 14px;
    color: '#000000';
  }
`;
