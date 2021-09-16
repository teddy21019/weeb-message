function transform(){
    let text = document.getElementById("orig").value;
    text_array = text.split('\n');
    
    new_text = "";
    text_array.forEach(line => {
        let have_www = ( Math.random() > 0.8 ) ? 1 : 0;
        let www_number = ( Math.floor ( Math.random() * 4 ) + 2 ) * have_www; // 最多7個，最少 2個
        let www = "w".repeat(www_number); 

        let have_action = ( Math.random() > 0.4 ) ? 1 : 0;
        let action_index = Math.floor( Math.random() * actions.length );
        let action  = have_action? ( '(' + actions[action_index]) : '' ;

        new_text += `${line}  ${www} ${action} <br />`;

    });

    document.getElementById("result").innerHTML = new_text;
}