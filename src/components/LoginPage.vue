<template>
  <div>
    <h2>로그인</h2>
    <input type="text" v-model="id" />
    <input type="password" v-model="password" />
    <button @click="checkUser">로그인</button>
  </div>
</template>

<script>
//import axios from 'axios';

export default {
  name: 'LoginPage',
  data() {
    return {
      id: '',
      password: ''
    }
  },
  methods: {
    checkUser(){
      // axios.get('서버URL').then( resultData => {
      //   console.log(resultData)
      // })
    }
  }
}
</script>

<style></style>
