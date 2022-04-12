<template lang="pug">
  .content
    .main-photo
    .intro PHOTO
    .photo
      carousel(
        :swiper-option="swiperDots"
      )
        .swiper-wrapper
          .swiper-slide(v-for="photo in photos")
            img.photo-img(:src="photo")
        .swiper-pagination
    .intro ALBUMS
    .album
      .arrow.swiper-button-prev
      .carousel-wrapper
        carousel(fit-content)
          .swiper-wrapper
            .swiper-slide(v-for="album in albums")
              .album__item
                img.album-img(:src="album.img")
                .album-title
                  span ALBUM
                  span.font-low {{ album.name }}
                img.like(src="/img/like.svg")
      .arrow.swiper-button-next
    .filler
      .filler-head
        span FACT
        p.filler-text October 20 for the UK and October 21 worldwide.[96] "The Negative One" was nominated for the 2014 Grammy Award for Best Metal Performance at the 57th Annual Grammy Awards.
      img.filler-img(src="/img/Rectangle%205.png")
</template>
<script>
export default {
  name: "index",
  data() {
    return {
      swiperDots:{
        loop: true,
        slidesPerView: 1,
        autoplay: {
          delay: 2000,
        },
        navigation: false,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
      },
      photos:[
          '/img/original.jpg',
          '/img/list2.png',
          '/img/list2.png',
          '/img/list2.png',
          '/img/list2.png'
      ],
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
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.carousel-wrapper {
  width: 100%;
  max-width: 1200px;
  margin: auto;
  @media screen and (max-width: 1200px) {
    max-width: 800px;
  }
  @media screen and (max-width: 900px) {
    max-width: 380px;

  }
}
.photo{
  width: 100%;


  .swiper-pagination-bullet {
    background: #ffffff;
  }

  .swiper-pagination-bullet-active {
    background: #980303;
  }

  &-img {
    height: 650px;
    width: 1440px;
  }

  .swiper-slide {
  }
}

.album {
  width: 100%;
  height: 100%;
  background: black;
  position: relative;
  padding-top: 2%;
  padding-bottom: 2%;

  &__item {
    position: relative;
    width: 380px;
    height: 310px;
  }

  &-img {
    width: 100%;
    height: 100%;
    position: absolute;
  }

  &-title {
    height: 60px;
    width: 252px;
    background: #270202B2;
    margin-top: 245px;
    margin-left: 64px;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
  }
}

.arrow {
  color: #980303;
  font-size: 70px;
  font-weight: 600;
}

.swiper-button-next {
  font-size: 70px;
}

.swiper-button-prev {
  font-size: 70px;
}

.like {
  position: absolute;
  fill: #FFFFFF;
  margin-top: 19px;
  margin-left: 331px;
}

.liked {
  position: absolute;
    fill: #980303;
  margin-top: 19px;
  margin-left: 331px;
}

.filler {
  position: relative;
  display: flex;
  &-head {
    position: absolute;
    margin-top: 5%;
    margin-left: 5%;
    max-width: 605px;
    width: 100%;
  }

  &-text {
    font-size: 16px;
    font-weight: 700;
  }

  &-img {
    padding-top: 92px;
    width: 100%;
  }
}

.main-photo {
  width: 100%;
  height: 625px;
  background-size: cover;
  background: url("/img/main.png");
}

.intro {
  width: 100%;
  display: flex;
  align-items: center;
  color: #FFFFFF;
  justify-content: center;
  font-size: 24px;
  padding-bottom: 17px;
  padding-top: 17px;
}


</style>