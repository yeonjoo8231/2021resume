/*--------- article1 intro 구역  ------------- */

$(".intro .slide_group").slick({
    autoplay: true, // 자동재생
    autoplaySpeed: 3000, // 간격시간
    dots: true, // 동그라미버튼 번호버튼
    speed: 600, // 바뀌는시간(생략가능)
    slidesToShow: 1, // 보여질슬라이드수(생략가능)
    slidesToScroll: 1, // 이동슬라이드수(생략가능)
    pauseOnHover: true, // 마우스오버시 멈춤여부(생략가능)
    pauseOnDotsHover: true, // 동그라미번호버튼에 호버시 멈춤여부(생략가능)
    pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
    cssEase: 'linear', // 속도함수(생략가능)
    draggable: true, // 마우스드래그시 슬라이드 교체가능여부(생략가능)
    fade: false, // 슬라이드가 수평으로 이동하지 않고, 제자리에서 사라지고 나타남(생략가능)
    arrows: true, // 좌우화살표 사용여부(생략가능)
    prevArrow: '<button class="prev">PREV</i></button>',
    nextArrow: '<button class="next">NEXT</i></button>',
})

function autoclock(){
    var today = new Date()
    var year = today.getFullYear()
    var month = today.getMonth()+1
    var date = today.getDate()
    var day = today.getDay()
    
    switch(day) {
        case 0 : day="일"; break;
        case 1 : day="월"; break;
        case 2 : day="화"; break;
        case 3 : day="수"; break;
        case 4 : day="목"; break;
        case 5 : day="금"; break;
        case 6 : day="토"; break;
    }
    
    $('.date').text(year+'년 '+month+'월 '+date+'일 '+day+'요일 ')
}
autoclock()



/*--------- article2 aboutme 구역  ------------- */
var i= -1;
var timer
function draw ( jumsu, sname) {
    var count = 0;
    var stop = setInterval (function(){
        count++
        if (count<=jumsu) {
            $(sname).find('.myscore').text(count+'%')
            .css({
                width:count+'%',
                opacity:1
            }) 
        } else {
            clearInterval(stop)
            return false
        }
    },10)
}
$('.aboutme .folder').on('click',function(){
    if ( !$(this).hasClass('on') ) {
        $(this).addClass('on')
        // $(this).next().addClass('on')
        // timer = setInterval(setup, 300)
        $('.aboutme .browbox > div').eq(0).animate({
            opacity:1
        }, 300, function(){
            $('.aboutme .browbox > div').eq(1).animate({
                opacity:1
            }, 300, function(){
                $('.aboutme .browbox > div').eq(2).animate({
                    opacity:1
                },300, function(){
                    $('.aboutme .browbox > div').eq(3).animate({
                        opacity:1
                    },300,function(){
                        draw (85, '.html')
                        draw (80, '.css')
                        draw (65, '.javascript')
                        draw (70, '.jquery')
                        draw (50, '.react')
                    })
                })
            })
        })
        $(this).find('i').removeClass('.fas fa-folder').addClass('.fas fa-folder-open').css({ color: '#ff5313' })
        $(this).find('span').css({ opacity:0 })
        
    } else if ( $(this).hasClass('on') ) {
        $(this).removeClass('on')
        // $(this).next().removeClass('on')
        $('.aboutme .browbox > div').animate({
            opacity:0
        }, 100 )
        $(this).find('i').removeClass('.fas fa-folder-open').addClass('.fas fa-folder').css({ color: '#fff' })
        $(this).find('span').css({ opacity:1 })
        $('.myscore').css({width:'0%', opacity:0})
    }
    
})
// function setup(){
//     i++
//     if (i>4) {
//         return false
//     }
//     $('.aboutme .browbox > div').eq(i).animate({
//         opacity:1
//     }, 500)
// } 

$('.exper .ed2 >p').on('click',function(){
    $(this).addClass('on').siblings().removeClass('on')
    var num = $(this).index()    
    $(this).parent().next().children()
    .eq(num).addClass('active').siblings().removeClass('active')
    
    
})





/*--------- article3 projects 구역  ------------- */
// var gslide = setInterval(gsmove, 300)
// function gsmove() {
//     $('.gallery li').eq(0).animate({
//         width:'1000px'
//     },500, function(){
//         $(this).animate({
//             marginLeft:'-230px',
//             width:'230px'
//         },500, function(){
//             $(this).appendTo('.gallery').css({
//                 marginLeft:'0px'
//             })
//         } )
//     })
// }


var deviceSize = 1400;   
var ww;
function init(){
    ww = $(window).width()
    if (ww<=deviceSize && !$('html').hasClass('notebook') ) {
        $('html').addClass('notebook').removeClass('pc')
        $('.slide_group2 .slide').on('click',function(){
            if (!$(this).hasClass('on')) {
                $(this).addClass('on').animate({
                    width:'800px'
                },500)
                $(this).siblings().removeClass('on').animate({
                    width:'60px'
                },500)
            }    
        })

    } else if ( ww>deviceSize && !$('html').hasClass('pc') ) {
        $('html').addClass('pc').removeClass('notebook')
        $('.slide_group2 .slide').on('click',function(){
            if (!$(this).hasClass('on')) {
                $(this).addClass('on').animate({
                    width:'950px'
                },500)
                $(this).siblings().removeClass('on').animate({
                    width:'100px'
                },500)
            }    
        })
    }
}
init()



// 스크롤
var introN = $('.intro').offset().top
var aboutN = $('.aboutme').offset().top
var projectN = $('.projects').offset().top
var contactN = $('.contact').offset().top

$(window).on('scroll',function(){
    var sct = $(this).scrollTop()
    if ( sct < aboutN ) {
        $('#sidenav a > span').eq(3).addClass('on').siblings().removeClass('on')
        $('#nav > ul > li').eq(3).addClass('on').siblings().removeClass('on')
    } else if ( sct >= aboutN && sct < projectN ) {
        $('#sidenav a > span').eq(2).addClass('on').siblings().removeClass('on')
        $('#nav > ul > li').eq(2).addClass('on').siblings().removeClass('on')
    } else if ( sct >= projectN && sct < contactN ) {
        $('#sidenav a > span').eq(1).addClass('on').siblings().removeClass('on')
        $('#nav > ul > li').eq(1).addClass('on').siblings().removeClass('on')
        $('.contact .box').removeClass('on')
    } else if ( sct >= contactN ) {
        $('#sidenav a > span').eq(0).addClass('on').siblings().removeClass('on')
        $('#nav > ul > li').eq(0).addClass('on').siblings().removeClass('on')
        $('.contact .box').addClass('on')
    }
})

var side 
function navN() {
    switch(side) {
        case "INTRO" : $('html').animate({ scrollTop: 0 },500); break;
        case "ABOUT ME" : $('html').animate({ scrollTop: aboutN },500); break;
        case "PROJECTS" : $('html').animate({ scrollTop: projectN },500); break;
        case "CONTACT" : $('html').animate({ scrollTop: contactN },500); 
    }
}
$('#sidenav a > span').on('click', function(e){
    e.preventDefault()
    side = $(this).text()
    navN()
})
$('#nav li').on('click', function(e){
    e.preventDefault()
    side = $(this).find('a').text()
    navN()
})


$('.section').on('mousewheel',function(e, delta){
    // 0보다 크면 위로, 0보다 작으면 아래로
    if (delta>0) {
        var prev = $(this).prev().offset().top
        $('html').stop().animate({
            scrollTop:prev
        }, 500, 'linear')
    } else if (delta<0) {
        var next = $(this).next().offset().top
        $('html').stop().animate({
            scrollTop:next
        }, 500, 'linear')
    }
    console.log(delta)
})