import { AlignType } from 'Ocean/common/type';
import { css, FlattenSimpleInterpolation } from 'styled-components';

export function getDrawerPosition(
  align: AlignType,
  width: number | string,
  isFullScreen: boolean,
): FlattenSimpleInterpolation {
  let size = typeof width === 'string' ? width : `${width}%`;
  size = isFullScreen ? '100%' : size;

  function getStyleByAlign(align: AlignType): FlattenSimpleInterpolation {
    const map = {
      left: {
        top: 0,
        left: 0,
        height: '100%',
        width: size,
      },
      bottom: {
        bottom: 0,
        left: 0,
        width: '100%',
        height: size,
      },
      right: {
        top: 0,
        right: 0,
        height: '100%',
        width: size,
      },
      top: {
        top: 0,
        left: 0,
        width: '100%',
        height: size,
      },
    };
    return css`
      ${map[align]}
    `;
  }
  return getStyleByAlign(align);
}
