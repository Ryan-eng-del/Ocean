import { generateBaseCpn } from './styled';

function factory() {
  return new Proxy(generateBaseCpn, {
    get(_, tagName: any) {
      return generateBaseCpn(tagName);
    },
  });
}

export default factory();
