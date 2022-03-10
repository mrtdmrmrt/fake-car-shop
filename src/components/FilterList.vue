<template>
  <div class="filter-wrapper">
    <div class="filter-item">
      <div class="filter-item--title">Yıl</div>
      <div class="filter-item--input-group">
        <b-form-input
          v-model="minYear"
          type="number"
          placeholder="Min"
        ></b-form-input>
        <b-form-input
          v-model="maxYear"
          type="number"
          placeholder="Max"
        ></b-form-input>
      </div>
    </div>
    <div class="filter-item">
      <div class="filter-item--title">Tarih</div>
      <div class="filter-item--date-group">
        <b-form-datepicker
          v-model="minDate"
          placeholder="Min"
        ></b-form-datepicker>
        <b-form-datepicker
          v-model="maxDate"
          placeholder="Max"
        ></b-form-datepicker>
      </div>
    </div>
    <div class="filter-btn">
      <b-button @click="filtered" variant="danger">UYGULA</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilterList",
  data() {
    return {
      minYear: null,
      maxYear: null,
      minDate: null,
      maxDate: null,
    };
  },
  methods: {
    filtered() {
      this.$emit("filtered-click", {
        minYear: this.minYear,
        maxYear: this.maxYear,
        minDate: this.minDate,
        maxDate: this.maxDate,
      });
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/components/filter.scss";
</style>
