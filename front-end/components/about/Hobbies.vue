<template>
  <ul class="hobbies-list">
    <li v-for="hobby in hobbies" class="hobby-item">
      <NuxtLink :to="'/about/' + hobby.name">
        <b-icon
          :icon="hobby.icon"
          size="is-large"
          class="main-text">
        </b-icon>
        {{hobby.name}}

        {{hobby.description}}
      </NuxtLink>
    </li>
  </ul>
</template>


<script>
    export default {
        props :{
            hobbies: Array
        }
    }
</script>
