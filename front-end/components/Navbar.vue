<template>
  <nav class="navbar columns is-transparent" id="nav-bar">
    <div class="column navbar-brand is-one-quarter">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
        >
      </b-navbar-item>
    </div>
    <div class="column nav-links navbar-start">
      <b-navbar-item  class="is-tab" tag="router-link" :to="{ path: '/about' }">
        About
      </b-navbar-item><b-navbar-item  class="is-tab" tag="router-link" :to="{ path: '/experiences' }">
        Experiences
      </b-navbar-item>
      <b-navbar-item  class="is-tab" tag="router-link" :to="{ path: '/skills' }">
        Skills
      </b-navbar-item>
      <b-navbar-item  class="is-tab" tag="router-link" :to="{ path: '/work' }">
        Portfolio
      </b-navbar-item>
    </div>
  </nav>
</template>
<style>

</style>
<script>
    export default {
        data:() => ({
            active: 'about'
        })
    }
</script>
