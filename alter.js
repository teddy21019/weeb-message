function transform(){
    document.getElementById("result").textContent = "";
    const text = document.getElementById("orig").value;
    const text_array = text.split('\n');
    
    text_array.forEach(line => {
        let have_www = randomBool(0.2);
        let www_number = ( Math.floor ( Math.random() * 4 ) + 2 ) * have_www; // 最多7個，最少 2個
        let www = "w".repeat(www_number); 

        let have_postfix = randomBool(0.6);
        let postfix_index = Math.floor( Math.random() * postfixes.length );
        let postfix = have_postfix ? ( '(' + postfixes[postfix_index]) : '' ;

        let have_prefix = randomBool(0.2);
        let prefix_index = Math.floor( Math.random() * prefixes.length );
        let prefix = have_prefix? prefixes[prefix_index] : '' ;

        renderResult(`${prefix} ${line} ${www} ${postfix}`);

    });

    function randomBool(p){
        return ( Math.random() < p ) ? 1 : 0;
    }

    function renderResult(new_text) {
        const span = document.createElement('span')
        const line_break = document.createElement('br')
        span.textContent = new_text
        document.getElementById("result").appendChild(span)
        document.getElementById("result").appendChild(line_break)
    }
}