const selects = document.querySelectorAll('.select');
selectIcon = document.querySelectorAll('.select__icon');

const currentValues = {
    direction: 'all',
    area: 'all'
};
let filters = [];
const allValues = [
    {
        id:1, name: 'Все', direction: 'all', area: 'all'
    },
    {
        id:2, name: 'DIY', direction: 'DIY', area: 'DIY'
    },
    {
        id:3, name: 'Авто', direction: 'auto', area: 'auto'
    },
    {
        id:4, name: 'Авторское шоу', direction: 'show', area: 'show'
    },
    {
        id:5, name: 'Анбоксинг', direction: 'boxing', area: 'boxing'
    },
    {
        id:6, name: 'Еда', direction: 'eat', area: 'eat'
    },
    {
        id:7, name: 'Животные', direction: 'animal', area: 'animal'
    },
    {
        id:8, name: 'Игры', direction: 'games', area: 'games'
    },
    {
        id:9, name: 'Иностранные языки', direction: 'lang', area: 'lang'
    },
    {
        id:10, name: 'Кино', direction: 'kino', area: 'kino'
    },
    {
        id:11, name: 'Красота', direction: 'beauty', area: 'beauty'
    },
]
let direction = 'all';
let currentArea = 'all';
const cardsItem = document.querySelectorAll('.cards__item');

let select = function () {
    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select__item');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        this.parentElement.classList.toggle('active');
    }

    function selectChoose() {
        let text = this.innerText,
            select = this.closest('.select'),
            currentText = select.querySelector('.selected');
            currentValues[currentText.id] = text;
        currentText.innerText = text;
        select.classList.remove('active');
        changeValue(text);
    }

};


select();

function changeValue(text){
    cardsItem.forEach( card => {
        card.classList.remove('hide');
        if(card.getAttribute('data-direction') !== text && text !== 'Все'){
            card.classList.add('hide');
        }
    })
}