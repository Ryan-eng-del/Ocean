import React, { CSSProperties, ReactNode, useState } from 'react';
import { AlignType, TabType } from '../common/type';
import {
  TabBodyWrapper,
  TabHeaderWrapper,
  TabItem,
  TabItemIcon,
  TabItemLabel,
  TabItems,
  TabWrapper,
} from './style';

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
