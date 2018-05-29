<template>
<v-container>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <h1 class="test--secondary mb-3">Create new ad</h1>
      <v-form ref="form" v-model="valid" validation>
        <v-text-field name="title" label="Ad title" type="text" class="mb-3" v-model="title" :rules="[v => !!v || 'Titile is required']" required></v-text-field>
        <v-text-field name="description" label="Ad description" type="test" multi-line v-model="description" :rules="[v => !!v || 'Description is required']" required></v-text-field>
      </v-form>
      <v-layout>
        <v-flex xs12>
          <v-btn class="warning mb-3">
            Upload
            <v-icon right dark>cloud_upload</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex xs12>
          <img src="https://vuetifyjs.com/static/doc-images/carousel/sky.jpg" height="140px">
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex xs12>
          <v-switch label="Add to promo ?" class="mt-3" color="primary" v-model="promo"></v-switch>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex xs12>
          <v-spacer></v-spacer>
          <v-btn class="success" @click="createAd" :disabled="!valid">Create ad</v-btn>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      title: '',
      description: '',
      promo: false
    }
  },
  methods: {
    createAd() {
      if (this.$refs.form.validate()) {
        const ad = {
          title: this.title,
          description: this.description,
          promo: this.promo
        }

        console.log(ad)
      }
    }
  }
}
</script>
