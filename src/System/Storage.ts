import { ColorMode } from './colorMode';
export const STORAGE_KEY = 'ocean-ui-color-mode';

export interface StorageManager {
  get(): ColorMode['initialMode'] | undefined;
  set(value: ColorMode['initialMode']): void;
}

export function createLocalStorageManager(key: string): StorageManager {
  return {
    get() {
      let value: any;
      value = localStorage.getItem(key);
      return value;
    },

    set(value) {
      localStorage.setItem(key, value);
    },
  };
}

export const localStorageManager = createLocalStorageManager(STORAGE_KEY);
