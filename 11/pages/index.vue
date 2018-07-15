<template>
  <div>
    <ul class="users">
      <li v-for="(user, index) in users" :key="index">id: {{user.id}}, name: {{user.name}}, age: {{user.age}}</li>
    </ul>
    <div class="add">
      <input type="text" v-model="id">
      <input type="text" v-model="name">
      <input type="text" v-model="age">
      <button @click="userAdd">추가</button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  computed: mapGetters({
    users: "users/userInfos"
  }),
  data() {
    return {
      name: "",
      age: "",
      id: ""
    };
  },
  methods: {
    userAdd() {
      let userInfo = {
        name: this.name,
        age: this.age,
        id: this.id
      };
      this.add(userInfo);
      this.name = "";
      this.age = "";
      this.id = "";
    },
    ...mapMutations({
      add: "users/add"
    })
  }
};
</script>