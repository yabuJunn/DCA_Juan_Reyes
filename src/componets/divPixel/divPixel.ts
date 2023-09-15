enum DivPixelProperties {
    "color" = "color"
}

class DivPixel extends HTMLElement {
    properties = {
        color: ""
    }

    static get observedAttributes() {
        return ["color"]
    }

    attributeChangedCallback(propName: string, oldValue: string, newValue: string) {
        switch (propName) {
            case "color":
                this.properties.color = newValue
                break;
            default:
                break;
        }
    }

    constructor() {
        super()
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const link = this.ownerDocument.createElement("link")
        link.setAttribute("rel", "stylesheet")
        link.setAttribute("href", "/src/componets/divPixel/divPixel.css")
        this.shadowRoot?.appendChild(link)

        const div = this.ownerDocument.createElement("div")
        div.classList.add("pixel")

        const color: any = this.properties.color
        if (color === "0") {
            div.classList.add("pixel0")
        } else {
            div.classList.add("pixel1")
        }
        
        this.shadowRoot?.appendChild(div)
    }
}

customElements.define("div-pixel", DivPixel)

export default DivPixel