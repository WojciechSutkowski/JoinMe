<template>
  <div class="details container">
    <div class="details__head">
      <div class="details__header">
        <img
          :src="`https://hacknarok-api.verybadcode.pl/api/drive/uploads/${eventDetails?.backgroundId}`"
          alt="header"
        />
      </div>
      <div v-if="!joined" class="details__join">
        <n-h1
          >{{ eventDetails?.eventName ?? eventDetails?.category.name }}
        </n-h1>
        <n-button type="primary" @click="joinEvent"> Dołącz teraz</n-button>
      </div>
      <div v-if="joined" class="details__leave">
        <n-h1
          >{{ eventDetails?.eventName ?? eventDetails?.category.name }}
        </n-h1>
        <n-button type="primary"> Zrezygnuj z wypadu</n-button>
      </div>
      <div class="details__desc">
        <n-p> {{ eventDetails?.description }}</n-p>
      </div>
      <div class="details__more">
        <div class="details__more-box">
          <n-p>Organizator</n-p>
          <div class="organizator">
            <n-avatar
              size="large"
              :src="`https://hacknarok-api.verybadcode.pl/api/drive/uploads/${eventDetails?.author.avatarId}`"
            />
            <div>
              <p>
                {{ eventDetails?.author.firstName }}
              </p>
              <p>
                {{ eventDetails?.author.lastName }}
              </p>
            </div>
          </div>
        </div>
        <div class="details__more-box">
          <n-p>Gdzie</n-p>
          Tarnów
        </div>
        <div v-if="eventDetails?.createdAt" class="details__more-box">
          <n-p>Kiedy</n-p>
          {{ new Date(eventDetails?.createdAt).toLocaleDateString('pl-PL') }}
        </div>
      </div>
    </div>
    <div class="chat">
      <n-p> Skontaktuj się z organizatorem </n-p>
      <div class="chat__input">
        <div>
          <input v-model="message" type="text" placeholder="Napisz wiadomość" />
          <n-button @click="sendMessage" type="primary">Wyślij</n-button>
        </div>
      </div>
      <div class="chat__list">
        <div
          v-if="eventDetails?.comments != null"
          v-for="(message, index) in eventDetails?.comments"
        >
          {{ message }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { NAvatar, NButton, NH1, NP } from 'naive-ui';
import MeetingService from '@/service/meeting/meeting.service';
import { MeetingDetails } from '@/types';
import { useRoute } from 'vue-router';

export default defineComponent({
  components: {
    NH1,
    NP,
    NButton,
    NAvatar,
  },
  setup() {
    const message = ref('');
    const eventDetails = ref<MeetingDetails>();
    const joined = ref(false);

    const fetchData = async () => {
      // @ts-ignore
      await MeetingService.getEventDetails(useRoute().params.id).then(
        (response) => {
          eventDetails.value = response.data;
        },
      );
    };

    const joinEvent = () => {
      // @ts-ignore
      MeetingService.joinEvent(useRoute().params.id).then((response) => {
        joined.value = true;
      });
    };

    const sendMessage = () => {
      if (eventDetails && eventDetails.value) {
        if (!eventDetails.value.comments) {
          eventDetails.value.comments = [];
        }
        const route = useRoute();
        // @ts-ignore
        MeetingService.sendMessage(route.params.id, message.value).then(
          (response) => {
            message.value = '';
          },
        );
      }
    };

    return { fetchData, joinEvent, eventDetails, joined, message, sendMessage };
  },

  beforeMount() {
    this.fetchData();
  },
});
</script>

<style lang="scss" src="./DDetails.scss" />
