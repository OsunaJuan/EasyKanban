import { ITEM } from "./class-item.mjs"
import { BOARD } from "./class-Board.mjs"

let todoInterface = document.querySelector("#todoBoard")
let doingInterface = document.querySelector("#doingBoard")
let doneInterface = document.querySelector("#doneBoard")


let doneBoard = new BOARD({title : "doneBoard",inter:doneInterface});
let doingBoard = new BOARD({title : "doingBoard",nextState: doneBoard, inter:doingInterface});
let todoBoard = new BOARD({title : "todoBoard",nextState: doingBoard, inter: todoInterface});

let a = new ITEM({title : "enviar Cv",id: 1})

todoBoard.items_list = a;



todoBoard.addEL()
doingBoard.addEL()





