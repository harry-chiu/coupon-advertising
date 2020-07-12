import React from 'react';
import {
  Container,
  Header,
  Image,
  Body,
  Content,
  Title,
  Description,
  Button,
} from './style';

const Card = ({ imageSrc, title, description }) => {
  return (
    <Container>
      <Header>
        <Image src={imageSrc} alt="" />
      </Header>
      <Body>
        <Content>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Content>
        <Button data-ad-name={`ad-${title}`}>查看</Button>
      </Body>
    </Container>
  );
};

export default Card;
