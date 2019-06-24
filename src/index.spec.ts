/* eslint-disable @typescript-eslint/tslint/config */
import './index';

it('smoke', () => {
    const voidLink = customElements.get('void-link');
    expect(voidLink).toBeDefined();
});
