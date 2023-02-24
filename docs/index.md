<code src="./page/homePage.tsx" inline="true"></code>

```tsx | demo
/**
 * inline: true
 */
import { Button, GlobalThemeProvider, ocean } from '@cyan-ocean/ui';
import { Section } from './site/Section';
import './site/styles.less';

export default () => (
  <Section
    title="CSS Atomic Experience "
    style={{ marginTop: 100 }}
    titleStyle={{
      paddingBottom: 100,
      fontWeight: 'bold',
      fontSize: 40,
      textAlign: 'center',
    }}
  >
    <GlobalThemeProvider>
      <ocean.section
        display="flex"
        justify="center"
        align="center"
        border="1px"
        rounded="lg"
        borderColor="slate.300"
        className="section"
      >
        <ocean.div
          bg="white"
          transition="all ease 110ms"
          h="200px"
          px={5}
          rounded={'lg'}
          display="flex"
          align="center"
          justify="center"
          _hover={{ bg: 'cyan.100' }}
          _active={{ bg: 'slate.300' }}
        >
          <Button type="primary">Hello</Button>
        </ocean.div>
        <ocean.div
          mx={10}
          className="img"
          background="url('https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/53ec527f43474b9888f38ff8ff48ae6f~tplv-k3u1fbpfcp-watermark.image?') center / contain no-repeat "
          w={400}
          h={400}
        ></ocean.div>
      </ocean.section>
    </GlobalThemeProvider>
  </Section>
);
```

```tsx | demo
/**
 * inline: true
 */
import { Section } from './site/Section';
import './site/styles.less';

export default () => (
  <Section
    style={{ marginTop: 100 }}
    title="Less code. More speed"
    titleStyle={{
      paddingBottom: 100,
      fontWeight: 'bold',
      fontSize: 40,
      textAlign: 'center',
    }}
  >
    <iframe
      className="codesandbox"
      src="https://codesandbox.io/s/oceanui-pkw6v5"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
  </Section>
);
```
