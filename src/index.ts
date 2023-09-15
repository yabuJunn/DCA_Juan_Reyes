import data from "./data"
import "./componets/divPixel/divPixel"

class AppContainer extends HTMLElement{
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
        link.setAttribute("href", "/dist/index.css")
        this.shadowRoot?.appendChild(link)

        data.images.map( (bigImage)=> {
            const section = this.ownerDocument.createElement("section")
            section.classList.add("bigImage")
            this.shadowRoot?.appendChild(section)
            bigImage.map( (pixelLine) => {
                section.style.width = `${pixelLine.length}0px`
                pixelLine.map( (pixel) => {
                    const pixelPrueba = this.ownerDocument.createElement("div-pixel")
                    pixelPrueba.setAttribute("color", `${pixel}`)
                    section.appendChild(pixelPrueba)
                })
            })
        })
    }
}

customElements.define("app-container", AppContainer)