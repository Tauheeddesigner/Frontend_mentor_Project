let container=document.querySelector(".card_container")
let input=document.querySelector("input")
let filter=document.querySelector(".filter")
let p=document.querySelector(".p")
input.addEventListener("input",((e)=>{
   container.innerHTML=""
  
   fetch(`https://restcountries.com/v3.1/name/${e.target.value.toLowerCase()}`).then((res)=>res.json())
   .then((data)=>{
      data.forEach(element => {
         
         let f=document.createElement("option")
         f.innerText=element.region
         filter.append(f)
         
       let div=document.createElement("a")
   div.classList.add("country")
   div.href=`/flag.html?name=${element.name.common}`
   div.innerHTML=`
   
   
                   <img src=${element.flags.png}  height="300px">
                   <h2>${element.name.common}</h2>
                   <p><b>Population</b> :${element.population.toLocaleString()}</p>
                   <p><b>Region</b> :${element.region}</p>
                   <p><b>Capital</b> :${element.capital}</p>
   
              
   
   
   
   `
   container.append(div)
   
       
      });
   })


      
   })
)
fetch(`https://restcountries.com/v3.1/all`).then((res)=>res.json())
.then((data)=>{
   data.forEach(element => {
      
      
      
    let div=document.createElement("a")
div.classList.add("country")
div.href=`/flag.html?name=${element.name.common}`
div.innerHTML=`


                <img src=${element.flags.png}  height="300px">
                <h2>${element.name.common}</h2>
                <p><b>Population</b> :${element.population.toLocaleString()}</p>
                <p><b>Region</b> :${element.region}</p>
                <p><b>Capital</b> :${element.capital}</p>

           



`
container.append(div)

    
   });
})
fetch(`https://restcountries.com/v3.1/all`)
.then((res)=>res.json())
.then((element)=>{
  element.forEach((e)=>{
 
   let option=document.createElement("option")
   option.innerText=e.region
   // console.log(option)
   filter.append(option)
  })
   
  

   
})
filter.addEventListener("change",((e)=>{
//   fetch(`https://restcountries.com/v3.1/region/${e.target.value}`)
//   .then((res)=>res.json())
//   .then((data)=>{
//    console.log(data[0])
//    let 
//   })

//    console.log(e.target.value)
container.innerText=""
fetch(`https://restcountries.com/v3.1/region/${e.target.value}`).then((res)=>res.json())
.then((data)=>{
   data.forEach(element => {
      
      
      
    let div=document.createElement("a")
div.classList.add("country")
div.href=`/flag.html?name=${element.name.common}`
div.innerHTML=`


                <img src=${element.flags.png}  height="300px">
                <h2>${element.name.common}</h2>
                <p><b>Population</b> :${element.population.toLocaleString()}</p>
                <p><b>Region</b> :${element.region}</p>
                <p><b>Capital</b> :${element.capital}</p>

           



`
container.append(div)

    
   });
})
}))
let save_class;
let body=document.querySelector("body")
p.addEventListener("click",()=>{
  
   
   // console.log(save_class)
  
   
   body.classList.toggle("dark")
   localStorage.setItem("class",body.className)
   save_class=localStorage.getItem("class")
   body.classList.add(save_class)

   
   
})



