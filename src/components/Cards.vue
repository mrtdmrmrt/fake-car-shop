<template>
  <div class="cards w-100 d-flex flex-wrap">
    <Card
      v-for="item in carList"
      :key="item.id"
      :cardId="item.id"
      :imgSrc="item.photo"
      :title="item.title"
      :modelName="item.modelName"
      :properties="item.properties"
      :priceFormatted="item.priceFormatted"
      :location="item.location"
      @cardClick="cardClick($event)"
    />
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
export default {
  name: "Cards",
  components: {
    Card,
  },
  props: {
    carList: {
      type: Array,
    },
  },
  methods: {
    cardClick(id) {
      this.$router.push({ name: "detail", params: { id: id } });
    },
  },
};
</script>

<style></style>
