import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';

describe('<Foo />', () => {
  it('render Foo with dumi', () => {
    const msg = 'dumi';

    // render(<Foo title={msg} />);
    expect(screen.queryByText(msg)).toBeInTheDocument();
  });
});
