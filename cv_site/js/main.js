/*document.querySelector('main p:first-child').classList.add('no_js');*/

let pourcentage = 0;
let maxPourcentage = -460;
let minPourcentage = 0;

function previousSlide() {
    if (pourcentage === maxPourcentage) {
        pourcentage = minPourcentage;
    } else {
        pourcentage -= 460;
    }
}

function nextSlide() {
    if (pourcentage === minPourcentage) {
        pourcentage = maxPourcentage;
    } else {
        pourcentage += 460;
    }
}

document.querySelectorAll("button").forEach(btnElt => {
    btnElt.addEventListener('click', (e) => {
        if (e.currentTarget.id === "first_slider_previous") {
            previousSlide(e);
            document.getElementById('first_slider').style.left = `${pourcentage}px`;
        } else if (e.currentTarget.id === "first_slider_next") {
            nextSlide(e);
            document.getElementById('first_slider').style.left = `${pourcentage}px`;
        } else if (e.currentTarget.id === "second_slider_previous") {
            previousSlide(e);
            document.getElementById('second_slider').style.left = `${pourcentage}px`;
        } else {
            nextSlide(e);
            document.getElementById('second_slider').style.left = `${pourcentage}px`;
        }
    });
    btnElt.addEventListener('mouseover', (e) => {
        e.currentTarget.style.borderColor = 'grey';
    });
    btnElt.addEventListener('mouseout', (e) => {
        e.currentTarget.style.borderColor = 'black';
    });
});


document.querySelectorAll('#nav_list>li:not(:last-child)').forEach(liElt => {
    liElt.addEventListener('mouseover', (e) => {
        if (e.currentTarget.id === 'first_nav_list_item') {
            document.getElementById('first_dropdown').classList.remove('no_display');
            document.getElementById('nav_first_arrow').classList.add('rotate');
        } else if (e.currentTarget.id === 'second_nav_list_item') {
            document.getElementById('second_dropdown').classList.remove('no_display');
            document.getElementById('nav_second_arrow').classList.add('rotate');
        } else if (e.currentTarget.id === 'third_nav_list_item') {
            document.getElementById('third_dropdown').classList.remove('no_display');
            document.getElementById('nav_third_arrow').classList.add('rotate');
        } else if (e.currentTarget.id === 'fourth_nav_list_item') {
            document.getElementById('fourth_dropdown').classList.remove('no_display');
            document.getElementById('nav_fourth_arrow').classList.add('rotate');
        } else {
            document.getElementById('fifth_dropdown').classList.remove('no_display');
            document.getElementById('nav_fifth_arrow').classList.add('rotate');
        }
    });
});
document.querySelectorAll('#nav_list>li:not(:last-child)').forEach(liElt => {
    liElt.addEventListener('mouseout', (e) => {
        if (e.currentTarget.id === 'first_nav_list_item') {
            document.getElementById('first_dropdown').classList.add('no_display');
            document.getElementById('nav_first_arrow').classList.remove('rotate');
        } else if (e.currentTarget.id === 'second_nav_list_item') {
            document.getElementById('second_dropdown').classList.add('no_display');
            document.getElementById('nav_second_arrow').classList.remove('rotate');
        } else if (e.currentTarget.id === 'third_nav_list_item') {
            document.getElementById('third_dropdown').classList.add('no_display');
            document.getElementById('nav_third_arrow').classList.remove('rotate');
        } else if (e.currentTarget.id === 'fourth_nav_list_item') {
            document.getElementById('fourth_dropdown').classList.add('no_display');
            document.getElementById('nav_fourth_arrow').classList.remove('rotate');
        } else {
            document.getElementById('fifth_dropdown').classList.add('no_display');
            document.getElementById('nav_fifth_arrow').classList.remove('rotate');
        }
    });
});


document.querySelector('#hobbies_button').addEventListener('click', ()=>{
    document.querySelector('#hobbies_list').classList.toggle('no_display');
    document.getElementById('overlay').classList.toggle('opacity');
});

document.querySelector('#close2').addEventListener('click', ()=>{
    document.querySelector('#hobbies_list').classList.toggle('no_display');
    document.getElementById('overlay').classList.toggle('opacity');
});

let articleNumber = 0;
document.getElementById('contact').addEventListener('click', ()=>{
    document.getElementById('article_number').textContent = `${articleNumber++}`;
    document.getElementById('article_hover').classList.remove('no_display');
});

document.getElementById('basket').addEventListener('click', ()=>{
    document.getElementById('article_hover').classList.toggle('no_display');
});
document.getElementById('close1').addEventListener('click', ()=>{
    document.getElementById('article_hover').classList.add('no_display');
});

document.getElementById('delete_article').addEventListener('click', ()=>{
    articleNumber = 0;
    document.getElementById('article_hover').innerHTML = "";
    document.getElementById('article_number').textContent = `${articleNumber}`;
});





