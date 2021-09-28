import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'
import { Hotel } from '../hotel'

declare module '@vue/runtime-core' {
  // declare your own store states
  interface State {
    hotels: Hotel[]
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}