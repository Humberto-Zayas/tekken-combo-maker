<template>
  <v-row justify="center" align="center">
    <v-col cols="12" md="10" lg="8">
      <v-card>
        <v-card-title class="headline">
          Create a combo
        </v-card-title>
        <v-row no-gutters>
          <!-- <v-col md="5" sm="12" cols="12">
            <v-card-title class="headline"> Create a combo </v-card-title>
          </v-col> -->
          <v-col lg="5" md="5" sm="4" cols="12" style="padding: 10px 20px">
            <v-select
              v-model="value"
              :items="items"
              attach
              chips
              label="Characters"
              @change="updateBackground(value)"
            />
          </v-col>
          <v-col
            lg="7"
            md="7"
            sm="8"
            cols="12"
            style="padding: 10px"
            class="d-flex align-center justify-space-around"
          >
            <v-btn @click="clear">
              <span class="d-none d-sm-flex">Clear&nbsp;&nbsp;</span><v-icon>mdi-delete</v-icon>
            </v-btn>
            <v-btn @click="selected.pop()">
              <span class="d-none d-sm-flex">Undo&nbsp;&nbsp;</span><v-icon>mdi-undo</v-icon>
            </v-btn>
            <v-btn @click="print">
              <span class="d-none d-sm-flex">Generate&nbsp;&nbsp;</span><v-icon>mdi-cloud-download</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <!-- <v-row style="padding: 0em 1em">

          <v-col offset-sm="6" sm="6">
            <v-select
              v-model="value"
              :items="items"
              attach
              chips
              label="Characters"
              multiple
          ></v-select>
          </v-col>
        </v-row> -->

        <template>
          <v-container class="grey">
            <v-row class="command-row" no-gutters>
              <v-col v-for="(n, index) in inputs" :key="n.src">
                <v-card class="grey" outlined tile>
                  <img :src="n.src" @click="selected.push(n)">
                </v-card>
              </v-col>
              <v-col v-for="j in josie" v-if="value.includes('Josie')" :key="j.src">
                <v-card class="grey" outlined tile>
                  <img :src="j.src" @click="selected.push(j)">
                </v-card>
              </v-col>
              <v-col v-for="l in luckychloe" v-if="value.includes('Lucky Chloe')" :key="l.src">
                <v-card class="grey" outlined tile>
                  <img :src="l.src" @click="selected.push(l)">
                </v-card>
              </v-col>
              <v-col v-for="(z, index) in zafina" v-if="value.includes('Zafina')" :key="z.src">
                <v-card class="grey" outlined tile>
                  <img :src="z.src" @click="selected.push(z)">
                </v-card>
              </v-col>
              <v-col v-for="(z, index) in akuma" v-if="value.includes('Akuma')" :key="z.src">
                <v-card class="grey" outlined tile>
                  <img :src="z.src" @click="selected.push(z)">
                </v-card>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col>
                <template>
                  <v-form>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="12">
                          <v-text-field
                            v-model="command"
                            class="grey"
                            filled
                            clearable
                            disabled
                            label="Type Commands (Ex: f*df2) – Coming soon"
                            @change="checkCommand(command)"
                          />
                        </v-col>
                      </v-row>
                      <!-- <v-row>
                          {{command}}
                      </v-row> -->
                    </v-container>
                  </v-form>
                </template>
              </v-col>
            </v-row>
          </v-container>
        </template>

        <v-card-title class="headline">
          Output
        </v-card-title>

        <template>
          <v-container class="grey">
            Combo Preview
            <div id="combo-row">
              <span ref="printMe" style="display: inline-block" class="combo-container">
                <img
                  v-for="(item, index) in selected"
                  :key="index"
                  style="margin-right: 2px;"
                  :src="item.src"
                >
              </span>
            </div>
          </v-container>
        </template>
        <template>
          <v-container class="grey darken-1">
            <!-- SOURCE -->
            <!-- <div  style="padding: 10px; background: #f5da55">
                <h1 style="color: #000; ">Print me!</h1>
                </div> -->
            <!-- OUTPUT -->
            <div>
              Combo Download
              <img ref="output" style="max-width: 100%" :src="output">
            </div>
          </v-container>
        </template>
      </v-card>
    </v-col>
  </v-row>
</template>

<style>

.command-row .col {
  flex-grow: 0;
}

.command-row img {
  height: 30px;
}

.combo-container img {
  height: 30px;
}

/* #combo-row {
  overflow: scroll;
}

.combo-container { width: 3000px !important; display: block } */
</style>

<script>
export default {
  data () {
    return {
      value: '',
      show: false,
      items: ['Josie', 'Lucky Chloe', 'Zafina', 'Akuma'],
      command: '',
      //   description: "California is a state in the western United States",
      //   rules: [(v) => v.length <= 25 || "Max 25 characters"],
      output: '',
      selected: [],
      inputs: [
        {
          src: '/inputs/tek_arrow_b.svg',
          name: 'back',
          command: 'b'
        },
        {
          src: '/inputs/tek_arrow_db.svg',
          name: 'down back',
          command: 'db'
        },
        {
          src: '/inputs/tek_arrow_d.svg',
          name: 'down',
          command: 'd'
        },
        {
          src: '/inputs/tek_arrow_df.svg',
          name: 'down forward',
          command: 'df'
        },
        {
          src: '/inputs/tek_arrow_f.svg',
          name: 'forward',
          command: 'f'
        },
        {
          src: '/inputs/tek_arrow_uf.svg',
          name: 'up forward',
          command: 'uf'
        },
        {
          src: '/inputs/tek_arrow_u.svg',
          name: 'up',
          command: 'u'
        },
        {
          src: '/inputs/tek_arrow_ub.svg',
          name: 'up back',
          command: 'ub'
        },
        {
          src: '/inputs/tek_arrow_hb.svg',
          name: 'hold back',
          command: 'B'
        },
        {
          src: '/inputs/tek_arrow_hdb.svg',
          name: 'hold down back',
          command: 'DB'
        },
        {
          src: '/inputs/tek_arrow_hd.svg',
          name: 'hold down',
          command: 'D'
        },
        {
          src: '/inputs/tek_arrow_hdf.svg',
          name: 'hold down forward',
          command: 'DF'
        },
        {
          src: '/inputs/tek_arrow_hf.svg',
          name: 'hold forward',
          command: 'F'
        },
        {
          src: '/inputs/tek_arrow_huf.svg',
          name: 'hold up forward',
          command: 'UF'
        },
        {
          src: '/inputs/tek_arrow_hu.svg',
          name: 'hold up',
          command: 'U'
        },
        {
          src: '/inputs/tek_arrow_hub.svg',
          name: 'hold up back',
          command: 'UB'
        },
        {
          src: '/inputs/tek_sep_grn.svg',
          name: 'separator',
          command: ','
        },
        {
          src: '/inputs/tek_arrow_n.svg',
          name: 'neutral',
          command: '*'
        },
        {
          src: '/inputs/dash.svg',
          name: 'dash',
          command: 'Dash'
        },
        {
          src: '/inputs/ws.svg',
          name: 'while standing',
          command: 'WS'
        },
        {
          src: '/inputs/fc.svg',
          name: 'full crouch',
          command: 'FC'
        },
        {
          src: '/inputs/ss.svg',
          name: 'Side Step',
          command: 'ss'
        },
        {
          src: '/inputs/wr.svg',
          name: 'While Running',
          command: 'WR'
        },
        {
          src: '/inputs/tek_button_1.svg',
          name: '1',
          command: '1'
        },
        {
          src: '/inputs/tek_button_2.svg',
          name: '2',
          command: '2'
        },
        {
          src: '/inputs/tek_button_3.svg',
          name: '3',
          command: '3'
        },
        {
          src: '/inputs/tek_button_4.svg',
          name: '4',
          command: '4'
        },
        {
          src: '/inputs/tek_button_12.svg',
          name: '12',
          command: '1+2'
        },
        {
          src: '/inputs/tek_button_13.svg',
          name: '13',
          command: '1+3'
        },
        {
          src: '/inputs/tek_button_14.svg',
          name: '14',
          command: '1+4'
        },
        {
          src: '/inputs/tek_button_23.svg',
          name: '23',
          command: '2+3'
        },
        {
          src: '/inputs/tek_button_24.svg',
          name: '24',
          command: '2+4'
        },
        {
          src: '/inputs/tek_button_34.svg',
          name: '34',
          command: '3+4'
        },
        {
          src: '/inputs/tek_immediately-after.svg',
          name: 'immediately after',
          command: '~'
        },
        {
          src: '/inputs/just-frame.svg',
          name: 'Just Frame',
          command: ':'
        },
        {
          src: '/inputs/tail-spin-fr.svg',
          name: 'tail spin',
          command: 'tail spin'
        },
        {
          src: '/inputs/tek_backturn-01.svg',
          name: 'back turn',
          command: 'back turn'
        },
        {
          src: '/inputs/ch.svg',
          name: 'full crouch',
          command: 'FC'
        },
        {
          src: '/inputs/wallsplat.svg',
          name: 'Wall Splat',
          command: 'wall splat'
        },
        {
          src: '/inputs/wallbreak.svg',
          name: 'Wall Break',
          command: 'wall break'
        },
        {
          src: '/inputs/floorbreak.svg',
          name: 'Floor Break',
          command: 'floor break'
        }
      ],
      josie: [
        {
          src: '/inputs/switchstance.svg',
          name: 'Switch Stance',
          command: 'SWS',
          character: 'Josie'
        }
      ],
      luckychloe: [
        {
          src: '/inputs/during-ltwst.svg',
          name: 'Left Twist',
          command: 'Left Twist',
          character: 'Lucky Chloe'
        },
        {
          src: '/inputs/during-rtwst.svg',
          name: 'Right Twist',
          command: 'Right Twist',
          character: 'Lucky Chloe'
        }
      ],
      zafina: [
        {
          src: '/inputs/scarecrow.svg',
          name: 'Scarecrow',
          command: 'scarecrow',
          character: 'Zafina'
        },
        {
          src: '/inputs/mantis.svg',
          name: 'Mantis',
          command: 'Mantis',
          character: 'Zafina'
        },
        {
          src: '/inputs/tarantula.svg',
          name: 'Tarantula',
          command: 'trt',
          character: 'Zafina'
        }
      ],
      akuma: [
        {
          src: '/inputs/ex.svg',
          name: 'EX',
          command: 'EX',
          character: 'Akuma'
        }
      ]
    }
  },
  methods: {
    updateBackground (value) {
      this.$store.commit('CHANGE_APP_BAR_BACKGROUND', value)
    },
    checkCommand (command) {
      const inputs = this.inputs
      const selected = this.selected

      inputs.filter(function (i) {
        if (i.command == command) {
          selected.push(i)
        }
      })
    },
    async print () {
      const el = this.$refs.printMe
      // add option type to get the image version
      // if not provided the promise will return
      // the canvas.
      const options = {
        type: 'dataURL',
        backgroundColor: null,
        scale: 20
      }
      this.output = await this.$html2canvas(el, options)
    },
    async clear () {
      const el = this.$refs.output
      this.selected = []
      this.command = ''

      el.src = ''
    }
  },
  head () {
    return {
      script: [
        {
          src: 'https://html2canvas.hertzen.com/dist/html2canvas.min.js'
        }
      ]
    }
  }
}
</script>
