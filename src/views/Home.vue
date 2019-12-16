<template>
  <div class="home">
    <Counter></Counter>
    <Product></Product>
  </div>
</template>

<script>
import Counter from '../components/Counter'
import Product from '../components/Product'

export default {
  name: 'home',
  components: {
    Product,
    Counter
  }
}
</script>
