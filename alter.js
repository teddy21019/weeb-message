function transform() {
    let text = document.getElementById('orig').value;
    const rateOfWww = 0.2;
    const rateOfPostfix = 0.6;
    const rateOfPrefix = 0.2;

    text_array = text.split('\n');

    new_text = '';
    text_array.forEach(line => {
        const www = generateW();
        const postfix = generatePostFix();
        const prefix = generatePreFix();

        new_text += `${prefix} ${line} ${www} ${postfix} <br />`;

    });


    function generateW() {
        const have_www = randomBool(rateOfWww);
        const www_number = (Math.floor(Math.random() * 4) + 2) * have_www; // 最多7個，最少 2個
        return 'w'.repeat(www_number);
    }


    function generatePostFix() {
        const have_postfix = randomBool(rateOfPostfix);
        const postfix_index = Math.floor(Math.random() * postfixes.length);
        return have_postfix ? ('(' + postfixes[postfix_index]) : '';
    }

    function generatePreFix() {
        const have_prefix = randomBool(rateOfPrefix);
        const prefix_index = Math.floor(Math.random() * prefixes.length);
        return have_prefix ? prefixes[prefix_index] : '';
    }

    function randomBool(p) {
        return (Math.random() < p) ? 1 : 0;
    }

    document.getElementById('result').innerHTML = new_text;
}