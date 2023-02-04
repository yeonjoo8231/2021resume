const nav = document.querySelectorAll('.nav')
const article = document.querySelectorAll('.article')

this.moveToAticle()
window.addEventListener('scroll', () => { this.navAddOn() })
function navAddOn() {
    const scrollTop = window.scrollY
    for (let i = 0; i < nav.length; i ++) {
        for (let j = 0; j < article.length; j ++) {
            const next = j + 1
            const last = article.length - 1
            nav[i].children[j].classList.remove('on')
            if (scrollTop >= article[last].offsetTop) {
                nav[i].children[last].classList.add('on')
            } else if (scrollTop >= article[j].offsetTop && scrollTop < article[next].offsetTop) {
                nav[i].children[j].classList.add('on')
            }
        }
    }
}
function moveToAticle() {
    for (let i = 0; i < nav.length; i ++) {
        for (let j = 0; j < nav[i].children.length; j ++) {
            nav[i].children[j].addEventListener('click', function() {
                window.scrollTo({
                    top: article[j].offsetTop,
                    left: 0,
                    behavior: 'smooth'
                });
            })
        }
    }
}

// intro
const slideGroup = document.querySelector('.intro .slide_group')
const slide = document.querySelectorAll('.intro .slide')
const slideNav = document.querySelectorAll('.intro .slide_nav li')
const arrowPrev = document.querySelector('.intro .arrow_prev')
const arrowNext = document.querySelector('.intro .arrow_next')
let idx = 0
const slideWidth = slide[0].offsetWidth
const slideLength = slide.length

arrowNext.addEventListener('click', () => { this.slideNext() })
arrowPrev.addEventListener('click', () => { this.slidePrev() })
let interval = setInterval(() => { this.slideNext() }, 3000)
function slideNext() {
    if (idx < slideLength) {
        idx += 1
    }
    if (idx == slideLength) {
        idx = 0
    }
    this.slideIntro()
}
function slidePrev() {
    if (idx == 0) {
        idx = (slideLength - 1)
    } else if (idx > 0 && idx < slideLength) {
        idx -= 1
    }
    this.slideIntro()
}
function slideIntro() {
    clearInterval(interval)
    for (let j = 0; j < slideNav.length; j += 1) {
        slideNav[j].classList.remove('active')
    }
    slideGroup.style.left = (-slideWidth * idx) + 'px'
    slideNav[idx].classList.add('active')
    interval = setInterval(() => { this.slideNext() }, 3000)
}

// About me
const folder = document.querySelector('.aboutme .folder')
const folderIcon = document.querySelector('.aboutme .folder i')
const browser = document.querySelectorAll('.aboutme .browser')
const middle = document.querySelectorAll('.aboutme .middle_category li')
const small = document.querySelectorAll('.aboutme .small_category .samll_list')
folder.addEventListener('click', () => {
    if (!folder.classList.contains('on')) {
        folder.classList.add('on')
        folderIcon.classList.remove('fa-folder')
        folderIcon.classList.add('fa-folder-open')
        for (let i = 0; i < browser.length; i+= 1) {
            browser[i].style.opacity = 1
            browser[i].style.transitionDelay = (0.3 * i) +'s'
        }
        this.raiseScore(80, '.html')
        this.raiseScore(80, '.css')
        this.raiseScore(75, '.javascript')
        this.raiseScore(70, '.vuejs')
        this.raiseScore(50, '.react')
        this.raiseScore(70, '.jquery')
        for (let i = 0; i < middle.length; i += 1) {
            middle[i].addEventListener('click', () => {
                for (let j = 0; j<middle.length; j+= 1) {
                    middle[j].classList.remove('on')
                    small[j].classList.remove('active')
                }
                middle[i].classList.add('on')
                small[i].classList.add('active')
            })
        }
    } else if (folder.classList.contains('on')){
        folder.classList.remove('on')
        folderIcon.classList.add('fa-folder')
        folderIcon.classList.remove('fa-folder-open')
        for (let i = 0; i < browser.length; i+= 1) {
            let b = ((browser.length - 1) - i)
            browser[b].style.opacity = 0
            browser[b].style.transitionDelay = (0.3 * i) +'s'
        } 
    }
    
})
function raiseScore(score, name) {
    let cnt = 0
    const stop = setInterval(() => {
        cnt++
        if (cnt <= score) {
            const myscore = document.querySelector(name).children[1].children[0] 
            myscore.innerText = score + '%'
            myscore.style.width = cnt +'%'
            myscore.style.opacity = 1
        } else {
            clearInterval(stop)
            return false
        }
    }, 10)
}

// Project
const content = document.querySelectorAll('.projects .content')
for (let k = 0; k < content.length; k += 1) {
    content[k].addEventListener('click', () => {
        for (let h = 0; h < content.length; h += 1) {
            content[h].classList.remove('on')
        }
        content[k].classList.add('on')
    })
}