<template>
  <v-app style="background-color: dimgray">
    <v-main>
      <v-row class="text-center my-3">
        <v-col cols="12">
          <h1 style="font-family: Roboto,serif" >Numbrix Solver</h1>
        </v-col>
      </v-row>

      <v-row class="text-center my-3">
        <v-col cols="5"></v-col>
        <v-col cols="2">
          <v-container elevation="8">
            <v-row class="text-center my-3">
              <v-col cols="5">
                <v-btn @click="changeGridSize(-1)"> {{hello}} </v-btn>
              </v-col>
              <v-col cols="2">
                <h3>{{gridSize}}</h3>
              </v-col>
              <v-col cols="5">
                <v-btn @click="changeGridSize(+1)"> > </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col cols="5"></v-col>
      </v-row>

      <v-row class="text-center my-3">
        <v-container class="board">
          <v-row v-for="row in gridSize" :key="row">
            <v-col v-for="col in gridSize" :key="col" class="ma-0 pa-0">
              <v-container class="lilBoard" @click="setPosclicked(row, col)">
                0
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </v-row>

    </v-main>

    <v-dialog hide-overlay transition="dialog-bottom-transition"  v-model="dialog">
      <v-card>
        <v-card-text>
          Row: {{this.posClicked.row}}
          Col: {{this.posClicked.col}}
        </v-card-text>
        <v-text-field></v-text-field>
      </v-card>
    </v-dialog>

  </v-app>
</template>

<script>


export default {
  name: 'App',

  components: {
  },

  data() {
    return {
      posClicked: {row:0, col: 0},
      dialog: false,
      gridSize : 3,
      hello : "<"
    }
  },

  methods : {
    changeGridSize(amount){
      this.gridSize += amount
      if (this.gridSize < 2)
        this.gridSize = 2
      if (this.gridSize > 12)
        this.gridSize = 12
    },
    setPosclicked(row, col){
      this.dialog = true;
      this.posClicked.col = col;
      this.posClicked.row = row;
    }
  }
};
</script>

<style>
  .board {
    border: 6px solid black;
    border-radius: 10px;
  }
  .lilBoard {
    border: 1px solid black;
  }
</style>
