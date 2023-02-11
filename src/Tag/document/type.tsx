import { GithubOutlined } from '@ant-design/icons';
import { TabLabel, Tag, TagLeftIcon } from 'Ocean';
import GlobalThemeProvider from 'Ocean/System/provider';
import React from 'react';

const Basic = () => {
  return (
    <GlobalThemeProvider>
      <Tag mr={3}>
        <TagLeftIcon>
          <GithubOutlined />
        </TagLeftIcon>
        <TabLabel>Tag</TabLabel>
      </Tag>

      <Tag type="outline">
        <TagLeftIcon>
          <GithubOutlined />
        </TagLeftIcon>
        <TabLabel>Tag</TabLabel>
      </Tag>
    </GlobalThemeProvider>
  );
};

export default Basic;
