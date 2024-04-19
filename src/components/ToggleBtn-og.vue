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
        <label for="check" class="toggle"></label>
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

.toggle {
  cursor: pointer;
  display: block;
  width: 200px;
  height: 100px;
  border-radius: 200px;
  background-color: #222;
  position: relative;
  transition: 0.5s;
  box-shadow:
    inset 0 8px 60px rgba(0, 0, 0, 0.1),
    inset 0 8px 8px rgba(0, 0, 0, 0.1),
    inset 0 -4px 4px rgba(0, 0, 0, 0.1);
}
.toggle::before {
  position: absolute;
  content: '';
  width: 90px;
  height: 90px;
  border-radius: 200px;

  background-color: #141414;
  background: linear-gradient(to bottom #fff, #222);

  margin: 5px;
  transition: 0.2s;
}

input:checked + .toggle {
  background-color: #9cff00;
}

input:checked + .toggle::before {
  transform: translate(100px);
}

input {
  display: none;
}
</style>
