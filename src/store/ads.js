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
    ads: [
      // {
      //   title: 'First ad',
      //   description: 'Hello, I am description',
      //   promo: true,
      //   imageSrc: 'https://vuetifyjs.com/static/doc-images/carousel/squirrel.jpg',
      //   id: '1'
      // },
      // {
      //   title: 'Second ad',
      //   description: 'Hello, I am description',
      //   promo: true,
      //   imageSrc: 'https://vuetifyjs.com/static/doc-images/carousel/sky.jpg',
      //   id: '2'
      // },
      // {
      //   title: 'Third ad',
      //   description: 'Hello, I am description',
      //   promo: false,
      //   imageSrc: 'https://vuetifyjs.com/static/doc-images/carousel/bird.jpg',
      //   id: '3'
      // },
      // {
      //   title: 'Fourth ad',
      //   description: 'Hello, I am description',
      //   promo: true,
      //   imageSrc: 'https://vuetifyjs.com/static/doc-images/carousel/planet.jpg',
      //   id: '4'
      // }
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
      },
      loadAds(state, payload) {
          state.ads = payload
      }

  },
  actions: {
      async createAd({commit, getters}, payload) {
          // payload.id = Math.round(Math.random() * 1000) + ''
          // commit('createAd', payload)

          let image = payload.image

          commit('clearError')
          commit('setLoading', true)

          try {
            const newAd = new Ad(
                payload.title,
                payload.description,
                getters.user.id,
                '',
                payload.promo
            )

            const ad = await firebase.database().ref('ads').push(newAd)
            let imageExt = image.name.slice(image.name.lastIndexOf('.'))

            let fileData = await firebase.storage().ref(`ads/${ad.key}.${imageExt}`).put(image)
            let imageSrc = fileData.metadata.downloadURLs[0]

            await firebase.database().ref('ads').child(ad.key).update({
                imageSrc
            })

            commit('setLoading', false)
              commit('createAd', {
                  ...newAd,
                  id: ad.key,
                  imageSrc: imageSrc
              })

          } catch(error) {
              commit('setError', error.message)
              commit('setLoading', false)
              throw error
          }

      },
      async fetchAds({commit}) {
          commit('clearError')
          commit('setLoading', true)

          let resultAds = []

          try {
              let fbVal = await firebase.database().ref('ads').once('value')
              let ads = fbVal.val()

              Object.keys(ads).forEach(key => {
                  let ad = ads[key]
                  resultAds.push(
                      new Ad(
                          ad.title,
                          ad.description,
                          ad.ownerId,
                          ad.imageSrc,
                          ad.promo,
                          key
                      )
                  )
              })

              commit('setLoading', false)
              commit('loadAds', resultAds)

          } catch(error) {

              commit('setError', error.message)
              commit('setLoading', false)
              throw error
          }


      }

  }
}
