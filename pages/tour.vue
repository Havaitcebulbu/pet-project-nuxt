<template lang="pug">
  .content
    .main-photo
      img.main-img(src='/img/tour-main.png')
    .tour
      .tour__title(v-for="title in titles") {{title}}
        button(
          @click="sortedInfos"
          v-if="title === 'COUNTRY'"
        )
      .info-container(v-for="info in infos")
        .tour__info {{ info.country }}
        .tour__info {{ info.place }}
        .tour__info {{ info.date }}
    .links
      .links-container(v-for="photo in photos")
        img.links-photo(:src="photo.img")
        span.links-name {{photo.name}}

</template>

<script>
export default {
  name: "tour",
  async asyncData({ $axios }) {
    return {} = await $axios.$get('/data/events.json')
  },
  methods: {
    sortedInfos: function() {
      function compare(a, b) {
        if (a.country < b.country)
          return -1;
        if (a.country > b.country)
          return 1;
        return 0;
      }

      return this.infos.sort(compare);
    }
  }
}
</script>

<style scoped lang="scss">
.main-photo {
  width: 100%;
  background: black;
  .main-img {
    width: 100%;
  }
}
.tour {
  display: flex;
  flex-direction: row;
  margin-top: 80px;
  justify-content: center;
  flex-wrap: wrap;
  &__title {
    width: 33%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    padding-bottom: 20px;
    align-items: center;
  }
  .info-container {

    width: 100%;
    display: flex;
    flex-direction: row;
  }
  &__info {
    width: 33%;
    display: flex;
    flex-direction: column;
    font-weight: 400;
    font-size: Rem(24);
    padding-bottom: 15px;
    align-items: flex-start;
    padding-left: 10%;
  }
}

.links {
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 380px;
  justify-content: space-evenly;


  &-container {
    min-height: 380px;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
    overflow: auto;
  }
  &-photo {
    max-width: 380px;
    max-height: 375px;
  }

  &-name {
    position: absolute;
    margin-bottom: 20px;
  }
}
</style>