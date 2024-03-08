import {settings} from "./settings";

const myCurriculumVitae = {
    init() {
        settings.noJsMessageElement.classList.add('no_display');
        settings.selectJsEnabledElement.classList.remove('no_display');
        settings.languagesElement.classList.add('no_display');
        this.addEventListeners();

        if (window.innerWidth > 1500) {
            settings.navListLiElements.forEach(liElt => {
                liElt.addEventListener('mouseover', (e) => {
                    if (e.currentTarget.id === settings.firstNavListItemId) {
                        settings.firstDropdownElement.classList.remove(settings.noDisplayClass);
                        settings.navFirstArrowElement.classList.add(settings.rotateClass);
                    } else if (e.currentTarget.id === settings.secondNavListItemId) {
                        settings.secondDropdownElement.classList.remove(settings.noDisplayClass);
                        settings.navSecondArrowElement.classList.add(settings.rotateClass);
                    } else if (e.currentTarget.id === settings.thirdNavListItemId) {
                        settings.thirdDropdownElement.classList.remove(settings.noDisplayClass);
                        settings.navThirdArrowElement.classList.add(settings.rotateClass);
                    } else if (e.currentTarget.id === settings.fourthNavListItemId) {
                        settings.fourthDropdownElement.classList.remove(settings.noDisplayClass);
                        settings.navFourthArrowElement.classList.add(settings.rotateClass);
                    } else {
                        settings.fifthDropdownElement.classList.remove(settings.noDisplayClass);
                        settings.navFifthArrowElement.classList.add(settings.rotateClass);
                    }
                });
            });

            settings.navListLiElements.forEach(liElt => {
                liElt.addEventListener('mouseout', (e) => {
                    if (e.currentTarget.id === settings.firstNavListItemId) {
                        settings.firstDropdownElement.classList.add(settings.noDisplayClass);
                        settings.navFirstArrowElement.classList.remove(settings.rotateClass);
                    } else if (e.currentTarget.id === settings.secondNavListItemId) {
                        settings.secondDropdownElement.classList.add(settings.noDisplayClass);
                        settings.navSecondArrowElement.classList.remove(settings.rotateClass);
                    } else if (e.currentTarget.id === settings.thirdNavListItemId) {
                        settings.thirdDropdownElement.classList.add(settings.noDisplayClass);
                        settings.navThirdArrowElement.classList.remove(settings.rotateClass);
                    } else if (e.currentTarget.id === settings.fourthNavListItemId) {
                        settings.fourthDropdownElement.classList.add(settings.noDisplayClass);
                        settings.navFourthArrowElement.classList.remove(settings.rotateClass);
                    } else {
                        settings.fifthDropdownElement.classList.add(settings.noDisplayClass);
                        settings.navFifthArrowElement.classList.remove(settings.rotateClass);
                    }
                });
            });
        } else {
            settings.navListLiElements.forEach(liElt => {
                liElt.addEventListener('click', (e) => {
                    if (e.currentTarget.id === settings.firstNavListItemId) {
                        if (settings.secondNavListItemElement.classList.contains(settings.activeDropdownClass)) {
                            settings.secondNavListItemElement.classList.remove(settings.activeDropdownClass);
                            settings.secondDropdownElement.classList.add(settings.noDisplayClass);
                            settings.navSecondArrowElement.classList.remove(settings.rotateClass);
                        } else if (settings.thirdNavListItemElement.classList.contains(settings.activeDropdownClass)) {
                            settings.thirdNavListItemElement.classList.remove(settings.activeDropdownClass);
                            settings.thirdDropdownElement.classList.add(settings.noDisplayClass);
                            settings.navThirdArrowElement.classList.remove(settings.rotateClass);
                        } else if (settings.fourthNavListItemElement.classList.contains(settings.activeDropdownClass)) {
                            settings.fourthNavListItemElement.classList.remove(settings.activeDropdownClass);
                            settings.fourthDropdownElement.classList.add(settings.noDisplayClass);
                            settings.navFourthArrowElement.classList.remove(settings.rotateClass);
                        } else {
                            settings.fifthNavListItemElement.classList.remove(settings.activeDropdownClass);
                            settings.fifthDropdownElement.classList.add(settings.noDisplayClass);
                            settings.navFifthArrowElement.classList.remove(settings.rotateClass);
                        }
                        settings.firstDropdownElement.classList.toggle(settings.noDisplayClass);
                        settings.navFirstArrowElement.classList.toggle(settings.rotateClass);
                    } else if (e.currentTarget.id === settings.secondNavListItemId) {
                        if (settings.firstNavListItemElement.classList.contains(settings.activeDropdownClass)) {
                            settings.firstNavListItemElement.classList.remove(settings.activeDropdownClass);
                            settings.firstDropdownElement.classList.add(settings.noDisplayClass);
                            settings.navFirstArrowElement.classList.remove(settings.rotateClass);
                        } else if (settings.thirdNavListItemElement.classList.contains(settings.activeDropdownClass)) {
                            settings.thirdNavListItemElement.classList.remove(settings.activeDropdownClass);
                            settings.thirdDropdownElement.classList.add(settings.noDisplayClass);
                            settings.navThirdArrowElement.classList.remove(settings.rotateClass);
                        } else if (settings.fourthNavListItemElement.classList.contains(settings.activeDropdownClass)) {
                            settings.fourthNavListItemElement.classList.remove(settings.activeDropdownClass);
                            settings.fourthDropdownElement.classList.add(settings.noDisplayClass);
                            settings.navFourthArrowElement.classList.remove(settings.rotateClass);
                        } else {
                            settings.fifthNavListItemElement.classList.remove(settings.activeDropdownClass);
                            settings.fifthDropdownElement.classList.add(settings.noDisplayClass);
                            settings.navFifthArrowElement.classList.remove(settings.rotateClass);
                        }
                        settings.secondDropdownElement.classList.toggle(settings.noDisplayClass);
                        settings.navSecondArrowElement.classList.toggle(settings.rotateClass);
                    } else if (e.currentTarget.id === settings.thirdNavListItemId) {
                        if (settings.secondNavListItemElement.classList.contains(settings.activeDropdownClass)) {
                            settings.secondNavListItemElement.classList.remove(settings.activeDropdownClass);
                            settings.secondDropdownElement.classList.add(settings.noDisplayClass);
                            settings.navSecondArrowElement.classList.remove(settings.rotateClass);
                        } else if (settings.firstNavListItemElement.classList.contains(settings.activeDropdownClass)) {
                            settings.firstNavListItemElement.classList.remove(settings.activeDropdownClass);
                            settings.firstDropdownElement.classList.add(settings.noDisplayClass);
                            settings.navFirstArrowElement.classList.remove(settings.rotateClass);
                        } else if (settings.fourthNavListItemElement.classList.contains(settings.activeDropdownClass)) {
                            settings.fourthNavListItemElement.classList.remove(settings.activeDropdownClass);
                            settings.fourthDropdownElement.classList.add(settings.noDisplayClass);
                            settings.navFourthArrowElement.classList.remove(settings.rotateClass);
                        } else {
                            settings.fifthNavListItemElement.classList.remove(settings.activeDropdownClass);
                            settings.fifthDropdownElement.classList.add(settings.noDisplayClass);
                            settings.navFifthArrowElement.classList.remove(settings.rotateClass);
                        }
                        settings.thirdDropdownElement.classList.toggle(settings.noDisplayClass);
                        settings.navThirdArrowElement.classList.toggle(settings.rotateClass);
                    } else if (e.currentTarget.id === settings.fourthNavListItemId) {
                        if (settings.secondNavListItemElement.classList.contains(settings.activeDropdownClass)) {
                            settings.secondNavListItemElement.classList.remove(settings.activeDropdownClass);
                            settings.secondDropdownElement.classList.add(settings.noDisplayClass);
                            settings.navSecondArrowElement.classList.remove(settings.rotateClass);
                        } else if (settings.thirdNavListItemElement.classList.contains(settings.activeDropdownClass)) {
                            settings.thirdNavListItemElement.classList.remove(settings.activeDropdownClass);
                            settings.thirdDropdownElement.classList.add(settings.noDisplayClass);
                            settings.navThirdArrowElement.classList.remove(settings.rotateClass);
                        } else if (settings.firstNavListItemElement.classList.contains(settings.activeDropdownClass)) {
                            settings.firstNavListItemElement.classList.remove(settings.activeDropdownClass);
                            settings.firstDropdownElement.classList.add(settings.noDisplayClass);
                            settings.navFirstArrowElement.classList.remove(settings.rotateClass);
                        } else {
                            settings.fifthNavListItemElement.classList.remove(settings.activeDropdownClass);
                            settings.fifthDropdownElement.classList.add(settings.noDisplayClass);
                            settings.navFifthArrowElement.classList.remove(settings.rotateClass);
                        }
                        settings.fourthDropdownElement.classList.toggle(settings.noDisplayClass);
                        settings.navFourthArrowElement.classList.toggle(settings.rotateClass);
                    } else {
                        if (settings.secondNavListItemElement.classList.contains(settings.activeDropdownClass)) {
                            settings.secondNavListItemElement.classList.remove(settings.activeDropdownClass);
                            settings.secondDropdownElement.classList.add(settings.noDisplayClass);
                            settings.navSecondArrowElement.classList.remove(settings.rotateClass);
                        } else if (settings.thirdNavListItemElement.classList.contains(settings.activeDropdownClass)) {
                            settings.thirdNavListItemElement.classList.remove(settings.activeDropdownClass);
                            settings.thirdDropdownElement.classList.add(settings.noDisplayClass);
                            settings.navThirdArrowElement.classList.remove(settings.rotateClass);
                        } else if (settings.fourthNavListItemElement.classList.contains(settings.activeDropdownClass)) {
                            settings.fourthNavListItemElement.classList.remove(settings.activeDropdownClass);
                            settings.fourthDropdownElement.classList.add(settings.noDisplayClass);
                            settings.navFourthArrowElement.classList.remove(settings.rotateClass);
                        } else {
                            settings.firstNavListItemElement.classList.remove(settings.activeDropdownClass);
                            settings.firstDropdownElement.classList.add(settings.noDisplayClass);
                            settings.navFirstArrowElement.classList.remove(settings.rotateClass);
                        }
                        settings.fifthDropdownElement.classList.toggle(settings.noDisplayClass);
                        settings.navFifthArrowElement.classList.toggle(settings.rotateClass);
                    }
                    e.currentTarget.classList.toggle(settings.activeDropdownClass);
                });
            });
        }

    },

    addEventListeners() {

        settings.servicesListLiElements.forEach(liElt => {
            liElt.addEventListener('click', (e) => {
                this.servicesList(e);
            });
        });

        settings.buttonElements.forEach(btnElt => {
            btnElt.addEventListener('click', (e) => {
                this.hobbiesSection(e);
            });
        });

        settings.hobbiesButtonElement.addEventListener('click', () => {
            this.openAndCloseHobbyPopUpFromHobbiesButton();
        });

        settings.secondCloseELement.addEventListener('click', () => {
            this.closeHobbyPopUp();
        });

        settings.contactElement.addEventListener('click', (e) => {
            this.openArticlePopUpFromContactButton(e);
        });

        settings.basketElement.addEventListener('click', () => {
            this.openArticlePopUpFromBasket();
        });
        settings.firstCloseELement.addEventListener('click', () => {
            this.closeArticlePopUp();
        });

        settings.deleteArticleElement.addEventListener('click', () => {
            this.removeArticleFromBasket();
        });

        settings.backToServicesElement.addEventListener('click', () => {
            this.goBackToTheServices();
        });

        settings.languageChosenElement.addEventListener('click', () => {
            this.openAndCloseSelectForText();
        });

        settings.selectOptionsPElements.forEach(pElt => {
            pElt.addEventListener('click', (e) => {
                this.selectLanguage(e);
            });
        });

        settings.selectJsEnabledImgElement.addEventListener('click', () => {
            this.openAndCloseSelect();
        });

        if (window.innerWidth <= 1500) {
            settings.burgerMenuElement.addEventListener('click', (e) => {
                this.openAndCloseBurgerMenu(e);
            });
        }
    },

    /*Services Section*/

    servicesList(e) {
        if (e.currentTarget.id === settings.wwwId) {
            this.firstImageFromServices();
        } else if (e.currentTarget.id === settings.pencilId) {
            this.secondImageFromServices();
        } else if (e.currentTarget.id === settings.responsiveId) {
            this.thirdImageFromServices();
        } else {
            this.fourthImageFromServices();
        }
        e.currentTarget.classList.add(settings.activeServiceClass);
        settings.serviceTitleElement.textContent = e.currentTarget.dataset.name;
        settings.contactElement.classList.add(settings.aServiceIsActiveClass);
    },

    firstImageFromServices() {
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
    },

    secondImageFromServices() {
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
    },

    thirdImageFromServices() {
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
    },

    fourthImageFromServices() {
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
    },

    /**/

    /*Sliders*/

    previousSlide() {
        if (settings.pourcentage === settings.maxPourcentage) {
            settings.pourcentage = settings.minPourcentage;
        } else {
            settings.pourcentage -= 460;
        }
    },

    nextSlide() {
        if (settings.pourcentage === settings.minPourcentage) {
            settings.pourcentage = settings.maxPourcentage;
        } else {
            settings.pourcentage += 460;
        }
    },

    /*Hobbies Section*/

    hobbiesSection(e) {
        if (e.currentTarget.id === settings.firstSliderPreviousId) {
            this.previousSlide();
            settings.firstSliderElement.style.left = `${settings.pourcentage}px`;
        } else if (e.currentTarget.id === settings.firstSliderNextId) {
            this.nextSlide();
            settings.firstSliderElement.style.left = `${settings.pourcentage}px`;
        } else if (e.currentTarget.id === settings.secondSliderPreviousId) {
            this.previousSlide();
            settings.secondSliderElement.style.left = `${settings.pourcentage}px`;
        } else {
            this.nextSlide();
            settings.secondSliderElement.style.left = `${settings.pourcentage}px`;
        }
    },

    openAndCloseHobbyPopUpFromHobbiesButton() {
        settings.hobbiesListElement.classList.toggle(settings.noDisplayClass);
        settings.firstOverlayElement.classList.toggle(settings.noDisplayClass);
    },

    closeHobbyPopUp() {
        settings.hobbiesListElement.classList.add(settings.noDisplayClass);
        settings.firstOverlayElement.classList.add(settings.noDisplayClass);
    },

    /*Article Section*/

    openArticlePopUpFromContactButton(e) {
        if (e.currentTarget.classList.contains(settings.aServiceIsActiveClass)) {
            settings.articleNumber = 1;
            settings.articleNumberElement.textContent = `${settings.articleNumber}`;
            settings.articleHoverLiELements.forEach(liElt => {
                liElt.classList.remove(settings.noDisplayClass);
            });
            settings.articleHoverLastLiELement.classList.add(settings.noDisplayClass);
        } else {
            settings.articleHoverLiELements.forEach(liElt => {
                liElt.classList.add(settings.noDisplayClass);
            });
            settings.articleHoverLastLiELement.classList.remove(settings.noDisplayClass);
        }
        settings.articleHoverElement.classList.remove(settings.noDisplayClass);
        settings.secondOverlayELement.classList.remove(settings.noDisplayClass);
    },

    openArticlePopUpFromBasket () {
        settings.secondOverlayELement.classList.remove(settings.noDisplayClass);
        if (settings.articleNumber === 1) {
            settings.articleHoverElement.classList.remove(settings.noDisplayClass);
        } else {
            settings.articleHoverElement.classList.remove(settings.noDisplayClass);
            settings.articleHoverLiELements.forEach(liElt => {
                liElt.classList.add(settings.noDisplayClass);
            });
            settings.articleHoverLastLiELement.classList.remove(settings.noDisplayClass);
        }
    },

    closeArticlePopUp () {
        settings.articleHoverElement.classList.add(settings.noDisplayClass);
        settings.secondOverlayELement.classList.add(settings.noDisplayClass);
    },

    removeArticleFromBasket () {
        settings.articleNumber = 0;
        settings.articleHoverLiELements.forEach(liElt => {
            liElt.classList.add(settings.noDisplayClass);
        });
        settings.articleHoverLastLiELement.classList.remove(settings.noDisplayClass);
        settings.articleNumberElement.textContent = `${settings.articleNumber}`;
    },

    goBackToTheServices () {
        settings.articleHoverElement.classList.add(settings.noDisplayClass);
        settings.secondOverlayELement.classList.add(settings.noDisplayClass);
    },

    /*Select languages*/

    openAndCloseSelectForText () {
        settings.selectOptionsElement.classList.toggle(settings.noDisplayClass);
        settings.languagesSponsorsImgElement.classList.toggle(settings.rotateClass);
    },

    selectLanguage (e) {
        settings.languageChosenElement.textContent = e.currentTarget.dataset.name;
        settings.selectOptionsElement.classList.add(settings.noDisplayClass);
        settings.languagesSponsorsImgElement.classList.remove(settings.rotateClass);
    },

    openAndCloseSelect () {
        settings.selectOptionsElement.classList.toggle(settings.noDisplayClass);
        settings.languagesSponsorsImgElement.classList.toggle(settings.rotateClass);
    },

    /*Burger Menu*/

    openAndCloseBurgerMenu (e) {
        settings.navListElement.classList.toggle(settings.removeNoDisplayClass);
        e.currentTarget.classList.toggle(settings.disappearedMiddleLineClass);
    }
}

myCurriculumVitae.init();