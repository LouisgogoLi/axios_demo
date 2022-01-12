<template>
  <div v-if="!bIsReg">
    <div class="input-box">
      <p>NAME</p>
      <input
        type="text"
        placeholder="輸入使用者名稱"
        v-model="oRegistered.username"
      />
      <p v-if="error_message.username" class="error">
        {{ error_message.username }}
      </p>
    </div>
    <div class="input-box">
      <p>PASSWORD</p>
      <input
        type="password"
        placeholder="輸入密碼"
        v-model="oRegistered.password"
      />
      <p v-if="error_message.password" class="error">
        {{ error_message.password }}
      </p>
    </div>
    <div class="input-box">
      <p>E-MAIL</p>
      <input type="text" placeholder="輸入email" v-model="oRegistered.email" />
      <p v-if="error_message.email" class="error">
        {{ error_message.email }}
      </p>
    </div>
    <div class="input-box">
      <p>年齡</p>
      <input type="number" placeholder="輸入年齡" v-model="oRegistered.age" />
    </div>
    <div class="input-box">
      <input type="radio" id="boy" value="boy" v-model="oRegistered.sex" />
      <label for="boy">boy</label>
      <input type="radio" id="girl" value="girl" v-model="oRegistered.sex" />
      <label for="girl">girl</label>
    </div>
    <div class="input-box">
      <input type="checkbox" id="checkbox" v-model="oRegistered.terms" />
      <label for="checkbox">我已閱讀使用者條款</label>
    </div>
    <a class="btn" @click="handRegisteredFn">送出</a>
  </div>
  <div v-if="bIsReg">
    <h1>註冊成功</h1>
  </div>
</template>

<script>
export default {
  name: "AxiosPost",
};
</script>

<script setup>
import { ref, reactive } from "vue";
import { apiPostHerokuappRegistered } from "@/api";

const bIsReg = ref(false);
const oRegistered = reactive({
  username: "",
  password: "",
  sex: "",
  email: "",
  age: "",
  terms: false,
});
const error_message = reactive({});

const fnSuccess = () => {
  alert("註冊成功");
  bIsReg.value = true;
};

const fnError = (err) => {
  console.log(err);
  Object.keys(err).forEach((key) => (error_message[key] = err[key]));
};

const handRegisteredFn = () => {
  apiPostHerokuappRegistered(oRegistered)
    .then(() => {
      fnSuccess();
    })
    .catch((err) => {
      fnError(err.error_message);
    });
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
  background-color: #233245;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "微軟正黑體";
}

.btn {
  cursor: pointer;
  display: flex;
  justify-content: center;
  width: 180px;
  margin: 10px auto 0 auto;
  padding: 5px 0;
  color: white;
  background-color: skyblue;
  font-size: 12px;
}

.input-box {
  margin: 15px;
}

.error {
  color: red;
}
</style>
