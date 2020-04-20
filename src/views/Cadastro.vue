<template>
  <div class="cadastro">
    <div>
      <img
        src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        height="100%"
        width="100%"
        class="img-lateral"
      />
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.cadastro {
  height: 100%;
  width: 100%;
  display: flex;
}

.cadastro > div {
  flex: 1;
}

.img-lateral {
  object-fit: cover;
}

</style>