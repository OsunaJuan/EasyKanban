import { ITEM } from "./class-item.mjs";
export class modal{
    #_idCounter
    #_interface;
    #_task;
    #_buttons;
    #_addBttns;
    #_ok;
    #_cancel;
    #_boards;
    #_close;
    constructor({interfaz,task,boardBttn,addBttn,okBttn,cancelBttn,closeBttn,boards}) {
        this.activeBttn; 
        this.#_idCounter = 0;
        this.#_interface = interfaz;
        this.#_task = task;
        this.#_buttons = Array.from(boardBttn); 
        this.#_addBttns = Array.from(addBttn)
        this.#_ok = okBttn;
        this.#_cancel = cancelBttn;
        this.#_close = closeBttn;
        this.#_boards = boards;

        this.#_interface.addEventListener("click",evento =>{
            if(evento.target.matches(".modalContainer")){
                this.ToggleModal({})
            }
        })
    }

    addEvents(){
        this.#_ok.addEventListener("click",this.createTask.bind(this,this.#_task))
        this.#_cancel.addEventListener("click",this.ToggleModal.bind(this))
        this.#_close.addEventListener("click",this.ToggleModal.bind(this))

        this.#_buttons.forEach(element => {
 
            element.addEventListener("click",this.setActiveBttn.bind(this,element.dataset.bttnid
                ))
        });

        this.#_addBttns.forEach(element=>{
            console.log()
            element.addEventListener("click",this.ToggleModal.bind(this,{id:element.dataset.boardid}))
        })
        
    }

    setActiveBttn(bttnId){
        this.activeBttn = bttnId;
    }

    createTask(taskTitle){
        const tempITEM = new ITEM({title:taskTitle.value,state:"",id: this.#_idCounter})
        if(this.activeBttn == 0){
            tempITEM.state = "todoBoard"
            this.#_boards[0].items_list = tempITEM
        }
        else if(this.activeBttn == 1){
            tempITEM.state = "doingBoard"
            this.#_boards[1].items_list = tempITEM
        }
        else if(this.activeBttn == 2){
            tempITEM.state = "todoBoard"
            this.#_boards[2].items_list = tempITEM
        }

        this.#_idCounter++

        this.#_interface.classList.toggle("hidden")
    }

    ToggleModal({id}){
        this.setActiveBttn(id)
        this.#_interface.classList.toggle("hidden")

    }



}