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

        const firstImage: Array<number> = []
        data.images[0].map((list) => {
            list.map((pixel)=> {
                firstImage.push(pixel)
            })
        })

        const secondImage: Array<number> = []
        data.images[1].map((list) => {
            list.map((pixel)=> {
                secondImage.push(pixel)
            })
        })

        const thirdImage: Array<number> = []
        data.images[2].map((list) => {
            list.map((pixel)=> {
                thirdImage.push(pixel)
            })
        })

        const fourthImage: Array<number> = []
        data.images[3].map((list) => {
            list.map((pixel)=> {
                fourthImage.push(pixel)
            })
        })

        const fifthImage: Array<number> = []
        data.images[4].map((list) => {
            list.map((pixel)=> {
                fifthImage.push(pixel)
            })
        })

        const sixthImage: Array<number> = []
        data.images[5].map((list) => {
            list.map((pixel)=> {
                sixthImage.push(pixel)
            })
        })

        const seventhImage: Array<number> = []
        data.images[6].map((list) => {
            list.map((pixel)=> {
                seventhImage.push(pixel)
            })
        })

        const eighthImage: Array<number> = []
        data.images[7].map((list) => {
            list.map((pixel)=> {
                eighthImage.push(pixel)
            })
        })

        const section1 = this.ownerDocument.createElement("section")
        section1.classList.add("section1")
        const section2 = this.ownerDocument.createElement("section")
        section2.classList.add("section2")
        const section3 = this.ownerDocument.createElement("section")
        section3.classList.add("section3")
        const section4 = this.ownerDocument.createElement("section")
        section4.classList.add("section4")
        const section5 = this.ownerDocument.createElement("section")
        section5.classList.add("section5")
        const section6 = this.ownerDocument.createElement("section")
        section6.classList.add("section6")
        const section7 = this.ownerDocument.createElement("section")
        section7.classList.add("section7")
        const section8 = this.ownerDocument.createElement("section")
        section8.classList.add("section8")
        

        firstImage.map( (pixel: any) => {
            const div = this.ownerDocument.createElement("div-pixel")
            div.setAttribute("color", pixel)
            section1.appendChild(div)
        })
        secondImage.map( (pixel: any) => {
            const div = this.ownerDocument.createElement("div-pixel")
            div.setAttribute("color", pixel)
            section2.appendChild(div)
        })
        thirdImage.map( (pixel: any) => {
            const div = this.ownerDocument.createElement("div-pixel")
            div.setAttribute("color", pixel)
            section3.appendChild(div)
        })
        fourthImage.map( (pixel: any) => {
            const div = this.ownerDocument.createElement("div-pixel")
            div.setAttribute("color", pixel)
            section4.appendChild(div)
        })
        fifthImage.map( (pixel: any) => {
            const div = this.ownerDocument.createElement("div-pixel")
            div.setAttribute("color", pixel)
            section5.appendChild(div)
        })
        sixthImage.map( (pixel: any) => {
            const div = this.ownerDocument.createElement("div-pixel")
            div.setAttribute("color", pixel)
            section6.appendChild(div)
        })
        seventhImage.map( (pixel: any) => {
            const div = this.ownerDocument.createElement("div-pixel")
            div.setAttribute("color", pixel)
            section7.appendChild(div)
        })
        eighthImage.map( (pixel: any) => {
            const div = this.ownerDocument.createElement("div-pixel")
            div.setAttribute("color", pixel)
            section8.appendChild(div)
        })

        this.shadowRoot?.appendChild(section1)
        this.shadowRoot?.appendChild(section2)
        this.shadowRoot?.appendChild(section3)
        this.shadowRoot?.appendChild(section4)
        this.shadowRoot?.appendChild(section5)
        this.shadowRoot?.appendChild(section6)
        this.shadowRoot?.appendChild(section7)
        this.shadowRoot?.appendChild(section8)
    }

}

customElements.define("app-container", AppContainer)
