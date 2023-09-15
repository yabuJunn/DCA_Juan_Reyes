import data from "../data"
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

        this.createSections(data)
    }

    createSections(data: any) {
        const sectionList = []

        for (let i = 0; i < 9; i++) {
            const section = this.ownerDocument.createElement("section")
            section.classList.add(`section${i}`)
            sectionList.push(section)
            this.shadowRoot?.appendChild(section)
        }

        this.createPixels(data.images[0], sectionList[0])
        this.createPixels(data.images[1], sectionList[1])
        this.createPixels(data.images[2], sectionList[2])
        this.createPixels(data.images[3], sectionList[3])
        this.createPixels(data.images[4], sectionList[4])
        this.createPixels(data.images[5], sectionList[5])
        this.createPixels(data.images[6], sectionList[6])
        this.createPixels(data.images[7], sectionList[7])
    }

    createPixels(data: any, section: any) {
        const imageArray: Array<number> = []
        data.map((list: Array<number>) => {
                list.map( (pixel)=> {
                imageArray.push(pixel)
            })
        })
        
        imageArray.map( (pixel: any) => {
            const div = this.ownerDocument.createElement("div-pixel")
            div.setAttribute("color", pixel)
            section.appendChild(div)
        })
    }

}

customElements.define("app-container", AppContainer)