<template lang="pug">
  .content
    .main
      img.main-img(src="/img/albumMain.png")
    .album
      img.album-img(src="/img/iowa.png")
      .album-info
        span IOWA
        span.font-low 2001
        span.font-low.bold Iowa is the second studio album by American heavy metal band Slipknot. Released by Roadrunner Records on August 28, 2001, it was produced by Ross Robinson and Slipknot. The title derives from the band's home state, Iowa, which members have stated is one of their biggest sources of inspiration.With much anticipation for the band's second album following on the success of their 1999 self-titled debut, pressures on the band were high. Their relationships with each other suffered and was later described as the darkest time of their career. It was also the first time that guitarist Jim Root had been significantly involved in a Slipknot album due to his joining very late in recording of their debut album, as Root was only featured on two songs from that release.
    Player.player
    .span
      span NEXT TOUR 13.02.2023
    .fill
</template>

<style scoped lang="scss">
.player-container {
  width: 100%;
  display: flex;
  justify-content: center;
  .player {
    width: 100%;
    max-width: 1000px;
  }
}
.main {
  width: 100%;
  &-img {
    width: 100%;
    max-width: 1440px;
    max-height: 625px;
  }
}

.album {
  display: flex;
  flex-direction: row;
  padding-bottom: 100px;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    margin-top: 100px;

  }

  &-img {
    max-height: 310px;
    max-width: 380px;
    margin-top: 100px;
    margin-left: 100px;
    @media screen and (max-width: 1000px) {
      margin: auto;
    }
  }

  &-info {
    margin-top: 100px;
    margin-left: 50px;
    display: flex;
    flex-direction: column;
    max-width: 810px;
    @media screen and (max-width: 1000px) {
      margin: auto;
    }
  }
}

.span {
  display: flex;
  justify-content: center;
  width: 100%;
  background: #270202B2;
  align-items: center;
  margin-top: 100px;
  padding-bottom: 15px;
  padding-top: 15px;
}

.fill {
  width: 100%;
  height: 175px;
}
</style>