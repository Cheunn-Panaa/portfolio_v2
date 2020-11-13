<template>
  <div class="container">
    <Profile id="profile" class="column is-one-quarter box card profile-card" />

    <div id="right-container" class="column is-three-quarters">
      <Navbar id="navbar"/>

      <div id="page">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<style></style>
<script>
export default {
  watch: {
    $route () {
      console.log('route changed', this.$route);
      document.getElementById('page').style.height = null;
      document.getElementById('profile').style.height = null;


    }
  },
}
if (typeof window !== 'undefined') {
  const resizeObserver = new ResizeObserver(entries => {

    //TODO: If height style remove it and execute code
      document.getElementById('page').style.height = null;
      document.getElementById('profile').style.height = null;
      console.log('Page component changed height: ', entries[0].target.clientHeight);
      resize(entries[0].target.clientHeight);
    }
  )

// start observing a DOM node
  resizeObserver.observe(document.getElementById('page'));

}

function resize(pageHeight) {

  const navMargin = -12;
  const profile = document.getElementById('profile');
  const rightContainer = document.getElementById('right-container');
  const navbar = document.getElementById('navbar');

  if(profile.offsetHeight > pageHeight+navbar.offsetHeight)
  {
    console.log("Resizing Page component");
    document.getElementById('page').style.height=profile.offsetHeight-navbar.offsetHeight+navMargin +"px";
  }
  else
  {

    document.getElementById('page').style.height = null;
    console.log("Resizing Profile Component")
    document.getElementById('profile').style.height = rightContainer.offsetHeight +"px";
  }
}
</script>
