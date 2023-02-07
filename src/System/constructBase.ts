import { generateBaseCpn } from './styled';
import { DOMElements, OceanHTMLComponent } from './system.type';

function factory() {
  /* 为什么要有这个 map，防止 emotion 再去重新
    创建 div ，更新时导致 React diff 时卸载并
    重新挂载整个子组件。
  */
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
