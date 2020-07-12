import React from 'react';
import { GlobalStyle } from './components/GlobalStyle';
import CardList from './components/CardList';
import Card from './components/Card';

const adList = [
  {
    id: 1,
    imageSrc: 'https://picsum.photos/id/10/300/200',
    title: '麥當勞',
    description:
      '全球獨家設計！美味品味一次到位，外送只在麥當勞歡樂送。訂「喝彩杯餐」，可口可樂喝彩杯免費送，一指下訂，即刻收藏。網路點餐超方便。',
  },
  {
    id: 2,
    imageSrc: 'https://picsum.photos/id/20/300/200',
    title: '肯德基',
    description:
      '金黃炸雞、香濃蛋撻、咔啦雞腿堡等讓你瘋狂吮指的好滋味，想吃別再等，立即訂餐！想吃炸雞、蛋撻、漢堡？肯德基網路訂餐，享美味免排隊。',
  },
  {
    id: 3,
    imageSrc: 'https://picsum.photos/id/30/300/200',
    title: '頂呱呱',
    description:
      '我們堅持使用黃金72小時新鮮雞肉，堅持嚴選優良的台灣在地食材，更堅持不同的雞肉部位使用不同的調味烹煮，才能做出做好吃的雞肉料理。',
  },
];

const App = () => {
  return (
    <>
      <GlobalStyle />
      <CardList>
        {adList &&
          adList.map(({ id, imageSrc, title, description }) => (
            <Card
              key={id}
              imageSrc={imageSrc}
              title={title}
              description={description}
            />
          ))}
      </CardList>
    </>
  );
};

export default App;
