import { generateBaseCpn } from './styled';
import { DOMElements, OceanHTMLComponent } from './system.type';

function factory() {
  const map = new Map<DOMElements, any>();
  return new Proxy(generateBaseCpn as any as OceanHTMLComponent, {
    get(_, tagName: DOMElements) {
      if (!map.get(tagName)) {
        map.set(tagName, generateBaseCpn(tagName));
      }

      return map.get(tagName);
    },
  });
}

export default factory();
