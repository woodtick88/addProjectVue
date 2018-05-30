<template>
<v-container>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>

      <h1 class="test--secondary mb-3">My ads</h1>

      <v-card v-for="ad in ads" :key="ad.id" class="elevation-10 mb-3">
        <v-layout row>

          <v-flex xs4>
            <v-card-media height="100%" :src="ad.imageSrc">

            </v-card-media>
          </v-flex>

          <v-flex xs8>
            <v-card-text>
              <h2 class="text--primary">{{ ad.title }}</h2>
              <p>{{ ad.description }}</p>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn class="info" :to="'/ad/' + ad.id">Open</v-btn>
            </v-card-actions>
          </v-flex>

        </v-layout>
      </v-card>

    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
export default {
  data() {
    return {
      ads: [{
          title: 'First ad',
          description: 'Hello, I am description',
          promo: false,
          imageSrc: 'https://vuetifyjs.com/static/doc-images/carousel/squirrel.jpg',
          id: 1
        },
        {
          title: 'Second ad',
          description: 'Hello, I am description',
          promo: false,
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
          promo: false,
          imageSrc: 'https://vuetifyjs.com/static/doc-images/carousel/planet.jpg',
          id: 4
        }
      ]
    }
  }
}
</script>
