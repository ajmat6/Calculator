let string = "";
let allbuttons = document.querySelectorAll('.button');

Array.from(allbuttons).forEach((btn) => {
    btn.addEventListener('click' , (e) => {
        if(e.target.innerHTML=='=')
        {
            string = eval(string);
            document.querySelector('.input').value = string;
        }

        else if(e.target.innerHTML == 'C')
        {
            string = "";
            document.querySelector('.input').value = string;
        }

        else if(e.target.innerHTML == 'del')
        {
            string = string.slice(0, string.length -1);
            document.querySelector('input').value = string;
        }

        else
        {
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('.input').value = string;
        }
    });
});