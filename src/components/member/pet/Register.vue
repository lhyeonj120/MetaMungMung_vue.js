<template>
  <div class="services_section layout_padding">
        <div class="container">
            
        <div class="membership-register">
        <div style="text-align:center"><h1>반려견 정보 등록</h1></div>

            <form 
                @submit.prevent="registerForm">

            <div>
            <div><h3>반려견 정보 입력</h3></div>

            <div>
                <img id="preview-image" :src="previewSrc" @error="defaultImage"/>
                <br/>
                <label for="input-image">반려견 이미지 선택:</label>
                <br>
                <input id="input-image" type="file" accept="image/*" ref="inputImage" @change="readImage" />
                
            </div>

            <div>
                <div>동물 등록 번호</div>
                <input name="no" type="text" placeholder="반려 동물 등록 번호 입력" required>
            </div>

            <div>
                <div>이름</div>
                <input name="name" type="text" placeholder="반려견 이름 입력" required>
            </div>

            <div>
                <div>성별</div>
                <input type="radio" class="female" required> 여
                <input type="radio" class="male" required> 남
            </div>

            <div>
                <div>생년월일</div>
                <input name="birth" type="text" placeholder="생년월일 입력" required>
            </div>

            <button type="submit" id="btnRegister">등록하기</button>
            </div>
            
            </form>

        </div>
    </div>
  </div>
</template>

<script>
import {useRoute, useRouter} from 'vue-router';
import { ref } from 'vue';
import axios from 'axios';

export default {
  name: 'AddForm',
  setup() {
    const router = useRouter();
    const pet = ref({
      memberIdx: '',
      animalRegisterationNo:'',
      petName: '',
      sex:'',
      birth:'',
      petImg: ''
    });

    // 이미지 파일 첨부
    const inputImage = ref(null);
    const previewSrc = ref('');
    const defaultImage = () => {
        previewSrc.value = require(`@/assets/images/member/pet-image.png`);
    }

    function readImage() {
      const input = inputImage.value;

      if (input.files && input.files[0]) {
        const reader = new FileReader();

        reader.onload = (e) => {
          previewSrc.value = e.target.result;
        };

        reader.readAsDataURL(input.files[0]);
      }
    }

    const registerForm = async() => {
      try {
        console.log(member.value);
        const res = await axios.patch('/members/pet/' + memberInfo.memberIdx, {

        });
        console.log(res.data);
        alert(memberInfo.memberName + ' 님의 반려견 정보가 등록 되었습니다!')
        //router.push({ name: 'MyPage' });

        } catch (error) {
            console.log(error);
        } 
        
    };

    

    return {
        defaultImage,
        inputImage,
        previewSrc,
        readImage,
        registerForm,
    };
  }
}
</script>

<style scoped>
@import "@/assets/css/member/login.css";
</style>