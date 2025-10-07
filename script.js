function cursorEffect() {
    let section1Content = document.querySelector('.section1-content')
    let cursor = document.querySelector('.cursor')

    section1Content.addEventListener('mousemove', function (dets) {
        gsap.to(cursor, {
            x: dets.x,
            y: dets.y
        })
    })

    section1Content.addEventListener('mouseenter', function () {
        gsap.to(cursor, {
            scale: 1,
            opacity: 1
        })
    })
    section1Content.addEventListener('mouseleave', function () {
        gsap.to(cursor, {
            scale: 0,
            opacity: 0
        })
    })
}

cursorEffect()