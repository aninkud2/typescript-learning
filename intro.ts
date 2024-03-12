interface Details {
    name:string;
    cls:string;
    age:number;
    sex?:string;
    surname:surname
    isVerified?:boolean
}

const myDetails: Details ={

    name:"joshua",
    cls :"ss2",
    age:72,
    surname:"Aninku",
    isVerified:true

    
    

}
type surname="Aninku" |"Egunsola"
// console.log(myDetails)

const myInfo=(properties:Details,force?:boolean):string | undefined=>{

    if(properties.isVerified && force) { return "undefined"}else{
return ( `my name is ${properties.surname}  ${properties.name} i am in ${properties.cls} i am ${properties.age} years old`) }
}

console.log(myInfo(myDetails))

const superHeroes:Details[]=[{    name:"joshua",
cls :"ss2",
age:72,
surname:"Aninku",
isVerified:true},    {name:"joshua",
cls :"ss2",
age:72,



surname:"Aninku",
isVerified:true}]


console.log(superHeroes.length)