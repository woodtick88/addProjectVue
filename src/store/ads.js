import * as firebase from 'firebase'

class Ad {
    constructor(title, description, ownerId, imageSrc = '', promo = false, id = null) {
        this.title = title
        this.description = description
        this.ownedId - ownerId
        this.imageSrc = imageSrc
        this.promo = promo
        this.id = id
    }
}

export default {
  state: {
    ads: [{
        title: 'First ad',
        description: 'Hello, I am description',
        promo: true,
        imageSrc: 'https://vuetifyjs.com/static/doc-images/carousel/squirrel.jpg',
        id: '1'
      },
      {
        title: 'Second ad',
        description: 'Hello, I am description',
        promo: true,
        imageSrc: 'https://vuetifyjs.com/static/doc-images/carousel/sky.jpg',
        id: '2'
      },
      {
        title: 'Third ad',
        description: 'Hello, I am description',
        promo: false,
        imageSrc: 'https://vuetifyjs.com/static/doc-images/carousel/bird.jpg',
        id: '3'
      },
      {
        title: 'Fourth ad',
        description: 'Hello, I am description',
        promo: true,
        imageSrc: 'https://vuetifyjs.com/static/doc-images/carousel/planet.jpg',
        id: '4'
      }
    ]
  },
  getters: {
    ads(state) {
      return state.ads
    },
    promoAds(state) {
      return state.ads.filter(ad => {
        return ad.promo
      })
    },
    myAds(state) {
      return state.ads
    },
    adById(state) {
      return adId => {
        return state.ads.find(ad => ad.id === adId)
      }
    }

  },
  mutations: {
      createAd(state, payload) {
          state.ads.push(payload)
      }
  },
  actions: {
      async createAd({commit, getters}, payload) {
          // payload.id = Math.round(Math.random() * 1000) + ''
          // commit('createAd', payload)

          commit('clearError')
          commit('setLoading', true)

          try {
            const newAd = new Ad(
                payload.title,
                payload.description,
                getters.user.id,
                payload.imageSrc,
                payload.promo
            )

              const ad = await firebase.database().ref('ads').push(newAd)

            commit('setLoading', false)
              commit('createAd', {
                  ...newAd,
                  id: ad.key
              })

          } catch(error) {
              commit('setError', error.message)
              commit('setLoading', false)
              throw error
          }

      }
  }
}
