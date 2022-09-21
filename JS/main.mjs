import { ITEM } from "./class-item.mjs"
import { BOARD } from "./class-Board.mjs"

let todoInterface = document.querySelector("#todoBoard")
let doingInterface = document.querySelector("#doingBoard")
let doneInterface = document.querySelector("#doneBoard")


let doneBoard = new BOARD({title : "doneBoard",inter:doneInterface});
let doingBoard = new BOARD({title : "doingBoard",nextState: doneBoard, inter:doingInterface});
let todoBoard = new BOARD({title : "todoBoard",nextState: doingBoard, inter: todoInterface});

let a = new ITEM({title : "enviar Cv",id: 1})
let b = new ITEM({title : "Llamar mama",id: 2})
let c = new ITEM({title : "Sacar Perro",id: 3})

todoBoard.items_list = a;
todoBoard.items_list = b;
todoBoard.items_list = c;







