import { GlobalMargin } from '@cyan-ocean/ui/common/variable';
import styled from '@emotion/styled';

const skeletonContainerBackground = 'rgba(224, 224, 224, 1)';
const skeletonCardBackground = `linear-gradient(
  90deg,
  hsla(0, 0%, 100%, 0),
  hsla(0, 0%, 100%, 0.3),
  hsla(0, 0%, 100%, 0)
)`;

export const SkeletonLine = styled.div<{ lineWidth: string }>`
  height: 15px;
  width: ${(props) => props.lineWidth};

  background-color: ${skeletonContainerBackground};
  position: relative;
  z-index: 1;
  margin-bottom: ${GlobalMargin.ms};
  overflow: hidden;
  border-radius: 10px;

  @keyframes ocean-skeleton-transform {
    75% {
      left: -100%;
    }

    100% {
      left: 100%;
    }
  }

  &::after {
    position: absolute;
    top: 0;
    left: -100%;
    z-index: 2;
    width: 100%;
    height: 100%;
    background: ${skeletonCardBackground};
    animation: 1.5s ocean-skeleton-transform linear infinite normal;
    content: '';
  }
`;

export const SkeletonWrapper = styled.div`
  display: flex;
`;

export const SkeletonLineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const SkeletonAvatar = styled.div`
  position: relative;
  z-index: 1;
  overflow: hidden;
  margin-right: 20px;
  background: ${skeletonContainerBackground};

  border-radius: 50%;
  width: 50px;
  height: 50px;

  &::after {
    position: absolute;
    top: 0;
    left: -100%;
    z-index: 2;
    width: 100%;
    height: 100%;
    background: ${skeletonCardBackground};
    animation: 1.2s ocean-skeleton-transform linear infinite normal;
    content: '';
  }
`;
