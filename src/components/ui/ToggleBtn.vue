<script setup>
import { inject } from 'vue'

// Inject the `isLighted` state
const isLighted = inject('isLighted')

// Method to toggle the `isLighted` state
const toggleIsLighted = () => {
  isLighted.value = !isLighted.value
}
</script>

<template>
  <div class="xbox">
    <input type="checkbox" :checked="isLighted" @change="toggleIsLighted" />
  </div>
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

/* Responsive */
@media (max-width: 768px) {
  .xbox {
    width: 80%;
  }

  input[type='checkbox'] {
    width: 110px;
    height: 55px;
  }

  input[type='checkbox']:before {
    width: 55px;
    height: 55px;
  }

  input:checked[type='checkbox']:before {
    left: 55px;
  }

  input[type='checkbox']:after {
    left: 40px;
  }

  input:checked[type='checkbox']:after {
    left: 95px;
  }
}

@media (max-width: 500px) {
  .xbox {
    width: 90%;
  }

  input[type='checkbox'] {
    width: 90px;
    height: 45px;
  }

  input[type='checkbox']:before {
    width: 45px;
    height: 45px;
  }

  input:checked[type='checkbox']:before {
    left: 45px;
  }

  input[type='checkbox']:after {
    left: 33px;
  }

  input:checked[type='checkbox']:after {
    left: 75px;
  }
}
</style>
