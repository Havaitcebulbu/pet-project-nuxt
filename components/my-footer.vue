<template lang="pug">
  .footer
    .footer__block NEXT ANNOUNCEMENTS
    .footer__block
      a(
        href="https://twitter.com/slipknot?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
        target="_blank"
      )
        img.tweet(src="/img/tweet.svg")
      a(
        href="https://www.youtube.com/user/slipknot"
        target="_blank"
      )
        img(src="/img/tube.svg")
</template>

<script>
export default {
  name: "my-footer"
}
</script>

<style scoped lang="scss">
.footer {
  height: 90px;
  background: black;
  width: 100%;
  display: flex;
  flex-direction: row;
  &__block {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
  }
}

.tweet {
  padding-right: 30px;
}

</style>