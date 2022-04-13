<template>
  <div class="card">
    <div class="card__header">
      <div class="card__profile">
        <n-avatar
          size="large"
          :src="`https://hacknarok-api.verybadcode.pl/api/drive/uploads/${
            meeting.imageId ?? meeting.author.avatarId
          }`"
        />
        <n-p class="card__name">{{ meeting.author.firstName }}</n-p>
        <div class="card__stars">
          <div class="card__icon" v-for="star in stars">
            <img src="@/assets/images/icons/star.svg" alt="star" />
          </div>
          <div class="card__icon" v-for="star in emptyStars">
            <img src="@/assets/images/icons/star_outline.svg" alt="star" />
          </div>
        </div>
        <div class="card__distance">
          {{ getDistance() }} kilometry od Ciebie
        </div>
      </div>
      <div class="card__highlighted">
        <div class="card__icon">
          <img src="@/assets/images/icons/star.svg" alt="star" />
        </div>
        <n-p class="card__text">Wyróżnione</n-p>
      </div>
    </div>
    <div class="card__body">
      <div class="card__headline">
        <n-h3>{{ meeting.eventName ?? meeting.category?.name ?? '---' }}</n-h3>
        <div class="pin">
          <img :src="getImageSrc()" class="card__badge" alt="running" />
        </div>
      </div>
      <n-p class="card__description">{{ meeting.description }}</n-p>
    </div>
    <div class="card__footer">
      <div class="people-counter">
        <img
          class="people-counter__icon"
          src="@/assets/images/icons/person.svg"
          alt="Users account"
        />
        <n-p class="people-counter__number"
          >{{ meeting.maxUsers - meeting.userLeft }}/{{ meeting.maxUsers }}</n-p
        >
      </div>
      <router-link :to="`/dashboard/details/${meeting.id}`">
        <n-button type="primary">Dołącz</n-button>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, PropType, ref } from 'vue';
import { NAvatar, NButton, NH3, NP } from 'naive-ui';
import { Coords, Meeting } from '@/types';

export default defineComponent({
  components: {
    NP,
    NH3,
    NAvatar,
    NButton,
  },
  props: {
    meeting: {
      type: Object as PropType<Meeting>,
      required: true,
    },
  },
  setup(props) {
    const coords = ref<Coords>({
      lng: 0,
      lat: 0,
    });

    const MAX_STARS = 5;

    const stars = ref(props.meeting.author.rate);

    const emptyStars = ref(MAX_STARS - stars.value);

    const getImageSrc = () => {
      return `https://hacknarok-api.verybadcode.pl/api/drive/uploads/${props.meeting.category?.imageId}`;
    };

    const getDistance = () => {
      const R = 6371; // Radius of the earth in km
      const dLat = ((coords.value.lat - props.meeting.lat) * Math.PI) / 180; // deg2rad below
      const dLon = ((coords.value.lng - props.meeting.lng) * Math.PI) / 180;
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos((props.meeting.lat * Math.PI) / 180) *
          Math.cos((coords.value.lat * Math.PI) / 180) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      // Distance in km
      const distance = R * c;
      return distance.toFixed(1);
    };

    const getLocation = (): Coords | null => {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const crds = pos.coords;
          coords.value = {
            lat: crds.latitude,
            lng: crds.longitude,
          };
        },
        (err) => {
          console.log(err);
        },
      );
      return null;
    };

    onBeforeMount(() => getLocation());

    return { coords, getDistance, getImageSrc, stars, emptyStars };
  },
});
</script>

<style lang="scss" src="./DCard.scss" scoped />
