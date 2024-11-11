const url=new URLSearchParams(window.location.search).get('name')
let p=document.querySelectorAll("p")
let img=document.querySelector("img")
let anchr=document.querySelectorAll("a")
let borders_flag=document.querySelector(".con")
let code=`https://restcountries.com/v3.1/alpha/{code}`
console.log(url)
fetch(`https://restcountries.com/v3.1/name/${url}?fullText=true`)
.then((res)=>res.json())
.then((data)=>{
    data.forEach
   
    
    fetch(`https://restcountries.com/v3.1/alpha/${data[0].borders[0]}`)
    .then((res)=>res.json())
    .then((country)=>{
        console.log(country)
    })
    
        
    
    img.src=`${data[0].flags.png}`
    p[0].innerText=`Capital :${data[0].capital[0]}`
    p[1].innerText=`Population : ${data[0]. population}`
    p[2].innerText=`Status : ${data[0].status}`
    p[3].innerText=`Region : ${data[0].region}`
    p[4].innerText=`Sub_Region : ${data[0].subregion}`
    if(data[0].region){
        p[5].innerText=`Contients: ${data[0].region}`
    }
    
  
    if(data[0].languages){
        p[7].innerText=`Languages ${Object.values(data[0].languages).join(',')}`
    }
    if(data[0].tld[0]){
        p[8].innerText=`Top Level Domain : ${data[0].tld[0]}`
    }
    if(data[0].currencies){
        p[9].innerText=`Currencies : ${Object.values(data[0].currencies).map((curr)=>curr.name).join(',')}`
    }
    if(data[0].borders){
        data[0].borders.forEach((cu,index)=>{
            fetch(`https://restcountries.com/v3.1/alpha/${cu}`)
            .then((res)=>res.json())
            .then((country)=>{
                let borders_tag=document.createElement("a")
                borders_tag.innerText=(country[0].name.common)
                borders_tag.href=`flag.html?name=${country[0].name.common}`
                borders_flag.append(borders_tag)
               
            })
            

        })
    }
})  
    
    
           
            
            


