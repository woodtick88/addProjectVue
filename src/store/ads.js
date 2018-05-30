export default {
  state: {
    ads: [{
        title: 'First ad',
        description: 'Hello, I am description',
        promo: true,
        imageSrc: 'https://vuetifyjs.com/static/doc-images/carousel/squirrel.jpg',
        id: 1
      },
      {
        title: 'Second ad',
        description: 'Hello, I am description',
        promo: true,
        imageSrc: 'https://vuetifyjs.com/static/doc-images/carousel/sky.jpg',
        id: 2
      },
      {
        title: 'Third ad',
        description: 'Hello, I am description',
        promo: false,
        imageSrc: 'https://vuetifyjs.com/static/doc-images/carousel/bird.jpg',
        id: 3
      },
      {
        title: 'Fourth ad',
        description: 'Hello, I am description',
        promo: true,
        imageSrc: 'https://vuetifyjs.com/static/doc-images/carousel/planet.jpg',
        id: 4
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
    }

  },
  mutations: {},
  actions: {}
}
