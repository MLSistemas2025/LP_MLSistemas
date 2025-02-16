let body = document.querySelector('body');
// let h2 = document.querySelector('h2');       //muda a cor do texto h2
body.addEventListener('click', function(event) {
    for(let i = 0; i< 50; i++){
        let spark = document.createElement('i');

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