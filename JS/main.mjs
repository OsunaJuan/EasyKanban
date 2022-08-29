import { ITEM } from "./class-item.mjs"
import { BOARD } from "./class-Board.mjs"

let todoInterface = document.querySelector("#todoBoard")
let doingInterface = document.querySelector("#doingBoard")
let doneInterface = document.querySelector("#doneBoard")


let doneBoard = new BOARD({title : "DONE",inter:doneInterface});
let doingBoard = new BOARD({title : "DOING",nextState: doneBoard, inter:doingInterface});
let todoBoard = new BOARD({title : "TODO",nextState: doingBoard, inter: todoInterface });

let a = new ITEM({title : "enviar Cv"})

todoBoard.items_list = a;
todoBoard.items_list = a;
todoBoard.items_list = a;
todoBoard.items_list = a;

todoBoard.moveItem(todoBoard.items_list[0])
console.log(doingBoard.items_list[0])

todoBoard.addEL()







