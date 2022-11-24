// letter frequency
// const  ltfreq = (phares) => {
//   let frequency ={}
//   for(const le of phares){
//     if(le in frequency){
//       frequency[le]=frequency[le]+1
//     }
//     else{
//       frequency[le]=1;
//     }
//   }
//   return frequency
// }
//
// console.log(ltfreq('hello how are you'));

//word frequency
// const wfreq=(phrase)=>{
//   let frequency={}
//   let words=phrase.split(' ')
//   for(const w of words){
//     if(w in frequency){
//       frequency[w]+=1
//     }
//     else{
//       frequency[w]=1
//     }
//   }
//   console.log(words);
//   return frequency
// }
//
// console.log(wfreq('Hey how are you'));

//map
// [1,2,3,4].map(number => console.log(number*2))

//filter
// console.log([1,2,3,4].filter(number=>number>1&&number<4))

const actor=[
  {name:'johnny', networth:20000},
  {name:'amber', networth:20},
  {name:'leo', networth:15000}
]

let result=actor.filter(actor=>actor.networth>300)
console.log(result);

let names=result.map(actor=>actor.name).join(', ')
console.log(names);





















// const sumarray = (nums)=>{
//   let result=0
//   for(const no of nums){
//     console.log(no);
//     result = result + no
//   }
//   return { result }
// }

// let result=0
//
// const max = (nums)=>{
//   for(const no of nums){
//      if(no>result)
//      result=no
//   }
//   return { result }
// }
//
// const nums=[1,2,3,4]
// console.log(max(nums));
















































































// const hmletters=(phrase)=>{
//   for(const no in phrase){
//     console.log(Number(no)+1);
//     result=Number(no)+1;
//   }
//   return { result }
// }
//
// const phrase='hey, how are you'
// console.log(hmletters(phrase));

// const num=[1,2,3,4,5]
// for(const nums of num){
//   console.log(nums*2);
// }


// console.log('hello world')
// console.log('Pratyush')
//
// amnt=Number(prompt('Enter the amnt'))
// tipamnt=Number(prompt('Enter the tip'))/100
// tip=amnt*tipamnt
// total=amnt+tip
// console.log('Tip :',tip)
// console.log('total',total)


// function myself(name){
//   console.log('hi '+ name + ' nice to meet you')
// }
//
// myself('Pratyush')
//
// const fruits=['apples','oranges','banana']
// console.log(fruits);
// console.log(fruits[0]);
//
// fruits.push('cookie')
// console.log(fruits);
//
// console.log(fruits.slice(1,4));


// const avtar={
//   name: 'baba',
//   shirt: 'black'
// }
//
// console.log(avtar.name);
// console.log(avtar['shirt']);
//
// console.log(avtar);


// const intro = (name,shirt)=>{
//   const person ={
//     name: name,shirt: shirt,assests:100000,debt:50000
//   }
//   const intr='hi, my name is '+person.name +' and my shirt color is '+person.shirt+' net worth is '+(person.assests-person.debt)
//   return intr;
// }
//
// console.log(intro('baba','blue'));


// const fruits=['apples','oranges','banana','apples','oranges','banana','apples','oranges','banana']
//
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }
