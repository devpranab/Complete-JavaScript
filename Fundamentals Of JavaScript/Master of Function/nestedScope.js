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