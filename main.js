plot = [

    {
        'main_bck' : {
            'path' : null,
        },

        'img_left' : {
            'path' : null,
        },

        'text' : {
            'content' : 'Зов Ктулху',
        },

        'img_right' : {
            'path' : null,
        },
    },

    {

        'main_bck' : {
            'path' : './assets/bcg_office2.jpg',
        },

        'img_left' : {
            'path' : './assets/an2.png',
        },

        'text' : {
            'content' : '<span class="name_span">[Настя]:</span> Привет, как прошли выходные?',
        },

        'img_right' : {
            'path' : './assets/fr2.png',
        },
    },

    {

        'main_bck' : {
            'path' : './assets/bcg_office2.jpg',
        },

        'img_left' : {
            'path' : './assets/an2.png',
        },

        'text' : {
            'content' : '<span class="name_span">[Света]:</span> Просто ужасно. Все выходные пришлось заниматься этим договором. Я не...',
        },

        'img_right' : {
            'path' : './assets/fr2.png',
        },
    },

    {

        'main_bck' : {
            'path' : './assets/bcg_office2.jpg',
        },

        'img_left' : {
            'path' : null,
        },

        'text' : {
            'content' : '<span class="name_span">[Сергей(<i>флиртующей улыбкой</i>)]:</span> Настя привет, как всегда отлично выглядишь',
        },

        'img_right' : {
            'path' : './assets/s1.png',
        },
    },

    {

        'main_bck' : {
            'path' : './assets/bcg_office2.jpg',
        },

        'img_left' : {
            'path' : './assets/an2.png',
        },

        'text' : {
            'content' : '<span class="name_span">[Настя<i>(сухо)</i>]:</span> Привет',
        },

        'img_right' : {
            'path' : null,
        },
    },

    {

        'main_bck' : {
            'path' : './assets/bcg_office2.jpg',
        },

        'img_left' : {
            'path' : './assets/an2.png',
        },

        'text' : {
            'content' : '<span class="name_span">[Настя]:</span> Какой же он приставучий, все прет и прет...',
        },

        'img_right' : {
            'path' : './assets/fr2.png',
        },
    },

    {

        'main_bck' : {
            'path' : './assets/portal.png',
        },

        'img_left' : {
            'path' : null,
        },

        'text' : {
            'content' : '<i>Вдруг в центре офиса открылся огромный портал и из него вышли два страшных демона. Своей энергией портал разрушил большую часть здания...</i>',
        },

        'img_right' : {
            'path' : null,
        },
    },

    {

        'main_bck' : {
            'path' : './assets/portal.png',
        },

        'img_left' : {
            'path' : './assets/demon1.png',
        },

        'text' : {
            'content' : '[Демон1]: Хватай ее. Теперь-то ты сам к нам придешь, Бариот - убийца демонов. Мы отомстим тебе за наших сородичей...',
        },

        'img_right' : {
            'path' : './assets/demon2.png',
        },
    },

    {

        'main_bck' : {
            'path' : './assets/portal.png',
        },

        'img_left' : {
            'path' : './assets/demon1.png',
        },

        'text' : {
            'content' : '[Демон1]: Он точно за ней явится!',
        },

        'img_right' : {
            'path' : './assets/demon2.png',
        },
    },

    {

        'main_bck' : {
            'path' : './assets/portal.png',
        },

        'img_left' : {
            'path' : './assets/demon1.png',
        },

        'text' : {
            'content' : '[Демон1]: Он точно за ней явится!',
        },

        'img_right' : {
            'path' : './assets/demon2.png',
        },
    },
]

let body = document.querySelector('body')

let main = document.querySelector('.wrap')
let img_left = document.querySelector('.container_left_img')
let img_right = document.querySelector('.container_right_img')
let text = document.querySelector('.container_text')

let btn_next_scene = document.querySelector('.next_scene')
let btn_next_text = document.querySelector('.modal__btn')




const start = function() {

    let i = 0
    render = `<div class="container_img container_left_img">
    ${plot[i]['img_left']['path'] ? "<img src=" + plot[i]['img_left']['path'] + " alt=''>" : ""}
</div>

<div class="container_text">
    <div class="box">
      
        <div class="modal-container" id="m1-o" style="--m-background: transparent;">
          <div class="modal">
            <p class="modal__text">${plot[i]['text']['content']}</p>
            
            
          </div>
        </div>
      </div>
</div>

<div class="container_img container_right_img">
${plot[i]['img_right']['path'] ? "<img src=" + plot[i]['img_right']['path'] + " alt=''>" : ""}
</div>`


body.style.backgroundImage = plot[i]['main_bck']['path'] ? "url(" + plot[i]['main_bck']['path'] + ")" : ""

main.innerHTML = render

function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    yield 6;
    yield 7;
    yield 8;
    yield 9;
    yield 10;
    return 11;
  }
  
  let generator = generateSequence();


btn_next_scene.onclick = () => {

    i = generator.next().value
    body.style.backgroundImage = plot[i]['main_bck']['path'] ? "url(" + plot[i]['main_bck']['path'] + ")" : ""
    main.innerHTML = ''
    main.innerHTML = `<div class="container_img container_left_img">
    ${plot[i]['img_left']['path'] ? "<img src=" + plot[i]['img_left']['path'] + " alt=''>" : ""}
</div>

<div class="container_text">
    <div class="box">
      
        <div class="modal-container" id="m1-o" style="--m-background: transparent;">
          <div class="modal">
            <p class="modal__text">${plot[i]['text']['content']}</p>
            
            
          </div>
        </div>
      </div>
</div>

<div class="container_img container_right_img">
${plot[i]['img_right']['path'] ? "<img src=" + plot[i]['img_right']['path'] + " alt=''>" : ""}
</div>`
    
}
}()



