import { ITEM } from "./class-item.mjs"
import { INTERFACE } from "./class-interface.mjs"

export class BOARD{
    #_boardTitle
    #_items_list = []
    #_nextState
    #_interface
    constructor({title,nextState,inter}){
        this.#_boardTitle = title
        this.#_nextState = nextState
        this.#_interface = new INTERFACE(inter)
    }        
    get boardTitle(){
        return this.#_boardTitle
    }
    get interface(){
        return this.#_interface
    }

    get items_list(){
        return this.#_items_list
    }

    //Funcion que añade los elementos al array de elementos TODO, cada vez que se ejecuta añade el elemento  y refresca el HTML
    set items_list(elements){
        if(elements instanceof ITEM){
            this.items_list.push(elements)
            this.#_interface.clearItems()
            this.#_interface.displayItems(this.#_items_list)
            this.addEL()

        }else{
            throw console.error("Elemento no es del tipo ITEM");
        }       
        
    }

    moveItem(id){
        let item = this.#_items_list.find(element => element.id == id)
        console.log(item)
        item.state = this.#_nextState.boardTitle
        this.#_nextState.items_list = item
        this.items_list.splice(this.#_items_list.indexOf(item), 1)
        this.#_interface.clearItems()
        this.#_interface.displayItems(this.#_items_list,this.moveItem)  
        this.addEL()
    }

    addEL(){
        let nextButton = document.querySelectorAll("#" + this.#_boardTitle + " .nextButton")
        let closeButton = document.querySelectorAll("#" + this.#_boardTitle + " .closeButton")
        nextButton.forEach(item =>{
            item.addEventListener("click",this.moveItem.bind(this,item.dataset.id))       
        } )
    }


}

