<template>
  <div class="main">
    <h3>Submit a Location</h3>
    <input class="name" v-model="name" placeholder="Bar Name" />
    <input class="address" v-model="address" placeholder="Bar Address" />
    <input class="phone" v-model="phone" placeholder="Bar Phone" />
    <input class="tags" v-model="tags" placeholder="Bar Tags" />
    <input class="imageURL" v-model="imageURL" placeholder="Bar image URL" />
    <input class="notes" placeholder="General Notes"/>
    <input class="hours" placeholder="Hours of Operation"/>
    <button class="submitBar" v-on:click="submitBar()">Submit</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Submit',
  data () {
    return {
      name: '',
      address: '',
      phone: '',
      tags: '',
      imageURL: '',
      notes: '',
      hours: ''
    }
  },
  methods: {
    submitBar () {
      let vue = this
      axios.post('https://api.cougarville.net/bars', {
        name: vue.name,
        address: vue.address,
        phone: vue.phone,
        tags: vue.tags,
        imageURL: vue.imageURL,
        notes: vue.notes,
        hours: vue.hours
      })
        .then(response => {
          console.log(response.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped lang="less">
  .main {
    margin-top: 40px;
    display: grid;
    grid-template-rows: repeat(13, 40px);
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  h3 {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 1;
  }

  .name {
    margin-right: 10px;
    margin-left: 10px;
    margin-bottom: 10px;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row: 3;
  }

  .address {
    margin-bottom: 10px;
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row: 3;
  }

  .phone {
    margin-right: 10px;
    margin-left: 10px;
    margin-bottom: 10px;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row: 4;
  }

  .tags {
    margin-bottom: 10px;
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row: 4;
  }

  .imageURL {
    margin-right: 10px;
    margin-left: 10px;
    margin-bottom: 10px;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row: 5;
  }

  .notes {
    margin-bottom: 10px;
    margin-left: 10px;
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 7;
    grid-row-end: 9;
  }

  .hours {
    margin-bottom: 10px;
    margin-left: 10px;
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 10;
    grid-row-end: 12;
  }

  .submitBar {
    margin-left: 10px;
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row: 13;
  }
</style>
