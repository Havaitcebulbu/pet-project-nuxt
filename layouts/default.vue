<template lang="pug">
  .container
    my-header
    nuxt
    my-footer
</template>

<script>
export default {
  head: {
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
  name: "default",
  beforeMount: function (rem) {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
  }
}
</script>
