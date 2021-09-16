function transform(){
    let text = document.getElementById('orig').value;
    text_array = text.split('\n');
    
    new_text = '';
    text_array.forEach(line => {
        const have_www = randomBool(0.2);
        const www_number = ( Math.floor ( Math.random() * 4 ) + 2 ) * have_www; // 最多7個，最少 2個
        const www = 'w'.repeat(www_number); 

        const have_postfix = randomBool(0.6);
        const postfix_index = Math.floor( Math.random() * postfixes.length );
        const postfix  = have_postfix ? ( '(' + postfixes[postfix_index]) : '' ;

        const have_prefix = randomBool(0.2);
        const prefix_index = Math.floor( Math.random() * prefixes.length );
        const prefix = have_prefix? prefixes[prefix_index] : '' ;

        new_text += `${prefix} ${line} ${www} ${postfix} <br />`;

    });

    function randomBool(p){
        return ( Math.random() < p ) ? 1 : 0;
    }

    document.getElementById('result').innerHTML = new_text;
}