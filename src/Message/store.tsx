import { Message, MessagePosition } from './message';

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

export interface MessageStore {
  getState: () => State;
  subscribe: (listener: () => void) => () => void;
  notify: (message: (props: Message) => JSX.Element, opt: Message) => React.Key;
  close: (id: React.Key) => void;
  update: (
    message: (props: Message) => JSX.Element,
    opt: Message,
    id: React.Key,
  ) => void;
  closeId: (position: MessagePosition, id: React.Key) => void;
}

export const findById = (arr: any[], id: React.Key) =>
  arr.find((toast) => toast.id === id);

export function getToastPosition(toasts: State, id: React.Key) {
  for (const [position, values] of Object.entries(toasts)) {
    if (findById(values, id)) {
      return position as MessagePosition;
    }
  }
}

function createStore(): MessageStore {
  let state = initialState;
  const listeners = new Set<any>();

  const setStore = (updateStore: (oldStore: State) => State) => {
    state = updateStore(state);
    listeners.forEach((listener) => {
      listener();
    });
  };

  return {
    closeId: (position, id) => {
      setStore((prevState) => ({
        ...prevState,
        [position]: prevState[position as keyof State].filter(
          (toast) => toast.id !== id,
        ),
      }));
    },

    getState: () => state,

    subscribe(listener: any) {
      listeners.add(listener);
      return () => {
        setStore(() => {
          return initialState;
        });
        listeners.delete(listener);
      };
    },

    update(
      message: (props: Message) => JSX.Element,
      opt: Message,
      id: React.Key,
    ) {
      const { message: messageCpn, id: newId } = createMessage(message, opt);

      setStore((prevState) => {
        const newState = { ...prevState };
        const position = getToastPosition(prevState, id);
        if (!position) return prevState;

        const oldIndex = prevState[position].findIndex((p) => {
          return p.id === id;
        });

        newState[position][oldIndex] = { messageCpn, id: newId };
        return newState;
      });
    },

    notify(message: (props: Message) => JSX.Element, opt: Message) {
      const {
        message: messageCpn,
        id,
        position = 'top',
      } = createMessage(message, opt);

      setStore((preStore) => {
        const msg = { messageCpn, id };
        const msgs = position.includes('top')
          ? [msg, ...(preStore[position] ?? [])]
          : [...(preStore[position] ?? []), msg];

        return {
          ...preStore,
          [position]: msgs,
        };
      });
      return id;
    },

    close(id: React.Key) {
      setStore((prevState) => {
        const position = getToastPosition(prevState, id);
        if (!position) return prevState;
        return {
          ...prevState,
          [position]: prevState[position].filter((toast) => {
            return id !== toast.id;
          }),
        };
      });
    },
  };
}

export default createStore();
