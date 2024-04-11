function executeCode() {
    try {
        console.log("in try");
        const result = 10 / k; 
        console.log("error line", result);
    } 
    catch(error) {
        if(error instanceof RangeError){
            console.log("range error");
        }
        else if (error instanceof ReferenceError){
            console.log("reference error caught")
        }
        else{
          console.log("caught error");
        }   
    } 
    finally{
        console.log("finnaly out")
    }
    console.log("try catch learnt");
}

executeCode();
