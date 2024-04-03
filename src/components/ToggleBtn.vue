<script setup>
import { ref, inject } from 'vue'

const isChecked = ref(false)

const isLighted = inject('isLighted')
</script>
<template>
  {{ light }}
  <section id="skills" class="tabs">
    <div class="center">
      <div class="xbox">
        <!-- <input type="checkbox" id="check" v-model="isChecked" @click="isLighted" /> -->
        <input type="checkbox" id="check" @click="isLighted = !isLighted" />
        <label for="check" class="button"></label>
      </div>
    </div>
  </section>
</template>

<style scoped>
.xbox {
  width: 500px;
  height: 100px;
  margin: 40px auto;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: inherit;
}

.button {
  background-color: gray;
  width: 200px;
  height: 100px;
  border-radius: 200px;
  cursor: pointer;
  position: relative;
  transition: 0.2s;
}
.button::before {
  position: absolute;
  content: '';
  background-color: #141414;
  width: 90px;
  height: 90px;
  border-radius: 200px;
  margin: 5px;
  transition: 0.2s;
}

input:checked + .button {
  background-color: #9cff00;
}

input:checked + .button::before {
  transform: translate(100px);
}

input {
  display: none;
}
</style>
