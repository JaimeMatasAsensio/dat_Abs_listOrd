"use strict";

// Ids de elementos en el HTML

    //Inputs
var IdListLengnthInput = document.getElementById("ListLength");
var IdNumberInput = document.getElementById("Number");
var IdElemInput = document.getElementById("Elem");
var IdIndexInput = document.getElementById("Index");
    //Buttons
var IdCreateBtn = document.getElementById("CreateList");
var IdRestartBtn = document.getElementById("RestartList");
var IdAddBtn = document.getElementById("AddElement");
var IdGetIndexBtn = document.getElementById("GetIndex");
var IdGetElementBtn = document.getElementById("GetElement");
var IdRemoveElementBtn = document.getElementById("RemoveElement");
var IdRemoveAtBtn = document.getElementById("RemoveAt");
var IdLastIndexBtn = document.getElementById("LastIndex");
var IdFirstIndexBtn = document.getElementById("FirstIndex");
var IdFillRandomBtn = document.getElementById("FillRandom");
var IdClearListBtn = document.getElementById("ClearList");
var IdAddAtBtn = document.getElementById("AddAt");
    //Output
var IdResult = document.getElementById("result");
var IdList = document.getElementById("list");
var IdTstring = document.getElementById("tString");

// Inicializamos los controles de la lista

IdNumberInput.disabled = true;
IdElemInput.disabled = true;
IdIndexInput.disabled = true;

IdRestartBtn.disabled = true;
IdAddBtn.disabled = true;
IdAddAtBtn.disabled = true;
IdGetIndexBtn.disabled = true;
IdGetElementBtn.disabled = true;
IdRemoveElementBtn.disabled = true;
IdRemoveAtBtn.disabled = true;
IdLastIndexBtn.disabled = true;
IdFirstIndexBtn.disabled = true;
IdFillRandomBtn.disabled = true;
IdClearListBtn.disabled = true;
IdAddAtBtn.disabled = true;


function DrawList(array)
/*Funcion que dibuja todos los elementos de la lista*/
{
    var string = "";
    for (var i = 0; i < array.length; i++) {
        string += "Indice: #"+(i)+". Valor: "+array[i]+"<br>";
    }
    IdList.innerHTML = string;
}

function DrawErr(error)
/*Funcion que escribe los errores que se capturen*/
{
    IdResult.style.color = "red";
    IdResult.innerHTML ="Error: " + error;
}
function DrawResult(msg,color)
/*Funcion que escribe los errores que se capturen*/
{
    IdResult.style.color = color;
    IdResult.innerHTML = msg;
}
function DrawStringList()
/*Funcion que realiza la funcion toString*/
{
    IdTstring.innerHTML = ToString(list);
}
function ReturnFocusOnNumber()
/*Devuelve el foco de la pagina al input Number*/
{
    IdNumberInput.value = "";
    IdNumberInput.focus();
}
function returnFocusOnElement()
/**/
{
    IdElemInput.value = "";
    IdIndexInput.value = "";
    IdElemInput.focus();
}
function Start(num)
/*Funcion que inicializa la lista*/
{
    try{
    CreateList(num);
    //Bloqueamos los controles para crear la lista
    IdListLengnthInput.disabled = true;
    IdCreateBtn.disabled = true;

    //Desbloqueamos los controles para manipularla
    IdRestartBtn.disabled = false;
    IdNumberInput.disabled = false;
    IdElemInput.disabled = false;
    IdIndexInput.disabled = false;
    
    IdAddBtn.disabled = false;
    IdAddAtBtn.disabled = false;
    IdGetIndexBtn.disabled = false;
    IdGetElementBtn.disabled = false;
    IdRemoveElementBtn.disabled = false;
    IdRemoveAtBtn.disabled = false;
    IdLastIndexBtn.disabled = false;
    IdFirstIndexBtn.disabled = false;
    IdFillRandomBtn.disabled = false;
    IdClearListBtn.disabled = false;
    IdAddAtBtn.disabled = false;

    DrawList(list);
    
    DrawStringList();
    
    }catch(error){
        DrawErr(error);
    }
}

function fillList(){
    FillRandom(list);
    DrawList(list);
    DrawStringList();
    DrawResult("List filled with random values. (^_^)", "green");
}

function clearList(){
    clear(list);
    DrawList(list);
    DrawStringList();
    DrawResult("List cleared! (o_o)", "blue");   
}
function addElem(num){
   try{
    num = parseInt(num)
    var size = add(list,num);
    DrawList(list);
    DrawStringList();
    DrawResult("New elemnt added at list, size of list: " + size, "green");
    ReturnFocusOnNumber();
   }catch(error){
    DrawErr(error);
    ReturnFocusOnNumber();
   }
}
function getInd(num){
    try {
        num = parseInt(num);
        var ind = IndexOf(list,num);
        DrawList(list);
        DrawStringList();
        if(ind !== -1){
          DrawResult("Index of " + IdNumberInput.value + " element,  " + ind , "green");
        }else{
          DrawResult("Element not in the list: " + ind, "blue");
        }
        ReturnFocusOnNumber();
    } catch (error) {
        DrawErr(error);
        ReturnFocusOnNumber();
    }
}
function getElem(num){
  try{
    num = parseInt(num);
    var ind = get(list,num);
    DrawList(list);
    DrawStringList();
    if(ind !== -1){
      DrawResult("Element " + ind + " with index  " + IdNumberInput.value , "green");
    }else{
      DrawResult("Element not in the list: " + ind, "blue");
    }
    ReturnFocusOnNumber();
  }catch(error){
    DrawErr(error);
    ReturnFocusOnNumber();
  }
}
function rev(num){
  try {
    num = parseInt(num);
    if(RemoveElement(list,num)){
      DrawList(list);
      DrawStringList();
      DrawResult("Element removed from the list: " + num, "green");      
    }else{
      DrawResult("Can not remove this element from the list: " +num, "blue");
    }
    ReturnFocusOnNumber();
  } catch (error) {
    DrawErr(error);
    ReturnFocusOnNumber();
  }
}
function revAt(num){
  try {
    num || (num = 0);
    num = parseInt(num);
    var element = Remove(list,num);
    DrawList(list);
    DrawStringList();
    DrawResult("Element "+ element + " removed from the list at index: " + num, "green");          
    ReturnFocusOnNumber();
  } catch (error) {
    DrawErr(error);
    ReturnFocusOnNumber();
  }
}
function LastInd(num){
    try{
    num = parseInt(num);
    var lastIndex = LastIndexOf(list,num);
    DrawList(list);
    DrawStringList();
    DrawResult("Last index of the element "+IdNumberInput.value+", "+lastIndex+ " index.","green");          
    ReturnFocusOnNumber();
  }catch(error){
    DrawErr(error);
    ReturnFocusOnNumber();
  }
}
function FirstInd(num){
    try{
    num = parseInt(num);
    var lastIndex = IndexOf(list,num);
    DrawList(list);
    DrawStringList();
    DrawResult("First index of the element "+IdNumberInput.value+", "+lastIndex +" index.","green");          
    ReturnFocusOnNumber();
  }catch(error){
    DrawErr(error);
    ReturnFocusOnNumber();
  }
}
function AddElement(num,ind){
  try {
    num = parseInt(num);
    ind = parseInt(ind);
    var size = addAt(list,num,ind);
    DrawList(list);
    DrawStringList();
    DrawResult("Element "+num+" added at index "+ind+". New list size: "+size+".","green");          
    ReturnFocusOnNumber();
  } catch (error) {
    DrawErr(error + num + ind);
    returnFocusOnElement();
  }
}
function restart()
/*Funcion que resetea la lista, bloquea los controles de manupulacion y reactiva los controles de creacion de la lista*/
{

  IdListLengnthInput.disabled = false;
  IdCreateBtn.disabled = false;
  IdRestartBtn.disabled = true;

  IdNumberInput.disabled = true;
  IdElemInput.disabled = true;
  IdIndexInput.disabled = true;
  
  IdAddBtn.disabled = true;
  IdAddAtBtn.disabled = true;
  IdGetIndexBtn.disabled = true;
  IdGetElementBtn.disabled = true;
  IdRemoveElementBtn.disabled = true;
  IdRemoveAtBtn.disabled = true;
  IdLastIndexBtn.disabled = true;
  IdFirstIndexBtn.disabled = true;
  IdFillRandomBtn.disabled = true;
  IdClearListBtn.disabled = true;
  IdAddAtBtn.disabled = true;

  IdResult.innerHTML = "";
  IdList.innerHTML = ""; 
  IdTstring.innerHTML = "";
  IdNumberInput.value = "";
  
  Reset()
}
