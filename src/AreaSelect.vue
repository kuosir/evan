<template>
  <div>
    <select v-model="cityCode">
      <option v-for="city in cities" :key="city.code" :value="city.code">
        {{ city.name }}
      </option>
    </select>
    {{ cityCode }}
    <br />
    <select v-model="regionCode">
      <option v-for="city in regions" :key="city.code" :value="city.code">
        {{ city.name }}
      </option>
    </select>
    {{ regionCode }}
  </div>
</template>

<script>
import zipcode from "./zipcode.json";

export default {
  props: {
    zipcode: {
      type: Object,
      default: () => zipcode,
    },
  },
  data: () => ({
    cityCode: 0,
    regionCode: 0,
  }),
  computed: {
    cities() {
      return this.zipcode.cities;
    },
    regions() {
      const city = this.cities.find((city) => city.code === this.cityCode);
      return city ? city.regions : [];
    },
  },
  watch: {
    regions() {
      const [region] = this.regions;
      if (region) {
        this.regionCode = this.regions[0].code;
      }
    },
    cities() {
      const [city] = this.cities;
      if (city) {
        this.cityCode = this.cities[0].code;
      }
    },
    regionCode() {
        this.$emit("input", this.regionCode);
    }
  },
};
</script>