//Задание 1
//Указать типы функции так чтобы она могла принимать в себя любые значения которые содержат length
interface ILength {
   length : number
}

function getLength< T extends ILength>(arg : T) {
 return arg.length
}

console.log(getLength([1, 2, 3]))
console.log(getLength('444'))

//console.log((getLength(44)))
//console.log(getLength({ name: 'John' }))

//Задание 2 
//Указать типы функции так чтобы она могла принимать в себя значения обекты у которых есть свойства firstName и lastName
interface MyObj {
   firstName : string
   lastName : string
}
function makeFullName<T extends MyObj>(obj : T):object {
    return {
        ...obj,
        fullName: obj.firstName + " " + obj.lastName
    };
};

console.log(makeFullName({ firstName: 'Ivan', lastName: 'Ivanov' }))
console.log(makeFullName({ firstName: 'Ivan', lastName: 'Ivanov', age: 20 }))

//Задание 3
//Указать типы так чтобы мы могли менять значение объекта по ключу только на тот тип который был у значения
function setObj<T extends object, B extends keyof T, C extends T[B]>(obj : T, key : B, new_value : C):object {
   return {
      ...obj,
      [key]: new_value
   }
 }
 
 const person = {
   name: 'John',
   age: 30,
   technical_skills: ['JS', 'TS', 'SCSS', 'HTML'],
   english: true
 }
 
 //Ошибка будет т к передается ключ которого нет в обекте person
 //console.log(setObj(person, 'salary', 30))
 //Ошибки не будет 
 setObj(person, 'name', 'Stas')
 setObj(person, 'technical_skills', ['JS', 'TS', 'SCSS', 'HTML', 'React'])
 //Ошибка будет так тип нового значения не соответствует старому 
 //setObj(person, 'english', 'C1')
 //setObj(person, 'technical_skills', null)
 //Ошибки не будет 
 setObj(person, 'technical_skills', ['C++'])
 setObj(person, 'english', false)


//Задание 4
//Розширить тип ServerResponseType(т е дублировать нельзя) что бы он мог работать с любыми типами
type UserType = {
   name: string
   age: number
}

type AnyType = object;

type ServerResponseType = {
   responseCode: number,
   data: UserType | AnyType
}

const resp1: ServerResponseType = {
   responseCode: 200,
   data: {
      name: 'John',
      age: 20
   }
}

type CoordinatesType = {
   x: number
   y: number
}
const resp2: ServerResponseType = {
   responseCode: 200,
   data: {
      x: 55,
      y: 22
   }
}


//Задание 5
//Указать типы так чтобы мы могли добавить в массив только те типы которые в нём уже присутствуют
function addValue<T, B extends T>(arr : Array<T>, value : B):T[] {
   return [...arr, value]
}

console.log(addValue([4, 5], 6))
console.log(addValue([4, 5, 'str'], 'John'))
console.log(addValue([4, 5, 'str', true], false))

//console.log(addValue([4, 5], 'John'))
//console.log(addValue([4, 5], true))
 