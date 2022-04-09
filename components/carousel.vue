<template lang="pug">
  .my-swiper(
    v-swiper:mySwiper="swiperOption"
    :class="{ 'swiper-width': fitContent }"
  )
    slot
</template>

<script>
export default {
  name: 'carousel',
  props: {
    fitContent: {
      type: Boolean,
      default: false
    },
    swiperOption: {
      type: Object,
      default:() => {
        return {
          breakpoints: {
            450: {
              slidesPerView: 1,
            },
            900: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            }
          },
          height: 310,
          loop: true,
          slidesPerView: 3,
          spaceBetween: 20,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
        }
      }
    }
  },
  data () {
    return {
      albums:[
        {
          img: '/img/kind.jpg',
          name: 'We Are Not Your Kind'
        },
        {
          img: '/img/grey.png',
          name: '.5: The Grey Chapter'
        },
        {
          img: '/img/antennas.png',
          name: 'Antennas To Hell'
        },
        {
          img: '/img/iowa.png',
          name: 'Iowa'
        },
      ],
    }
  },
  mounted() {
    this.mySwiper.slideTo(3)
  }
}
</script>


<style lang="scss" scoped>

</style>