<template>
  <!-- <button
    @click="openModalFunc"
    class="custom-btn btn-12 modal-button"
    style="position: absolute; z-index: 2; bottom: 5%; right: 5%"
  >
    <span>클릭하세요!</span><span>모임생성</span>
  </button> -->

  <form @submit.prevent="submitOffMeetingForm">
    <!-- 모임생성 모달 start -->
    <div id="myModal" class="modal" style="overflow: visible">
      <!-- Modal content -->
      <div class="modal-content slideDown">
        <div class="modal-header">
          <span @click="closeModalFunc" class="close" id="closeModal"
            >&times;</span
          >
          <h2 style="color: gray; font-weight: bolder">모임 생성</h2>
        </div>
        <div class="modal-body">
          <div style="margin-bottom: 20px">
            <middle
              id="location"
              style="text-align: center"
              class="form-text text-muted box ivory"
              >👉🏻 모임 생성 위치 : {{ currentLocation }} 👈🏻</middle
            >
          </div>
          <div class="form-group">
            <label for="title">🐶 제목</label>
            <input
              type="text"
              class="form-control inputText"
              id="title"
              aria-describedby="emailHelp"
              placeholder="제목을 입력해주세요."
              v-model="title"
            />
          </div>

          <div class="form-group" style="display: none">
            <label for="location">위치</label>
            <input
              type="text"
              class="form-control inputText disabledLabel"
              id="location"
              :value="currentLocation"
              disabled
            />
          </div>

          <div class="form-group" style="display: none">
            <label for="">위도</label>
            <input type="text" :value="currentLat" disabled />
          </div>
          <div class="form-group" style="display: none">
            <label for="">경도</label>
            <input type="text" :value="currentLng" disabled />
          </div>

          <div class="form-group">
            <label for="limit">💁🏼‍♀️ 제한인원</label>
            <input
              type="number"
              id="limit"
              :value="limit"
              name="usernumber"
              min="2"
              max="1000"
              class="form-control inputText"
            />
          </div>

          <div class="form-group">
            <label for="limit">📅 날짜</label>
            <input
              type="date"
              id="date"
              v-model="date"
              name="limit"
              class="form-control inputText"
            />
          </div>

          <div class="form-group">
            <label for="startTime">⏰ 시작시간</label>
            <input
              type="time"
              id="startTime"
              v-model="startTime"
              name="startTime"
              class="form-control inputText"
            />
          </div>

          <div class="form-group">
            <label for="content">📝 내용</label>
            <textarea
              class="form-control inputText"
              id="content"
              rows="3"
              placeholder="내용을 입력해주세요."
              v-model="content"
            ></textarea>
          </div>

          <div class="form-group">
            <label for="content">📸 파일첨부</label>
            <div class="custom-file">
              <input
                type="file"
                class="custom-file-input"
                id="inputGroupFile04"
              />
              <label class="custom-file-label inputText" for="inputGroupFile04"
                >파일을 선택하세요.</label
              >
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="submit" class="btn createBtn">모임생성</button>
          <a
            @click="closeModalFunc"
            style="color: white; width: 100px"
            class="btn cancelBtn"
            >취소</a
          >
        </div>
      </div>
    </div>
    <!-- 모임생성 모달 end -->
  </form>
</template>

<script>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "OffMeetingModal",
  props: ["currentLocation", "currentLat", "currentLng"],
  setup(props) {
    let title = ref("");
    let date = ref("");
    let startTime = ref("");
    let content = ref("");
    let limit = ref("2");
    const router = useRouter();

    const modal = document.getElementsByClassName("modal");
    const clickable = document.querySelectorAll(".clickable");

    const openCreateModalFunc = () => {
      modal[0].style.display = "block";
    };

    const closeModalFunc = () => {
      modal[0].style.display = "none";
    };

    const submitOffMeetingForm = () => {
      // console.log("제목!!! " + title.value);
      // console.log("위치!!!   " + props.currentLocation);
      // console.log("제한인원!!!  " + limit.value);
      // console.log("날짜!!! " + date.value);
      // console.log("모임시작시간!!! " + startTime.value);
      // console.log("내용!!! " + content.value);
      // console.log("위도 " + props.currentLat);
      // console.log("경도 " + props.currentLng);

      router.go();
    };

    for (let i = 0; i < clickable.length; i++) {
      clickable[i].openModalFunc;
    }

    onMounted(() => {
      window.onclick = function (event) {
        if (event.target == modal[0]) {
          modal[0].style.display = "none";
        }
      };
    });

    return {
      openCreateModalFunc,
      closeModalFunc,
      submitOffMeetingForm,
      title,
      date,
      startTime,
      content,
      limit,
    };
  },
};
</script>

<style scoped>
.box {
  border-radius: 15px 15px 15px 15px;
  width: 100%;
  padding: 10px;
  text-align: center;
  color: #555;
  border: 1px solid transparent;
}

.ivory {
  background-color: #fcf8e3;
  border-color: #faebcc;
  color: #8a6d3b;
}

.createBtn {
  border-radius: 20px;
  font-size: 13px;
  color: white;
  width: 100px;
  background-color: cornflowerblue;
}

.cancelBtn {
  border-radius: 20px;
  font-size: 13px;
  color: white;
  width: 100px;
  background-color: lightgray;
}
</style>
