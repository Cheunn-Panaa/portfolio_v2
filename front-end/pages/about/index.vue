<template>
  <div class="box page-card column">
    <h2 class="page-title main-text">
      About Me
    </h2>
    <p class="page-subtitle">
      Let's get intimate... but not too much :)
    </p>

    <p class="mt-2 page-description">
      Hello ! I'm Cheunn, a <span class="main-text description-highlight">software engineer</span> based in Rennes.
      <br/>
      I enjoy coding, weither being it <span class="main-text description-highlight">backend, frontend or even devops</span> if the project and the idea behind it is great i'll take it !
      <br/>
      My goal is to always bring <span class="main-text description-highlight">fun and happiness</span> to a project, while trying to keep it as performant as possible :)
    </p>

    <h2 id="hobbies" class="main-text mt-5 page-title">
      Hobbies
    </h2>
    <p class="page-subtitle">
      Gotta relax after a good day !
    </p>
    <Hobbies :hobbies="hobbies"></Hobbies>
  </div>
</template>

<script>
  import {mapState, mapActions, mapMutations} from 'vuex';
    export default {
        computed: mapState({
            hobbies: state => state.hobbies
        }),
        data() {
            return {
                loading: false
            }
        }
    }
</script>
