import {settings} from "./settings";

const myCurriculumVitae = {

    init() {
        settings.noJsMessageElement.classList.add(settings.noDisplayClass);
        settings.selectJsEnabledElement.classList.remove(settings.noDisplayClass);
        settings.languagesElement.classList.add(settings.noDisplayClass);
        this.addEventListeners();
    },

    addEventListeners() {
        settings.navListLiElements.forEach(liElt => {
            if (window.innerWidth > 750) {
                liElt.addEventListener('mouseover', (e) => {
                    this.mainNavHover(e);
                });

                liElt.addEventListener('mouseout', (e) => {
                    this.mainNavHoverOut(e);
                });
            } else if (window.innerWidth <= 750) {
                liElt.addEventListener('click', (e) => {
                    this.mainNavClick(e);
                });
            }
        });

        settings.servicesListLiElements.forEach(liElt => {
            liElt.addEventListener('click', (e) => {
                this.servicesList(e);
            });
        });

        settings.buttonElements.forEach(btnElt => {
            btnElt.addEventListener('click', (e) => {
                this.slidersSection(e);
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


        settings.burgerMenuElement.addEventListener('click', (e) => {
            this.openAndCloseBurgerMenu(e);
        });


        if (window.innerWidth > 750) {
            settings.firstOverlayElement.addEventListener('click', () => {
                this.closeHobbyPopUp();
            });

            settings.secondOverlayELement.addEventListener('click', () => {
                this.closeArticlePopUp();
            });
        }

        if (window.innerWidth <= 1500) {
            settings.navListAElement.forEach(aElt => {
                aElt.addEventListener('click', () => {
                    this.closeNavList();
                })
            });
        }
    },

    /*Main nav*/

    mainNavHover(e) {
        if (e.currentTarget.id === settings.firstNavListItemId) {
            this.firstNavListItemHover();
        } else if (e.currentTarget.id === settings.secondNavListItemId) {
            this.secondNavListItemHover();
        } else if (e.currentTarget.id === settings.thirdNavListItemId) {
            this.thirdNavListItemHover();
        } else if (e.currentTarget.id === settings.fourthNavListItemId) {
            this.fourthNavListItemHover();
        } else {
            this.fifthNavListItemHover();
        }
    },

    mainNavHoverOut(e) {
        if (e.currentTarget.id === settings.firstNavListItemId) {
            this.firstNavListItemHoverOut();
        } else if (e.currentTarget.id === settings.secondNavListItemId) {
            this.secondNavListItemHoverOut();
        } else if (e.currentTarget.id === settings.thirdNavListItemId) {
            this.thirdNavListItemHoverOut();
        } else if (e.currentTarget.id === settings.fourthNavListItemId) {
            this.fourthNavListItemHoverOut();
        } else {
            this.fifthNavListHoverOut();
        }
    },

    mainNavClick(e) {
        if (e.currentTarget.id === settings.firstNavListItemId) {
            this.firstNavListItemIsCurrentTarget();
        } else if (e.currentTarget.id === settings.secondNavListItemId) {
            this.secondNavListItemIsCurrentTarget();
        } else if (e.currentTarget.id === settings.thirdNavListItemId) {
            this.thirdNavListItemIsCurrentTarget();
        } else if (e.currentTarget.id === settings.fourthNavListItemId) {
            this.fourthNavListItemIsCurrentTarget();
        } else {
            this.fifthNavListItemIsCurrentTarget();
        }
        e.currentTarget.classList.toggle(settings.activeDropdownClass);
    },

    firstNavListItemHover() {
        settings.firstDropdownElement.classList.remove(settings.noDisplayClass);
        settings.navFirstArrowElement.classList.add(settings.rotateClass);
    },

    firstNavListItemHoverOut() {
        settings.firstDropdownElement.classList.add(settings.noDisplayClass);
        settings.navFirstArrowElement.classList.remove(settings.rotateClass);
    },

    firstNavListItemClick() {
        settings.firstNavListItemElement.classList.remove(settings.activeDropdownClass);
        settings.firstDropdownElement.classList.add(settings.noDisplayClass);
        settings.navFirstArrowElement.classList.remove(settings.rotateClass);
    },

    firstNavListItemIsCurrentTarget() {
        if (settings.secondNavListItemElement.classList.contains(settings.activeDropdownClass)) {
            this.secondNavListItemClick();
        } else if (settings.thirdNavListItemElement.classList.contains(settings.activeDropdownClass)) {
            this.thirdNavListItemClick();
        } else if (settings.fourthNavListItemElement.classList.contains(settings.activeDropdownClass)) {
            this.fourthNavListItemClick();
        } else {
            this.fifthNavListItemClick();
        }
        settings.firstDropdownElement.classList.toggle(settings.noDisplayClass);
        settings.navFirstArrowElement.classList.toggle(settings.rotateClass);
    },

    secondNavListItemHover() {
        settings.secondDropdownElement.classList.remove(settings.noDisplayClass);
        settings.navSecondArrowElement.classList.add(settings.rotateClass);
    },

    secondNavListItemHoverOut() {
        settings.secondDropdownElement.classList.add(settings.noDisplayClass);
        settings.navSecondArrowElement.classList.remove(settings.rotateClass);
    },

    secondNavListItemClick() {
        settings.secondNavListItemElement.classList.remove(settings.activeDropdownClass);
        settings.secondDropdownElement.classList.add(settings.noDisplayClass);
        settings.navSecondArrowElement.classList.remove(settings.rotateClass);
    },

    secondNavListItemIsCurrentTarget() {
        if (settings.firstNavListItemElement.classList.contains(settings.activeDropdownClass)) {
            this.firstNavListItemClick();
        } else if (settings.thirdNavListItemElement.classList.contains(settings.activeDropdownClass)) {
            this.thirdNavListItemClick();
        } else if (settings.fourthNavListItemElement.classList.contains(settings.activeDropdownClass)) {
            this.fourthNavListItemClick();
        } else {
            this.fifthNavListItemClick();
        }
        settings.secondDropdownElement.classList.toggle(settings.noDisplayClass);
        settings.navSecondArrowElement.classList.toggle(settings.rotateClass);
    },

    thirdNavListItemHover() {
        settings.thirdDropdownElement.classList.remove(settings.noDisplayClass);
        settings.navThirdArrowElement.classList.add(settings.rotateClass);
    },

    thirdNavListItemHoverOut() {
        settings.thirdDropdownElement.classList.add(settings.noDisplayClass);
        settings.navThirdArrowElement.classList.remove(settings.rotateClass);
    },

    thirdNavListItemClick() {
        settings.thirdNavListItemElement.classList.remove(settings.activeDropdownClass);
        settings.thirdDropdownElement.classList.add(settings.noDisplayClass);
        settings.navThirdArrowElement.classList.remove(settings.rotateClass);
    },

    thirdNavListItemIsCurrentTarget() {
        if (settings.secondNavListItemElement.classList.contains(settings.activeDropdownClass)) {
            this.secondNavListItemClick();
        } else if (settings.firstNavListItemElement.classList.contains(settings.activeDropdownClass)) {
            this.fifthNavListItemClick();
        } else if (settings.fourthNavListItemElement.classList.contains(settings.activeDropdownClass)) {
            this.fourthNavListItemClick();
        } else {
            this.fifthNavListItemClick();
        }
        settings.thirdDropdownElement.classList.toggle(settings.noDisplayClass);
        settings.navThirdArrowElement.classList.toggle(settings.rotateClass);
    },

    fourthNavListItemHover() {
        settings.fourthDropdownElement.classList.remove(settings.noDisplayClass);
        settings.navFourthArrowElement.classList.add(settings.rotateClass);
    },

    fourthNavListItemHoverOut() {
        settings.fourthDropdownElement.classList.add(settings.noDisplayClass);
        settings.navFourthArrowElement.classList.remove(settings.rotateClass);
    },

    fourthNavListItemClick() {
        settings.fourthNavListItemElement.classList.remove(settings.activeDropdownClass);
        settings.fourthDropdownElement.classList.add(settings.noDisplayClass);
        settings.navFourthArrowElement.classList.remove(settings.rotateClass);
    },

    fourthNavListItemIsCurrentTarget() {
        if (settings.secondNavListItemElement.classList.contains(settings.activeDropdownClass)) {
            this.secondNavListItemClick();
        } else if (settings.thirdNavListItemElement.classList.contains(settings.activeDropdownClass)) {
            this.thirdNavListItemClick();
        } else if (settings.firstNavListItemElement.classList.contains(settings.activeDropdownClass)) {
            this.firstNavListItemClick();
        } else {
            this.fifthNavListItemClick();
        }
        settings.fourthDropdownElement.classList.toggle(settings.noDisplayClass);
        settings.navFourthArrowElement.classList.toggle(settings.rotateClass);
    },

    fifthNavListItemHover() {
        settings.fifthDropdownElement.classList.remove(settings.noDisplayClass);
        settings.navFifthArrowElement.classList.add(settings.rotateClass);
    },

    fifthNavListHoverOut() {
        settings.fifthDropdownElement.classList.add(settings.noDisplayClass);
        settings.navFifthArrowElement.classList.remove(settings.rotateClass);
    },

    fifthNavListItemClick() {
        settings.fifthNavListItemElement.classList.remove(settings.activeDropdownClass);
        settings.fifthDropdownElement.classList.add(settings.noDisplayClass);
        settings.navFifthArrowElement.classList.remove(settings.rotateClass);
    },

    fifthNavListItemIsCurrentTarget() {
        if (settings.secondNavListItemElement.classList.contains(settings.activeDropdownClass)) {
            this.secondNavListItemClick();
        } else if (settings.thirdNavListItemElement.classList.contains(settings.activeDropdownClass)) {
            this.thirdNavListItemClick();
        } else if (settings.fourthNavListItemElement.classList.contains(settings.activeDropdownClass)) {
            this.fourthNavListItemClick();
        } else {
            this.firstNavListItemClick();
        }
        settings.fifthDropdownElement.classList.toggle(settings.noDisplayClass);
        settings.navFifthArrowElement.classList.toggle(settings.rotateClass);
    },

    /*Nav List*/

    closeNavList() {
        settings.navListElement.classList.remove(settings.removeNoDisplayClass);
        settings.burgerMenuElement.classList.remove(settings.disappearedMiddleLineClass);
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
            this.secondImageIsActive();
        } else if (settings.responsiveElement.classList.contains(settings.activeServiceClass)) {
            this.thirdImageIsActive();
        } else if (settings.rankingElement.classList.contains(settings.activeServiceClass)) {
            this.fourthImageIsActive();
        }
    },

    firstImageIsActive() {
        settings.wwwElement.classList.remove(settings.activeServiceClass);
        settings.wwwImageElement.src = settings.wwwPath;
    },

    secondImageFromServices() {
        settings.pencilImageElement.src = settings.designActivePath;
        if (settings.wwwElement.classList.contains(settings.activeServiceClass)) {
            this.firstImageIsActive();
        } else if (settings.responsiveElement.classList.contains(settings.activeServiceClass)) {
            this.thirdImageIsActive();
        } else if (settings.rankingElement.classList.contains(settings.activeServiceClass)) {
            this.fourthImageIsActive();
        }
    },

    secondImageIsActive() {
        settings.pencilElement.classList.remove(settings.activeServiceClass);
        settings.pencilImageElement.src = settings.designPath;
    },

    thirdImageFromServices() {
        settings.responsiveImageElement.src = settings.responsiveActivePath;
        if (settings.pencilElement.classList.contains(settings.activeServiceClass)) {
            this.secondImageIsActive();
        } else if (settings.wwwElement.classList.contains(settings.activeServiceClass)) {
            this.firstImageIsActive();
        } else if (settings.rankingElement.classList.contains(settings.activeServiceClass)) {
            this.fourthImageIsActive();
        }
    },

    thirdImageIsActive() {
        settings.responsiveElement.classList.remove(settings.activeServiceClass);
        settings.responsiveImageElement.src = settings.responsivePath;
    },

    fourthImageFromServices() {
        settings.rankingImageElement.src = settings.referencementActivePath;
        if (settings.pencilElement.classList.contains(settings.activeServiceClass)) {
            this.secondImageIsActive();
        } else if (settings.responsiveElement.classList.contains(settings.activeServiceClass)) {
            this.thirdImageIsActive();
        } else if (settings.wwwElement.classList.contains(settings.activeServiceClass)) {
            this.firstImageIsActive();
        }
    },

    fourthImageIsActive() {
        settings.rankingElement.classList.remove(settings.activeServiceClass);
        settings.rankingImageElement.src = settings.referencementPath;
    },

    /*Sliders*/

    previousSlide() {
        if (settings.pourcentage === settings.maxPourcentage) {
            settings.pourcentage = settings.minPourcentage;
        } else {
            settings.pourcentage -= settings.slidePourcentage;
        }
    },

    nextSlide() {
        if (settings.pourcentage === settings.minPourcentage) {
            settings.pourcentage = settings.maxPourcentage;
        } else {
            settings.pourcentage += settings.slidePourcentage;
        }
    },

    /*Hobbies Section*/

    slidersSection(e) {
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

    openArticlePopUpFromBasket() {
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

    closeArticlePopUp() {
        settings.articleHoverElement.classList.add(settings.noDisplayClass);
        settings.secondOverlayELement.classList.add(settings.noDisplayClass);
    },

    removeArticleFromBasket() {
        settings.articleNumber = 0;
        settings.articleHoverLiELements.forEach(liElt => {
            liElt.classList.add(settings.noDisplayClass);
        });
        settings.articleHoverLastLiELement.classList.remove(settings.noDisplayClass);
        settings.articleNumberElement.textContent = `${settings.articleNumber}`;
    },

    goBackToTheServices() {
        settings.articleHoverElement.classList.add(settings.noDisplayClass);
        settings.secondOverlayELement.classList.add(settings.noDisplayClass);
    },

    /*Select languages*/

    openAndCloseSelectForText() {
        settings.selectOptionsElement.classList.toggle(settings.noDisplayClass);
        settings.languagesSponsorsImgElement.classList.toggle(settings.rotateClass);
    },

    selectLanguage(e) {
        settings.languageChosenElement.textContent = e.currentTarget.dataset.name;
        settings.selectOptionsElement.classList.add(settings.noDisplayClass);
        settings.languagesSponsorsImgElement.classList.remove(settings.rotateClass);
    },

    openAndCloseSelect() {
        settings.selectOptionsElement.classList.toggle(settings.noDisplayClass);
        settings.languagesSponsorsImgElement.classList.toggle(settings.rotateClass);
    },

    /*Burger Menu*/

    openAndCloseBurgerMenu(e) {
        settings.navListElement.classList.toggle(settings.removeNoDisplayClass);
        e.currentTarget.classList.toggle(settings.disappearedMiddleLineClass);
    }
}

myCurriculumVitae.init();