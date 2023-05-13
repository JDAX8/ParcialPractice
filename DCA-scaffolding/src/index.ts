import "./components/export"
import "../src/screens/dashboard"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const something = this.ownerDocument.createElement('dashboard-app');
        this.shadowRoot?.appendChild(something);
    }
}

customElements.define('app-container', AppContainer)