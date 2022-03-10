<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4 mt-4 slider-wrapper">
        <!-- <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="4000"
          controls
          indicators
          background="#ababab"
          img-width="1024"
          img-height="480"
          style="text-shadow: 1px 1px 2px #333"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <b-carousel-slide
            v-for="(photo, key) in carListDetail.photos"
            :key="key"
            :img-src="photoExtUpdate(photo, '800x600')"
            @click.native="photoClick(photoExtUpdate(photo, '800x600'))"
          ></b-carousel-slide>
        </b-carousel> -->
        <transition-group name="fade" tag="div">
          <div v-for="i in [currentIndex]" :key="i" class="custom-slider">
            <img
              :src="photoExtUpdate(currentImg, '800x600')"
              @click="photoClick(photoExtUpdate(currentImg, '800x600'))"
            />
          </div>
        </transition-group>
        <a class="prev" @click="prev">&#10094;</a>
        <a class="next" @click="next">&#10095;</a>
      </div>
      <div class="col-md-8 mt-4">
        <div class="car-detail">
          <div class="d-flex align-items-center justify-content-center mb-4">
            <strong>{{ carListDetail.title }}</strong>
          </div>
          <div class="d-flex align-items-center justify-content-between">
            <strong>Model:</strong><span>{{ carListDetail.modelName }}</span>
          </div>
          <div class="d-flex align-items-center justify-content-between mt-2">
            <strong>İlan Tarihi:</strong
            ><span>{{ carListDetail.dateFormatted }}</span>
          </div>
          <div class="d-flex align-items-center justify-content-between mt-2">
            <strong>Yıl:</strong
            ><span>{{ carListDetail.properties[2].value }}</span>
          </div>
          <div class="d-flex align-items-center justify-content-between mt-2">
            <strong>Km:</strong
            ><span>{{
              carListDetail.properties[0].value | numberWithDotFilter
            }}</span>
          </div>
          <div class="d-flex align-items-center justify-content-between mt-2">
            <strong>Renk:</strong
            ><span>{{ carListDetail.properties[1].value }}</span>
          </div>
          <div class="d-flex align-items-center justify-content-between mt-2">
            <strong>Vites Tipi:</strong
            ><span>{{ carListDetail.properties[3].value }}</span>
          </div>
          <div class="d-flex align-items-center justify-content-between mt-2">
            <strong>Yakıt Tipi:</strong
            ><span>{{ carListDetail.properties[4].value }}</span>
          </div>
          <div class="d-flex align-items-center justify-content-between mt-4">
            <strong>Fiyat:</strong
            ><span>{{ carListDetail.priceFormatted }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4">
      <h3>AÇIKLAMA</h3>
      <hr />
      <div v-html="carListDetail.text"></div>
    </div>
    <b-modal v-model="modalShow" hide-footer>
      <img :src="selectPhoto" style="width: 100%" />
    </b-modal>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { photoExt, numberWithDot } from "../utils/helpers";
export default {
  name: "Detail",
  data() {
    return {
      slide: 0,
      liding: null,
      modalShow: false,
      selectPhoto: null,
      images: [],
      timer: null,
      currentIndex: 0,
    };
  },
  filters: {
    numberWithDotFilter(num) {
      return numberWithDot(num);
    },
  },
  computed: {
    ...mapGetters({
      carListDetail: "detail/getListDetail",
    }),
    currentImg: function () {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    },
  },
  mounted() {
    this.images = this.carListDetail.photos;
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
    photoExtUpdate(src, ext) {
      return photoExt(src, ext);
    },
    numberWithDotFilter(num) {
      return numberWithDot(num);
    },
    photoClick(photo) {
      this.selectPhoto = photo;
      this.modalShow = true;
    },
    startSlide: function () {
      this.timer = setInterval(this.next, 4000);
    },

    next: function () {
      this.currentIndex += 1;
    },
    prev: function () {
      this.currentIndex -= 1;
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/views/detail.scss";
</style>
