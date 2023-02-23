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
  const clickColorBlock = (colorValue: string) => {
    navigator.clipboard.writeText(colorValue);
    // .then(() => Message.open({ content: 'Copy Successful!' }));
  };

  const UI = Object.entries(colors).map(([colorName, colorValue], index) => {
    const children = Object.entries(colorValue).map(
      ([colorNum, colorResult], index) => {
        return (
          <div
            key={index}
            style={{ marginRight: '12px', marginBottom: '20px' }}
          >
            <ColorBlock
              bg={colorResult}
              onClick={() => clickColorBlock(colorResult)}
            ></ColorBlock>
            <div className="color-number">{colorNum}</div>
            <div className="color-value">{colorResult}</div>
          </div>
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
