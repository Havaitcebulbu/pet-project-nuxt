<template lang="pug">
  .header
    .header__list
      .header__block
        .header__block-item.big ICON
      .header__block
        nuxt-link.header__block-item(to="/") MAIN
        nuxt-link.header__block-item(to="/album") ALBUMS
        nuxt-link.header__block-item(to="/tour") TOUR
        a.header__block-item(href="https://slipknotmerch.com/") SHOP
</template>

<script>
export default {
  name: "my-header"
}
</script>

<style scoped lang="scss">

.header {
  display: flex;
  flex-direction: row;
  font-size: 24px;
  height: 70px;
  color: white;
  &__list{
    display: flex;
    flex-direction: row;
    width: 100%;
  }

  &__block{
    background: black;
    display: flex;
    align-content: center;
    width: 50%;
    margin-left: 0;
    flex-direction: row;
    color: #FFFFFF;
    align-items: center;
    &-item{
      width: 25%;
      display: flex;
      justify-content: center;
      padding: 17px;text-decoration: none;
      color: #ffffff;
    }

    .big{
      width: 100%;
      display: flex;
      align-items: center;
    }
  }
}
</style>