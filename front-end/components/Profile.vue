<template>
  <div>
    <header class="content">
      <figure class="b-image-wrapper avatar image is-2by1">
        <img class="is-rounded" :src="require('@/assets/images/test.jpg')" />
      </figure>
      <h1 class="name has-text-weight-normal is-size-4 mb-4 mt-4">
        Cheunn <b>Nourry</b>
      </h1>
      <h2 class="mt-2 has-text-grey">Software Developer</h2>
    </header>
    <div class="content">
      <div class="socials">
        <ul>
          <li>
            <b-icon
              class="main-text"
              pack="fab"
              icon="linkedin"
              size="is-large"
            >
            </b-icon>
          </li>
          <li class="mx-2">
            <b-icon
              class="main-text"
              pack="fab"
              icon="github-square"
              size="is-large"
            >
            </b-icon>
          </li>
          <li>
            <b-icon
              class="main-text"
              pack="fab"
              icon="instagram-square"
              size="is-large"
            >
            </b-icon>
          </li>
        </ul>
      </div>

      <div class="px-3 py-3 extra-info">
        <ul>
          <li class="has-text-weight-medium my-2">
            <b-icon
              class="mr-2"
              pack="fas"
              icon="birthday-cake"
              size="is-small"
            >
            </b-icon>
            21, Mars 1997
          </li>

          <li class="has-text-weight-medium my-2">
            <b-icon class="mr-2" pack="fas" icon="map-pin" size="is-small">
            </b-icon>
            Rennes
          </li>

          <li class="has-text-weight-medium my-2">
            <b-icon pack="fas" class="mr-2" icon="phone-alt" size="is-small">
            </b-icon>
            0610291546
          </li>
        </ul>
      </div>
    </div>
    <footer class="content">
      <b-button
        class="px-6 is-rounded is-size-7"
        type="is-info"
        size="is-medium"
        icon-left="email"
      >
        Email me
      </b-button>
    </footer>
  </div>
</template>
