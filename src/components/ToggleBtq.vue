<script setup>
import { inject } from 'vue'

const isLighted = inject('isLighted')
</script>
<template>
  <section id="skills" class="tabs">
    <div class="xbox">
      <input type="checkbox" @click="isLighted = !isLighted" />
    </div>
  </section>
</template>

<style scoped>
.xbox {
  width: 500px;
  height: 100px;
  margin: 40px auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

input[type='checkbox'] {
  cursor: pointer;
  position: relative;
  width: 140px;
  height: 70px;
  -webkit-appearance: none; /* For Safari and older Chrome browsers */
  appearance: none; /* Standard syntax for all supporting browsers */
  background: linear-gradient(0deg, #333, #000);
  appearance: none;
  outline: none;
  border-radius: 200px;
  box-shadow:
    0 0 0 4px #353535,
    0 0 0 5px #3e3e3e,
    inset 0 0 10px rgba(0, 0, 0, 1),
    0 5px 20px rgba(0, 0, 0, 0.5),
    inset 0 0 15px rgba(0, 0, 0, 0.2);
}

input:checked[type='checkbox'] {
  background: linear-gradient(0deg, #6dd1ff, #20b7ff);
  box-shadow:
    0 0 2px #6dd1ff,
    0 0 0 4px #353535,
    0 0 0 5px #3e3e3e,
    inset 0 0 10px rgba(0, 0, 0, 1),
    0 5px 20px rgba(0, 0, 0, 0.5),
    inset 0 0 15px rgba(0, 0, 0, 0.2);
}

input[type='checkbox']::before,
input[type='checkbox']::after {
  content: '';
  position: absolute;
  transition: 0.5s;
}
input[type='checkbox']:before {
  top: 0;
  left: 0;
  /* margin: 5px; */
  width: 70px;
  height: 70px;
  background: linear-gradient(0deg, #000, #6b6b6b);
  border-radius: 200px;
  box-shadow: 0 0 0 1px #232323;
}
input:checked[type='checkbox']:before {
  left: 70px;
}
input[type='checkbox']:after {
  top: calc(50% - 2px);
  left: 50px;
  width: 5px;
  height: 5px;
  background: linear-gradient(0deg, #6b6b6b, #000);
  border-radius: 50%;
}
input:checked[type='checkbox']:after {
  background: #63cdff;
  left: 120px;
  box-shadow:
    0 0 5px #13b3ff,
    0 0 15px #13b3ff;
}
</style>
