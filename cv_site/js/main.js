/*document.querySelector('main p:first-child').classList.add('no_js');*/

const wwwElement = document.getElementById('www');
const wwwImage = document.getElementById('www_image');
const pencilElement = document.getElementById('pencil');
const pencilImage = document.getElementById('pencil_image');
const responsiveElement = document.getElementById('responsive');
const responsiveImage = document.getElementById('responsive_image');
const rankingElement = document.getElementById('ranking');
const rankingImage = document.getElementById('ranking_image');
document.querySelectorAll('#services_list li').forEach(liElt => {
    liElt.addEventListener('click', (e) => {
        if (e.currentTarget.id === 'www') {
            e.currentTarget.classList.add('active_service');
            document.getElementById('www_image').src = './img/icons/www_active.svg';
            if (pencilElement.classList.contains('active_service')) {
                pencilElement.classList.remove('active_service');
                pencilImage.src = './img/icons/design.svg';
            } else if (responsiveElement.classList.contains('active_service')) {
                responsiveElement.classList.remove('active_service');
                responsiveImage.src = './img/icons/responsive.svg';
            } else if (rankingElement.classList.contains('active_service')) {
                rankingElement.classList.remove('active_service');
                rankingImage.src = './img/icons/referencement.svg';
            }
        } else if (e.currentTarget.id === 'pencil') {
            e.currentTarget.classList.add('active_service');
            document.getElementById('pencil_image').src = './img/icons/design_active.svg';
            if (wwwElement.classList.contains('active_service')) {
                wwwElement.classList.remove('active_service');
                wwwImage.src = './img/icons/www.svg';
            } else if (responsiveElement.classList.contains('active_service')) {
                responsiveElement.classList.remove('active_service');
                responsiveImage.src = './img/icons/responsive.svg';
            } else if (rankingElement.classList.contains('active_service')) {
                rankingElement.classList.remove('active_service');
                rankingImage.src = './img/icons/referencement.svg';
            }
        } else if (e.currentTarget.id === 'responsive') {
            e.currentTarget.classList.add('active_service');
            document.getElementById('responsive_image').src = './img/icons/responsive_active.svg';
            if (pencilElement.classList.contains('active_service')) {
                pencilElement.classList.remove('active_service');
                pencilImage.src = './img/icons/design.svg';
            } else if (wwwElement.classList.contains('active_service')) {
                wwwElement.classList.remove('active_service');
                wwwImage.src = './img/icons/www.svg';
            } else if (rankingElement.classList.contains('active_service')) {
                rankingElement.classList.remove('active_service');
                rankingImage.src = './img/icons/referencement.svg';
            }
        } else {
            e.currentTarget.classList.add('active_service');
            document.getElementById('ranking_image').src = './img/icons/referencement_active.svg';
            if (pencilElement.classList.contains('active_service')) {
                pencilElement.classList.remove('active_service');
                pencilImage.src = './img/icons/design.svg';
            } else if (responsiveElement.classList.contains('active_service')) {
                responsiveElement.classList.remove('active_service');
                responsiveImage.src = './img/icons/responsive.svg';
            } else if (wwwElement.classList.contains('active_service')) {
                wwwElement.classList.remove('active_service');
                wwwImage.src = './img/icons/www.svg';
            }
        }
    });
});

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


document.querySelector('#hobbies_button').addEventListener('click', () => {
    document.querySelector('#hobbies_list').classList.remove('no_display');
    document.getElementById('overlay').classList.add('opacity');
});

document.querySelector('#close2').addEventListener('click', () => {
    document.querySelector('#hobbies_list').classList.add('no_display');
    document.getElementById('overlay').classList.remove('opacity');
});

let articleNumber = 0;
document.getElementById('contact').addEventListener('click', () => {
    articleNumber = 1;
    document.getElementById('article_number').textContent = `${articleNumber}`;
    document.getElementById('article_hover').classList.remove('no_display');
});

document.getElementById('basket').addEventListener('click', () => {
    document.getElementById('article_hover').classList.toggle('no_display');
});
document.getElementById('close1').addEventListener('click', () => {
    document.getElementById('article_hover').classList.add('no_display');
});

document.getElementById('delete_article').addEventListener('click', () => {
    articleNumber = 0;
    document.getElementById('article_hover').innerHTML = "";
    document.getElementById('article_number').textContent = `${articleNumber}`;
});




