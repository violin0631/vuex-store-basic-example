<template>
  <div>
    <!--<h1>{{count}}</h1>
    <button @click="count++">Increment</button>-->
    <h1>{{$store.state.count}}</h1>
    <button @click="incre">Increment</button>&nbsp;
    <button @click="increAsync ()">Increment Async</button>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  data: () => ({
    count: 0
  }),
  methods: {
    incre () {
      this.$store.commit('increment')
    },
    increAsync () {
      this.$store.dispatch('incrementAsync')
    }
  }
}
</script>
