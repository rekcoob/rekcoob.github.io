<template>
  <!-- Contact -->
  <section id="contact" class="contact">
    <div class="box">
      <h2>Contact Me</h2>
      <form action="https://formspree.io/f/meqplpjo" method="POST">
        <div class="inputBox">
          <input type="text" name="name" required="" />
          <label>Name</label>
        </div>
        <div class="inputBox">
          <input type="text" name="_replyto" required="" />
          <label>Email</label>
        </div>
        <div class="inputBox">
          <textarea name="message" style="resize: none" rows="8" required=""></textarea>
          <label>Message</label>
        </div>
        <div class="submit">
          <input type="submit" name="" value="Send" />
        </div>
      </form>
    </div>
  </section>
  <!-- Contact -->
</template>

<style scoped>
.contact {
  position: relative;
  background: url(../assets/img/form.jpg) no-repeat center center/cover;
  background-attachment: fixed;
  height: 100vh;
}

.box {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 450px;
  padding: 40px;
  background: rgba(0, 0, 0, 0.8);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
}

.box h2 {
  margin: 0 0 30px;
  padding: 0;
  text-align: center;
}

.inputBox {
  position: relative;
  font-family: inherit;
  /* Change the white to any color ;) */
}

.inputBox input {
  font-family: inherit;
  width: 100%;
  padding: 10px 0;
  font-size: 23px;
  letter-spacing: 1px;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
  color: #fff;
}

.inputBox input:focus {
  border-bottom: 1px solid #02968a;
}

.inputBox input:-webkit-autofill,
.inputBox input:-webkit-autofill:hover,
.inputBox input:-webkit-autofill:focus,
.inputBox input:-webkit-autofill:active {
  -webkit-transition: background-color 5000s ease-in-out 0s;
  transition: background-color 5000s ease-in-out 0s;
  -webkit-transition-delay: 5000s;
  transition-delay: 5000s;
  -webkit-text-fill-color: #fff !important;
}

.inputBox textarea {
  font-family: inherit;
  width: 100%;
  padding: 10px 0;
  font-size: 23px;
  color: #fff;
  letter-spacing: 1px;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}

.inputBox textarea:focus {
  border-bottom: 1px solid #02968a;
}

.inputBox label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.box .inputBox input:focus ~ label,
.box .inputBox input:valid ~ label {
  top: -18px;
  left: 0;
  color: #02968a;
  font-size: 15px;
}

.box .inputBox textarea:focus ~ label,
.box .inputBox textarea:valid ~ label {
  top: -18px;
  left: 0;
  color: #02968a;
  font-size: 15px;
}

.submit {
  text-align: center;
}

.box input[type='submit'] {
  margin: 0 auto;
  background: transparent;
  border: 1px solid white;
  outline: none;
  color: #fff;
  padding: 10px 20px;
  cursor: pointer;
  letter-spacing: 2px;
  font-size: 18px;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  /* zrkadlovy odraz pod */
  -webkit-box-reflect: below 1px linear-gradient(transparent, #0003);
}

.box input[type='submit']:hover {
  background-color: #02968a;
  border: 1px solid #02968a;
  -webkit-box-shadow: 0 0 50px #02968a;
  box-shadow: 0 0 50px #02968a;
}
</style>
