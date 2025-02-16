var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

const button = document.getElementById("ButtonModal");
const modal = document.querySelector("dialog");
const buttonClose = document.querySelector("dialog button");
const videoButton = document.getElementById('videoButton');
let body = document.querySelector('body');

// let h2 = document.querySelector('h2');       //muda a cor do texto h2
body.addEventListener('click', function(event) {
    for(let i = 0; i< 50; i++){
        let spark = document.createElement('g');

        // to set circle some distance to click spot
        spark.style.top = (event.clientY - body.offsetTop) + 'px';
        spark.style.left = (event.clientX - body.offsetLeft) + 'px';

        // create some randome x and y values
        let randomX = (Math.random() - 0.5) * window.innerWidth / 1.5;
        let randomY = (Math.random() - 0.5) * window.innerHeight / 1.5;

        // set some variable for css
        spark.style.setProperty('--randomX', randomX + 'px');
        spark.style.setProperty('--randomY', randomY + 'px');

        // create some radom size
        let randomSize = Math.random() * 30 + 2;
        spark.style.width = randomSize + 'px';
        spark.style.height = randomSize + 'px';

        // change animation duration as a varible
        let duration = Math.random() * 2 + 0.5;
            // add animation line here form css file
        spark.style.animation = `animate ${duration}s ease-out forwards`;

        // change colors animation
        let colors = ['#f4034c', '#fff', '#ffeb3b', '#03a9f4'];
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        spark.style.background = randomColor;

        // h2.style.color = randomColor;            // descomentar para mudar a cor de um texto

        body.appendChild(spark);

        setTimeout(() => {
            spark.remove();
        }, 2000);
    }
})

function updateButtonColor() {
    if (document.body.classList.contains('dark')) {
        videoButton.style.setProperty('--clr', 'white'); // Cor para modo escuro
    } else {
        videoButton.style.setProperty('--clr', '#007bff'); // Cor para modo claro
    }
}
updateButtonColor();
document.body.addEventListener('click', updateButtonColor); 

button.onclick = function() {
  modal.showModal();
}

buttonClose.onclick = function() {
  modal.close();
}

//busca o elemento pelo id dele no index.html
const form = document.getElementById('contactForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); 
        const formData = new FormData(form); 
        fetch('https://formsubmit.co/mlsistemas.contato@gmail.com', { 
            method: 'POST',
            body: formData
        })
    });

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
    
});