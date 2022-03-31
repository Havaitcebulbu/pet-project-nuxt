<template lang="pug">
  .content
    .main-photo
      img(src='/img/tour-main.png')
    .tour
      .tour__title(v-for="title in titles") {{title}}
      .info-container(v-for="info in sortedInfos")
        .tour__info {{info.country}}
        .tour__info {{info.place}}
        .tour__info {{info.date}}
    .links
      .links-container(v-for="photo in photos")
        img.links-photo(:src="photo.img")
        span.links-name {{photo.name}}

</template>

<script>
export default {
  name: "tour",
  data() {
    return {
      titles: [
          'COUNTRY',
          'PLACE',
          'DATE'
      ],
      photos: [
        {
          img: '/img/iowa-tour.png',
          name: 'ALBUMS',
        },
        {
          img: '/img/tour.jpg',
          name: 'TOUR',
        },
        {
          img: '/img/works.png',
          name: 'ARTWORKS',
        },
      ],
      infos: [
        {
          country: 'MEMPHIS, TN',
          place: 'FedExForum',
          date: 'TUE, MAR 22',
        },
        {
          country: 'TULSA, OK',
          place: 'BOK center',
          date: 'WED, MAR 23',
        },
        {
          country: 'NORTH LITTLE ROCK, AR',
          place: 'Simmons Bank Arena',
          date: 'FRI, MAR 25',
        },
        {
          country: 'DURANT, OK',
          place: 'Choctaw Grand Theatre',
          date: 'SAT, MAR 26',
        },
        {
          country: 'BIRMINGHAM, AL',
          place: 'Legacy Arena at the BJCC',
          date: 'TUE, MAR 29',
        },
        {
          country: 'NORTH CHARLESTON, SC',
          place: 'North Charleston Coliseum',
          date: 'WED, MAR 30',
        },
      ],
    }
  },
  async created() {

  },
  computed: {
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
    flex-direction: column;
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
    font-size: 24px;
    padding-bottom: 15px;
    align-items: center;
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
    width: 33%;
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
  }
  &-photo {
    position: absolute;
  }

  &-name {
    position: absolute;
    margin-bottom: 20px;
  }
}
</style>