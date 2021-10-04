<template>
  <li class="colors__item">
    <label class="colors__label">
      <input
        class="colors__radio sr-only"
        type="radio"
        name="color"
        :value="color.colorCode"
      />
      <span class="colors__value" :style="{backgroundColor: color.colorCode}"> </span>
    </label>
  </li>
</template>

<script>
export default {
  props: ['color'],
};
</script>