<template>
  <div id="app"><router-view /></div>
</template>

<style lang="scss">
* {
  &,
  &::before,
  &::after {
    box-sizing: border-box;
  }
}

:root {
  font-size: 62.5%;
}

html,
body {
  background: #000000;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 1.3rem;
  color: #a38d6d;
  line-height: 1.3;
  margin: 0;
  padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: #dfcf99;
  margin: 0 0 0.5em 0;
  line-height: 1.2;
}
h1 {
  font-size: 1.5em;
}
h2 {
  font-size: 1.3rem;
}
h3 {
  font-size: 1.1rem;
}
#app {
}
</style>
