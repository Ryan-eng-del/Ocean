import { DividerAlign, PxType } from 'Ocean/common/type';
import {
  GlobalColor,
  GlobalFontSize,
  GlobalMargin,
  GlobalPadding,
} from 'Ocean/common/variable';
import { handlePx } from 'Ocean/util/common';
import styled from 'styled-components';
import { animationStyle } from './animation';

const oceanModalTopTransform = '30%',
  oceanModalLeftTransform = '50%';

export const ModalMark = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  background: rgba(29, 33, 41, 60%);
  transition: 330ms linear;
`;

export const ModalContent = styled.div<{ modalWidth: PxType }>`
  position: absolute;
  top: ${oceanModalTopTransform};
  left: ${oceanModalLeftTransform};
  z-index: 11;
  width: ${({ modalWidth }) => {
    return handlePx(modalWidth);
  }};
  overflow-x: auto;
  background: #fff;
  transform: translate(-50%, -50%);
`;
export const ModalContentBody = styled.div`
  padding: ${GlobalPadding.lg};
  font-size: ${GlobalFontSize.medium};
  border-bottom: 1px solid ${GlobalColor.OceanLightProColor};
`;

export const ModalHeader = styled.div`
  .ocean-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${GlobalPadding.lg};
    font-weight: 500;
    border-bottom: 1px solid ${GlobalColor.OceanLightProColor};

    .title {
      span {
        margin-left: ${GlobalMargin.md};
        font-size: ${GlobalFontSize.large};
      }
    }

    .close-icon {
      font-size: ${GlobalFontSize.large};
      cursor: pointer;
    }
  }
`;

export const getFooterPosition = (footerPosition: DividerAlign) => {
  let value;
  if (footerPosition === 'center') {
    value = 'center';
  } else if (footerPosition === 'left') {
    value = 'left';
  } else if (footerPosition === 'right') {
    value = 'right';
  }
  return value;
};

export const ButtonWrapper = styled.div<{ footerPosition: DividerAlign }>`
  display: flex;
  justify-content: ${(props) => getFooterPosition(props.footerPosition)};
`;

export const ModalContentFooter = styled.div`
  width: 100%;
  text-align: right;
  box-sizing: border-box;
  padding: ${GlobalPadding.md};

  .cancel-btn {
    margin-right: ${GlobalMargin.md};
  }
`;

export const ModalWrapper = styled.div`
  ${animationStyle}
`;
