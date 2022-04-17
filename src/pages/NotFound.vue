<template>
  <section>
    <h1>
      404 Error <br />
      Page Not Found
    </h1>
    <p>Go to <router-link to="/">Home</router-link> Page</p>
  </section>
</template>

<style scoped>
section {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

h1 {
  font-size: 2.5rem;
  letter-spacing: 2px;
  margin: 0;
  color: crimson;
}

p {
  font-size: 1.125rem;
}

a {
  font-weight: bold;
}
</style>
