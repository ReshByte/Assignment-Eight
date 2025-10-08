const getStoredBook = () =>{
   
    const storedBookSTR = localStorage.getItem("readList");
    if(storedBookSTR){
        const storedBookData = JSON.parse(storedBookSTR);
        return storedBookData;
    }
    else{
        return [];
    }
}


const addToStoredDB = (id) =>{
   
    const storedBookData = getStoredBook();

    if(storedBookData.includes(id)){
        // console.log("Hello");
        
        alert('Already exist');
    }
    else{
        storedBookData.push(id);
        const data = JSON.stringify(storedBookData);
        localStorage.setItem("readList",data)
    }

}

export {addToStoredDB,getStoredBook};