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
      carousel
        .swiper-wrapper
          .swiper-slide(v-for="album in albums")
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
      .filler-line
        span.filler-span COOL PHRASE
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
.swiper-pagination-bullet {
  background: #ffffff;
}
.swiper-pagination-bullet-active {
  background: #980303;
}
.photo{
  width: 100%;
  .swiper-wrapper {
    height: 100%;
  }

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
  height: 390px;
  background: black;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  .swiper-wrapper {
    display: flex;
    flex-direction: row;
    margin: 0;
    min-height: 310px;
    height: 100%;
  }
  .swiper-slide {
    position: relative;
    display: flex;
  }
  &-img {
    max-height: 310px;
    max-width: 380px;
    position: absolute;
  }
  &-item {
    height: 310px;
    max-height: 310px;
    min-width: 380px;
    width: 380px;
    max-width: 380px;
    margin-right: 35px;
    position: relative;
    &-img{
      max-height: 310px;
      max-width: 380px;
    }
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
  position: absolute;
  right: 50px;
}
.swiper-button-prev {
  font-size: 70px;
  position: absolute;
  left: 50px;
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
  &-line {
    color: #FFFFFF;
    position: absolute;
    margin-top: 39%;
    background: #270202B2;
    max-width: 100%;
    width: 100%;
    display: flex;
    height: 60px;
    align-items: center;
  }

  &-span {
    padding-left: 60%;
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