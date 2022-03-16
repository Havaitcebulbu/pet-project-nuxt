<template lang="pug">
  .header
    .header__list
      .header__block
        .header__block-item ICON
        .header__block-item.big WE ARE ON AIR
          .dot
      .header__block
        nuxt-link(
          class="header__block-item"
          to="/"
        ) MAIN
        nuxt-link(
          class="header__block-item"
          to="/albums"
        ) ALBUMS
        nuxt-link(
          class="header__block-item"
          to="/tour"
        ) TOUR
        a(
          class="header__block-item"
          href="https://slipknotmerch.com/"
        ) SHOP
</template>

<script>
export default {
  name: "my-header"
}
</script>

<style scoped lang="scss">
.dot{
  margin-left: 10px;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: #980303;
}
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
      width: 75%;
      display: flex;
      align-items: center;
    }
  }
}
</style>