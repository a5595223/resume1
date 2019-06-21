!function () {
    var view = document.querySelector('#mySlides')
    var controller = {
        view: null,
        swiperOptions: {
            // Optional parameters

            loop: true,

            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
            },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            // And if we need scrollbar

        },
        init: function (view) {
            this.view = view
            this.initSwiper()
        },
        initSwiper: function () {
            this.Swiper = new Swiper(
                this.view.querySelector('.swiper-container'),
                this.swiperOptions
            )
        }

    }

    controller.init(view)
    console.log(window.Swiper)
}.call()
