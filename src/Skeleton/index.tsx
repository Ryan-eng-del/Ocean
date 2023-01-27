import { GlobalMargin } from 'Ocean/common/variable';
import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { PxType } from '../common/type';
import { handlePx } from '../util/common';

interface Skeleton {
  title?: boolean;
  avatar?: boolean;
  row: number;
  width?: PxType[] | PxType;
  avatarSize?: PxType;
  loading?: boolean;
  children?: ReactNode;
}

const skeletonContainerBackground = 'rgba(224, 224, 224, 1)';
const skeletonCardBackground = `linear-gradient(
  90deg,
  hsla(0, 0%, 100%, 0),
  hsla(0, 0%, 100%, 0.3),
  hsla(0, 0%, 100%, 0)
)`;

const SkeletonLine = styled.div<{ lineWidth: string }>`
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

const SkeletonWrapper = styled.div`
  display: flex;
`;

const SkeletonLineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const SkeletonAvatar = styled.div`
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

const Skeleton = (props: Skeleton) => {
  const {
    row,
    width = '100%',
    avatar = false,
    loading = true,
    children,
  } = props;

  const skeletonWidth = ((): string[] | string => {
    const widthIsArray = Array.isArray(width);

    if (!widthIsArray && width) {
      return handlePx(width);
    } else if (widthIsArray) {
      return width.map((w) => {
        if (typeof w === 'number') {
          return handlePx(w);
        }
        return w;
      }) as string[] | string;
    } else {
      return width as string;
    }
  })();

  return (
    <SkeletonWrapper>
      {!loading ? (
        <>{children}</>
      ) : (
        <>
          {avatar && <SkeletonAvatar></SkeletonAvatar>}
          <SkeletonLineWrapper>
            {Array.from({ length: row }).map((_, index) => {
              return (
                <SkeletonLine
                  key={index}
                  className="ocean-skeleton-line"
                  lineWidth={
                    Array.isArray(skeletonWidth)
                      ? skeletonWidth[index]
                      : skeletonWidth
                  }
                ></SkeletonLine>
              );
            })}
          </SkeletonLineWrapper>
        </>
      )}
    </SkeletonWrapper>
  );
};

export default Skeleton;
