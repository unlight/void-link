export class VoidLinkElement extends HTMLAnchorElement {

    /**
     * Invoked each time the custom element is appended into a document-connected element.
     * This will happen each time the node is moved, and may happen before the element's contents
     * have been fully parsed
     */
    connectedCallback() {
        this.addEventListener('click', this);
    }

    /**
     * Invoked each time the custom element is disconnected from the document's DOM.
     */
    disconnectedCallback() {
        this.removeEventListener('click', this);
    }

    /**
     * Invoked each time one of the custom element's attributes is added, removed, or changed.
     * Which attributes to notice change for is specified in a static get observedAttributes method
     */
    // attributeChangedCallback(name, oldValue, newValue) {
    // }

    handleEvent(event: Event) {
        if (event.type === 'click') {
            const hrefAttribute = this.getAttribute('href');
            if (!this.href || !hrefAttribute || hrefAttribute === '#') {
                event.preventDefault();
                return false;
            }
        }
    }

}

customElements.define('void-link', VoidLinkElement, { extends: 'a' });
