<template>
  <li class="catalog__item">
    <a class="catalog__pic" href="#">
      <img :src="product.image" :alt="product.title" />
    </a>

    <h3 class="catalog__title">
      <a href="#">{{ product.title }}</a>
    </h3>

    <span class="catalog__price"> {{ product.price }} </span>

    <ul class="colors colors--black">
      <ProductColor v-for="color in isColor" :key="color.id" :color="color" />
      <!-- <li class="colors__item">
        <label class="colors__label">
          <input
            class="colors__radio sr-only"
            type="radio"
            value="#73B6EA"
            v-model="color"
          />
          <span class="colors__value" style="background-color: #73b6ea"> </span>
        </label>
      </li>
      <li class="colors__item">
        <label class="colors__label">
          <input
            class="colors__radio sr-only"
            type="radio"
            value="#8BE000"
            v-model="color"
          />
          <span class="colors__value" style="background-color: #8be000"> </span>
        </label>
      </li>
      <li class="colors__item">
        <label class="colors__label">
          <input
            class="colors__radio sr-only"
            type="radio"
            value="#222"
            v-model="color"
          />
          <span class="colors__value" style="background-color: #222"> </span>
        </label>
      </li> -->
    </ul>
  </li>
</template>

<script>
import colors from "../data/color";
import ProductColor from "./productColor.vue";

export default {
  components: { ProductColor },
  data() {
    return {

    };
  },
  props: ["product"],
  computed: {
    isColor() {
      let arrProducts = this.product.productColor;
      let arrColors = colors;
      let Add = (val1, val2) => val2.filter(item => val1.indexOf(item.id) > -1);
      return Add(arrProducts, arrColors);
    }
  },
};
</script>
