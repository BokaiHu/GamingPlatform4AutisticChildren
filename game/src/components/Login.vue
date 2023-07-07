<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>{{ $t('log_in') }}</h3>
        <span>Please enter your login details.</span>
      </div>
      <div class="card-body">
          <div class="input-group">
            <input v-model="name" type="text" name="username" required>
            <label>{{ $t('user_name') }}</label>
          </div>
          <div class="input-group">
            <input v-model="psw" type="password" name="password" required>
            <label>{{ $t('user_psw') }}</label>
          </div>
          <button @click="login()">{{ $t('log_in') }}</button>
          <button type="button" style="margin-left: 50%;" @click="navigateTo('register')">{{ $t('register') }}</button>
      </div>
      <button @click="navigateTo('start')">我是程序员，直接跳过</button>
    </div>
  </div>
</template>
  
<script>
import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
      name: '',
      psw: '',
    }
  },
  methods: {
    navigateTo(routeName) {
      this.$router.push({ name: routeName });
    },
    login() {
      axios.post('http://www.code-maker.cn:8000/login',
      {name: this.name, psw: this.psw})
      // 把then里的function改成了lambda表达式
      .then((res) => {
        if (res['data'].code == 1) {
          this.navigateTo('start')
        } else {
          alert(res.data.message)
        }
        console.log(res['data'])
      })
    }
  }
}
</script>
  
<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .card {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    width: 400px;
  }

  .card-header {
    background-image: linear-gradient(to right, #e64b3b, #e08243);
    border-radius: 5px 5px 0 0;
    color: #fff;
    padding: 20px;
    text-align: center;
  }

  .card-header h3 {
    margin: 0;
  }

  .card-header span {
    display: block;
    font-size: 14px;
    margin-top: 10px;
  }

  .card-body {
    padding: 20px;
  }

  .input-group {
    display: flex;
    flex-direction: column-reverse;
    margin-bottom: 20px;
    position: relative;
  }

  .input-group input {
    border: none;
    border-bottom: 2px solid #ddd;
    font-size: 16px;
    padding: 10px 0;
  }

  .input-group input:focus {
    outline: none;
  }

  .input-group label {
    color: #999;
    font-size: 16px;
    position: absolute;
    pointer-events: none;
    top: 10px;
    left: 0;
    transition: all 0.2s ease-in-out;
  }

  .input-group input:focus + label,
  .input-group input:valid + label {
    font-size: 12px;
    top: -10px;
    color: #e64b3b;
  }

  button {
    background-image: linear-gradient(to right, #e64b3b, #e08243);
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
    padding: 10px 20px;
    transition: all 0.2s ease-in-out;
  }

  button:hover {
    transform: translateY(-5px);
  }
</style>