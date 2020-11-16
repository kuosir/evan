<template>
  <div>
    <!-- 
      <AreaSelect :zipcode="zipcode"/>
      <hr/> 
    -->
    <AreaSelect @input="onInput"/>
    <hr/>
    {{ regionCode }}
  </div>
</template>

<script>
import AreaSelect from "./AreaSelect";
import zipcode from './zipcode.json';

export default {
  components: { AreaSelect },
  data: () => ({
    zipcode,
    regionCode: 0,
  }),
  methods: {
    onInput(val) {
      this.regionCode = val;
    },
  }
};
</script>