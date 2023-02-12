import styled from '@emotion/styled';
import { GlobalColor } from 'Ocean/common/variable';

export const ChildMenu = styled.div``;

export const MenuItemContainer = styled.div<{
  curKey: React.Key;
  selectKey: React.Key;
}>`
  padding: 14px;
  background-color: ${(props) => {
    return props.curKey === props.selectKey
      ? GlobalColor.OceanSelectBackGround
      : undefined;
  }};

  &:hover {
    background-color: ${GlobalColor.OceanHoverBackGround};
  }

  cursor: pointer;
  transition: all 330ms ease;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  margin-bottom: 6px;
`;

export const IconWrapper = styled.span`
  margin-right: 12px;
`;

export const FirstMenuItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RowWrapper = styled.div`
  margin-left: 12px;
`;

export const MenuNodeContainer = styled.div<{ level: number }>`
  padding-left: ${(props) => props.level * 5 + 'px'};
`;
