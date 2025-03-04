<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

const form = ref(null)
const name = ref('')
const email = ref('')
const message = ref('')
const responseMessage = ref('')

// Environment variables
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? ''
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? ''
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? ''

const sendEmail = async () => {
  try {
    await emailjs.sendForm(serviceId, templateId, form.value, {
      publicKey,
    })
    // console.log('SUCCESS!')
    responseMessage.value = 'Your message has been sent successfully!'
  } catch (error) {
    // console.log('FAILED...', error.text)
    responseMessage.value = 'Failed to send message.'
  }
}
</script>

<template>
  <section id="contact" class="contact_me">
    <div class="box">
      <h2>Contact Me</h2>
      <form ref="form" @submit.prevent="sendEmail">
        <div class="inputBox">
          <input
            type="text"
            v-model="name"
            name="name"
            required
            placeholder=""
            spellcheck="false"
          />
          <label>Name</label>
        </div>
        <div class="inputBox">
          <input
            type="email"
            v-model="email"
            name="email"
            required
            placeholder=""
            spellcheck="false"
          />
          <label>Email</label>
        </div>
        <div class="inputBox">
          <textarea
            v-model="message"
            name="message"
            style="resize: none"
            rows="8"
            required
            placeholder=""
            spellcheck="false"
          ></textarea>
          <label>Message</label>
        </div>
        <div class="submit">
          <input type="submit" value="Send" />
        </div>
        <p
          v-if="responseMessage"
          :class="{
            response: true,
            success: responseMessage.includes('success'),
            error: responseMessage.includes('Failed'),
          }"
        >
          {{ responseMessage }}
        </p>
      </form>
    </div>
  </section>
</template>

<style scoped>
.contact_me {
  position: relative;
  background: url('@/assets/img/form.jpg') no-repeat center center/cover;
  background-attachment: fixed; /* Parallax Effect */
  height: 100vh;
}

.box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  padding: 40px;
  background: rgba(0, 0, 0, 0.8);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
}
.box h2 {
  margin-bottom: 1.875rem; /* 30px in rem */
  text-align: center;
}

.inputBox {
  position: relative;
  margin-bottom: 1.875rem;
}

.inputBox input,
.inputBox textarea {
  font-family: inherit;
  width: 100%;
  padding: 0.625rem 0;
  font-size: 1.4375rem;
  letter-spacing: 0.0625rem;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
  color: #fff;
}

.inputBox label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
}

/* Fixed selectors for label animation */
/* .inputBox input:focus ~ label,
.inputBox input:valid ~ label,
.inputBox textarea:focus ~ label,
.inputBox textarea:valid ~ label { */
.inputBox input:not(:placeholder-shown) ~ label,
.inputBox input:focus ~ label,
.inputBox textarea:not(:placeholder-shown) ~ label,
.inputBox textarea:focus ~ label {
  top: -18px;
  left: 0;
  color: var(--primary-color);
  font-size: 15px;
}

.inputBox input:focus,
.inputBox textarea:focus {
  border-bottom: 1px solid var(--primary-color);
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
  transition: 0.5s;
}

.box input[type='submit']:hover {
  background-color: var(--primary-color);
  border: 1px solid var(--primary-color);
  box-shadow: 0 0 50px var(--primary-color);
  /* Mirror Effect Under */
  /* -webkit-box-reflect: below 1px linear-gradient(transparent, #0003); */
}

/* Form submit response msg */
.response {
  text-align: center;
  margin-top: 1rem;
}
.response.success {
  color: var(--primary-color);
}
.response.error {
  color: #f44336;
}

/** Autofill Styles */
.inputBox input:-webkit-autofill,
.inputBox input:-webkit-autofill:focus,
.inputBox textarea:-webkit-autofill,
.inputBox textarea:-webkit-autofill:focus {
  -webkit-text-fill-color: #fff;
  background-color: transparent;
  transition: background-color 5000s ease-in-out 0s;
  caret-color: #fff;
}

/* Responsive */
@media (max-width: 500px) {
  .box {
    width: 350px;
  }
  h2 {
    font-size: 1.7rem;
  }
}
</style>
