import styled from '@emotion/styled';
import React, { useImperativeHandle, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './collapse.css';

interface Collapse {
  children: React.ReactNode;
}

export interface CollapseRef {
  clickCollapse: () => void;
}

const TreeItemContainer = styled.ul`
  padding-left: 17px;
  margin: 0;
  transition: all 330ms ease;
`;

const Collapse = React.forwardRef(
  (props: Collapse, ref: React.ForwardedRef<CollapseRef>) => {
    const wrapperRef = useRef<any>(null);
    const [expand, setExpand] = useState(true);
    const heightRef = useRef('');
    const collapsedSize = 0;
    const getWrapperHeight = () => wrapperRef.current.clientHeight + 'px';
    type callback = (
      node: HTMLElement,
      heightRef: React.MutableRefObject<string>,
    ) => void;

    useImperativeHandle(ref, () => ({
      clickCollapse() {
        setExpand(!expand);
      },
    }));

    const transitionCallback = (callback: callback) => () => {
      callback(wrapperRef.current, heightRef);
    };

    const handleOnEnter = transitionCallback((node: HTMLElement) => {
      node.style['height'] = collapsedSize + 'px';
    });

    const handleEntering = transitionCallback((node: HTMLElement) => {
      node.style['height'] = heightRef.current;
    });

    const handelEntered = transitionCallback(
      (node: HTMLElement, heightRef: React.MutableRefObject<string>) => {
        node.style['height'] = 'auto';
        heightRef.current = getWrapperHeight();
      },
    );

    const handleOnExit = transitionCallback(
      (node: HTMLElement, heightRef: React.MutableRefObject<string>) => {
        const height = node.clientHeight + 'px';
        node.style['height'] = height;

        if (!heightRef.current) {
          heightRef.current = height;
        }
      },
    );

    const handleOnExiting = transitionCallback(() => {
      wrapperRef.current.style['height'] = 0;
    });

    return (
      <>
        <CSSTransition
          in={expand}
          nodeRef={wrapperRef}
          timeout={330}
          classNames={'expand'}
          onEnter={handleOnEnter}
          onEntering={handleEntering}
          onEntered={handelEntered}
          onExit={handleOnExit}
          onExiting={handleOnExiting}
        >
          <TreeItemContainer ref={wrapperRef}>
            {props.children}
          </TreeItemContainer>
        </CSSTransition>
      </>
    );
  },
);

export default Collapse;
