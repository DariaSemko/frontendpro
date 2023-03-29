const $modal = $(".js--modal");
const $items = $(".js--gal_item");
const $modalContent = $(".js--modal__content");
const $modalClose = $(".js--modal__close");
let $btnNext = $(".js--modal__next")
let $btnPrev = $(".js--modal__prev")

$items.on("click", (event)=> {
    $modalContent.children("img")[0].src=event.target.src
    $modal.addClass("active")
})

$modalClose.on("click", ()=> {
    $modal.removeClass("active")
})

$btnNext.on("click", ()=> {
    const activeImg = $modalContent.children("img")[0].src
    const nextImg = getItem(activeImg).next().children()[0]
    if (nextImg === undefined){
        $modalContent.children("img")[0].src = $items.children("img")[0].src
        return
    }

    $modalContent.children("img")[0].src = nextImg.src
})

$btnPrev.on("click", ()=> {
    const activeImg = $modalContent.children("img")[0].src
    const prevImg = getItem(activeImg).prev().children()[0]
    if (prevImg === undefined){
        let images = $items.children("img")
        $modalContent.children("img")[0].src = images[images.length-1].src
        return
    }

    $modalContent.children("img")[0].src = prevImg.src
})

function getItem (activeImg) {
    let currentItem;
    $items.each(function (){
        if ($(this).children("img")[0].src === activeImg) {
            currentItem = $(this)
        }
    })
    return currentItem
}