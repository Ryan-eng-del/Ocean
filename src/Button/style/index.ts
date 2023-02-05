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
