//Character Sets using third brackets []
let re;
let str;

re = /[abc]/; //must be one char. inside brackets[]
re = /h[ea]llo/; //must be one of them inside brackets[]
re = /h[EA]llo/i; //must be one of them inside brackets with case insensitive[]
re = /[^ha]ello/; //anything accept those inside brackets[],without ha
re = /^[ha]ello/; //must start with inside brackets[ h or a]
re = /[a-z]ello/; // a-z anyone
re = /[a-k]ello/; // a-k
re = /[A-Z]ello/; // A-Z start with capital
re = /^[A-Z]ello/; // must start with capital/uppercase A-Z
re = /^[A-Z]/; // first letter must start capital/uppercase A-Z
re = /^[a-z]/; // first letter must start small/lowercase a-z
re = /[A-Za-z]ello/; // first letter must start capital/lowercase A-Za-z
re = /[0-9]ello/; // first letter must start with 0-9
re = /[0-9][0-9]ello/; // first letter must start with 0-9 - 2 digit
re = /[0-9][0-9][0-3]ello/; // first letter must start with 0-9 - 3 digit


//Quantifier = braces{}
re = /el{2}o/;  //must occur exactly 2 times, l 2 times
re = /el{5}o/; //l 5 times
re = /el{2,5}o/;  //l 2 to 5 times -range
re = /el{2,}o/;  //atleast 2 times otherwise more -range


//Grouping = parentheses()
/*
re = /^[0-9][0-9][0-9][0-9][0-9]/; don't this use () short method

//Match 3x7x5x pettern
re = /^([0-9]x){3}/;
str = "3x7x5x"; //matched
*/
re = /^([0-9]){5}/; //must start with digit 5 times


str = "hallo";
str = "mello";
str = "hello";
str = "aello";
str = "saello";
str = "Sello";
str = "0ello";
str = "35ello";
str = "342ello";
str = "ello";
str = "elllllo";
str = "elo";
str = "ello";
str = "elllllllllllllllllllllllllllllllo";
str = 216;


//regex function start
console.log(re.exec(str));

function reTest(re, str){
    if(re.test(str)){
        console.log(`"${str}" matches "${re.source}"`);
    }else{
        console.log("no matched");
    }
}
reTest(re, str);
//regex function end

/*
Check Bangladeshi number
re = /^01[0-9]{9}$/;
str = "01756498129";

Check Indian number
re = /^91[6-9][0-9]{9}$/;
str = "917564981290";

let re = /^\+91[6-9][1-9]{9}$/;
let str = "+918489666665";
*/