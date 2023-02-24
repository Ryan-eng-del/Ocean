import { useMessage } from '@cyan-ocean/ui/Message/message';
import GlobalThemeProvider from '@cyan-ocean/ui/System/provider';
import styled from '@emotion/styled';
import React from 'react';
import colors from '../theme/colors';

const ColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 35px;
`;

const ColorWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  .color-name {
    width: 100px;
    margin-right: 20px;
    margin-top: 10px;
    font-weight: 600;
    font-size: 15px;
  }
  .color-number {
    font-size: 13px;
  }
  .color-value {
    font-size: 13px;
    color: #64748b;
  }
`;

const ColorBlockWrapper = styled.div`
  display: flex;
`;

const ColorBlock = styled.div<{ bg: string }>`
  background-color: ${(props) => props.bg};
  width: 57px;
  height: 40px;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Color = () => {
  const { message } = useMessage();

  const clickColorBlock = (colorValue: string) => {
    message({
      content: `${colorValue} 复制成功！！`,
      variant: 'solid',
    });
    navigator.clipboard.writeText(colorValue);
  };

  const UI = Object.entries(colors).map(([colorName, colorValue], index) => {
    const children = Object.entries(colorValue).map(
      ([colorNum, colorResult], index) => {
        return (
          <GlobalThemeProvider key={index}>
            <div
              style={{ marginRight: '12px', marginBottom: '20px' }}
              onClick={(e) => {
                clickColorBlock(colorResult);
                e.stopPropagation();
              }}
            >
              <ColorBlock bg={colorResult}></ColorBlock>
              <div className="color-number">{colorNum}</div>
              <div className="color-value">{colorResult}</div>
            </div>
          </GlobalThemeProvider>
        );
      },
    );

    return (
      <ColorWrapper key={index} className="color-wrapper">
        <div className="color-name">{colorName}</div>
        <ColorBlockWrapper color="color-block-wrapper">
          {children}
        </ColorBlockWrapper>
      </ColorWrapper>
    );
  });

  return <ColorContainer>{UI.map((_) => _)}</ColorContainer>;
};

export default Color;
