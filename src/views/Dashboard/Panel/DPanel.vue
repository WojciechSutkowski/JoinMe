<template>
  <div class="dashboard">
    <d-filter> </d-filter>
    <div class="dashboard__wrapper">
      <div class="dashboard__cards">
        <d-card v-for="meeting in meetings" :meeting="meeting"></d-card>
      </div>
      <div class="dashboard__map">
        <l-map
          ref="map"
          :zoom="11"
          :max-zoom="map.maxZoom"
          :center="map.center"
        >
          <l-tile-layer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          ></l-tile-layer>
          <l-control-layers />
          <l-marker
            v-for="(marker, index) in meetings"
            :key="'marker-' + index"
            v-model:lat-lng="meetings[index]"
            :icon="getIcon(marker)"
          >
            <l-popup>
              <d-card :meeting="marker"></d-card>
            </l-popup>
          </l-marker>
        </l-map>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onBeforeMount, ref } from 'vue';
import 'leaflet/dist/leaflet.css';
// @ts-ignore
// eslint-disable-next-line
// const {
//   LMap,
//   LTileLayer,
//   LMarker,
//   LPopup,
//   LControlLayers,
// } = require('@vue-leaflet');
import {
  LControlLayers,
  LMap,
  LMarker,
  LPopup,
  LTileLayer,
  // @ts-ignore
} from '@vue-leaflet/vue-leaflet';
import { icon } from 'leaflet';
import MeetingService from '@/service/meeting/meeting.service';
import { Meeting } from '@/types';
import DCard from '@/components/DCard/DCard.vue';
import DFilter from '@/components/DFilter/DFilter.vue';
import {
  NButton,
  NCheckbox,
  NForm,
  NFormItem,
  NH1,
  NH2,
  NInput,
  NP,
} from 'naive-ui';

export default defineComponent({
  name: 'EditBusStopConnectionView',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LControlLayers,
    DCard,
    DFilter,
  },
  setup() {
    const meetings = ref<Meeting[]>([]);
    const isLoading = ref(false);

    const map = ref({
      zoom: 16,
      maxZoom: 19,
      center: [50.01253, 20.99302],
    });

    const getIcon = (meeting: Meeting) => {
      if (meeting.category) {
        return icon({
          iconUrl: `https://hacknarok-api.verybadcode.pl/api/drive/uploads/${meeting.category.imageId}`,
          iconSize: [40, 40],
        });
      }
      return '';
    };

    const fetchData = () => {
      MeetingService.getAllEvents().then((response) => {
        meetings.value = response.data;
      });
    };

    onBeforeMount(() => {
      fetchData();
    });

    return {
      getIcon,
      map,
      meetings,
    };
  },
});
</script>

<style lang="scss" src="./DPanel.scss" />
