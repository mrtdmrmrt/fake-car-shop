<template>
  <div>
    <div class="card mx-2 my-2" @click="cardClick(cardId)">
      <img :src="photoExtUpdate(imgSrc, '800x600')" class="card-img-top" />
      <div class="card-body">
        <h6 class="card-title">{{ modelName }}</h6>
        <p class="card-text">
          {{ title }}
        </p>
        <p class="card-desc">
          {{ properties[2].value }},
          {{ properties[0].value | numberWithDotFilter }} km
        </p>
        <div class="card-price">{{ priceFormatted }}</div>
        <hr />
        <div class="card-city">
          {{ location.cityName }} / {{ location.townName }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { photoExt, numberWithDot } from "../utils/helpers";
export default {
  name: "Card",
  props: {
    imgSrc: {
      type: String,
    },
    title: {
      type: String,
    },
    modelName: {
      type: String,
    },
    priceFormatted: {
      type: String,
    },
    properties: {
      type: Array,
    },
    location: {
      type: Object,
    },
    cardId: {
      type: Number,
    },
  },
  filters: {
    numberWithDotFilter(num) {
      return numberWithDot(num);
    },
  },
  methods: {
    photoExtUpdate(src, ext) {
      return photoExt(src, ext);
    },
    cardClick(id) {
      this.$emit("cardClick", id);
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/components/card.scss";
</style>
