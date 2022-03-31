<template lang="pug">
 div
   .track(v-for="track in tracks")
    .title {{track.name}}
    vue-plyr(:options="options")
     audio
       source(:src="track.source")
</template>

<script>

export default {
  name: "Player",
  data() {
    return {
      tracks: [
        {
          name: 'My Plague',
          source: '/audio/Plague.mp3',
        },
        {
          name: 'Left Behind',
          source: '/audio/Behind.mp3',
        },
        {
          name: 'Disasterpiece',
          source: '/audio/Disasterpiece.mp3',
        },
      ],
      options: {
        title: 'vadimjaba',
        controls: [
          'play',
          'progress',
          'current-time',
        ],
        iconUrl: '/img/play.svg',
        iconPrefix: 'plyr-play'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.track {

  position: relative;

  .title {
    position: absolute;
    font-size: 16px;
    font-weight: 400;
    padding-left: 50px;
  }
}

</style>