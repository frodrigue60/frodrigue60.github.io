let data = [
    {
        id: 1,
        title: 'HTML5',
        description: 'Hypertext Markup Language (HTML) is the code used to structure and display a web page and its content.',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png',
    },
    {
        id: 2,
        title: 'CSS3',
        description: 'CSS is a graphic design language that allows you to define and create the presentation of a structured document written in a markup language.',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/250px-CSS3_logo_and_wordmark.svg.png',
    },
    {
        id: 3,
        title: 'JavaScript (JS)',
        description: 'JavaScript is a programming language that developers use to make web pages interactive.',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
    },
    {
        id: 4,
        title: 'PHP',
        description: 'PHP is a very popular open source language especially suitable for web development and can be embedded in HTML.',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png'
    },
    {
        id: 5,
        title: 'MySQL',
        description: 'MySQL is an open source relational database management system (RDBMS) backed by Oracle and based on the Structured Query Language (SQL).',
        img: 'https://cdn-icons-png.flaticon.com/512/5968/5968313.png'
    },
    {
        id: 6,
        title: 'PostgreSQL',
        description: 'PostgreSQL is an open source database system that stands out for its adaptability and its compliance with the SQL standard.',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png'
    },
    {
        id: 7,
        title: 'GitHub',
        description: 'GitHub is a forge for hosting projects using the Git version control system.',
        img: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg'
    },
    {
        id: 8,
        title: 'Laravel',
        description: 'Laravel is an open source framework for developing web applications and services with PHP 5, PHP 7 and PHP 8. Its philosophy is to develop PHP code in an elegant and simple way, avoiding "spaghetti code".',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png'
    },
    {
        id: 9,
        title: 'Bootstrap 5',
        description: 'Bootstrap is a cross-platform library or open source toolkit for designing web sites and web applications.',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png'
    },
    {
        id: 10,
        title: 'jQuery',
        description: 'jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.',
        img: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/jquery_plain_wordmark_logo_icon_146445.png'
    },
];
let dataTitleDiv = document.querySelector('#data-title');
let dataDescriptionDiv = document.querySelector('#data-description');
let dataImg = document.querySelector('#img-hard-skill');

let sound_1 = new Audio('/assets/sounds/menu-2.ogg');
let sound_2 = new Audio('/assets/sounds/menu-1.ogg');
let sound_3 = new Audio('/assets/sounds/menu-select-1.ogg');
let sound_4 = new Audio('/assets/sounds/menu-select-2.ogg');


function changeData(id) {
    let selectedObj = data.find(item => item.id === id);

    if (selectedObj) {
        dataTitleDiv.innerHTML = selectedObj.title;
        dataDescriptionDiv.innerHTML = selectedObj.description;
        dataImg.src = selectedObj.img;
    }
    let buttons = document.getElementsByTagName('button');

}

function loadContent(url) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            let mainContent = document.querySelector('main');
            mainContent.innerHTML = html;
        })
        .catch(error => console.log(error));
}

document.addEventListener('DOMContentLoaded', function () {


    let list = document.getElementById('skill-list');

    data.forEach(function (obj) {
        let li = document.createElement('li');
        let button = document.createElement('button');
        button.setAttribute('onclick', 'changeData(' + obj.id + ')');

        let icon = document.createElement('i');
        icon.className = 'fa-solid fa-square';

        let buttonText = document.createTextNode(' ' + obj.title);
        button.appendChild(icon);
        button.appendChild(buttonText);

        li.appendChild(button);
        list.appendChild(li);


        button.addEventListener('click', function () {
            let lis = document.getElementsByTagName('li');
            for (let i = 0; i < lis.length; i++) {
                lis[i].classList.remove('selected');
            }
            li.classList.add('selected');
            /* AUDIO */
            playAudio(sound_3);
        });

        document.addEventListener('keydown', function(event) {
            if (event.keyCode === 9) { // Código de tecla para la tecla Tab
                playAudio(sound_1);
            }
          });
    });

    let skillList = document.getElementById('skill-list');
    let lis = skillList.getElementsByTagName('li');

    if (lis.length > 0) {
        /* lis[0].classList.add('selected'); */
        changeData(1);
    }
    function playAudio(audio) {
        audio.pause();
        audio.currentTime = 0;
        audio.play();
    }
});