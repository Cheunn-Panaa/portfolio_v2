<template>
  <div class="box page-card column">
    <h2 class="page-title main-text">
      <NuxtLink to="/about">
        <b-icon
          icon="arrow-left"
          size="is-small"
          class="main-text">
        </b-icon>
      </NuxtLink>
      Music
    </h2>
    <p class="page-subtitle">
      Here are some playlist i enjoy listening to
    </p>
    <div class="columns">
      <div class="playlist-list column is-one-third" v-for="playlist in playlists">
        <h3 class="page-title main-text">{{playlist.name}}</h3>
        <iframe :src="playlist.link" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

      </div>
    </div>
  </div>
</template>

<script>
    import {mapState,mapGetters, mapActions, mapMutations} from 'vuex';
    export default {
        computed: {
            ...mapGetters({
            playlists: "getPlaylists"
          })
        },
        created() {
            this.$store.dispatch('loadPlaylists');
        }
    }
</script>
