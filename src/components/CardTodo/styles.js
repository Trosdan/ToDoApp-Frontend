import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  background: white;
  border-radius: 8px;
  margin: 8px 0;
  padding: 8px 16px;

  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);

  > div {
    flex: 1;

    overflow: hidden;
    width: 100px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;

    :hover {
      cursor: pointer;
    }

    p {
      margin: 4px 0 0;

      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
`;

export const CheckBox = styled.button`
  background: none;
  border: none;

  svg {
    margin: 0 4px 0;
  }
`;
