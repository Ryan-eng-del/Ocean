import { Message } from './message';

interface State {
  top: any[];
  'top-left': any[];
  'top-right': any[];
  'bottom-left': any[];
  bottom: any[];
  'bottom-right': any[];
}

const initialState: State = {
  top: [],
  'top-left': [],
  'top-right': [],
  'bottom-left': [],
  bottom: [],
  'bottom-right': [],
};

let counter = 0;

function createMessage(message: (props: Message) => JSX.Element, opt: Message) {
  counter += 1;
  const id = opt.id ?? counter;
  return { message, id, ...opt };
}

interface MessageStore {
  getState: () => void;
  subscribe: (listener: () => void) => () => void;
  notify: (
    message: (props: Message) => JSX.Element,
    opt: Message,
  ) => string | number;
}

function createStore(): MessageStore {
  let state = initialState;

  const listeners = new Set<any>();

  const setStore = (updateStore: <T extends State>(oldStore: T) => T) => {
    state = updateStore(state);
  };

  return {
    getState: () => state,
    subscribe(listener: any) {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },

    notify(message: (props: Message) => JSX.Element, opt: Message) {
      const {
        message: messageCpn,
        id,
        position = 'bottom',
      } = createMessage(message, opt);

      setStore((oldStore) => {
        return {
          ...oldStore,
          [position as keyof State]: [
            ...oldStore[position as keyof State].concat(messageCpn),
          ],
        };
      });

      listeners.forEach((listener) => {
        listener();
      });

      return id;
    },
  };
}

export default createStore();
