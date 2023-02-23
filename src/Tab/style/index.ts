import { AlignType, TabType } from '@cyan-ocean/ui/common/type';
import { GlobalColor, GlobalPadding } from '@cyan-ocean/ui/common/variable';
import styled from '@emotion/styled';

export const getTabItemColor = (isCur: boolean, isDisable: boolean) => {
  if (isDisable) {
    return GlobalColor.OceanDisableGrey;
  } else if (isCur) {
    return GlobalColor.OceanPrimaryColor;
  } else {
    return undefined;
  }
};

export const getTabBorder = (
  type: TabType,
  isCur: boolean,
  position: AlignType,
) => {
  let color = GlobalColor.OceanPrimaryColor;

  if (
    type === 'text' ||
    !isCur ||
    type === 'round' ||
    position === 'left' ||
    position === 'right'
  ) {
    color = 'transparent';
  }

  return `3px solid ${color}`;
};

export const getTabMargin = (isIcon: boolean, position: AlignType): string => {
  let marginRight = '0';
  if (isIcon && position !== 'left' && position !== 'right') {
    marginRight = '30px';
  } else if (position === 'top' || position === 'bottom') {
    marginRight = '20px';
  }
  return marginRight;
};

export const TabHeaderWrapper = styled.div`
  border-width: 1px;
  border-color: transparent;
  border-style: solid;
  display: flex;
  justify-content: space-between;
`;

export const TabItems = styled.div`
  display: flex;
  padding-bottom: 10px;
`;

export const TabItem = styled.div<{
  isCur: boolean;
  isDisable: boolean;
  isIcon: boolean;
  type: TabType;
  position: AlignType;
}>`
  padding: 5px;
  margin-right: ${(props) => getTabMargin(props.isIcon, props.position)};

  &:not(:last-child) {
    margin-bottom: ${(props) =>
      props.position === 'left' || props.position === 'right'
        ? '20px'
        : undefined};
  }

  display: flex;
  justify-content: space-between;
  color: ${(props) => getTabItemColor(props.isCur, props.isDisable)};
  cursor: ${(props) => (props.isDisable ? 'not-allowed' : 'pointer')};

  border-width: 3px;
  border-style: solid;
  border-color: transparent;

  border-bottom: ${(props) =>
    getTabBorder(props.type, props.isCur, props.position)};

  background-color: ${(props) =>
    props.type === 'round' ? GlobalColor.OceanPrimaryBlue : undefined};

  border-radius: ${(props) =>
    props.type === 'round' || props.type === 'card' ? '10px' : undefined};

  border-right-color: ${(props) => {
    return props.position === 'left' && props.isCur
      ? GlobalColor.OceanPrimaryColor
      : 'transparent';
  }};

  border-left-color: ${(props) =>
    props.position === 'right' && props.isCur
      ? GlobalColor.OceanPrimaryColor
      : 'transparent'};

  border: ${(props) => {
    let color = undefined;
    if (props.type === 'card' && props.isCur) {
      color = GlobalColor.OceanPrimaryColor;
    } else if (props.type === 'card') {
      color = GlobalColor.OceanDisableGrey;
    }
    return `1px solid ${color}`;
  }};

  &:hover {
    color: ${(props) =>
      props.isDisable ? undefined : GlobalColor.OceanPrimaryColor};
  }
`;

export const TabBodyWrapper = styled.div`
  padding: ${GlobalPadding.md} ${GlobalPadding.xs};
  flex: 1;
`;

export const TabWrapper = styled.div<{
  isCenter: boolean;
  position: AlignType;
}>`
  display: ${(props) =>
    props.position === 'left' || props.position === 'right'
      ? 'flex'
      : undefined};

  .ocean-tab-header {
    border-bottom-color: ${(props) =>
      props.position === 'top'
        ? GlobalColor.OceanBorderLightProColor
        : undefined};
    order: ${(props) => {
      let order = 0;
      if (props.position === 'right') {
        return 1;
      }
      return order;
    }};
    border-top-color: ${(props) =>
      props.position === 'bottom'
        ? GlobalColor.OceanBorderLightProColor
        : undefined};

    border-right-color: ${(props) =>
      props.position === 'left'
        ? GlobalColor.OceanBorderLightProColor
        : undefined};

    border-left-color: ${(props) =>
      props.position === 'right'
        ? GlobalColor.OceanBorderLightProColor
        : undefined};

    .ocean-extra-content {
      padding-top: ${(props) =>
        props.position === 'bottom' ? '10px' : undefined};
    }

    justify-content: ${(props) => (props.isCenter ? 'center' : undefined)};
  }
  .ocean-tab-items {
    flex-direction: ${(props) =>
      props.position === 'left' || props.position === 'right'
        ? 'column'
        : undefined};

    padding-bottom: ${(props) =>
      props.position === 'top' ? '10px' : undefined};
    padding-top: ${(props) =>
      props.position === 'bottom' ? '10px' : undefined};
    padding-left: ${(props) =>
      props.position === 'right' ? '10px' : undefined};
    padding-right: ${(props) =>
      props.position === 'left' ? '10px' : undefined};
  }
`;

export const TabItemIcon = styled.div`
  margin-right: 10px;
`;

export const TabItemLabel = styled.div``;
