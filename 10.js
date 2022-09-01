// Implementar la función insertAndSort que recibe un arreglo y un objeto y retorna
// un arreglo ordenado de menor a mayor con los números del array y con
// los números de los valores del objeto.
// Para el ordenamiento NO usar la función sort de JavaScript. Deben usar alguno de los
// algoritmos de ordenamiento que se vieron en clase.
// Ejemplo:
// insertAndSort([4,8,13], {a:2, b:1, c:5}) ----> Debería retornar [1, 2, 4, 5, 8, 13]

function insertAndSort(array, obj) {
  // Tu código acá
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const element = obj[key];
      array.push(element);
    }
  }

 for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < (array.length -i -1); j++) {
      if (array[j]>array[j+1]) {
        var valor=array[j+1]; //
        var valor1=array[j];
        array[j]=valor;                //array[j+1];
        array[j+1]=valor1;
      }
      
    }
  
    
  }
  return array;
}

//⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = insertAndSort;