

//metodo sin module

/* async function loadData() { 

    try {
    
        const res = await fetch('https://jsonplaceholder.typicode.com/albums') 
        const data = await res.json()
        console.log(data)
        
    } catch (error) {
        console.log(error)
    }

}

loadData() */


//METODO CON MODULE

try {
    
    const res = await fetch('https://jsonplaceholder.typicode.com/albums') 
    const data = await res.json()
    console.log(data)
    
} catch (error) {
    console.log(error)
}