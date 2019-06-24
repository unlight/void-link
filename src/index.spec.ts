/* eslint-disable @typescript-eslint/tslint/config */
import './index';

it('smoke', () => {
    const voidLink = customElements.get('void-link');
    expect(voidLink).toBeDefined();
});

describe('test anchor', () => {

    let a: HTMLAnchorElement;
    let beforeunload = () => fail('Void link should prevent navigating');

    beforeEach(() => {
        a = document.createElement('a', { is: 'void-link' });
        a.innerText = 'test anchor';
        window.addEventListener('beforeunload', beforeunload);
    });

    afterEach(() => {
        a.remove();
        window.removeEventListener('beforeunload', beforeunload);
    });

    it('empty href', () => {
        a.href = '';
        document.body.appendChild(a);
        a.click();
    });

    it('hash', () => {
        a.href = '#';
        document.body.appendChild(a);
        a.click();
    });

    it('attribute', () => {
        a.setAttribute('href', '#');
        document.body.appendChild(a);
    });

});
