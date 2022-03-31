<template lang="pug">
  .container
    my-header
    nuxt
    my-footer
</template>

<script>
export default {
  name: "default",
  beforeMount: function (rem) {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
  }
}
</script>
