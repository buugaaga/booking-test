import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import axios from 'axios'
import { Hotel } from '@/types/hotel'
import actions from '@/constants/actions'
import { User } from '@/types/user'



export interface State {
  hotels?: Hotel[],
  hotel?: Hotel,
}

export const key: InjectionKey<Store<State>> = Symbol()

const HOTELS_URL = 'https://jsonplaceholder.typicode.com/posts'
const USERS_URL = 'https://jsonplaceholder.typicode.com/users'

export const store = createStore<State>({
  state: {
    hotels: [],
    hotel: undefined,
  },
  mutations: {
    [actions.ALL_HOTELS](state, payload: Hotel[]) {
      state.hotels = [...payload]
    },
    [actions.ONE_HOTEL](state, payload: Hotel) {
      state.hotel = payload;
    }
  },
  actions: {
    async [actions.ALL_HOTELS](store) {
      const { data } = await axios.get(HOTELS_URL)
      store.commit(actions.ALL_HOTELS, data)
    },

    async [actions.ONE_HOTEL](store, id) {
      const { data } = await axios.get(`${HOTELS_URL}/${id}`)
      store.commit(actions.ONE_HOTEL, data)
    },

    async [actions.TO_BOOK](_, payload: User) {
      await axios.post(USERS_URL, payload)
    }
  }
})

export function useStore() {
  return baseUseStore(key)
}