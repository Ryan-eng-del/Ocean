import {
  createContext as createReactContext,
  useContext as useReactContext,
} from 'react';

export type ContextReturn<T> = [React.Provider<T>, () => T, React.Context<T>];

export const createContext = <T>(): ContextReturn<T> => {
  const Context = createReactContext<T | undefined>(undefined);

  function useContext() {
    const reactContext = useReactContext(Context);
    return reactContext;
  }
  return [Context.Provider, useContext, Context] as ContextReturn<T>;
};
