<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="test--secondary mb-3">Create new ad</h1>
                <v-form ref="form" v-model="valid" validation>
                    <v-text-field
                        name="title"
                        label="Ad title"
                        type="text"
                        class="mb-3"
                        v-model="title"
                        :rules="[v => !!v || 'Titile is required']"
                        required
                    ></v-text-field>
                    <v-text-field
                        name="description"
                        label="Ad description"
                        type="test"
                        multi-line
                        v-model="description"
                        :rules="[v => !!v || 'Description is required']"
                        required
                    ></v-text-field>
                </v-form>
                <v-layout>
                    <v-flex xs12>
                        <v-btn
                            class="warning mb-3"
                            @click="triggerUpload"
                        >
                            Upload
                            <v-icon right dark>cloud_upload</v-icon>
                        </v-btn>
                        <input
                            ref="fileInput"
                            type="file"
                            style="display: none;"
                            accept="image/*"
                            @change="onFileChange"
                        >
                    </v-flex>
                </v-layout>
                <v-layout>
                    <v-flex xs12>
                        <img
                            :src="imageSrc"
                            height="140px"
                            v-if="imageSrc"
                        >
                    </v-flex>
                </v-layout>
                <v-layout>
                    <v-flex xs12>
                        <v-switch
                            label="Add to promo ?"
                            class="mt-3"
                            color="primary"
                            v-model="promo"
                        ></v-switch>
                    </v-flex>
                </v-layout>
                <v-layout>
                    <v-flex xs12>
                        <v-spacer></v-spacer>
                        <v-btn
                            class="success"
                            @click="createAd"
                            :loading="loading"
                            :disabled="!valid || !image || loading"
                        >Create ad</v-btn>
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
      promo: false,
      image: null,
      imageSrc: ''
    }
  },
  computed: {
    loading() {
        return this.$store.getters.loading
    }
  },
  methods: {
    createAd() {
      if (this.$refs.form.validate() && this.image) {
        const ad = {
          title: this.title,
          description: this.description,
          promo: this.promo,
          image: this.image
        }

        this.$store.dispatch('createAd', ad)
            .then(() => {
                this.$router.push('/list')
            })
            .catch(() => {})
        }
    },
    triggerUpload() {
        this.$refs.fileInput.click()
    },
    onFileChange(event) {
        let file = event.target.files[0]

        let reader = new FileReader()

        reader.onload = e => {
            this.imageSrc = reader.result
        }
        reader.readAsDataURL(file)
        this.image = file



    }

  }

}
</script>
