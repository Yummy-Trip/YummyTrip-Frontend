<template>
  <div class="letsGrid">
    <header class="header">
      <!--img src="./assets/사이트로고.png"-->
      <router-link to="/login">로그인</router-link>
      <router-link to="/join">회원가입</router-link>
    </header>
    <router-view class="section"></router-view>
    <footer class="footer"></footer>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
* {
  margin: 0;
}
.letsGrid {
  height: 100vh; /* 창 얼마나 활용할것인가! >> 100 넘으면 스크롤 생성 */
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 3fr 1fr;
  grid-template-areas:
    "header"
    "section"
    "footer";
}
.header {
  grid-area: header;
  background-color: rgb(240, 175, 175);
  display: flex;
  flex-direction: row; 
  justify-content: flex-end; 
  align-items: center; /*기준방향의 수직방향(반대방향) 으로 위치설정*/
}
.section {
  grid-area: section;
  background-color: rgb(158, 207, 174);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.footer {
  grid-area: footer;
  background-color: rgb(174, 174, 225);
}
</style>
