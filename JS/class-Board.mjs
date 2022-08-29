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

    get boardTile(){
        return this.#_boardTitle
    }
    get interface(){
        return this.#_interface
    }

    get items_list(){
        return this.#_items_list
    }

    set items_list(elements){
        if(elements instanceof ITEM){
            this.items_list.push(elements)
            this.#_interface.clearItems()
            this.#_interface.displayItems(this.#_items_list)

        }else{
            throw console.error("Elemento no es del tipo ITEM");
        }       
        
    }


    moveItem(item){
        item.state = this.#_nextState.boardTile
        this.#_nextState.items_list = item
        this.items_list.splice(this.#_items_list.indexOf(item), 1)
        this.#_interface.clearItems()
        this.#_interface.displayItems(this.#_items_list)        
    }

    addEL(){
        let nextButton = document.querySelectorAll(".nextButton")
        let closeButton = document.querySelectorAll(".closeButton")
        console.log(nextButton, closeButton)
    }



}

