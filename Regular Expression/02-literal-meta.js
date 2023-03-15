//literal and meta characters
//how we can create different type of pattern

let re;
let str;

//literal
// re = /hello/;
// re = /hello/i;
// re = /hell/i;
// re = /lo W/i;
// re = /loW/i;

//meta characters
re = /^hello/; //must start with hello(^)
re = /^hello/i; //must start with hello with case insensitive(^)
re = /hello$/i; //must end with hello($)
re = /rld$/i; //must end with hello($)
re = /^hello$/i; //must start and end with hello(^,$)
re = /^hel.lo$/i; //matches any one char. exchange of (.)
re = /h.llo/i; //matches any one char. (.)
re = /h+llo/; //1 or multiple
re = /h*llo/i; //0 or more char. exchange of (*)
re = /he?llo/i; //e is or not optional(?)
re = /h?e?llo/i; //h,e optional(?)
re = /hello\?/i; //escaping- ?match does
//!

str = "Hello World";
str = "hilo";
str = "hillo";
str = "h33illo";
str = "hilo";
str = "hello";
str = "hllo";
str = "ello";
str = "llo";
str = "lloo";
str = "hello";
str = "hell";
str = "hello?";

//regex f() start
console.log(re.exec(str));

function reTest(re, str){
    if(re.test(str)){
        console.log(`"${str}" matches "${re.source}"`);
    }else{
        console.log("no matched");
    }
}
reTest(re, str);
//regex f() end