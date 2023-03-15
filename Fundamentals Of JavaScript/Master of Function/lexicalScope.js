//lexical scope - code tokenwise
//js do tokenwise to every word of codes & define scoping, that is lexical scope
//whome have how many scope,that scope chaining
//nested scope - concept of closure
{
    let x = 50;
    
    function test(){
        let x = 40
        //console.log(x);

        function nested(){
            console.log(x); //try to access parent scope
        }
        nested()
    }
    test();
}