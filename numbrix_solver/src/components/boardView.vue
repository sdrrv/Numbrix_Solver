<template>

  <div class = "board">
    <div class="box">X</div>
    <div class="box">O</div>
    <div class="box">O</div>
    <div class="box">O</div>
    <div class="box">X</div>
    <div class="box">O</div>
    <div class="box">O</div>
    <div class="box">X</div>
    <div class="box">X</div>
  </div>

</template>

<script>
export default {
  name: "boardView"
}
</script>




<style scoped>
.board{
  width: 900px;
  height: 550px;
  margin: 0 auto;
  background-color: #555555;
  color: #fff;
  border: 6px solid #404040;
  border-radius: 10px;
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
}

.box
{
  border: 6px solid #404040;
  font-family: Helvetica,serif;
  font-weight: bold;
  font-size: 4em;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>