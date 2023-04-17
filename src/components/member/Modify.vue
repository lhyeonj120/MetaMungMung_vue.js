<template>
    <div class="services_section layout_padding">
        <div class="container">
            
            <div class="membership-signup">
            <div style="text-align:center"><h1>회원 정보 수정</h1></div>

                <form 
                    @submit.prevent="modifyForm">

                <div>
                <div><h3>회원 정보 입력</h3></div>

                <div>
                    <div>비밀번호</div>
                    <input id="password" v-model="member.password" type="password" placeholder="비밀번호 입력" >
                </div>

                <div>
                    <div>비밀번호 확인</div>
                    <input id="passwordCheck" type="password" placeholder="비밀번호 확인" >
                </div>

                <div>
                    <div>이메일</div>
                    <input name="email" v-model="member.email" type="text" placeholder="이메일 입력" >
                </div>

                <div>
                    <div>휴대폰</div>
                    <input name="phone" v-model="member.phone" type="text" placeholder="010-1234-5678">
                </div>

                <div>
                    <div class="info-address">주소</div>
                    <input v-model="member.address1" type="text" placeholder="주소지 입력" style="margin-bottom:4px;">
                    <input v-model="member.address2" type="text" placeholder="상세 주소지 입력">
                </div>

                <button type="submit" id="btnSave">저장하기</button>
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
  name: 'ModifyForm',
  setup() {
    const route = useRoute();
    const router = useRouter();

    const memberInfo = JSON.parse(sessionStorage.getItem("memberInfo"));

    // console.log(memberInfo.memberIdx);
    // console.log(memberInfo.memberName);
    // console.log(memberInfo.authority);

    const member = ref({
      password: '',
      email: '',
      phone: '',
      address1: '',
      address2:''
    });

    const modifyForm = async() => {
      try {
        console.log(member.value);
        const res = await axios.patch('/members/modify/' + memberInfo.memberIdx, {
          password: member.value.password,
          email: member.value.email,
          phone: member.value.phone,
          address1: member.value.address1,
          address2: member.value.address2
        });
        console.log(res.data);
        alert(memberInfo.memberName + ' 님의 회원 정보가 수정되었습니다!')
        //router.push({ name: 'Login' });
        //location.href = '/members/login';

        } catch (error) {
            console.log(error);
        } 
        
        console.log(member.value);
    };

    return {
      memberInfo,
      member,
      modifyForm,
    };
  }
}
</script>

<style scoped>
@import "@/assets/css/member/login.css";
</style>