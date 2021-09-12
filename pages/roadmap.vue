<template>
  <v-row>
    <v-col class="text-center">
      <template>
        <v-card
          class="mx-auto"
          max-width="500"
          tile
        >
          <v-card-title class="headline">
            Road Map
          </v-card-title>
          <v-card-text>
            Upcoming additions and updates for the site
          </v-card-text>
          <v-list rounded>
            <!-- <v-subheader>REPORTS</v-subheader> -->
            <v-list-item-group
              v-model="selectedItem"
              color="primary"
            >
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
              >
                <v-list-item-icon>
                  <v-icon v-text="item.icon" />
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="item.text" />
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </template>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      selectedItem: 0,
      items: [
        { text: 'More mobile optimizations', icon: 'mdi-clock' },
        { text: 'Improve UI/UX for combo download', icon: 'mdi-account' },
        { text: 'Add ability to input combos by typing', icon: 'mdi-flag' },
        { text: 'Add various input icon and color options', icon: 'mdi-flag' },
        { text: 'Website style overhaul to fit Tekken themes', icon: 'mdi-flag' },
        { text: 'Add ability to include meta info (damage, subtitle, etc)', icon: 'mdi-flag' },
        { text: 'Key characer info on sidebar', icon: 'mdi-flag' },
        { text: 'All character and stance icons in combo maker', icon: 'mdi-flag' },
        { text: 'Various character and game info pages', icon: 'mdi-flag' }
      ]
    }
  }
}
</script>
