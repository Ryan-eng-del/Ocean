import { GlobalFontSize, GlobalPadding } from 'Ocean/common/variable';
import styled, { FlattenSimpleInterpolation } from 'styled-components';
import { AlignType } from '../../common/type';
import { drawerBodyAnimation, opacityTransition } from './animation';
import { getDrawerPosition } from './computedStyle';

export const DialogItem = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(29, 33, 41, 60%);
  z-index: 10;
  ${drawerBodyAnimation}
`;

export const DialogWrapper = styled.div`
  ${opacityTransition('mark-drawer')}
`;

export const DialogContent = styled.div`
  border-bottom: 1px solid #e5e6eb;
  flex: 1;
  margin-bottom: 10px;
`;

export const DialogTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
  border-bottom: 1px solid #e5e6eb;
  padding-bottom: 7px;
  margin-bottom: 10px;

  color: #1d2129;
  .title {
    span {
      font-size: ${GlobalFontSize.large};
    }
  }

  .close-icon {
    font-size: ${GlobalFontSize.medium};
    cursor: pointer;
  }
`;

export const DialogBody = styled.div<{
  align: AlignType;
  size?: number | string;
  fullScreen?: boolean;
}>`
  position: absolute;
  z-index: 11;
  background: #fff;

  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 20px;
  ${(props) =>
    getDrawerPosition(
      props.align,
      props.size || '432px',
      props.fullScreen || false,
    ) as FlattenSimpleInterpolation};
`;

export const DrawerFooter = styled.div`
  display: flex;
  justify-content: end;
  padding-top: ${GlobalPadding.md};
  .cancel-button {
    margin-right: 16px;
  }
`;
