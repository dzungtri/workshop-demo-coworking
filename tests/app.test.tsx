import { renderToString } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { App } from '../src/App';

describe('App', () => {
  it('renders the Hello LMS foundation page', () => {
    const html = renderToString(<App />);

    expect(html).toContain('Hello LMS');
    expect(html).toContain('Runnable project base');
  });
});
