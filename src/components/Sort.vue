<template>
  <div>
    <b-form-select v-model="selected" :options="options"></b-form-select>
  </div>
</template>

<script>
export default {
  name: "Sort",
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "Gelişmiş Sıralama" },
        { value: "0-0", text: "Fiyat - Ucuzdan Pahalıya" },
        { value: "0-1", text: "Fiyat - Pahalıdan Ucuza" },
        { value: "1-0", text: "Tarih - Yeniden Eskiye" },
        { value: "1-1", text: "Tarih - Eskiden Yeniye" },
        { value: "2-0", text: "Yıl - Yeniden Eskiye" },
        { value: "2-1", text: "Yıl - Eskiden Yeniye" },
      ],
    };
  },
  watch: {
    selected() {
      this.$emit("selected-sort", this.selected);
    },
  },
};
</script>

<style></style>
