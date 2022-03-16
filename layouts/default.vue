<template lang="pug">
  .container
    my-header
    nuxt
    my-footer
</template>

<script>
export default {
  name: "default"
}
</script>

<style scoped>
a.nuxt-link-active{
  background: linear-gradient(to bottom right, black 50%, #9803035C 50%);
}
.container {
  width: 100%;
  max-width: 1440px;
  margin: auto;
  color: white;
}
@font-face {
  font-family: 'Tuffy';
  src: local('Tuffy'),
  url(/assets/fonts/Tuffy-Regular.ttf);
  font-weight: 400;
}
@font-face {
  font-family: 'Tuffy';
  src: local('Tuffy'),
  url(/assets/fonts/Tuffy-Bold.ttf);
  font-weight: 700;
}
.font-low {
  font-weight: 400;
  font-size: 16px;
}
.bold {
  font-weight: 700;
}
html, body {
  width: 100%;
  font-family: 'Tuffy';
  font-size: 24px;
  font-weight: bold;
  color: #FFFFFF;
}
</style>