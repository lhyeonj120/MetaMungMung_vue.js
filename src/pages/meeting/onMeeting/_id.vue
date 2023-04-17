<template>
  <div class="services_section layout_padding">
      <div class="container">
        <BoardList v-if="isPublic"/>
        <JoinOnMeeting v-else/>
      </div>
    </div>
</template>

<script>
import BoardList from '@/components/meeting/onMeeting/board/boardList.vue';
import JoinOnMeeting from '../../../components/meeting/onMeeting/JoinOnMeeting.vue';
import {ref} from 'vue';

export default {
  components: {
    BoardList,
    JoinOnMeeting
  },
  setup(){
    const isPublic = ref(false);

    return{
      isPublic
    }
  }
}
</script>

<style>

</style>