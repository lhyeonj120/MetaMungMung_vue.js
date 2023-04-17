<template>
  <!-- 모임상세 모달 start -->
  <div id="myModal" class="detailModal">
    <!-- Modal content -->
    <div class="modal-content slideDown">
      <div class="modal-header">
        <span @click="closeDetailModalFunc" class="close" id="closeModal"
          >&times;</span
        >
        <h2 style="color: gray; font-weight: bolder">
          모임 상세<span
            style="
              margin-left: 10px;
              padding: 10px;
              font-size: 13px;
              font-weight: bold;
            "
            class="badge detailBadge"
            >( 2 / 5 )</span
          >
        </h2>
      </div>
      <div class="modal-body">
        <div style="margin-bottom: 20px">
          <middle
            id="location"
            style="text-align: center"
            class="form-text text-muted box ivory"
            >👉🏻 모임 위치 : {{ location }} 👈🏻</middle
          >
        </div>
        <div class="form-group">
          <label for="title">🐶 제목</label>
          <input
            type="text"
            class="form-control inputText"
            id="title"
            aria-describedby="emailHelp"
            v-model="title"
            disabled
          />
        </div>

        <div class="form-group">
          <label for="host">🙋🏻 호스트</label>
          <input
            type="text"
            class="form-control inputText"
            id="host"
            aria-describedby="emailHelp"
            v-model="host"
            disabled
          />
        </div>

        <div class="form-group" style="display: none">
          <label for="location">위치</label>
          <input
            type="text"
            class="form-control inputText disabledLabel"
            id="location"
            :value="location"
            disabled
          />
        </div>

        <div class="form-group">
          <label for="limit" style="margin-right: 10px">💁🏼‍♀️ 제한인원</label>
          <button @click="activeJoin" class="heart-button" id="likeBtn">
            <div class="heart-flip"></div>
            <span>참여<span>완료</span></span>
          </button>
          <button
            @click="checkJoinMember"
            style="
              margin-left: 10px;
              padding: 10px;
              font-size: 13px;
              font-weight: bold;
            "
            class="badge"
          >
            참여자 확인! ✅
          </button>

          <input
            type="number"
            id="limit"
            v-model="limit"
            name="usernumber"
            class="form-control inputText"
            disabled
          />
        </div>

        <div class="form-group" style="display: none">
          <label for="">위도</label>
          <input type="text" v-model="lat" disabled />
        </div>
        <div class="form-group" style="display: none">
          <label for="">경도</label>
          <input type="text" v-model="long" disabled />
        </div>

        <div class="form-group">
          <label for="date">📅 날짜</label>
          <input
            type="date"
            id="date"
            v-model="date"
            name="date"
            class="form-control inputText"
            disabled
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
            disabled
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
            disabled
          ></textarea>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn modifyBtn">수정</button>
        <button class="btn deleteBtn">삭제</button>
        <!-- <button @click="closeDetailModalFunc" class="btn cancelBtn">
          닫기
        </button> -->
      </div>
    </div>
  </div>
  <!-- 모임생성 모달 end -->
  <JoinMemberModal ref="joinMemberModal" />
</template>

<script>
import JoinMemberModal from "@/components/meeting/offMeeting/modal/JoinMemberModal.vue";
import axios from "axios";
import { ref, onMounted } from "vue";

export default {
  name: "OffMeetingModal",
  props: ["selectedMarker", "boardDetails"],
  components: {
    JoinMemberModal,
  },
  setup(props) {
    let title = ref("");
    let host = ref("");
    let location = ref("");
    let lat = ref("");
    let lng = ref("");
    let date = ref("");
    let startTime = ref("");
    let content = ref("");
    let limit = ref("");
    let likeBtn = null;
    let joinMemberModal = ref(null);

    // const checkJoinMember = () => {
    //   let openIt = () => {
    //     joinMemberModal.openJoinMemberModal();
    //   };
    //   console.log(openIt + "ok!!!!!!");
    // };

    const checkJoinMember = () => {
      joinMemberModal.value.openJoinMemberModal();
      console.log(joinMemberModal.value.openJoinMemberModal());
    };

    const activeJoin = () => {
      likeBtn = document.getElementsByClassName("heart-button")[0];
      likeBtn.classList.toggle("active");
    };

    const modal = document.getElementsByClassName("detailModal");
    const clickable = document.querySelectorAll(".clickable");

    const openDetailModalFunc = (selectedMarker) => {
      modal[0].style.display = "block";
      console.log("props로 받은 title값 : " + selectedMarker.getTitle());

      try {
        for (let i = 0; i < props.boardDetails.length; i++) {
          if (selectedMarker.getTitle() == props.boardDetails[i].idx) {
            title.value = props.boardDetails[i].title;
            host.value = props.boardDetails[i].host;
            location.value = props.boardDetails[i].addr;
            lat.value = props.boardDetails[i].latitude;
            lng.value = props.boardDetails[i].longitude;
            date.value = props.boardDetails[i].date;
            startTime.value = props.boardDetails[i].startTime;
            content.value = props.boardDetails[i].content;
            limit.value = props.boardDetails[i].limit;
          }
        }
      } catch (err) {
        console.log("err!!!!" + err);
      }
    };

    const closeDetailModalFunc = () => {
      modal[0].style.display = "none";
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
      openDetailModalFunc,
      closeDetailModalFunc,
      activeJoin,
      checkJoinMember,
      title,
      date,
      startTime,
      content,
      limit,
      host,
      location,
      joinMemberModal,
    };
  },
};
</script>

<style lang="scss" scoped>
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

.joinBtn {
  margin-left: 20px;
  height: 30px;
  border-radius: 20px;
  font-size: 13px;
  color: white;
  width: 70px;
  background-color: lightpink;
}

.modifyBtn {
  border-radius: 20px;
  font-size: 13px;
  color: white;
  width: 100px;
  background-color: rgb(130, 199, 145);
}

.deleteBtn {
  border-radius: 20px;
  font-size: 13px;
  color: white;
  width: 100px;
  background-color: lightslategray;
}

.cancelBtn {
  border-radius: 20px;
  font-size: 13px;
  color: white;
  width: 100px;
  background-color: lightgray;
}

.inputText {
  background-color: transparent;
}

/* 찜하기 버튼 */
.heart-button {
  cursor: pointer;
  outline: none;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  .heart-flip {
    --base: 32px;
    --duration: 0.6s;
    --active: #ea4673;
    --inactive: #d1d6ee;
    width: var(--base);
    height: calc(var(--base) + var(--base) / 2);
    border-radius: calc(var(--base) / 2) calc(var(--base) / 2) 0 0;
    position: relative;
    transform-origin: 50% 66.66%;
    transform-style: preserve-3d;
    transform: rotate(var(--rotate, -45deg));
    transition: background var(--duration), transform var(--duration) ease;
    background: var(--heart-background, var(--inactive));
    &:before,
    &:after {
      content: "";
      width: calc(var(--base) / 2);
      height: var(--base);
      border-radius: var(
        --pseudo-border-radius,
        calc(var(--base) / 2) 0 0 calc(var(--base) / 2)
      );
      position: absolute;
      left: var(--pseudo-left, -50%);
      transform-origin: var(--pseudo-origin, 100%) 50%;
      bottom: 0;
      background: var(--heart-background, var(--inactive));
      filter: brightness(var(--pseudo-filter, 50%));
      transform: translateX(1%) rotateY(var(--pseudo-rotate, 90deg))
        translateZ(0);
      transition: background var(--duration), transform var(--duration) ease,
        filter var(--duration);
    }
    &:after {
      --pseudo-border-radius: 0 calc(var(--base) / 2) calc(var(--base) / 2) 0;
      --pseudo-left: 100%;
      --pseudo-origin: 0;
      filter: brightness(var(--pseudo-filter-second, 100%));
      transform: translateX(-1%) rotateY(var(--pseudo-rotate-second, 0deg))
        translateZ(0);
    }
  }
  &.active {
    display: inline-block;
    .heart-flip {
      --rotate: 45deg;
      --pseudo-filter: 100%;
      --pseudo-filter-second: 50%;
      --pseudo-rotate: 0deg;
      --pseudo-rotate-second: 90deg;
      --heart-background: var(--active);
    }
  }
}

.heart-button {
  --duration: 0.4s;
  --color: #404660;
  --color-hover: #2b3044;
  --color-active: #fff;
  --border: #d1d6ee;
  --border-hover: #bbc1e1;
  --border-active: #ea4673;
  --background: #fff;
  --background-active: #ea4673;
  font-family: inherit;
  font-size: 14px;
  line-height: 1.6;
  font-weight: 600;
  padding: 6px 16px;
  border-radius: 7px;
  color: var(--button-color, var(--color));
  border: 1px solid var(--button-border, var(--border));
  background: var(--button-background, var(--background));
  transform: scale(var(--button-scale, 1)) translateZ(0);
  transition: background var(--duration), border-color var(--duration),
    color var(--duration), transform 0.2s;
  .heart-flip {
    --base: 8px;
    --active: #fff;
    --inactive: #bbc1e1;
    display: inline-block;
    vertical-align: top;
    margin: 4px 6px 0 0;
  }
  span {
    display: inline-block;
    vertical-align: top;
  }
  & > span {
    transform: translateX(var(--text-x, 4px));
    transition: transform var(--duration);
    span {
      display: inline-block;
      vertical-align: top;
      opacity: var(--span-opacity, 0);
      transform: translateX(var(--span-x, 4px));
      transition: opacity var(--duration), transform var(--duration);
    }
  }
  &:active {
    --button-scale: 0.95;
    width: 100px;
  }
  &:hover {
    --button-color: var(--color-hover);
    --button-border: var(--border-hover);
  }
  &.active {
    --text-x: 0;
    --button-color: var(--color-active);
    --button-border: var(--border-active);
    --button-background: var(--background-active);
    --span-opacity: 1;
    --span-x: 0;
  }
}

.detailBadge {
  background-color: mediumaquamarine;
  color: white;
}
</style>
