<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="8">
      <v-card>
        <v-row no-gutters>
          <v-col md="5" sm="12" cols="12">
            <v-card-title class="headline"> Create a combo </v-card-title>
          </v-col>
          <v-col class="d-flex align-center justify-space-around">
            <v-btn @click="clear">Clear&nbsp;&nbsp;<v-icon>mdi-delete</v-icon></v-btn>
            <v-btn @click="selected.pop()">Undo&nbsp;&nbsp;<v-icon>mdi-undo</v-icon></v-btn>
            <v-btn @click="print">Generate&nbsp;&nbsp;<v-icon>mdi-cloud-download</v-icon></v-btn>
          </v-col>
        </v-row>

        <template>
          <v-container class="grey">
            <v-row no-gutters>
              <v-col v-for="(n, index) in inputs" :key="index">
                <v-card class="grey" outlined tile>
                  <img @click="selected.push(n)" :src="n.src" />
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
                            class="grey"
                            v-model="command"
                            @change="checkCommand(command)"
                            filled
                            clearable
                            disabled
                            label="Type Commands (Ex: f*df2) – Coming soon"
                          ></v-text-field>
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

        <v-card-title class="headline">Output </v-card-title>

        <template>
          <v-container class="grey">
            Combo Preview
            <div ref="printMe" id="combo-row">
              
              <img
                v-for="(item, index) in selected"
                :key="index"
                :src="item.src"
              />
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
              <img ref="output" style="width: 100%" :src="output" />
            </div>

          </v-container>
        </template>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      command: "",
    //   description: "California is a state in the western United States",
    //   rules: [(v) => v.length <= 25 || "Max 25 characters"],
      output: '',
      selected: [],
      inputs: [
        {
          src: "/inputs/tek_arrow_b.svg",
          name: "back",
          command: "b"
        },
        {
          src: "/inputs/tek_arrow_db.svg",
          name: "down back",
          command: "db"
        },
        {
          src: "/inputs/tek_arrow_d.svg",
          name: "down",
          command: "d"
        },
        {
          src: "/inputs/tek_arrow_df.svg",
          name: "down forward",
          command: "df"
        },
        {
          src: "/inputs/tek_arrow_f.svg",
          name: "forward",
          command: "f"
        },
        {
          src: "/inputs/tek_arrow_uf.svg",
          name: "up forward",
          command: "uf"
        },
        {
          src: "/inputs/tek_arrow_u.svg",
          name: "up",
          command: "u"
        },
        {
          src: "/inputs/tek_arrow_ub.svg",
          name: "up back",
          command: "ub"
        },
        {
          src: "/inputs/tek_sep_grn.svg",
          name: "separator",
          command: ","
        },
        {
          src: "/inputs/tek_arrow_n.svg",
          name: "neutral",
          command: "*"
        },
        {
          src: "/inputs/tek_button_1.svg",
          name: "1",
          command: "1"
        },
        {
          src: "/inputs/tek_button_2.svg",
          name: "2",
          command: "2"
        },
        {
          src: "/inputs/tek_button_3.svg",
          name: "3",
          command: "3"
        },
        {
          src: "/inputs/tek_button_4.svg",
          name: "4",
          command: "4"
        },
        {
          src: "/inputs/tek_button_12.svg",
          name: "12",
          command: "1+2"
        },
        {
          src: "/inputs/tek_button_13.svg",
          name: "13",
          command: "1+3"
        },
        {
          src: "/inputs/tek_button_14.svg",
          name: "14",
          command: "1+4"
        },
        {
          src: "/inputs/tek_button_23.svg",
          name: "23",
          command: "2+3"
        },
        {
          src: "/inputs/tek_button_24.svg",
          name: "24",
          command: "2+4"
        },
        {
          src: "/inputs/tek_button_34.svg",
          name: "34",
          command: "3+4"
        },
      ],
    };
  },
  methods: {
    checkCommand(command) {
        
        let inputs = this.inputs
        let selected = this.selected

        inputs.filter(function(i) {
           if(i.command == command) {
               selected.push(i)
           }
        })
    },
    async print() {
      const el = this.$refs.printMe;
      // add option type to get the image version
      // if not provided the promise will return
      // the canvas.
      const options = {
        type: "dataURL",
        backgroundColor: null,
        scale: 20,
      };
      this.output = await this.$html2canvas(el, options);
    },
    async clear() {
      const el = this.$refs.output;
      this.selected = [];
      this.command = '';

      el.src = "";
    },
  },
  head() {
    return {
      script: [
        {
          src: "https://html2canvas.hertzen.com/dist/html2canvas.min.js",
        },
      ],
    };
  },
};
</script>

