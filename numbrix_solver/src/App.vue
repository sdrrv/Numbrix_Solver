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
        <v-container class="board" :style="'max-width: '+ getBoardSize() + '%'">
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

      <v-row class="justify-center my-10">
        <v-btn @click="getData" :disabled="isLoading" :loading="isLoading" >Submit</v-btn>
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
        <v-btn @click="insertValue" >Submit value</v-btn>
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
      isLoading : false,
    }
  },

  created() {
    this.setNewMatrix(this.gridSize)
  },

  methods : {

    getBoardSize(){
      return 80
    },

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
      this.matrix = new Array(size);
      for (let i = 0; i < size; i++){
        this.matrix[i] = new Array(size)
        for (let j = 0; j < size; j++)
          this.matrix[i][j] = "0";
      }
    },

    insertValue() {
      this.matrix[this.posClicked.row - 1][this.posClicked.col - 1] = this.newPosValue;
      this.newPosValue = ''
      this.dialog = false
    },

    async getData() {
      try {
        this.isLoading = true
        const data = {"board" : this.matrix}
        console.log(this.matrix)
        const response = await this.$http.put(
            "https://numbrix-solver.herokuapp.com/solve?boardSize=" + this.gridSize, data
        );
        // JSON responses are automatically parsed.
        console.log(response)
        this.matrix = response.data
      } catch (error) {
        console.log(error);
        alert(error);
      }
      alert("IT WORKED!")
      this.isLoading = false
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
    border: 2px solid black;

  }
</style>
