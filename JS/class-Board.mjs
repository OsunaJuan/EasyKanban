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

    //Funcion que añade los elementos al array de elementos en el listado, cada vez que se ejecuta o añade un elemento refresca el HTML
    set items_list(elements){
        if(elements instanceof ITEM){
            this.items_list.push(elements)
            this.#_interface.clearItems()
            this.#_interface.displayItems(this.#_items_list)
        }else{
            throw console.error("Elemento no es del tipo ITEM");
        }     
        
        this.addEL()
        
    }

    moveItem(id){
        let item = this.#_items_list.find(element => element.id == id)
        let itemIndex =  this.#_items_list.findIndex(element => element.id == id)

        if( this.#_nextState != null){
            item.state = this.#_nextState.boardTitle
            this.items_list.splice(itemIndex, 1)    
            this.#_nextState.items_list = item
            this.#_interface.clearItems()
            this.#_interface.displayItems(this.#_items_list)  
            this.addEL()
        }else if(this.#_nextState == null){
            this.deleteItem(id)
        }
       
       
    }

    deleteItem(id){ 
        let itemIndex = this.#_items_list.findIndex(element => element.id == id)
        this.#_items_list.splice(itemIndex,1)
        this.#_interface.clearItems()
        this.#_interface.displayItems(this.#_items_list)  
        this.addEL()
    }

    addEL(){
        let nextButton = document.querySelectorAll("#" + this.#_boardTitle + " .nextButton")
        let closeButton = document.querySelectorAll("#" + this.#_boardTitle + " .closeButton")
        nextButton.forEach(item =>{
            item.addEventListener("click",this.moveItem.bind(this,item.dataset.id))       
        } )
        closeButton.forEach(item =>{      
            item.addEventListener("click",this.deleteItem.bind(this,item.dataset.id))
        })
    }


}

