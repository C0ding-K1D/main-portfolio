'use-strict'

const burger = document.querySelector('.burger-menu');
const modalOpenNav = document.querySelector('.nav__link-contact');
const dropdownModalOpen = document.querySelector('.dropdown__item-contact');
const modalControl = document.querySelector('.modal');
const overlayControl = document.querySelector('.overlay');
const modalBtnClose = document.querySelector('.btn--close-modal')
const dropdownShow = document.querySelector('.dropdown');
const section1 = document.querySelector('.section--1');
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');
const skills = document.querySelector('.skills');

burger.addEventListener('click', function(){
    dropdownShow.classList.toggle('hidden');
})

dropdownModalOpen.addEventListener('click', function(){
    dropdownShow.classList.add('hidden');
    modalControl.classList.remove('hidden');
    overlayControl.classList.remove('hidden');
})
const modalOpen = function(obj) {
    obj.addEventListener('click', function(){
    modalControl.classList.remove('hidden');
    overlayControl.classList.remove('hidden');
})
};

const modalClose = function(obj){
    obj.addEventListener('click', function(){
    modalControl.classList.add('hidden');
    overlayControl.classList.add('hidden');
    dropdownShow.classList.add('hidden');
    console.log(obj)
})
};

modalOpen(modalOpenNav);
modalClose(overlayControl);
modalClose(modalBtnClose);

// const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function(entries) {
    const[entry] = entries;
    console.log(entry);
    if(!entry.isIntersecting)nav.classList.add('sticky');
    else nav.classList.remove('sticky');
}

const headerObserver = new IntersectionObserver(stickyNav, {
    root:null,
    threshold: 0,
    // rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

const revealSection = function(entries, observer) {
    const [entry] = entries;

    if(!entry.isIntersecting) return

    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(revealSection,{
    root:null,
    threshold: .15,
});
sectionObserver.observe(section1);

(function(){
        
function apply_viewport(){
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)   ) {

        let ww = window.screen.width;
        let mw = 576; // min width of site
        let ratio =  ww / mw; //calculate ratio
        let viewport_meta_tag = document.getElementById('viewport');
        if( ww < mw){ //smaller than minimum size
        viewport_meta_tag.setAttribute('content', 'initial-scale=' + ratio + ', maximum-scale=' + ratio + ', minimum-scale=' + ratio + ', user-scalable=no, width=' + mw);
        }
        else { //regular size
        viewport_meta_tag.setAttribute('content', 'initial-scale=1.0, maximum-scale=1, minimum-scale=1.0, user-scalable=yes, width=' + ww);
        }
    }
}

    //ok, i need to update viewport scale if screen dimentions changed
    window.addEventListener('resize', function(){
    apply_viewport();
    });

    apply_viewport();

}());
