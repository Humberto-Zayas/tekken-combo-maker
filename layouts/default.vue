<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
      class="navi-drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- <v-app-bar
      :src="'/background/' + currentCharacter + '.png'"
      height="200"
      prominent

      :clipped-left="clipped"
      fixed
      app
    >
      <template v-slot:img="{ props }">
        <transition name="fade">
          <v-img
            :key="currentCharacter"
            v-bind="props"
            position="center 15%"
            gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.0)"
          >
            <template v-slot:placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                />
              </v-row>
            </template>
          </v-img>
        </transition>
      </template>
      <v-app-bar-nav-icon class="align-self-end" @click.stop="drawer = !drawer" />
      <v-btn
        class="align-self-end"
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>

      <v-toolbar-title v-text="title" />
      <v-spacer />

    </v-app-bar> -->
    <v-app-bar

      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon class="align-self-end" @click.stop="drawer = !drawer" />
      <v-btn
        class="align-self-end"
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <!-- <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>mdi-application</v-icon>
      </v-btn> -->
      <!-- <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn> -->
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <!-- <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn> -->
    </v-app-bar>
    <v-main>
      <v-container class="px-5" fluid>
        <nuxt />
      </v-container>
    </v-main>
    <!-- <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <v-footer
      :absolute="!fixed"
      app
    >
      <v-col sm="11">
        <span>&copy; {{ new Date().getFullYear() }}</span>
      </v-col>
      <v-col>
        <i class="fab fa-twitter" />
      </v-col>
      <v-col>
        <i class="fab fa-paypal" />
      </v-col>
    </v-footer>
    <CookieControl>
      <template v-slot:bar>
        <h3>Cookies</h3>
        <p>This site uses Google Analytics to view bounce rate and pages viewed.</p>
      </template>
    </CookieControl>
  </v-app>
</template>

<style>
.navi-drawer .v-list {
  padding: 0;
}
</style>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-gamepad-circle',
          title: 'Make a Combo',
          to: '/'
        },
        {
          icon: 'mdi-road-variant',
          title: 'Road Map',
          to: '/roadmap'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Tekken 7 Combo Maker'
    }
  },
  computed: {
    currentCharacter () {
      return this.$store.state.character
    }
  }
}
</script>
