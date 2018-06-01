<template>
<v-app>
  <v-navigation-drawer app temporary v-model="drawer">

    <v-list>
      <v-list-tile v-for="link in links" :key="link.title" :to="link.url">
        <v-list-tile-action>
          <v-icon>{{ link.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title v-text="link.title"></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>


  </v-navigation-drawer>

  <v-toolbar app dark color="primary">

    <v-toolbar-side-icon @click="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
    <v-toolbar-title>
      <router-link to="/" tag="span" class="pointer">Ad application</router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn v-for="link in links" :key="link.title" :to="link.url" flat>
        <v-icon left>{{ link.icon }}</v-icon>
        {{ link.title }}
      </v-btn>
    </v-toolbar-items>

  </v-toolbar>

  <v-content>
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </v-content>

  <template v-if="error">
      <v-snackbar
        :timeout="5000"
        :multi-line="true"
        color="error"
        @input="closeError"
        :value="true"
      >
        {{ error.message || error }}
        <v-spacer></v-spacer>
        <v-btn flat color="indigo" @click.native="closeError">Close</v-btn>
      </v-snackbar>
  </template>

  <v-footer app></v-footer>
</v-app>
</template>

<script>
export default {
  data() {
        return {
          links: [{
              title: 'Login',
              icon: 'lock',
              url: '/login'
            },
            {
              title: 'Registration',
              icon: 'face',
              url: '/registration'
            },
            {
              title: 'Orders',
              icon: 'bookmark_border',
              url: '/orders'
            },
            {
              title: 'New ad',
              icon: 'note_add',
              url: '/new'
            },
            {
              title: 'My ads',
              icon: 'list',
              url: '/list'
            }
          ],
          drawer: false
        }
    },
    computed: {
        error() {
            return this.$store.getters.error
        }
    },
    methods: {
        closeError() {
            this.$store.dispatch('clearError')
        }
    }

}
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>
