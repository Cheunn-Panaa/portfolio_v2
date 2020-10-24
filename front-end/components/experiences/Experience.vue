<template>
  <b-tabs v-model="activeTab" vertical class="experience block">
    <b-tab-item
      v-for="experience in experiences"
      :key="experience.id"
      :value="experience.company"
      :label="experience.company"
    >
      <h3 class="company">
        {{ experience.job }}
        <a :href="experience.company_website">@{{ experience.company }}</a>
      </h3>
      <p class="page-subtitle">
        {{ convertDateFormat(experience.start_date) }} -
        {{ convertDateFormat(experiences.end_date) }}
      </p>
      <ul
        v-for="(mission, index) in experience.missions"
        :key="index"
        class="missions"
      >
        <li></li>
        <li>
          {{ mission }}
        </li>
      </ul>
    </b-tab-item>
  </b-tabs>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      activeTab: 'Dolmen',
    }
  },
  computed: {
    ...mapGetters({
      experiences: 'getExperiences',
    }),
  },
  created() {
    this.$store.dispatch('loadExperiences')
  },
  methods: {
    convertDateFormat(date) {
      if (date) {
        const d = new Date(date)
        return new Intl.DateTimeFormat('en-US', {
          month: 'short',
          year: 'numeric',
        }).format(d)
      }
      return 'Present'
    },
  },
}
</script>
