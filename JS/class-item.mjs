export class ITEM{
    #_title
    #_state
    #_id
    constructor({title, state ="TODO",id}){
            this.#_id = id
            this.#_title = title,
            this.#_state = state
    }

    set title(strig){
        this.#_title = strig
    }

    get title(){
        return this.#_title
    }

    set state(strig){
        this.#_state = strig
    }

    get state(){
        return this.#_state
    }

    set id(int){
        this.#_id = int
    }

    get id(){
        return this.#_id
    }


}