import { ButtonType } from 'Ocean/Button';
import { GlobalColor } from 'Ocean/common/variable';
import { ocean } from 'Ocean/System';
import React from 'react';
import styled from 'styled-components';
import { StyleProps } from '../System/system.type';

export const ButtonLoading = styled.div<{
  type: ButtonType;
}>`
  width: 17px;
  height: 17px;
  border: 2px solid white;
  display: block;
  border-radius: 50%;
  animation: 370ms button-loading infinite linear;
  z-index: 4;
  pointer-events: none;

  border-color: ${(props) => {
    let borderColor = 'white';
    if (
      props.type === 'danger' ||
      props.type === 'outline' ||
      props.type === 'text'
    ) {
      borderColor = GlobalColor.OceanPrimaryColor;
    }
    return `transparent ${borderColor} ${borderColor} transparent`;
  }};

  @keyframes button-loading {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export const ButtonLoadingCpn = (props: {
  type: any;
  loadingText: boolean;
}) => {
  const { type, loadingText } = props;

  const baseStyle: StyleProps = !loadingText
    ? {
        w: 18,
        h: 18,
        pos: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }
    : {
        w: 8,
        h: 7,
        display: 'flex',
        align: 'center',
      };

  return (
    <ocean.div __css={baseStyle} pointerEvents={'none'}>
      <ButtonLoading type={type} />
    </ocean.div>
  );
};
