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