<template>
    <v-container>
      <v-layout row>
        <v-flex xs12>

          <v-card v-if="!loading">
            <v-card-media height="300px" :src="ad.imageSrc">
            </v-card-media>
            <v-card-text>
              <h1 class="text--primary">{{ ad.title }}</h1>
              <p>{{ ad.description }}</p>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <EditAdModal :ad="ad"></EditAdModal>
              <v-btn class="success">Buy</v-btn>
            </v-card-actions>
          </v-card>

          <div v-else >
            <v-container>
              <v-layout row>
                <v-flex xs12 class="text-xs-center pt-5">
                  <v-progress-circular
                    :size="120"
                    indeterminate
                    color="primary"
                  ></v-progress-circular>
                </v-flex>
              </v-layout>
            </v-container>
          </div>
          
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>

import EditAdModal from './EditAdModal'

export default {
  props: ['id'],
  computed: {
    ad() {
      const id = this.id

      return this.$store.getters.adById(id)
    },
    loading() {
      return this.$store.getters.loading
    }
  },
  components: {
    EditAdModal: EditAdModal
  }

}

</script>
