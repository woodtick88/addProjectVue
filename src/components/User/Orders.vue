<template>
    <v-container>
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-list two-line subheader>
            <h1 class="text--secondary mb-3 ml-3 pt-3">Orders</h1>
            <v-list-tile avatar v-for="order in orders" :key="order.id">
              <v-list-tile-action>
                <v-checkbox
                  color="success"
                  @change="markDone(order)"                   
                  :input-value="order.done"
                ></v-checkbox>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ order.name }}</v-list-tile-title>
                <v-list-tile-sub-title>{{ order.phone }}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn class="primary" :to="'/ad/' + order.adId">Open</v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
export default {
  data() {
    return {
      orders: [{
        id: 'order-1',
        name: "item-10",
        phone: '7-888-888-88-88',
        adId: '10',
        done: false
      }]
    }
  },
  methods: {
    markDone(order) {
      order.done = !order.done
    }
  }

}
</script>
