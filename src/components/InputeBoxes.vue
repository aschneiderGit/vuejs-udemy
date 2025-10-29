<template>
  <h1>How to add Two Way binding in multiple input boxes</h1>
  <label for="Cricket"> Cricket </label>
  &nbsp;
  <input type="checkbox" value="cricket" v-model="sports" />
  <br />
  <label for="Football"> Football </label>
  &nbsp;
  <input type="checkbox" value="football" v-model="sports" />
  <br />
  <label for="Hockey"> Hockey </label>
  &nbsp;
  <input type="checkbox" value="hockey" v-model="sports" />
  <br />
  <label for="name"> Player Name :</label>
  &nbsp; &nbsp;
  <label for=""> Smith</label>
  &nbsp;
  <input
    type="radio"
    value="Smith"
    name="namePlayer"
    id="name1"
    v-model="player"
  />
  &nbsp;
  <label for=""> Finch</label>
  &nbsp;
  <input
    type="radio"
    value="Finch"
    name="namePlayer"
    id="name2"
    v-model="player"
  />
  <br />
  <h3>Selected sports: {{ sports }}</h3>
  <h3>Selected player: {{ player }}</h3>
</template>
<script>
export default {
  name: "InputBoxes",
  data() {
    return {
      sports: [],
      player: [],
    };
  },
};
</script>
