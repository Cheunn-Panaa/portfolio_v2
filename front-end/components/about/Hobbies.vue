<template>
  <ul class="columns hobbies-list">
    <li v-for="hobby in hobbies" class="column is-half hobby-item">
      <NuxtLink :to="'/about/' + hobby.name">
        <b-icon
          :icon="hobby.icon"
          size="is-large"
          class="main-text">
        </b-icon>
        <div>
        <h3>{{hobby.name}}</h3>

        <!--<p class="page-subtitle">{{hobby.description}}</p>-->

        <span class="page-subtitle">Click for more</span>
        </div>
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
