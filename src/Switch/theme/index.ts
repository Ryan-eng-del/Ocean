import { SwitchType } from 'Ocean/common/type';
import { GlobalColor } from 'Ocean/common/variable';

const customBackground = 'rgb(170, 180, 190)';
const iosBackground = 'rgb(101, 196, 102)';
const primaryBackground = GlobalColor.OceanPrimaryColor;
const primaryLightBackground = 'rgb(136, 185, 232)';
const unCheckedBackground = 'rgb(191, 191, 191)';

export const getBackground = (type: SwitchType, switchStatus: boolean) => {
  let backGround = primaryBackground;
  if (switchStatus) {
    if (type === 'custom') {
      backGround = customBackground;
    } else if (type === 'ios') {
      backGround = iosBackground;
    } else if (type === 'light') {
      backGround = primaryLightBackground;
    }
  } else {
    backGround = unCheckedBackground;
  }

  return backGround;
};

export const track = () => {
  const height = {
    small: '17px',
    medium: '23px',
    large: '26px',
  };

  const minWidth = {
    small: '44px',
    medium: '50px',
    large: '56px',
  };
  return { height, minWidth };
};

export const rightSwitch = () => {
  const dotRightSwitch = {
    small: '-14px',
    medium: '-20px',
    large: '-26px',
  };

  const dotRightSwitchNone = {
    small: '14px',
    medium: '20px',
    large: '26px',
  };
  return { dotRightSwitch, dotRightSwitchNone };
};

export const dot = () => {
  const sizeDotWrapper = {
    small: '42px',
    medium: '50px',
    large: '53px',
  };

  const sizeDot = {
    small: '24px',
    medium: '30px',
    large: '36px',
  };

  return { sizeDot, sizeDotWrapper };
};
