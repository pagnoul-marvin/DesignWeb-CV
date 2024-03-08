import {settings} from "./settings";

settings.noJsMessageElement.classList.add('no_display');
settings.selectJsEnabledElement.classList.remove('no_display');
settings.languagesElement.classList.add('no_display');
settings.servicesListLiElements.forEach(liElt => {
    liElt.addEventListener('click', (e) => {
        if (e.currentTarget.id === settings.wwwId) {
            e.currentTarget.classList.add(settings.activeServiceClass);
            settings.wwwImageElement.src = settings.wwwActivePath;
            if (settings.pencilElement.classList.contains(settings.activeServiceClass)) {
                settings.pencilElement.classList.remove(settings.activeServiceClass);
                settings.pencilImageElement.src = settings.designPath;
            } else if (settings.responsiveElement.classList.contains(settings.activeServiceClass)) {
                settings.responsiveElement.classList.remove(settings.activeServiceClass);
                settings.responsiveImageElement.src = settings.responsivePath;
            } else if (settings.rankingElement.classList.contains(settings.activeServiceClass)) {
                settings.rankingElement.classList.remove(settings.activeServiceClass);
                settings.rankingImageElement.src = settings.referencementPath;
            }
        } else if (e.currentTarget.id === settings.pencilId) {
            e.currentTarget.classList.add(settings.activeServiceClass);
            settings.pencilImageElement.src = settings.designActivePath;
            if (settings.wwwElement.classList.contains(settings.activeServiceClass)) {
                settings.wwwElement.classList.remove(settings.activeServiceClass);
                settings.wwwImageElement.src = settings.wwwPath;
            } else if (settings.responsiveElement.classList.contains(settings.activeServiceClass)) {
                settings.responsiveElement.classList.remove(settings.activeServiceClass);
                settings.responsiveImageElement.src = settings.responsivePath;
            } else if (settings.rankingElement.classList.contains(settings.activeServiceClass)) {
                settings.rankingElement.classList.remove(settings.activeServiceClass);
                settings.rankingImageElement.src = settings.referencementPath;
            }
        } else if (e.currentTarget.id === settings.responsiveId) {
            e.currentTarget.classList.add(settings.activeServiceClass);
            settings.responsiveImageElement.src = settings.responsiveActivePath;
            if (settings.pencilElement.classList.contains(settings.activeServiceClass)) {
                settings.pencilElement.classList.remove(settings.activeServiceClass);
                settings.pencilImageElement.src = settings.designPath
            } else if (settings.wwwElement.classList.contains(settings.activeServiceClass)) {
                settings.wwwElement.classList.remove(settings.activeServiceClass);
                settings.wwwImageElement.src = settings.wwwPath;
            } else if (settings.rankingElement.classList.contains(settings.activeServiceClass)) {
                settings.rankingElement.classList.remove(settings.activeServiceClass);
                settings.rankingImageElement.src = settings.referencementPath;
            }
        } else {
            e.currentTarget.classList.add(settings.activeServiceClass);
            settings.rankingImageElement.src = settings.referencementActivePath;
            if (settings.pencilElement.classList.contains(settings.activeServiceClass)) {
                settings.pencilElement.classList.remove(settings.activeServiceClass);
                settings.pencilImageElement.src = settings.designPath;
            } else if (settings.responsiveElement.classList.contains(settings.activeServiceClass)) {
                settings.responsiveElement.classList.remove(settings.activeServiceClass);
                settings.responsiveImageElement.src = settings.responsivePath;
            } else if (settings.wwwElement.classList.contains(settings.activeServiceClass)) {
                settings.wwwElement.classList.remove(settings.activeServiceClass);
                settings.wwwImageElement.src = settings.wwwPath;
            }
        }
        settings.serviceTitleElement.textContent = e.currentTarget.dataset.name;
        settings.contactElement.classList.add(settings.aServiceIsActiveClass);
    });
});

function previousSlide() {
    if (settings.pourcentage === settings.maxPourcentage) {
        settings.pourcentage = settings.minPourcentage;
    } else {
        settings.pourcentage -= 460;
    }
}

function nextSlide() {
    if (settings.pourcentage === settings.minPourcentage) {
        settings.pourcentage = settings.maxPourcentage;
    } else {
        settings.pourcentage += 460;
    }
}

document.querySelectorAll("button").forEach(btnElt => {
    btnElt.addEventListener('click', (e) => {
        if (e.currentTarget.id === "first_slider_previous") {
            previousSlide(e);
            document.getElementById('first_slider').style.left = `${settings.pourcentage}px`;
        } else if (e.currentTarget.id === "first_slider_next") {
            nextSlide(e);
            document.getElementById('first_slider').style.left = `${settings.pourcentage}px`;
        } else if (e.currentTarget.id === "second_slider_previous") {
            previousSlide(e);
            document.getElementById('second_slider').style.left = `${settings.pourcentage}px`;
        } else {
            nextSlide(e);
            document.getElementById('second_slider').style.left = `${settings.pourcentage}px`;
        }
    });
});

if (window.innerWidth > 1500) {
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
                if (document.getElementById('second_nav_list_item').classList.contains('active_dropdown')) {
                    document.getElementById('second_nav_list_item').classList.remove('active_dropdown');
                    document.getElementById('second_dropdown').classList.add('no_display');
                    document.getElementById('nav_second_arrow').classList.remove('rotate');
                } else if (document.getElementById('third_nav_list_item').classList.contains('active_dropdown')) {
                    document.getElementById('third_nav_list_item').classList.remove('active_dropdown');
                    document.getElementById('third_dropdown').classList.add('no_display');
                    document.getElementById('nav_third_arrow').classList.remove('rotate');
                } else if (document.getElementById('fourth_nav_list_item').classList.contains('active_dropdown')) {
                    document.getElementById('fourth_nav_list_item').classList.remove('active_dropdown');
                    document.getElementById('fourth_dropdown').classList.add('no_display');
                    document.getElementById('nav_fourth_arrow').classList.remove('rotate');
                } else {
                    document.getElementById('fifth_nav_list_item').classList.remove('active_dropdown');
                    document.getElementById('fifth_dropdown').classList.add('no_display');
                    document.getElementById('nav_fifth_arrow').classList.remove('rotate');
                }
                document.getElementById('first_dropdown').classList.toggle('no_display');
                document.getElementById('nav_first_arrow').classList.toggle('rotate');
            } else if (e.currentTarget.id === 'second_nav_list_item') {
                if (document.getElementById('first_nav_list_item').classList.contains('active_dropdown')) {
                    document.getElementById('first_nav_list_item').classList.remove('active_dropdown');
                    document.getElementById('first_dropdown').classList.add('no_display');
                    document.getElementById('nav_first_arrow').classList.remove('rotate');
                } else if (document.getElementById('third_nav_list_item').classList.contains('active_dropdown')) {
                    document.getElementById('third_nav_list_item').classList.remove('active_dropdown');
                    document.getElementById('third_dropdown').classList.add('no_display');
                    document.getElementById('nav_third_arrow').classList.remove('rotate');
                } else if (document.getElementById('fourth_nav_list_item').classList.contains('active_dropdown')) {
                    document.getElementById('fourth_nav_list_item').classList.remove('active_dropdown');
                    document.getElementById('fourth_dropdown').classList.add('no_display');
                    document.getElementById('nav_fourth_arrow').classList.remove('rotate');
                } else {
                    document.getElementById('fifth_nav_list_item').classList.remove('active_dropdown');
                    document.getElementById('fifth_dropdown').classList.add('no_display');
                    document.getElementById('nav_fifth_arrow').classList.remove('rotate');
                }
                document.getElementById('second_dropdown').classList.toggle('no_display');
                document.getElementById('nav_second_arrow').classList.toggle('rotate');
            } else if (e.currentTarget.id === 'third_nav_list_item') {
                if (document.getElementById('second_nav_list_item').classList.contains('active_dropdown')) {
                    document.getElementById('second_nav_list_item').classList.remove('active_dropdown');
                    document.getElementById('second_dropdown').classList.add('no_display');
                    document.getElementById('nav_second_arrow').classList.remove('rotate');
                } else if (document.getElementById('first_nav_list_item').classList.contains('active_dropdown')) {
                    document.getElementById('first_nav_list_item').classList.remove('active_dropdown');
                    document.getElementById('first_dropdown').classList.add('no_display');
                    document.getElementById('nav_first_arrow').classList.remove('rotate');
                } else if (document.getElementById('fourth_nav_list_item').classList.contains('active_dropdown')) {
                    document.getElementById('fourth_nav_list_item').classList.remove('active_dropdown');
                    document.getElementById('fourth_dropdown').classList.add('no_display');
                    document.getElementById('nav_fourth_arrow').classList.remove('rotate');
                } else {
                    document.getElementById('fifth_nav_list_item').classList.remove('active_dropdown');
                    document.getElementById('fifth_dropdown').classList.add('no_display');
                    document.getElementById('nav_fifth_arrow').classList.remove('rotate');
                }
                document.getElementById('third_dropdown').classList.toggle('no_display');
                document.getElementById('nav_third_arrow').classList.toggle('rotate');
            } else if (e.currentTarget.id === 'fourth_nav_list_item') {
                if (document.getElementById('second_nav_list_item').classList.contains('active_dropdown')) {
                    document.getElementById('second_nav_list_item').classList.remove('active_dropdown');
                    document.getElementById('second_dropdown').classList.add('no_display');
                    document.getElementById('nav_second_arrow').classList.remove('rotate');
                } else if (document.getElementById('third_nav_list_item').classList.contains('active_dropdown')) {
                    document.getElementById('third_nav_list_item').classList.remove('active_dropdown');
                    document.getElementById('third_dropdown').classList.add('no_display');
                    document.getElementById('nav_third_arrow').classList.remove('rotate');
                } else if (document.getElementById('first_nav_list_item').classList.contains('active_dropdown')) {
                    document.getElementById('first_nav_list_item').classList.remove('active_dropdown');
                    document.getElementById('first_dropdown').classList.add('no_display');
                    document.getElementById('nav_first_arrow').classList.remove('rotate');
                } else {
                    document.getElementById('fifth_nav_list_item').classList.remove('active_dropdown');
                    document.getElementById('fifth_dropdown').classList.add('no_display');
                    document.getElementById('nav_fifth_arrow').classList.remove('rotate');
                }
                document.getElementById('fourth_dropdown').classList.toggle('no_display');
                document.getElementById('nav_fourth_arrow').classList.toggle('rotate');
            } else {
                if (document.getElementById('second_nav_list_item').classList.contains('active_dropdown')) {
                    document.getElementById('second_nav_list_item').classList.remove('active_dropdown');
                    document.getElementById('second_dropdown').classList.add('no_display');
                    document.getElementById('nav_second_arrow').classList.remove('rotate');
                } else if (document.getElementById('third_nav_list_item').classList.contains('active_dropdown')) {
                    document.getElementById('third_nav_list_item').classList.remove('active_dropdown');
                    document.getElementById('third_dropdown').classList.add('no_display');
                    document.getElementById('nav_third_arrow').classList.remove('rotate');
                } else if (document.getElementById('fourth_nav_list_item').classList.contains('active_dropdown')) {
                    document.getElementById('fourth_nav_list_item').classList.remove('active_dropdown');
                    document.getElementById('fourth_dropdown').classList.add('no_display');
                    document.getElementById('nav_fourth_arrow').classList.remove('rotate');
                } else {
                    document.getElementById('first_nav_list_item').classList.remove('active_dropdown');
                    document.getElementById('first_dropdown').classList.add('no_display');
                    document.getElementById('nav_first_arrow').classList.remove('rotate');
                }
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

settings.articleNumber = 0;
document.getElementById('contact').addEventListener('click', (e) => {
    if (e.currentTarget.classList.contains('a_service_is_active')) {
        settings.articleNumber = 1;
        document.getElementById('article_number').textContent = `${settings.articleNumber}`;
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
    if (settings.articleNumber === 1) {
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
    settings.articleNumber = 0;
    document.querySelectorAll('#article_hover>li:not(:last-child)').forEach(liElt => {
        liElt.classList.add('no_display');
    });
    document.querySelector('#article_hover>li:last-child').classList.remove('no_display');
    document.getElementById('article_number').textContent = `${settings.articleNumber}`;
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

if (window.innerWidth <= 1500) {
    document.getElementById('burger_menu').addEventListener('click', (e) => {
        document.querySelector('ul#nav_list').classList.toggle('remove_no_display');
        e.currentTarget.classList.toggle('disappeared_middle_line');
    });
}