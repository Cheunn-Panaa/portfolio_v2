<template>
  <nav id="navbar" class="navbar box page-card column">
    <div class="nav-links navbar-start">
      <b-navbar-item class="is-tab" tag="router-link" :to="{ path: '/about' }">
        About </b-navbar-item
      ><b-navbar-item
        class="is-tab"
        tag="router-link"
        :to="{ path: '/experiences' }"
      >
        Experiences
      </b-navbar-item>
      <b-navbar-item class="is-tab" tag="router-link" :to="{ path: '/skills' }">
        Skills
      </b-navbar-item>
      <b-navbar-item class="is-tab" tag="router-link" :to="{ path: '/work' }">
        Portfolio
      </b-navbar-item>
    </div>
  </nav>
</template>
<style></style>
<script>
export default {
  data: () => ({
    active: 'about',
  }),
}
</script>
