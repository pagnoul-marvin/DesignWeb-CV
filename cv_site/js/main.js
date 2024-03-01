document.getElementById('no_js_message').classList.add('no_display');
document.getElementById('select_js_enabled').classList.remove('no_display');
document.getElementById('languages').classList.add('no_display');

const wwwElement = document.getElementById('www');
const wwwImage = document.getElementById('www_image');
const pencilElement = document.getElementById('pencil');
const pencilImage = document.getElementById('pencil_image');
const responsiveElement = document.getElementById('responsive');
const responsiveImage = document.getElementById('responsive_image');
const rankingElement = document.getElementById('ranking');
const rankingImage = document.getElementById('ranking_image');
const serviceTitle = document.getElementById('service_name');
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
        serviceTitle.textContent = e.currentTarget.dataset.name;
        document.getElementById('contact').classList.add('a_service_is_active');
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
});

if (window.innerWidth > 750) {
    document.querySelectorAll('#nav_list>li').forEach(liElt => {
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

    document.querySelectorAll('#nav_list>li').forEach(liElt => {
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
} else {
    document.querySelectorAll('#nav_list>li').forEach(liElt => {
        liElt.addEventListener('click', (e) => {
            if (e.currentTarget.id === 'first_nav_list_item') {
                document.getElementById('first_dropdown').classList.toggle('no_display');
                document.getElementById('nav_first_arrow').classList.toggle('rotate');
            } else if (e.currentTarget.id === 'second_nav_list_item') {
                document.getElementById('second_dropdown').classList.toggle('no_display');
                document.getElementById('nav_second_arrow').classList.toggle('rotate');
            } else if (e.currentTarget.id === 'third_nav_list_item') {
                document.getElementById('third_dropdown').classList.toggle('no_display');
                document.getElementById('nav_third_arrow').classList.toggle('rotate');
            } else if (e.currentTarget.id === 'fourth_nav_list_item') {
                document.getElementById('fourth_dropdown').classList.toggle('no_display');
                document.getElementById('nav_fourth_arrow').classList.toggle('rotate');
            } else {
                document.getElementById('fifth_dropdown').classList.toggle('no_display');
                document.getElementById('nav_fifth_arrow').classList.toggle('rotate');
            }
            e.currentTarget.classList.toggle('active_dropdown');
        });
    });
}


document.querySelector('#hobbies_button').addEventListener('click', () => {
    document.querySelector('#hobbies_list').classList.toggle('no_display');
    document.getElementById('overlay').classList.toggle('no_display');
});

document.querySelector('#close2').addEventListener('click', () => {
    document.querySelector('#hobbies_list').classList.add('no_display');
    document.getElementById('overlay').classList.add('no_display');
});

let articleNumber = 0;
document.getElementById('contact').addEventListener('click', (e) => {
    if (e.currentTarget.classList.contains('a_service_is_active')) {
        articleNumber = 1;
        document.getElementById('article_number').textContent = `${articleNumber}`;
        document.querySelectorAll('#article_hover>li:not(:last-child)').forEach(liElt => {
            liElt.classList.remove('no_display');
        });
        document.querySelector('#article_hover>li:last-child').classList.add('no_display');
    } else {
        document.querySelectorAll('#article_hover>li:not(:last-child)').forEach(liElt => {
            liElt.classList.add('no_display');
        });
        document.querySelector('#article_hover>li:last-child').classList.remove('no_display');
    }
    document.getElementById('article_hover').classList.remove('no_display');
    document.getElementById('second_overlay').classList.remove('no_display');
});

document.getElementById('basket').addEventListener('click', () => {
    document.getElementById('second_overlay').classList.remove('no_display');
    if (articleNumber === 1) {
        document.getElementById('article_hover').classList.remove('no_display');
    } else {
        document.getElementById('article_hover').classList.remove('no_display');
        document.querySelectorAll('#article_hover>li:not(:last-child)').forEach(liElt => {
            liElt.classList.add('no_display');
        });
        document.querySelector('#article_hover>li:last-child').classList.remove('no_display');
    }
});
document.getElementById('close1').addEventListener('click', () => {
    document.getElementById('article_hover').classList.add('no_display');
    document.getElementById('second_overlay').classList.add('no_display');
});

document.getElementById('delete_article').addEventListener('click', () => {
    articleNumber = 0;
    document.querySelectorAll('#article_hover>li:not(:last-child)').forEach(liElt => {
        liElt.classList.add('no_display');
    });
    document.querySelector('#article_hover>li:last-child').classList.remove('no_display');
    document.getElementById('article_number').textContent = `${articleNumber}`;
});

document.getElementById('back_to_services').addEventListener('click', () => {
    document.getElementById('article_hover').classList.add('no_display');
    document.getElementById('second_overlay').classList.add('no_display');
});

document.getElementById('language_chosen').addEventListener('click', () => {
    document.getElementById('select_options').classList.toggle('no_display');
    document.querySelector('#languages_sponsors img').classList.toggle('rotate');
});

document.querySelectorAll('#select_options p').forEach(pElt => {
    pElt.addEventListener('click', (e) => {
        document.getElementById('language_chosen').textContent = e.currentTarget.dataset.name;
        document.getElementById('select_options').classList.add('no_display');
        document.querySelector('#languages_sponsors img').classList.remove('rotate');
    });
});

document.querySelector('#select_js_enabled img').addEventListener('click', () => {
    document.getElementById('select_options').classList.toggle('no_display');
    document.querySelector('#languages_sponsors img').classList.toggle('rotate');
});

if (window.innerWidth <= 750) {
    document.getElementById('burger_menu').addEventListener('click', () => {
        document.querySelector('ul#nav_list').classList.toggle('remove_no_display');
    });
}