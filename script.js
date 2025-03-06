let btn = document.querySelector("button")


urldog=   "https://dog.ceo/api/breeds/image/random"

btn.addEventListener("click", async () => {
    let link = await getFacts();
    console.log(link)
    let img = document.querySelector("#result")
     img.setAttribute("src", link)
    
})


url1 = "https://jsonplaceholder.typicode.com/todos/1"

urlcat= "https://catfact.ninja/fact"

// urldog= "https://dog.ceo/api/breeds/image/random/3"

url2= "https://quote-garden.onrender.com/api/v3/quotes"


// async function getData() {

//     setTimeout(function(){
//         console.log("I am inside set internve")

//     }, 4000)
    
// }

// getData()

// async function getData() {

//     let res = await fetch(url1);

//     // parse json -async

//     let data = await res.json();

//     console.log(data)
    
// }
// getData()

async function getFacts() {
    try {
        let res = await axios.get(urldog)
        return res.data.message
        
        
    } catch (error) {
        console.log("error - ", error)
        return "not foud"
        
    }
   
} 

// getFacts()

