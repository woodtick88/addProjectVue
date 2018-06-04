import * as firebase from 'firebase'

class Order {
  constructor(name, phone, adId, done = false, id = null) {
    this.name = name
    this.phone = phone
    this.adId = adId
    this.done = done
    this.id = id
  }
}

export default {
  state: {
    orders: []
  },
  mutations: {
    loadOrders(state, payload) {
      state.orders = payload
    }
  },
  actions: {
    async createOrder({commit, getters}, {name, phone, adId, ownerId}) {
      let order = new Order(name, phone, adId)
      commit('clearError')

      try {
        await firebase.database().ref(`/users/${getters.user.id}/orders`).push(order)
      } catch(error) {
        commit('setError', error.message)
        throw error
      }

    },
    async fetchOrders({commit, getters}) {
      commit('setLoading', true)
      commit('clearError')

      let resultOrders = []

      try {
        let fbVal = await firebase.database().ref(`/users/${getters.user.id}/orders`).once('value')
        let orders = fbVal.val()

        Object.keys(orders).forEach(key => {
          let order = orders[key]
          resultOrders.push(
            new Order(order.name, order.phone, order.adId, order.done, key)
          )
        })

        commit('loadOrders', resultOrders)
        commit('setLoading', false)
      } catch(error) {
        commit('setLoading', false)
        commit('setError', error.message)
        throw error
      }
    },
    async markOrderDone({commit, getters}, payload) {
      commit('clearError')
        await firebase.database().ref(`/users/${getters.user.id}/orders`).child(payload).update({
          done: true
        })
      try {

      } catch(error) {
        commit('setError', error.message)
        throw error
      }

    }



  },
  getters: {
    doneOrders(state) {
      return state.orders.filter(order => order.done)
    },
    undoneOrders(state) {
      return state.orders.filter(order => !order.done)
    },
    orders(state, getters) {
      return getters.undoneOrders.concat(getters.doneOrders)
    }
  }
}
