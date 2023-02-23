import React, { ReactNode } from 'react';
import { PxType } from '../common/type';
import { handlePx } from '../util/common';
import {
  SkeletonAvatar,
  SkeletonLine,
  SkeletonLineWrapper,
  SkeletonWrapper,
} from './style';

interface Skeleton {
  title?: boolean;
  avatar?: boolean;
  row: number;
  width?: PxType[] | PxType;
  avatarSize?: PxType;
  loading?: boolean;
  children?: ReactNode;
}

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
