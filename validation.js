// Creating Reg expression Method 1
//var reg = /[a-z]/ig; // global, insensitive

// Method 2
//var reg2 = new RegExp(/[a-z]/, 'i');

const inputes = document.querySelectorAll('input');

const patterns = {
    telephone: /^\d{11}$/, //(0-9) or \d(digits) both will work same. Here we add caret & $ so that it only adds 11 nos otherwise it will add alphabets too
    username:/^[a-z\d]{5,12}$/i,
    password: /^[\w@-]{8,20}$/, // w includes letters, nos, _
    slug: /^[a-z\d-]{8,20}$/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/ 
    //we using \. bcz . has specila meaning in Regex so if we want only . so write like this \. 
    // + means atleast 1 character or max how much you want because you are unaware about letters length
    // ? uses as last thing is optional you don't need to write
    // seerat@ninja12.com.uk

};

// validation function
function validate(field, regex){
    //console.log(regex.test(field.value)); it will give true/false wile testing the regex telephone field
    if(regex.test(field.value)){ // It will check field is valid or not
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }
}

inputes.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        //console.log(e.target.attributes.name.value);
        validate(e.target, patterns[e.target.attributes.name.value])
    });
});
