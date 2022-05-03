let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'C':
                display.innerText = '';
                break;
            case '=':
                try {
                    if (display.innerText.slice(0, 1) == '√') {
                        display.innerText = Math.sqrt(display.innerText.slice(1));
                    } else {
                        display.innerText = eval(display.innerText);
                    }
                } catch {
                    display.innerText = "Error";
                }
                break;
            case 'del':
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});