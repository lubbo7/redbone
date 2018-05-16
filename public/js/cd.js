// carrito
document.querySelectorAll('.agregar').forEach(function(button) {
    button.addEventListener('click', function(){
        var id = button.parentNode.getAttribute('data-id');
        console.log(button.parentNode.parentNode.getAttribute('data-id'));

        if(arreglo.indexOf(id) >= 0){
            return;
        }

        if(arreglo.indexOf(id) >= -1){
            button.innerHTML = "-";
        }

        arreglo.push(id);
        update();
        localStorage.setItem('arreglo', JSON.stringify(arreglo));
    });
});