<template>
    <button @click="openModalFunc" class="custom-btn btn-12 modal-button" style="position: absolute; z-index: 2; bottom: 5%; right: 5%"><span>클릭하세요!</span><span>모임생성</span></button>

    <form @submit.prevent="submitOffMeetingForm">
        <!-- 모임생성 모달 start -->
        <div id="myModal" class="modal">
            <!-- Modal content -->
            <div class="modal-content slideDown">
            <div class="modal-header">
                <span @click="closeModalFunc" class="close" id="closeModal">&times;</span>
                <h2>모임생성</h2>
            </div>
            <div class="modal-body">
                <form action="" class="modal-form">
                <div class="form-row">
                    <label for="">제목</label>
                    <input type="text" placeholder="제목을 입력해주세요." v-model ="title">
                </div>
                <div class="form-row">
                    <label for="">위치</label>
                    <input type="text" :value="currentLocation" disabled>
                </div>
                <div class="form-row" style="display: none">
                    <label for="">위도</label>
                    <input type="text" :value="currentLat" disabled>
                </div>
                <div class="form-row" style="display: none">
                    <label for="">경도</label>
                    <input type="text" :value="currentLng" disabled>
                </div>

                <!-- <div class="form-row">
                    <label for="iduser">인원수</label>
                    <select class="user-select" name="user-name" id="user">
                    <option value="" selected disabled>인원수를 선택해주세요.</option>
                    <option value="">1명</option>
                    </select>
                </div> -->
                <div class="form-row">
                    <label for="iduser">제한인원</label>
                    <input type="number" id="usernumber" :value="limit" name="usernumber" min="2" max="1000">
                </div>
                <div class="form-row">
                    <label for="">날짜</label>
                    <input type="date" v-model="date">
                </div>
                <div class="form-row">
                    <label for="">시작시간</label>
                    <input type="time" v-model="startTime">
                </div>
                <div class="form-row">
                    <label for="">내용</label>
                    <textarea type="text" placeholder="내용을 입력해주세요." v-model="content"></textarea>
                </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="submit" class="btn btn-primary">Save</button>
            </div>
            </div>
        </div>
        <!-- 모임생성 모달 end -->
    </form>
</template>

<script>
import axios from 'axios';
import {ref} from 'vue';

  export default {
    name: 'OffMeetingModal',
    props: [
        'currentLocation',
        'currentLat',
        'currentLng'
    ],
    setup (props) {
        let title = ref('');
        let date = ref('');
        let startTime = ref('');
        let content = ref('');
        let limit = ref('2');

        const modal = document.getElementsByClassName('modal');
        const clickable = document.querySelectorAll('.clickable');


        const openModal = () => {
            modal[0].style.display = "block"
        }

        const closeModal = () => {
            modal[0].style.display = "none"
        }
        const openModalFunc = () => {
            openModal();
        }
        const closeModalFunc = () => {
            closeModal();
        }

        const submitOffMeetingForm = () => {
            console.log("제목!!! " + title.value);
            console.log("제한인원!!!  " + limit.value);
            console.log("날짜!!! " + date.value);
            console.log("모임시작시간!!! " + startTime.value);
            console.log("내용!!! " + content.value);
            console.log(props.currentLat);
        }

        for (let i = 0; i < clickable.length; i++) {
            clickable[i].openModalFunc;
        }

        window.onclick = function(event) {
            if (event.target == modal[0]) {
                modal[0].style.display = "none"
            }
        }
        return {
            openModalFunc,
            closeModalFunc,
            submitOffMeetingForm,
            title,
            date,
            startTime,
            content,
            limit
        }
    }
  }
</script>

<style scoped>
@import "@/assets/css/meeting/offMeeting/off-meeting-modal.css";
</style>
