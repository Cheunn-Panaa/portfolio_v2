<template>
  <div class="box profile-card column is-one-quarter">
    <header class="content">
      <b-image
        alt="Cheunn Nourry"
        rounded
        lazy="false"
        responsive="false"
        ratio="1by1"
      ></b-image>
      <h1 class="name has-text-weight-normal is-size-4 mb-4 mt-4">Cheunn <b>Nourry</b></h1>
      <h2 class="p-3 button is-rounded">Software Developer</h2>


    </header>
    <div class="content">
      <div class="socials">
        <ul>
          <li>
            <b-icon
              icon="linkedin"
              size="is-medium"
              type="mdi-dark">
            </b-icon>
          </li>
          <li class="mx-2">
            <b-icon
              icon="github"
              size="is-medium"
              type="mdi-dark">
            </b-icon>
          </li>
          <li>
            <b-icon
              icon="instagram"
              size="is-medium"
              type="mdi-dark">
            </b-icon>
          </li>
        </ul>
      </div>

      <div class="px-3 py-3 extra-info">
        <ul>
          <li class="has-text-weight-medium my-2">
            <b-icon
              class="mr-2"
              icon="cake-variant"
              size="is-small"
              type="mdi-dark">
            </b-icon>
            21, Mars 1997
          </li>

          <li class="has-text-weight-medium my-2">
            <b-icon
              class="mr-2"
              icon="map-marker"
              size="is-small"
              type="mdi-dark">
            </b-icon>
            Rennes
          </li>

          <li class="has-text-weight-medium my-2">
            <b-icon
              class="mr-2"
              icon="cellphone-android"
              size="is-small"
              type="mdi-dark">
            </b-icon>
            0610291546
          </li>
        </ul>
      </div>
    </div>
    <footer class="content">
      <b-button class="px-6 is-rounded is-size-7"
                type="is-info"
                size="is-medium"
                icon-left="email">
        Email me
      </b-button>
    </footer>
  </div>
</template>

<script>
    export default {}
</script>
<style>
  .profile-card {
    background: #ffffff;
    padding: 1.5rem 0;
  }

  .profile-card h2 {
    background: grey;
    font-size: 0.9rem;
  }

  .profile-card .name {
    color: #49515d;
  }

  header,
  h2,
  figure,
  ul{
    margin: 0 !important;
  }
  ul {
    list-style-type: none !important;
  }
  .socials ul{
    margin: 0 auto;
  }
  .socials ul li {
    display:inline-block;
  }

  .extra-info {
    background: grey;
    text-align:left;
  }
</style>
