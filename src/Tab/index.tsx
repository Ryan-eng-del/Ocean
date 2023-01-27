import { GlobalColor, GlobalPadding } from 'Ocean/common/variable';
import React, { CSSProperties, ReactNode, useState } from 'react';
import styled from 'styled-components';
import { AlignType, TabType } from '../common/type';

interface Tabs {
  items: TabItem[];
  defaultActiveKeys?: React.Key;
  onChange?: () => void;
  extraContent?: ReactNode;
  type?: TabType;
  center?: boolean;
  position?: AlignType;
  bodyStyle?: CSSProperties;
}

export interface TabItem {
  key: React.Key;
  label: string;
  icon?: ReactNode;
  children: ReactNode;
  disable?: boolean;
}

const getTabItemColor = (isCur: boolean, isDisable: boolean) => {
  if (isDisable) {
    return GlobalColor.OceanDisableGrey;
  } else if (isCur) {
    return GlobalColor.OceanPrimaryColor;
  } else {
    return undefined;
  }
};

const getTabBorder = (type: TabType, isCur: boolean, position: AlignType) => {
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

const getTabMargin = (isIcon: boolean, position: AlignType): string => {
  let marginRight = '0';
  if (isIcon && position !== 'left' && position !== 'right') {
    marginRight = '30px';
  } else if (position === 'top' || position === 'bottom') {
    marginRight = '20px';
  }
  return marginRight;
};

const TabHeaderWrapper = styled.div`
  border-width: 1px;
  border-color: transparent;
  border-style: solid;
  display: flex;
  justify-content: space-between;
`;

const TabItems = styled.div`
  display: flex;
  padding-bottom: 10px;
`;

const TabItem = styled.div<{
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

const TabBodyWrapper = styled.div`
  padding: ${GlobalPadding.md} ${GlobalPadding.xs};
  flex: 1;
`;

const TabWrapper = styled.div<{
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

const TabItemIcon = styled.div`
  margin-right: 10px;
`;

const TabItemLabel = styled.div``;

const Tabs = (props: Tabs) => {
  const {
    items,
    defaultActiveKeys,
    onChange,
    type = 'line',
    extraContent,
    center = false,
    position = 'top',
    bodyStyle,
  } = props;

  const [curKey, setCurKey] = useState(defaultActiveKeys ?? items[0].key);

  const disableKeys = (() => {
    return items.reduce((pre, now) => {
      if (now.disable) {
        pre.push(now.key);
      }
      return pre;
    }, [] as React.Key[]);
  })();

  const change = (key: React.Key) => {
    onChange?.();
    if (!disableKeys.includes(key)) {
      setCurKey(key);
    }
  };

  const getContent = () => {
    const content = items.find((c) => {
      return c.key === curKey;
    });

    if (content) {
      return content.children;
    } else {
      return 'No content match them!';
    }
  };

  const content = getContent();

  const tabHeader = (
    <TabHeaderWrapper className="ocean-tab-header">
      <TabItems className="ocean-tab-items">
        {items.map((tab) => {
          return (
            <TabItem
              className={`ocean-tab-items-${type} ocean-tab-item`}
              key={tab.key}
              onClick={() => change(tab.key)}
              isCur={tab.key === curKey}
              isDisable={tab.disable ?? false}
              isIcon={!!tab.icon ?? false}
              type={type}
              position={position}
            >
              <TabItemIcon>{tab.icon}</TabItemIcon>
              <TabItemLabel>{tab.label}</TabItemLabel>
            </TabItem>
          );
        })}
      </TabItems>
      <div className="ocean-extra-content">
        {position !== 'left' && position !== 'right' && extraContent}
      </div>
    </TabHeaderWrapper>
  );
  const tabContent = (
    <TabBodyWrapper style={bodyStyle}>
      <div>{content}</div>
    </TabBodyWrapper>
  );

  const getLayout = (): any[] => {
    const layoutArr = [];

    if (position === 'top') {
      layoutArr.push(tabHeader, tabContent);
    } else if (position === 'bottom') {
      layoutArr.push(tabContent, tabHeader);
    } else {
      return [tabHeader, tabContent];
    }

    return layoutArr;
  };

  return (
    <TabWrapper
      isCenter={center}
      className="ocean-tab-wrapper"
      position={position}
    >
      {getLayout().map((_) => _)}
    </TabWrapper>
  );
};

export default Tabs;
