
// tab栏切换图片
(function () {
    const tabbtns = document.querySelectorAll('.navs a')
    for (let i = 0; i < tabbtns.length; i++) {
        tabbtns[i].addEventListener('click', function () {
            document.querySelector('.navs .active').classList.remove('active')
            this.classList.add('active')
            document.querySelector('.img .active').classList.remove('active')
            document.querySelector(`.img .item:nth-child(${i + 1})`).classList.add('active')
        })
    }

})();
//轮播图
(function () {
    const data = [
        { url: './images/1.jpg', title: 'Responsive Website', text: 'Its a Single Page Responsive Website.' },
        { url: './images/2.jpg', title: 'Mulit device compatability', text: 'Its a Responsive website with mulit device compatability.' },
        { url: './images/3.jpg', title: 'Technologies Include', text: 'Technologies: Bootstrap, HTML5, CSS3 and jQuery.' },
    ]
    const img = document.querySelector('.slider-wrapper img')
    const title = document.querySelector('.slider-text h1')
    const text = document.querySelector('.slider-text h3')
    // 右按钮
    const next = document.querySelector('.next')
    let i = 0
    next.addEventListener('click', function () {
        i++
        i = i >= data.length ? 0 : i
        toggle()
    })
    //左按钮
    const prev = document.querySelector('.prev')
    prev.addEventListener('click', function () {
        i--
        i = i < 0 ? data.length - 1 : i
        toggle()
    })
    //小圆圈
    const list = document.querySelectorAll('.slider-indicator li')
    for (let i = 0; i < list.length; i++) {
        list[i].addEventListener('click', function () {
            document.querySelector('.slider-indicator .active').classList.remove('active')
            this.classList.add('active')
            img.src = data[i].url
            title.innerHTML = data[i].title
            text.innerHTML = data[i].text
        })
    }
    function toggle() {
        img.src = data[i].url
        title.innerHTML = data[i].title
        text.innerHTML = data[i].text
        document.querySelector('.slider-indicator .active').classList.remove('active')
        document.querySelector(`.slider-indicator li:nth-child(${i + 1})`).classList.add('active')
    }
    let timerId = setInterval(function () {
        next.click()
    }, 2000)
    const slider = document.querySelector('.slider')
    slider.addEventListener('mouseenter', function () {
        clearInterval(timerId)
    })
    slider.addEventListener('mouseleave', function () {
        if (timerId) clearInterval(timerId)
        timerId = setInterval(function () {
            next.click()
        }, 2000)
    })
})();
// 头部导航栏按钮跳转
(function () {
    const list = document.querySelector('.nav')
    list.addEventListener('click', function (e) {
        if (e.target.tagName === 'A' && e.target.dataset.name) {
            document.querySelector('.nav .active').classList.remove('active')
            e.target.classList.add('active')
            const top = document.querySelector(`.${e.target.dataset.name}`).offsetTop
            document.documentElement.scrollTop = top - 70
        }
    })
    window.addEventListener('scroll', function () {
        document.querySelector('.nav .active').classList.remove('active')
        const home = document.querySelector('.home')
        const aboutus = document.querySelector('.aboutus')
        const services = document.querySelector('.services')
        const portfolio = document.querySelector('.portfolio')
        const ourteam = document.querySelector('.ourteam')
        const contactus = document.querySelector('.contactus')
        const n = document.documentElement.scrollTop
        if (n >= home.offsetTop - 70 && n < aboutus.offsetTop - 70) {
            document.querySelector('[data-name=home]').classList.add('active')
        } else if (n >= aboutus.offsetTop - 70 && n < services.offsetTop - 70) {
            document.querySelector('[data-name=aboutus]').classList.add('active')
        } else if (n >= services.offsetTop - 70 && n < portfolio.offsetTop - 70) {
            document.querySelector('[data-name=services]').classList.add('active')
        } else if (n >= portfolio.offsetTop - 70 && n < ourteam.offsetTop - 70) {
            document.querySelector('[data-name=portfolio]').classList.add('active')
        } else if (n >= ourteam.offsetTop - 70 && n < contactus.offsetTop - 70) {
            document.querySelector('[data-name=ourteam]').classList.add('active')
        } else if (n >= contactus.offsetTop - 70) {
            document.querySelector('[data-name=contactus]').classList.add('active')
        }
    })
})();