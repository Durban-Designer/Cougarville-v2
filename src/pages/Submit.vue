<template>
  <div class="main">
    <h1>Submit a Location</h1>
    <input v-model="name" placeholder="Bar Name" />
    <input v-model="address" placeholder="Bar Address" />
    <input v-model="phone" placeholder="Bar Phone" />
    <input v-model="tags" placeholder="Bar Tags" />
    <input v-model="imageURL" placeholder="Bar image URL" />
    <input v-model="imageMapURL" placeholder="Bar Map Image URL" />
    <div class="metaPane">
      <input v-model="meta.maleAverageAge" placeholder="Male Average Age" />
      <input v-model="meta.femaleAverageAge" placeholder="Female Average Age" />
    </div>
    <div class="hoursPane">
      <div class="monday">
        <div>Monday</div>
        <input v-model="hours.monday.open" placeholder="Open" />
        <input v-model="hours.monday.closed" placeholder="Closed" />
      </div>
      <div class="tuesday">
        <div>Tuesday</div>
        <input v-model="hours.tuesday.open" placeholder="Open" />
        <input v-model="hours.tuesday.closed" placeholder="Closed" />
      </div>
      <div class="wednesday">
        <div>Wednesday</div>
        <input v-model="hours.wednesday.open" placeholder="Open" />
        <input v-model="hours.wednesday.closed" placeholder="Closed" />
      </div>
      <div class="thursday">
        <div>Thursday</div>
        <input v-model="hours.thursday.open" placeholder="Open" />
        <input v-model="hours.thursday.closed" placeholder="Closed" />
      </div>
      <div class="friday">
        <div>Friday</div>
        <input v-model="hours.friday.open" placeholder="Open" />
        <input v-model="hours.friday.closed" placeholder="Closed" />
      </div>
      <div class="saturday">
        <div>Saturday</div>
        <input v-model="hours.saturday.open" placeholder="Open" />
        <input v-model="hours.saturday.closed" placeholder="Closed" />
      </div>
      <div class="sunday">
        <div>Sunday</div>
        <input v-model="hours.sunday.open" placeholder="Open" />
        <input v-model="hours.sunday.closed" placeholder="Closed" />
      </div>
    </div>
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
      hours: {
        monday: {
          open: '',
          closed: ''
        },
        tuesday: {
          open: '',
          closed: ''
        },
        wednesday: {
          open: '',
          closed: ''
        },
        thursday: {
          open: '',
          closed: ''
        },
        friday: {
          open: '',
          closed: ''
        },
        saturday: {
          open: '',
          closed: ''
        },
        sunday: {
          open: '',
          closed: ''
        }
      },
      tags: '',
      meta: {
        maleAverageAge: '',
        femaleAverageAge: ''
      },
      imageURL: '',
      imageMapURL: ''
    }
  },
  methods: {
    submitBar () {
      let vue = this
      axios.post('https://api.cougarville.net/bars', {
        name: vue.name,
        address: vue.address,
        phone: vue.phone,
        hours: vue.hours,
        tags: vue.tags,
        meta: vue.meta,
        imageURL: vue.imageURL,
        imageMapURL: vue.imageMapURL
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
    margin-top: 120px;
  }
</style>
