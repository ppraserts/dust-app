<template>
    <div id="station">
        <select v-model="defaultStation" v-on:change="changeStation">
          <option v-for="station in stations" v-bind:key="station.id" v-bind:value="station.id">{{ station.dustboy_name}}</option>
        </select>
        <h1><img src="../assets/gps.png" alt=""> {{ stationData.dustboy_name }}</h1>
        <div class="row" id="displaypm">
            <div class="column" id="displaynum">
                <h2>{{ stationData.value[0].pm10 }}</h2>
                <label>PM 10</label>
            </div>
            <div class="column" id="displaytext">
                <h2>{{ stationData.value[0].pm25 }}</h2>
                <label>PM 2.5</label>
            </div>
        </div>
        <div class="row2">
            <div class="column2"><img src="../assets/cloud.png" alt=""> <label>{{ stationData.value[0].temp }}°</label></div>
            <div class="column2"><img width="48px" src="data:image/png;base64,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" alt=""> <label>{{ stationData.value[0].humid }} %</label></div>
        </div>
        <div>
            <h3>{{ stationData.value[0].log_datetime }}</h3>
        </div>
        <gmap-map
          :center="center"
          :zoom="15"
          style="width:100%;  height: 400px;"
        >
          <gmap-marker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            @click="center=m.position"
          ></gmap-marker>
        </gmap-map>
        <br/>
    </div>
</template>
<script>
import StationApi from '@/api-services/stations.service'
export default {
  name: 'Station',
  data () {
    return {
      stations: [],
      stationData: {},
      defaultStation: '9',
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      places: [],
      currentPlace: null
    }
  },
  created () {
    this.getAllStation()
    this.getStationById()
  },
  methods: {
    getAllStation: function () {
      StationApi.getAll().then((response) => {
        this.stations = response.data
      })
    },
    getStationById: function (id = 9, type = 'avghr') {
      StationApi.get(id, type).then((response) => {
        this.stationData = response.data[0]
        this.center = {
          lat: parseFloat(this.stationData.dustboy_lat),
          lng: parseFloat(this.stationData.dustboy_lon)
        }
        this.markers.push({ position: this.center })
      })
    },
    changeStation: function (event) {
      this.getStationById(event.target.value)
    }
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Kanit');
* {
  box-sizing: border-box;
  font-family: 'Kanit', sans-serif;
}
#station{
    padding-left: 25px;
    padding-right: 25px;
    font-family: 'Kanit', sans-serif;
}
h2{
    font-size: 2.5em;
    font-weight: bold;
    font-family: 'Kanit', sans-serif;
}
label {
    font-weight: bold;
    font-family: 'Kanit', sans-serif;
}
.column {
  float: left;
  width: 50%;
  padding: 10px;
  background-color: #ddd;
  line-height: 0.2;
  padding-bottom: 25px;
  font-family: 'Kanit', sans-serif;
}
.row:after {
  content: "";
  display: table;
  clear: both;
  background-color: #ddd;
  font-family: 'Kanit', sans-serif;
}
.column2 {
  float: left;
  width: 50%;
  padding: 10px;
  font-family: 'Kanit', sans-serif;
}
.row2:after {
  content: "";
  display: table;
  clear: both;
  font-family: 'Kanit', sans-serif;
}
select{
  width: 100%;
  font-family: 'Kanit', sans-serif;
  font-size: 1.5em;
  cursor: pointer;
}
</style>
