export class INTERFACE{
    #_html_element
    constructor(html){
        this.#_html_element = html
    }

    displayItems(items){
        console.log()
        items.forEach((item)=>{
            this.#_html_element.innerHTML +=`<div class="board__item">
                                                <p>${item.title}</p>
                                                <a class = "nextButton" href="javascript:void(0)">&#8680;</a>
                                                <a class = "closeButton" href="javascript:void(0)">&#10005;</a>
                                             </div>`
        }) 
    }

    clearItems(){
        this.#_html_element.innerHTML = ""
    }
}