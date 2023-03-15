//Character word
//shorthand characters and Assertions

//check in whole string
let re;
let str;

re = /\w/; //word character - alpha numeric or _
re = /\w+/; //one or more
re = /\W/; //non word character
re = /\W+/; //non word character one or more
re = /\d/; //digit
re = /\d+/; //one or more digit
re = /\D/; //non digit char.
re = /\s/; //match white space
re = /\S/; //match non white space
re = /hi\b/; //word boundary, no extra add with "hi"
re = /\t/ // select all tab
re = /\n/ // select new line
re = /\./ // select anything without new line

// str = "fdgdfdg";
// str = " ";

console.log(re.exec(str));

// Assertions - like condition
re = /x(?=yz)/; //matches x only if x is before yz
re = /x(?=y)/; //matches x only if x is before y
re = /x(?!y)/; //opposit of matches x only if x is before y

//str = dwqxfre; //no matched
//str = dwqxyfre; //matched

//str = dwqxoyfre; //matched