const { LinkedList } = require('./DS');

// No modifiques nada arriba de esta linea //
/*
  EJERCICIO 1
   Agregar el método sortList al prototipo de LinkedList. 
   Este método deberá ordenar los elementos de nuestra lista enlazada de mayor a menor.
   Si la lista está vacía, debe retornar false;
   Ejemplo:
     Suponiendo que la lista actual es: Head --> [8] --> [12] --> [3] --> [16]
     LinkedList.sortList();
     Ahora la lista quedaría: Head --> [16] --> [12] --> [8] --> [3] .
*/

  LinkedList.prototype.sortList = function(){
     if(this.head === null){
        return false;
    }
    let current = this.head;
    let temp;
    while(current.next !== null){
        if(current.value < current.next.value){
            temp = current.value;
            current.value = current.next.value;
            current.next.value = temp;
            current = this.head;
        }else{
            current = current.next;
        }
    }
    return this;
}
// No modifiques nada debajo de esta linea //

module.exports = {
  LinkedList
};
