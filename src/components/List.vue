<template>
  <div class="w-100">
    <div class="row" v-if="carList">
      <Cards :carList="carList" />
      <div class="w-100 d-flex align-items-center justify-content-center mt-4">
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="my-table"
        ></b-pagination>
      </div>
    </div>
    <div
      v-else
      class="w-100 d-flex align-items-center justify-content-center"
      style="height: 100vh"
    >
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Cards from "@/components/Cards.vue";
export default {
  name: "List",
  data() {
    return {
      perPage: 9,
      currentPage: 1,
      rows: 27,
      sort: null,
      sortDirection: null,
      minYear: null,
      maxYear: null,
      minDate: null,
      maxDate: null,
    };
  },
  props: ["selectedSort", "filteredData"],
  computed: {
    ...mapGetters({
      carList: "list/getList",
    }),
  },
  components: {
    Cards,
  },
  watch: {
    currentPage() {
      this.getList();
    },
    selectedSort() {
      switch (this.selectedSort) {
        case "0-0":
          this.sort = 0;
          this.sortDirection = 0;
          break;
        case "0-1":
          this.sort = 0;
          this.sortDirection = 1;
          break;
        case "1-0":
          this.sort = 1;
          this.sortDirection = 0;
          break;
        case "1-1":
          this.sort = 1;
          this.sortDirection = 1;
          break;
        case "2-0":
          this.sort = 2;
          this.sortDirection = 0;
          break;
        case "2-1":
          this.sort = 2;
          this.sortDirection = 1;
          break;

        default:
          this.sort = null;
          this.sortDirection = null;
          break;
      }
      this.getList();
    },
    filteredData: {
      handler(val) {
        this.minYear = val.minYear;
        this.maxYear = val.maxYear;
        this.minDate = val.minDate;
        this.maxDate = val.maxDate;
        this.getList();
      },
      deep: true,
    },
  },
  methods: {
    async getList() {
      await this.$store.dispatch("list/getList", {
        sort: this.sort,
        sortDirection: this.sortDirection,
        skip: this.currentPage - 1,
        take: this.perPage,
        minYear: this.minYear,
        maxYear: this.maxYear,
        minDate: this.minDate,
        maxDate: this.maxDate,
      });
    },
  },
  async created() {
    await this.getList();
  },
};
</script>

<style></style>
