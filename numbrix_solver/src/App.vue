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
              <v-container
                  class="lilBoard"
                  :style="matrix[row - 1][col - 1] !== '0' ? 'background-color: darkgrey' : 'background-color: dimgrey'"
                  @click="setPosclicked(row, col)">
                {{matrix[row - 1][col - 1]}}
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </v-row>

    </v-main>

    <v-dialog hide-overlay transition="dialog-bottom-transition" v-model="dialog">
      <v-card>
        <v-card-text>
          Row: {{this.posClicked.row}}
          Col: {{this.posClicked.col}}
        </v-card-text>
        <v-text-field v-model="newPosValue"></v-text-field>
        <h1>{{newPosValue}}</h1>
        <v-btn @click="insertValue">Submit value</v-btn>
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
      hello : "<",
      newPosValue : '',
      matrix : [],
    }
  },

  created() {
    this.setNewMatrix(this.gridSize)
  },

  methods : {
    changeGridSize(amount){
      this.gridSize += amount
      if (this.gridSize < 2)
        this.gridSize = 2
      if (this.gridSize > 12)
        this.gridSize = 12
      this.setNewMatrix(this.gridSize)
    },

    setPosclicked(row, col){
      this.dialog = true;
      this.posClicked.col = col;
      this.posClicked.row = row;
    },

    setNewMatrix(size) {
      console.log(this.matrix)
      console.log(size)
      this.matrix = new Array(size);
      console.log(this.matrix)
      for (let i = 0; i < size; i++){
        this.matrix[i] = new Array(size)
        for (let j = 0; j < size; j++)
          this.matrix[i][j] = "0";
      }
      console.log(this.matrix)
    },

    insertValue() {
      this.matrix[this.posClicked.row - 1][this.posClicked.col - 1] = this.newPosValue;
      this.newPosValue = ''
      this.dialog = false
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
