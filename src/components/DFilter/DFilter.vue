<template>
  <div class="filter">
    <div class="filter__input-wrapper">
      <img src="@/assets/images/icons/maginfier.svg" alt="magnifier" />
      <input v-model="filter" class="filter__input" placeholder="Search" />
    </div>
    <n-button type="primary" @click="toggleModal">Utwórz spotkanie</n-button>
    <Dialog
      v-model:visible="isModalOpen"
      header="Utwórz nowe spotkanie"
      class="modal"
    >
      <div class="invite">
        <div>
          <label for="name">Organizator</label>
          <input
            v-model="name"
            placeholder="Imię i nazwisko"
            id="name"
            disabled
          />
        </div>
        <div>
          <label for="select">Rodzaj aktywności</label>
          <select v-model="selectedOption">
            <option disabled>Wybierz jedną</option>
            <option v-for="option in categories" :value="option" id="select">
              {{ option.name }}
            </option>
          </select>
        </div>
        <div>
          <label for="desc">Opis wydarzenia</label>
          <textarea v-model="description" id="desc" />
        </div>
        <div>
          <label for="number">Liczba uczestników</label>
          <input
            v-model="maxUsers"
            id="number"
            type="number"
            placeholder="Liczba uczestników"
          />
        </div>
        <div class="text">
          <p>Twoje ogłoszenie będzie ważne przez 24 godziny.</p>
          <p>Po tym czasie przejedzie do archiwum.</p>
          <p>Możesz wydłużyć czas zamówienia <span>tutaj</span></p>
        </div>
        <n-button @click="createMeeting" type="primary">
          Utwórz wydarzenie
        </n-button>
      </div>
    </Dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import {
  NCheckbox,
  NDropdown,
  NForm,
  NFormItem,
  NH1,
  NH2,
  NInput,
  NButton,
  NP,
} from 'naive-ui';
import Dialog from 'primevue/dialog';
import MeetingService from '@/service/meeting/meeting.service';
import { Coords, CreateMeetingRequest, MeetingCategory } from '@/types';
import { kebabCase } from 'lodash';

export default defineComponent({
  components: {
    Dialog,
    NButton,
    NDropdown,
    NForm,
    NCheckbox,
    NFormItem,
    NH1,
    NH2,
    NInput,
    NP,
  },
  setup() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')!);

    const name = ref(`${currentUser.firstName} ${currentUser.lastName}`);
    const description = ref('');
    const maxUsers = ref(1);
    const categories = ref<MeetingCategory[]>([]);
    const selectedOption = ref<MeetingCategory>({
      id: '1',
      name: 'Wybiesz jedną',
      imageId: 'string',
    });

    const filter = ref('');
    const isModalOpen = ref(false);

    const coords = ref<Coords>({
      lng: 0,
      lat: 0,
    });

    const toggleModal = () => {
      isModalOpen.value = true;
    };

    const initDropdownData = () => {
      MeetingService.getMeetingCategories().then((response) => {
        categories.value = response.data;
      });
    };

    const createMeeting = () => {
      console.log('siema: ', selectedOption.value);
      const createUserRequest: CreateMeetingRequest = {
        name: name.value,
        categoryId: selectedOption.value.id,
        description: description.value,
        maxUsers: maxUsers.value,
        type: 'user',
        lat: coords.value.lat,
        lng: coords.value.lng,
      };

      MeetingService.createMeeting(createUserRequest).then((response) => {
        console.log(`created meeting - ${response.data}`);
      });
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

    return {
      filter,
      isModalOpen,
      description,
      getLocation,
      toggleModal,
      selectedOption,
      name,
      initDropdownData,
      categories,
      maxUsers,
      createMeeting,
    };
  },
  beforeMount() {
    this.getLocation();
    this.initDropdownData();
  },
});
</script>

<style lang="scss" src="./DFilter.scss" scoped />
