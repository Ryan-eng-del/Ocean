import { DividerAlign, PxType } from 'Ocean/common/type';
import { GlobalFontSize, GlobalPadding } from 'Ocean/common/variable';
import React, { CSSProperties, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { SizeType } from '../common/type';
import { handlePx } from '../util/common';

interface Divider {
  children?: ReactNode;
  align?: DividerAlign;
  padding?: PxType;
  style?: CSSProperties;
  size?: SizeType;
  fontSize?: PxType;
}

interface DividerLine {
  padding: string;
}

export const DividerLine = styled.div<DividerLine>`
  width: 100%;
  padding: ${(props) => props.padding};
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

interface Line {
  align?: DividerAlign;
}

const getLineStyle = (align: DividerAlign) => {
  if (align === 'left' || align === 'right') {
    return css`
      flex-grow: 0;
      flex-basis: 32px;
    `;
  } else {
    return css`
      flex: 1;
    `;
  }
};

const getLineCommonStyle = () => {
  return css`
    color: #dcdcdc;
    border-bottom: 1px solid;
  `;
};

export const BeforeLine = styled.div<Line>`
  ${(props) => getLineStyle(props.align!)};
  flex-grow: ${(props) => (props.align === 'right' ? 1 : undefined)};
  ${getLineCommonStyle()};
`;

type LineContent = { size: SizeType; fontSize: PxType | undefined };

const getFontSize = (size: SizeType, fontSize: PxType | undefined) => {
  let value = GlobalFontSize.medium;
  if (size === 'small') {
    value = GlobalFontSize.small;
  } else if (size === 'large') {
    value = GlobalFontSize.large;
  }

  if (fontSize) {
    value = handlePx(fontSize) as string;
  }

  return value;
};

const getPxStyle = (padding: PxType | undefined, defaultValue: string) => {
  let value = defaultValue;
  if (padding) {
    value = handlePx(padding) as string;
  }
  return value;
};

export const Line = styled.div<LineContent>`
  padding: 0 ${GlobalFontSize.large};
  font-size: ${(props) => getFontSize(props.size, props.fontSize)};
`;

export const AfterLine = styled.div<Line>`
  ${(props) => getLineStyle(props.align!)}
  flex-grow: ${(props) => (props.align === 'left' ? 1 : undefined)};
  ${getLineCommonStyle()};
`;

const Divider = (props: Divider) => {
  const { padding, align = 'center', style, size = 'medium', fontSize } = props;

  return (
    <>
      <DividerLine
        style={style}
        className="ocean-divider-line"
        padding={getPxStyle(padding, `0 ${GlobalPadding.lgg}`)}
      >
        <BeforeLine className="ocean-before-line" align={align}></BeforeLine>
        {props.children && (
          <Line className="ocean-line" size={size} fontSize={fontSize}>
            {props.children}
          </Line>
        )}
        <AfterLine className="ocean-after-line" align={align}></AfterLine>
      </DividerLine>
    </>
  );
};

export default Divider;
