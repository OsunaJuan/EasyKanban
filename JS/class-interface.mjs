export class INTERFACE{
    #_html_element
    constructor(html){
        this.#_html_element = html
    }

    displayItems(items){
        items.forEach((item) =>{

            this.#_html_element.innerHTML +=`<div class="board__item">
                                                <p>${item.title}</p>
                                                <a class = "nextButton" data-id=${item.id} href="javascript:void(0)" ">&#8680;</a>
                                                <a class = "closeButton" href="javascript:void(0)">&#10005;</a>
                                             </div>`
        }) 
    }

    clearItems(){
        this.#_html_element.innerHTML = ""
    }
}