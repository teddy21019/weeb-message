function transform(){
    let text = document.getElementById("orig").value;
    let text_array = text.split('\n');
    
    let new_text = "";
    text_array.forEach(line => {
        let have_www = randomBool(0.2);
        let www_number = ( Math.floor ( Math.random() * 4 ) + 2 ) * have_www; // 最多7個，最少 2個
        let www = "w".repeat(www_number); 

        let have_postfix = randomBool(0.6);
        let postfix_index = Math.floor( Math.random() * postfixes.length );
        let postfix  = have_postfix ? ( '(' + postfixes[postfix_index]) : '' ;

        let have_prefix = randomBool(0.2);
        let prefix_index = Math.floor( Math.random() * prefixes.length );
        let prefix = have_prefix? prefixes[prefix_index] : '' ;

        new_text += `${prefix} ${line} ${www} ${postfix} <br />`;

    });

    document.getElementById("result").innerHTML = new_text;
}

function randomBool(p){
    return ( Math.random() < p ) ? 1 : 0;
}