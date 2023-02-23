import { GithubOutlined } from '@ant-design/icons';
import {
  GlobalThemeProvider,
  TabLabel,
  Tag,
  TagLeftIcon,
  TagRightIcon,
} from '@cyan-ocean/ui';
import React from 'react';

const Basic = () => {
  return (
    <GlobalThemeProvider>
      <div style={{ display: 'flex' }}>
        <Tag size="small" mr={4}>
          <TagLeftIcon>
            <GithubOutlined />
          </TagLeftIcon>
          <TabLabel>Tag</TabLabel>
        </Tag>

        <Tag size="large">
          <TabLabel>Tag</TabLabel>
          <TagRightIcon>
            <GithubOutlined />
          </TagRightIcon>
        </Tag>
      </div>
    </GlobalThemeProvider>
  );
};

export default Basic;
