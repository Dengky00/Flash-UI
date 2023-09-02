<demo>常规用法</demo>
<template>
  <h4>fullLocation:决定展示的城市</h4>
  <h4>change事件:可以获得选择的城市</h4>
  <City :fullLocation="fullLocation" @change="changeCity"></City>
</template>

<script>
import { ref } from 'vue'
import City from '../lib/City.vue'
export default {
  components: { City },
  setup(props) {
    const fullLocation = ref('')
    const changeCity = (city) => {
      fullLocation.value = city.fullLocation
    }
    return { fullLocation, changeCity }
  },
}
</script>