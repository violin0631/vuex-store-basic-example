<template>
  <div>
    <hr>
    <h2>Product show</h2>
    Name: <input v-model="name"/>
    Show: <input type="checkbox" v-model="show"/>
    <button @click="add">Add Product</button>

    <br><br>
    Only show product that show property is true:
    <li v-for="p in $store.getters.filteredProducts" v-bind:key="p.name">
      {{p.name}}
    </li>

  </div>
</template>

<script>
export default {
  name: 'Product',
  data: () => ({
    name: '',
    show: false
  }),
  methods: {
    add () {
      this.$store.state.products.push({ name: this.name, show: this.show })
    }
  }
}
</script>

<style scoped>

</style>
