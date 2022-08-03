import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'group'
})
export class GroupPipe implements PipeTransform {

  transform(objects: object[], key: string): any {
    
    //Valida si el array está vacio, si es así regresa nulo.
    // if(!collection){
    //   return null;
    // }
    if(!objects){
      return null;
    }

    const countedObject: object[] = [];

    for(const object of objects){
      const count: any = objects.filter(obj => obj[key] === object[key]).length;

      if(!countedObject.find(obj => obj[key] === object[key])){
        countedObject.push({...object, count});
      }
    }

    return countedObject;

  // Inicio de lógica donde regresa todo el array con los objetos agrupados
  //transform(collection: any[], property: string): any[]   colocarlo al inicio
  //   const groupedCollection = collection.reduce((previous, current) => {
  //     if (!previous[current[property]]) {
  //         previous[current[property]] = [current];
  //     } else {
  //         previous[current[property]].push(current);
  //     }

  //     return previous;
  // }, {});

    //Regresa un array de objetos, cada objeto contiene un grupo de objetos.
    // return Object.keys(groupedCollection).map(key => ({ key, value: groupedCollection[key] }));
    // Fin de lógica donde regresa todo el array con los objetos agrupados


  }

}
