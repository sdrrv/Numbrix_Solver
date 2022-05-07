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
          <v-card elevation="8">
            <v-row class="text-center my-3">
              <v-col cols="4">
                <v-btn @click="changeGridSize(-1)"> {{hello}} </v-btn>
              </v-col>
              <v-col cols="4">
                {{gridSize}}
              </v-col>
              <v-col cols="4">
                <v-btn @click="changeGridSize(+1)"> > </v-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="5"></v-col>
      </v-row>

      <v-row class="text-center my-3">
        <v-container class="board">
          <v-row v-for="row in gridSize" :key="row">
            <v-col v-for="col in gridSize" :key="col" class="ma-0 pa-0">
              <v-container class="lilBoard">
                0
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </v-row>

    </v-main>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  components: {
  },

  data() {
    return {
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
