function menu(){
    open = document.getElementById('open');
    close = document.getElementById('close');

    if(close.classList.contains('d-none')){
        close.classList.remove('d-none');
        open.classList.add('d-none');
    }else{
        open.classList.remove('d-none');
        close.classList.add('d-none');
    }
}

function remove(opc){
    if(opc.classList.contains('d-none')){
        opc.classList.remove('d-none');
    }else{
        opc.classList.add('d-none');
    }
}




function dropToggle(elClass){
    let el = document.getElementById(elClass);
    if (el.classList.contains("d-none")) {
      el.classList.remove("d-none");
      el.classList.add("d-block");
    } else {
      el.classList.remove("d-block");
      el.classList.add("d-none");
    }
  }
  
  addClickMap('menu-drop-1','submenu-drop-1');
  addClickMap('menu-drop-2','submenu-drop-2');
  addClickMap('menu-drop-3','submenu-drop-3');
  addClickMap('menu-drop-4','submenu-drop-4');
  addClickMap('menu-drop-5','submenu-drop-5');

  function addClickMap(elClass,elClassOp){
    let el=document.getElementById(elClass);
    el.addEventListener('click',()=>{
      dropToggle(elClassOp);
    });
  }
  