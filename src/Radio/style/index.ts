import {
  GlobalColor,
  GlobalFontSize,
  TypeButtonColor,
} from '@cyan-ocean/ui/common/variable';
import styled from '@emotion/styled';

type RadioWrapper = {
  isSelect: boolean;
  size: { size: string; fontSize: string };
  isText: boolean;
  isDanger: boolean;
  isSolid: boolean;
};

export const RadioWrapper = styled.div<RadioWrapper>`
  ${(props) => ({
    width: `${props.size.size}`,
    height: `${props.size.size}`,
    lineHeight: `${props.size.size}`,
  })};

  border-radius: 50%;
  text-align: center;

  overflow: hidden;
  display: flex;
  cursor: pointer;

  border: ${`1.5px solid ${GlobalColor.OceanBorderLightColor}`};

  & button {
    border: none;
    font-size: ${(props) => props.size.fontSize};
    padding: 0;
    border-radius: 50%;
    box-sizing: border-box;
    background-color: ${(props) => {
      let re;
      re =
        props.isText && props.isSelect
          ? GlobalColor.OceanHoverLight
          : undefined;
      if (re) return re;

      re =
        props.isDanger && props.isSelect
          ? TypeButtonColor.ganderColor
          : undefined;
      return re;
    }};

    background-color: ${(props) => (!props.isSolid ? '#fff' : undefined)};

    border: ${(props) => {
      return !props.isSolid && props.isSelect
        ? `5px solid ${GlobalColor.OceanPrimaryColor}`
        : undefined;
    }};

    &:hover {
      background-color: ${(props) => {
        let re;
        re =
          props.isText && props.isSelect
            ? GlobalColor.OceanHoverLight
            : undefined;
        if (re) return re;
        re = props.isDanger ? TypeButtonColor.ganderColor : undefined;
        return re;
      }};

      color: ${(props) => {
        return props.isDanger ? GlobalColor.OceanRedColor : undefined;
      }};
    }
  }
`;
export const RadioContentWrapper = styled.div`
  margin-left: 7px;
  font-size: ${GlobalFontSize.small};
`;

export const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 14px;
  margin-right: 17px;
`;
