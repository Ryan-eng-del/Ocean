import { SizeType } from 'Ocean/common/type';
import { GlobalColor } from 'Ocean/common/variable';
import styled from 'styled-components';
import { BaseButtonProps, ButtonType } from '..';

export const ButtonLoading = styled.span<{
  type: ButtonType;
}>`
  width: 17px;
  height: 17px;
  margin-right: 10px;
  border: 2px solid white;
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
  display: inline-block;
  border-radius: 50%;
  cursor: alias;
  -webkit-animation: 1s button-loading infinite linear;
  animation: 1s button-loading infinite linear;
  z-index: 4;
  pointer-events: none;

  @keyframes button-loading {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export const ButtonBaseStyle = styled.div.attrs<{ ownState: BaseButtonProps }>(
  (props) => ({
    type: props.ownState.type,
    size: props.ownState.size,
    isText: props.ownState.type === 'text' || props.ownState.type === 'outline',
  }),
)<{
  ownState: BaseButtonProps;
  type?: ButtonType;
  size?: SizeType;
  isText?: boolean;
}>`
  button {
    width: ${(props) => {
      let width = props.ownState.width;
      if (typeof width === 'number') {
        width = width + 'px';
      }
      return width ? width : '100%';
    }};

    height: ${(props) => {
      let height = props.ownState.height;
      if (typeof height === 'number') {
        height = height + 'px';
      }
      return height ? height : '43px';
    }};

    padding: ${(props) => {
      let p1 = 5;
      let p2 = 15;
      if (props.ownState.size === 'small') {
        p1 = 0;
        p2 = 5;
      }
      if (props.ownState.size === 'large') {
        p1 = 10;
        p2 = 30;
      }
      return `${p1}px ${p2}px`;
    }};

    color: ${(props) => {
      let color = '#fff';
      color = props.isText ? GlobalColor.OceanPrimaryColor : color;
      color = props.type === 'danger' ? 'rgb(211, 47, 47)' : color;
      return color;
    }};

    background-color: ${(props) => {
      let color = '#fff';
      color = props.type === 'primary' ? GlobalColor.OceanPrimaryColor : color;
      return color;
    }};

    background-image: ${(props) =>
      props.type === 'gradual'
        ? 'linear-gradient(140deg, #6cc7ff 0%, #5a33ff 100%)'
        : undefined};
    border: none;

    border: ${(props) => {
      let border = 'none';
      border =
        props.type === 'outline' ? `1px solid rgba(25, 118, 210, 0.5)` : border;
      border =
        props.type === 'danger' ? '1px solid rgba(211, 47, 47, 0.5)' : border;
      return border;
    }};

    &:hover {
      ${(props) =>
        props.type === 'primary'
          ? {
              backgroundColor: 'rgb(21, 101, 192)',
              boxShadow:
                'rgb(0 0 0 / 20%) 0px 2px 4px -1px, rgb(0 0 0 / 14%) 0px 4px 5px 0px,rgb(0 0 0 / 12%) 0px 1px 10px 0px ',
            }
          : undefined};
      ${(props) =>
        props.isText
          ? {
              backgroundColor: 'rgba(25, 118, 210, 0.04)',
            }
          : undefined};
      ${(props) =>
        props.type === 'danger'
          ? {
              background: 'rgba(211, 47, 47, 0.04)',
            }
          : undefined};
      ${(props) =>
        props.type === 'gradual'
          ? {
              background: 'linear-gradient(140deg, #89d9ff 0%, #6c4aff 100%)',
            }
          : undefined};
    }
  }
  ${(props) => ({ ...props.ownState.style })};
`;
