<template>
  <div>
    <h2>회원가입</h2>
      <div>
        이름: <input type="text" v-model="name"> 
      </div>
      <div>
        생년월일: <input type="date" v-model="birth">  
      </div>
      <div>
        이메일: <input type="text" v-model="email"> 
      </div>
      <div>
        아이디: <input type="text" v-model="id"> 
        <button @click="checkId">아이디확인</button>
      </div>
      <div>
        비밀번호: <input type="text" v-model="password"> 
      </div>
      <div>
        비밀번호 확인: <input type="text" v-model="confirmPassword"> 
      </div>
    <button @click="join">회원가입</button>
  </div>
</template>

<script>
export default {
    name: 'JoinPage',
    data() {
      return {
        name: '',
        birth: '',
        email: '',
        id: '',// 유효성검사
        password: '',
        confirmPassword: ''
      }
    },
    methods: {
      checkId(){

      },
      join(){

      }
    }
}
</script>

<style>

</style>