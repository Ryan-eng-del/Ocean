import styled from '@emotion/styled';

export const TreeLabelContainer = styled.div`
  font-size: 15px;
`;

export const TreeLabelTool = styled.div`
  position: absolute;
  opacity: 0;
  transition: 0.3s opacity;
  right: 0;
  display: inline-flex;
  align-items: center;

  font-size: 14px;

  span {
    margin-left: 20px;
    color: rgb(58, 139, 255);
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const IconContainer = styled.span<{ isChildren: boolean }>`
  padding-right: 10px;
  svg {
    top: -1px;
    width: 12px;
    height: 12px;
    opacity: ${(props) => (props.isChildren ? 1 : 0)};
  }
`;

export const TreeItemRoot = styled.div`
  position: relative;
  color: black;
  cursor: pointer;
`;

export const TreeLabel = styled.div<{ isSelect: boolean }>`
  padding: 8px 10px;
  display: flex;
  flex: 1;
  background-color: ${(props) => {
    return props.isSelect ? 'rgba(25, 118, 210, 0.08)' : undefined;
  }};

  &:hover .edit-tool-wrapper {
    color: var(--blue);
    opacity: 1;
  }

  &:hover {
    background-color: ${(props) => {
      return props.isSelect ? 'rgba(25, 118, 210, 0.08)' : 'rgb(231, 239, 252)';
    }};
  }
`;
