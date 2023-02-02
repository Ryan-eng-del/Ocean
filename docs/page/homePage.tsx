import { ArrowRightOutlined } from '@ant-design/icons';
import React, { useEffect } from 'react';
import styled from 'styled-components';
const HomePageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StartButton = styled.div`
  width: 160px;
  font-size: 20px;
  height: 64px;
  padding: 0 60px;
  cursor: pointer;
  background-color: #1976d2;
  border-radius: 5px;
  line-height: 64px;
  color: white;
  font-weight: 700;
  text-align: center;
  margin: 30px auto 0 auto;

  &:hover {
    background-color: rgb(21, 101, 192);
    box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px,
      rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;
  }
`;

const HomePageHeaderLeft = styled.div`
  color: transparent;
  font-size: 150px;
  font-weight: 800;
  margin-right: 50px;
  text-shadow: 0 10px 20px rgb(22 119 255 / 15%);
  background: linear-gradient(30deg, #91d6ff 30%, #1976d2);
  background-clip: text;
  -webkit-background-clip: text;
  -ms-background-clip: text;
  font-family: Alibaba-PuHuiTi, Gill Sans, Gill Sans MT, Calibri, Trebuchet MS,
    sans-serif;
`;
const HomePageSubTitle = styled.div`
  padding: 0 100px;
  color: #718096;
  text-align: center;
`;

const HomePageTitle = styled.h1``;
const HomePageContainer = styled.div`
  padding: 20px;

  @media (max-width: 1030px) {
    ${HomePageHeader} {
      flex-direction: column;
      justify-content: center;
    }

    ${HomePageHeaderLeft} {
      margin-right: 0;
      font-size: 120px;
    }

    ${HomePageSubTitle} {
      padding: 0 50px;
    }

    ${StartButton} {
      padding: 0 20px;
    }
  }
`;

const HomePageHeaderRight = styled.div`
  text-align: center;
`;

const KeyWords = styled.span`
  color: #1976d2;
  padding: 8px;
  text-shadow: 0 10px 20px rgb(22 119 255 / 15%);
`;

const HomePage = () => {
  const clickStart = () => {
    window.location.href = window.location.href + 'components/button';
  };
  useEffect(() => {
    document.title = 'Ocean UI';
  }, []);

  return (
    <HomePageContainer>
      <HomePageHeader>
        <HomePageHeaderLeft>Ocean</HomePageHeaderLeft>

        <HomePageHeaderRight>
          <HomePageTitle>
            构建快速，UI<KeyWords>高定制化</KeyWords>，CSS
            <KeyWords>原子化的</KeyWords> React apps
          </HomePageTitle>

          <HomePageSubTitle>
            Ocean UI 是一个现代的 CSS 原子化组件库，提供了
            <span style={{ color: '#1976d2', padding: '0 4px' }}>
              tailwind-css
            </span>
            式的原子 CSS props。高度定制化你的 React application。
          </HomePageSubTitle>
        </HomePageHeaderRight>
      </HomePageHeader>

      <StartButton onClick={clickStart}>
        Get Started
        <ArrowRightOutlined style={{ fontSize: '18px', paddingLeft: '12px' }} />
      </StartButton>
    </HomePageContainer>
  );
};

export default HomePage;
