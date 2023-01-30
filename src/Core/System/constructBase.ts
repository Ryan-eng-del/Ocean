import { generateBaseCpn } from './styled';
import { DOMElements, OceanHTMLComponent } from './system.type';

function factory() {
  return new Proxy(generateBaseCpn as any as OceanHTMLComponent, {
    get(_, tagName: DOMElements) {
      return generateBaseCpn(tagName);
    },
  });
}
export default factory();
