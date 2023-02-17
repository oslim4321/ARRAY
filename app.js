 let arr=['s', true, 55 ]
console.log(arr[2])



let frults=['mango', 'apple','curry','banana','MANGO', 1232]

//console.log(frults)

//frults.splice(2,1)

console.log(frults[2]) 





let array=[]
function add(){
    let input=document.getElementById('input')
    array.push(input.value)
        console.log(array) 
//console.log(`array.unshift (${input.value})`)
}



/* fruits = ["Banana", "Orange", "Apple", "Mango"];
var first = fruits[0];
console.log(first)


let arr=['sel',56,'shatta' ] */

function ok(){
    let select=document.getElementById('Selection').value
    let color = document.getElementById('color-select').value
    let text = document.getElementById('text').value
    let show=document.getElementById('showing')
    let newElement=`<${select} style="background-color:${color}">${text}</${select}>`
    show.innerHTML+=newElement
} 





/* for(let f=2; f<40; f++){
    console.log(f)
}

function add(){
    for(let i=first.value; i<=seco.value; i++){

    let first=document.getElementById('first')
    let seco=document.getElementById('seco')
    let view=document.getElementById('viewing')

        view.innerHTML+='<h1>'+i+'</h1>'
        console.log(i)
    }
    
} */