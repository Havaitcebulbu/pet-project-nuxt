<template lang="pug">
  div
    .my-swiper(
      v-swiper:mySwiper="swiperOption"
    )
      slot
</template>

<script>
export default {
  name: 'carousel',
  props: {
    swiperOption: {
      type: Object,
      default:() => {
        return {
          breakpoints: {
            1300: {
              width: 1230,
              slidesPerView: 3
            },
            900: {
              width: 820,
              slidesPerView: 2
            }
          },
          height: 310,
          loop: true,
          slidesPerView: 3,
          spaceBetween: 35,
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

.my-swiper {
  height: 100%;
  width: 100%;
  background: black;
  .swiper-wrapper {
    display: flex;
    flex-direction: row;
    margin: 0;
    max-width: 1230px;
    height: 310px;
  }
  .swiper-slide {
    position: relative;
    display: flex;
  }
}
</style>