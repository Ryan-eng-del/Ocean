import { CloseOutlined } from '@ant-design/icons';
import { ocean } from 'Ocean/System';
import { OceanComponent } from 'Ocean/System/system.type';
import { cx } from 'Ocean/util/common';
import React from 'react';
import { StyleProps } from '../System/system.type';
import { useModalContext } from './context';

interface ModalCloseButton {}
interface ModalCloseButtonProps
  extends OceanComponent<'div', ModalCloseButton> {}

const ModalCloseButton = (props: ModalCloseButtonProps) => {
  const baseStyle: StyleProps = {
    cursor: 'pointer',
    w: 8,
    h: 8,
    display: 'inline-block',
    lineHeight: '32px',
    textAlign: 'center',
    transition: 'all ease 110ms',
    rounded: 'lg',
  };

  const { cancel } = useModalContext();

  return (
    <ocean.span
      {...props}
      _hover={{ bg: 'neutral.200' }}
      __css={baseStyle}
      onClick={() => cancel()}
      className={cx('ocean-divider-text', props.className)}
    >
      <CloseOutlined />
    </ocean.span>
  );
};

export default ModalCloseButton;
