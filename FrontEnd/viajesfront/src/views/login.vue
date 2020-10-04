<template>
  <div id="login">
    <h1>Login</h1>
    <input
      type="text"
      name="username"
      v-model="input.username"
      placeholder="Username"
    />
    <input
      type="password"
      name="password"
      v-model="input.password"
      placeholder="Password"
    />
    <button type="button" v-on:click="login()">Login</button>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      input: {
        username: "",
        password: "",
      },
      usuarios: [],
      bandera: false,
    };
  },
  mounted() {
      fetch("http://192.168.2.15:4000/api/usuarios", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          console.log(response);

          return response.json();
        })
        .then((usuarios) => {
          console.log(usuarios);

          this.usuarios = usuarios;
        })
        .catch((err) => {
          return err;
        });
    
  },
  methods: {
    
    login() {
      
      if (this.input.username != "" && this.input.password != "") {
        for (var x = 0; x < this.usuarios.length; x++) {
          console.log(this.usuarios[x].username);
          console.log(this.usuarios[x].password);
          if (
            this.usuarios[x].username == this.input.username &&
            this.usuarios[x].password == this.input.password
          ) {
            this.bandera = true;                    
          }
        }
        if (this.bandera) {            
          this.$emit("authenticated", true);
          this.$router.replace({ name: "ppto" });
          this.bandera = false;
        } else {
          console.log("The username and / or password is incorrect");
        }
      } else {
        console.log("A username and password must be present");
      }
    },
  },
};
</script>

<style scoped>
#login {
  width: 500px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  margin: auto;
  margin-top: 200px;
  padding: 20px;
}
</style>