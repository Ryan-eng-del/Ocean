import React, { useCallback, useEffect, useState } from 'react';
import { createContext } from '../hooks/useContext';
import { localStorageManager } from './Storage';

export const [ColorModeContext, useColorMode] = createContext<{
  initialMode: 'dark' | 'light';
  toggleTheme: () => void;
}>();

export interface ColorMode {
  initialMode: 'dark' | 'light';
  children?: React.ReactNode;
}

export const ColorModeProvider = (props: ColorMode) => {
  const { initialMode, ...restProps } = props;

  const defaultMode =
    localStorageManager.get() || (initialMode === 'dark' ? 'dark' : 'light');

  const [curTheme, setCurTheme] = useState(initialMode);

  const setCurMode = useCallback(
    (value: ColorMode['initialMode']) => {
      setCurTheme(value);
      localStorageManager.set(value);
    },
    [curTheme, initialMode],
  );

  useEffect(() => {
    setCurMode(defaultMode);
  }, []);

  const toggleTheme = useCallback(() => {
    setCurMode(curTheme === 'dark' ? 'light' : 'dark');
  }, [curTheme]);

  const context = {
    initialMode: curTheme,
    toggleTheme,
  };

  return <ColorModeContext value={context} {...restProps}></ColorModeContext>;
};
