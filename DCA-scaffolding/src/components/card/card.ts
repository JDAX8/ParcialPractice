export default class productcard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"})
    }

    connectedCallback(){
        this.render()
    }

    render(){
        if(this.shadowRoot)this.shadowRoot.innerHTML=''

        const contanier = this.ownerDocument.createElement("section")
        contanier.className = "container"

        
        const contname = this.ownerDocument.createElement("section")
        contanier.className = "contname"

        
        const contprice = this.ownerDocument.createElement("section")
        contanier.className = "contprice"

        const namep = this.ownerDocument.createElement("h1")
        namep.textContent = "Name"
        namep.className = "name"

        const name = this.ownerDocument.createElement("input")
        name.className = "name"

        const pricep = this.ownerDocument.createElement("h1")
        pricep.textContent = "Price"
        pricep.className = "name"


        var price = this.ownerDocument.createElement("input")
        price.className = "price"

        const btn = this.ownerDocument.createElement("button")
        btn.className = "btn"
        btn.textContent ="New product"

        contname.appendChild(namep)
        contprice.appendChild(pricep)
        contname.appendChild(name)
        contprice.appendChild(price)

        contanier.appendChild(contname)
        contanier.appendChild(contprice)
        contanier.appendChild(btn)
       

        this.shadowRoot?.appendChild(contanier)
    }
}
customElements.define('app-productcard', productcard )