export class ITEM{
    #_title
    #_state
    constructor({title, state ="TODO"}){
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


}