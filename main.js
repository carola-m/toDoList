const input$$ = document.querySelector ('input');
const addButton$$ = document.querySelector ('.btn-add');
const ul$$ = document.querySelector ('ul');
const empty$$ = document.querySelector('.empty');

function agregarElemento (event){
    event.preventDefault(); //funcion que evita que la pag se recargue cada vez que ingreso un elemento
    const text = input$$.value; 
    const li$$ = document.createElement('li');
    const p$$ = document.createElement('p');
    
    if (text !== "") {
        p$$.textContent = text;
        li$$.appendChild (p$$);
        ul$$.appendChild(li$$);
        
        input$$.value = "";  //para que me elimine lo ingresado en el input una vez que hago click
        empty$$.style.display = "none";
    }

    const deleteBtn$$ = document.createElement('button');
    deleteBtn$$.textContent = "X";
    deleteBtn$$.className = "btn-delete";
    li$$.appendChild(deleteBtn$$);

    function remove(){
    li$$.remove();    
    }
deleteBtn$$.addEventListener("click", remove);
}  

addButton$$.addEventListener("click", agregarElemento);
