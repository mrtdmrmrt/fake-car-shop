<template>
  <div class="container">
    <div class="row mt-4">
      <div class="col-md-3">
        <FilterList @filtered-click="filteredData = $event" />
      </div>
      <div class="col-md-9">
        <div class="d-flex align-items-center justify-content-end">
          <Sort @selected-sort="selectedSort = $event" />
        </div>
        <div class="row w-100 mt-4">
          <List :selectedSort="selectedSort" :filteredData="filteredData" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sort from "@/components/Sort.vue";
import List from "@/components/List.vue";
import FilterList from "@/components/FilterList.vue";

export default {
  name: "Home",
  data() {
    return {
      selectedSort: null,
      filteredData: null,
    };
  },
  components: {
    Sort,
    List,
    FilterList,
  },
};
</script>
