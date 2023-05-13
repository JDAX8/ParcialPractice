import { productcard } from "../components/export";

export default class dashboard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"})
    }

    async connectedCallback(){
        this.render()
    }

    render(){
        if(this.shadowRoot)this.shadowRoot.innerHTML=''

        const product = this.ownerDocument.createElement("app-productcard")
        product.className = "product"
        this.shadowRoot?.appendChild(product)
    }
}
customElements.define('dashboard-app', dashboard )