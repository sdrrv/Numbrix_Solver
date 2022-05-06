<template>
  <v-app style="background-color: dimgray">
    <v-main>
      <v-row class="text-center my-2">
        <v-col cols="12">
          <h1 class="white--text" style="font-family: 'Roboto', sans-serif ">Numbrix Solver</h1>
        </v-col>
        <v-col>
          <board-view/>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>

import boardView from "@/components/boardView";

export default {
  name: 'App',

  components: {
    boardView
  },

  data: () => ({
    //
  }),
};
</script>
