import { BOARD } from "./class-Board.mjs"
import {modal} from "./class-modal.mjs"

//Creacion de las boards
const doingInterface = document.querySelector("#doingBoard")
const todoInterface = document.querySelector("#todoBoard")
const doneInterface = document.querySelector("#doneBoard")

const doneBoard = new BOARD({title : "doneBoard",inter:doneInterface,nextState: null});
const doingBoard = new BOARD({title : "doingBoard",nextState: doneBoard, inter:doingInterface});
const todoBoard = new BOARD({title : "todoBoard",nextState: doingBoard, inter: todoInterface});

//Creacion del modal
const modalinterface = document.querySelector(".modalContainer");
const taskTitle = document.querySelector("#itemTitle");
const boardsBttn = document.getElementsByClassName("BoardSelector__bttn");
const ok = document.querySelector(".okBttn");
const cancel= document.querySelector(".cancelbttn")
const close = document.querySelector(".modal__closeBttn")
const boardsArray = [todoBoard,doingBoard,doneBoard]
const addButtons = document.querySelectorAll(".board__Add")

const creatorModal = new modal({interfaz: modalinterface, task:taskTitle,boardBttn:boardsBttn,addBttn:addButtons,okBttn:ok,cancelBttn: cancel, closeBttn: close,boards:boardsArray})

creatorModal.addEvents()









