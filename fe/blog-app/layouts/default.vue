<template>
  <div>
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav"/>
    <TheSidenav :show="displaySidenav" @close="displaySidenav = false"/>
    <nuxt/>
  </div>
</template>


<style>
html {
  font-family: 'Open Sans', sans-serif;
}
body {
  margin: 0;
}
</style>
<script>
import TheHeader from "../components/navigation/the-header.vue";
import TheSidenav from "../components/navigation/the-sidenav.vue";

export default {
  components: {
    TheHeader,
    TheSidenav
  },
  data() {
    return {
      displaySidenav: false
    }
  }
}
</script>
