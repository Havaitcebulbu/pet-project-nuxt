export default {
    components: true,
    css:[
        {
            src: "swiper/css/swiper.css",
        },
        '~/assets/css/main.scss'
    ],
    plugins:[
        { src: "~/plugins/vue-swiper.js", ssr: false },
    ]
}


