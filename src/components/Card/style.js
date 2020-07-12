import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #c0c0c0;
  border-radius: 4px;
  margin-right: 16px;
  max-width: 300px;
`;

export const Header = styled.div`
  flex: 1;
  height: 200px;
  max-height: 200px;
  font-size: 0px;
  background: #999999;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 4px 4px 0 0;
  object-fit: cover;
`;

export const Body = styled.div`
  flex: 2;
  padding: 12px;
  background: #ffffff;
  border-radius: 0 0 4px 4px;
`;

export const Content = styled.div``;

export const Title = styled.h1`
  font-size: 14px;
  font-weight: bold;
  margin: 0;
`;

export const Description = styled.p`
  font-size: 12px;
  margin: 8px 0;
`;

export const Button = styled.button`
  background: #ff0000;
  color: #ffffff;
  padding: 8px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
