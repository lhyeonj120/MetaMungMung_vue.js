<template>
    <div data-viewname="DBandListSubRecommendBandsView" class="discoverBandList">
        <div class="mainWrap">
            <div class="sectionTitleArea gMab19">
                <h2 class="sectionTitle" v-if="isMain">이런 모임은 어때요</h2>
                <h2 class="sectionTitle" v-else-if="isSearch">검색 결과 {{ searchResultCnt }}개</h2>
            </div>

            <ul data-viewname="DDiscoverRecommendBandListView" class="cCoverList">
                <li v-for="onMeeting in onMeetingList" :key="onMeeting.onMeetingIdx" data-viewname="DDiscoverRecommendBandItemView" class="cCoverItem">
                    <div class="bandUri">
                        <div class="cover">
                            <div class="uCoverImage -border -borderR12 -w80">
                                <span class="coverInner">
                                    <img :src="onMeeting.thumbnail" class="coverImg _coverImg" alt="모임 커버">
                                </span>
                            </div>
                        </div>
                        <div class="bandName">
                            <strong class="name">
                                <router-link :to="{name: 'OnMeetingDetail', params:{id: onMeeting.onMeetingIdx}}" class="text _bandLink">
                                    
                                    {{ onMeeting.onMeetName }}
                                </router-link>
                            </strong>
                            <p class="pSubTxt">{{ onMeeting.introduction }}</p>

                            <router-link v-if="isMain" :to="{name: 'OnMeetingSearch', query: {keywords: onMeeting.category}}" class="moreBandLink _tagLink"><strong>{{ onMeeting.category }}</strong> 모임 더보기</router-link>
                            <p v-else class="member">
                                <span class="total">멤버 <strong class="totalNumber">{{ onMeeting.memberCnt }}</strong></span>
                                <span class="leader">리더 <strong class="leagerName">{{ onMeeting.hostName }}</strong></span>
                            </p>
                            
                        </div>
                        <router-link :to="{name: 'OnMeetingDetail', params:{id: onMeeting.onMeetingIdx}}" class="bandLink _bandLink"><span class="gSrOnly">이 모임으로 이동</span></router-link>
                    </div>
                </li>
            </ul>

            <div class="sectionOptionBox  -positionBottom" v-if="isMain" @click="viewAll">
                <span class="optionText">모두보기 ></span>
            </div>
        </div>
    </div>
</template>

<script>
import {ref, watchEffect} from 'vue'
import {useRoute, useRouter} from 'vue-router'

export default {
    props: {
        isMain: Boolean,
        isSearch: Boolean,
        cate: String
    },
    emits: ['send-type'],
    setup(props, {emit}){
        const route = useRoute();
        const router = useRouter();
        const searchResultCnt = ref(0);
        const onMeetingList = ref([
            {onMeetingIdx: 1, onMeetName: '비숑숑숑 모임', category: '소형견', introduction: '비숑 모임입니당', thumbnail: 'https://static-storychat.pstatic.net/2020/5/10/39/1948239_fii2bj2g50l790.png', isPublic: '1', onMeetingAddr: '연지동', memberCnt: 4617, hostName: '김밥풀'},
            {onMeetingIdx: 2, onMeetName: '말티쥬 모임 [말모]', category: '일상', introduction: 
                `말티쥬를 사랑하는 분들을 위한 모임입니다

                    들어오셔서 함께 정보도 공유하고 이야기도 나누어요!

                    -말티쥬를 사랑하는 사람들의 모임-`, thumbnail: 'https://file3.instiz.net/data/cached_img/upload/2019/05/18/12/1110b3ff0bf4bd7b13a55c787e6c7483.jpg', isPublic: '1', onMeetingAddr: '가락동', memberCnt: 1716, hostName: '부 끄'},
            {
                onMeetingIdx: 3, onMeetName: '사료 정보 공유 모임', category: '정보', introduction: '모든 강아지가 원하는 사료를 찾을 수 있는 그날까지-', thumbnail: 'https://blog.kakaocdn.net/dn/cXhV4u/btrfBrpkLL1/jH5SKkYKoHQFkXLwYZkS1K/img.jpg', isPulic: '0', onMeetingAddr: '', memberCnt: 1717, hostName: '꾸마얌'
            },
            {
                onMeetingIdx: 4, onMeetName: '연지동 정보 공유방', category: '정보', introduction: '많이 들어오셔서 정보 공유해요.', thumbnail: 'https://pbs.twimg.com/media/FtwQHBhaQAEjpae?format=jpg&name=small', isPulic: '0', onMeetingAddr: '연지동', memberCnt: 1707, hostName: '전 설'
            }
        ]);

        watchEffect(() => {
            // 카테고리별 list 나오게
            console.log(props.cate);
        });

        const viewAll = () => {
            emit("send-type", "viewAll");
            router.push({name: "OnMeeting"});
        }
        
        return{
            searchResultCnt,
            onMeetingList,
            viewAll
        }
    }
}
</script>

<style scoped>
button, dd, dl, dt, fieldset, ol, p, ul {
    margin: 0;
    padding: 0;
}
.createBand+.discoverBandList, .createBand+.openBandList {
    background: rgba(0,0,0,0.03);
}
.discoverBandList {
    position: relative;
    padding: 35px 0 20px 0;
}
.mainWrap {
    position: relative;
    margin: 0 auto;
}
.sectionTitleArea {
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding-bottom: 15px;
}
.sectionTitleArea .sectionTitle {
    font-size: 20px;
    font-weight: 600;
    color: #222;
    -webkit-box-flex: 0;
    flex: 0 0 auto;
}
.cCoverList {
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    flex-wrap: wrap;
}
.cCoverList .cCoverItem:nth-child(odd), .mainWrap .cCoverList .cCoverItem:nth-child(odd) {
    padding-right: 20px;
}
.cCoverList .cCoverItem, .mainWrap .cCoverList .cCoverItem {
    width: 50%;
}
.cCoverList .cCoverItem {
    -webkit-box-flex: 0;
    flex: 0 0 auto;
    position: relative;
    margin-bottom: 30px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding-right: 20px;
}
.cCoverList .cCoverItem .bandUri {
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}
.cCoverList .cCoverItem .cover {
    position: relative;
    margin-right: 12px;
}
.uCoverImage {
    display: inline-block;
    position: relative;
    vertical-align: top;
}
.discoverBandList .uCoverImage.-border .coverInner {
    border-radius: 12px;
}
.uCoverImage.-w80 .coverInner {
    width: 80px;
    height: 80px;
}
.uCoverImage.-borderR12 .coverInner {
    border-radius: 12px;
}
.uCoverImage .coverInner {
    display: block;
    position: relative;
    overflow: hidden;
    border-radius: 2px;
    line-height: 0;
    font-size: 0;
    background-color: #F5F6F8;
}
.cCoverList .cCoverItem .bandName {
    -webkit-box-flex: 1;
    flex: 1 1;
    min-width: 0;
}
.cCoverList .cCoverItem .bandName .name {
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}
b, strong {
    font-weight: bolder;
}
.cCoverList .cCoverItem .bandName .name .text {
    font-size: 14px;
    font-weight: 600;
    color: #222;
    display: block;
    overflow: hidden;
    max-width: 100%;
    white-space: nowrap;
    word-break: normal;
    overflow-wrap: normal;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    position: relative;
    padding-top: 3px;
    line-height: 1.4;
    z-index: 1;
}
.cCoverList .cCoverItem .bandName .pSubTxt:not(.-multiLine) {
    display: block;
    overflow: hidden;
    max-width: 100%;
    white-space: nowrap;
    word-break: normal;
    overflow-wrap: normal;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
}
.cCoverList .cCoverItem .bandName .pSubTxt {
    margin-top: 5px;
    font-size: 13px;
    font-weight: 400;
    color: #555;
}
.cCoverList .cCoverItem .bandName .moreBandLink {
    font-size: 12px;
    font-weight: 400;
    color: #777;
    display: inline-block;
    position: relative;
    margin-top: 7px;
    height: 26px;
    padding: 0 10px 0 9px;
    border: 1px solid rgba(0,0,0,0.05);
    border-radius: 100px;
    line-height: 23px;
    background: #fff;
    z-index: 1;
}
.cCoverList .cCoverItem .bandLink {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}
.gSrOnly {
    overflow: hidden;
    position: absolute;
    height: 1px;
    width: 1px;
    clip: rect(1px,1px,1px,1px);
}
.sectionOptionBox.-positionBottom {
    position: absolute;
    right: 0;
    top: 4px;
    cursor: pointer;
}
.sectionOptionBox {
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: end;
    justify-content: flex-end;
}
.btnOption {
    -webkit-box-flex: 0;
    flex: 0 0 auto;
    display: inline-block;
    position: relative;
}
.btnOption .optionText {
    font-size: 13px;
    font-weight: 400;
    color: #444;
    line-height: 20px;
    text-align: left;
}

.uIconAcrossBand, .uIconAppDownload, .uIconBandCreate, .uIconBandGuide, .uIconBandListSetting, .uIconCommentFile, .uIconCommentImage, .uIconCommentPlus, .uIconCommentSecret, .uIconCommentSticker, .uIconComments, .uIconConfirmCheck, .uIconFaceEmotion, .uIconFeedSearch, .uIconGps, .uIconGroupCallShare, .uIconGroupCallVideo, .uIconGroupCallVideoOff, .uIconGroupCallVoice, .uIconGroupCallVoiceOff, .uIconMapFill, .uIconMissionBandSetting, .uIconNormalCheckPersonFill, .uIconNormalCheckSquareFill, .uIconNormalLink, .uIconNormalLockFill, .uIconNormalMailFill, .uIconNormalMailPersonFill, .uIconNormalQr, .uIconNormalQuestion, .uIconNormalSeveralPeopleFill, .uIconOfficialBand, .uIconOption, .uIconPlusSquare, .uIconPostWriteDivision, .uIconPostWriteMap, .uIconPostWriteMarkdown, .uIconPostWriteSurvey, .uIconPrivacyMenu, .uIconQuestionCircleFill, .uIconSettingFill, .uIconShare, .uIconTrash, .uIconWidgetAlbum, .uIconWidgetAttendance, .uIconWidgetDivision, .uIconWidgetFile, .uIconWidgetMarkdown, .uIconWidgetMutiSchedule, .uIconWidgetPayment, .uIconWidgetQuiz, .uIconWidgetSignup, .uIconWidgetSurvey, .uIconWidgetTodo, .uIconWidgetVote {
    display: inline-block;
    vertical-align: top;
}



.cCoverList .cCoverItem .bandName .date, .cCoverList .cCoverItem .bandName .member {
    margin-top: 4px;
    line-height: 1.5;
    font-size: 12px;
    font-weight: 400;
    color: #999;
    display: block;
    overflow: hidden;
    max-width: 100%;
    white-space: nowrap;
    word-break: normal;
    overflow-wrap: normal;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
}
.cCoverList .cCoverItem .bandName .date strong, .cCoverList .cCoverItem .bandName .member strong {
    font-weight: 400;
}
.cCoverList .cCoverItem .bandName .date .leader:before, .cCoverList .cCoverItem .bandName .member .leader:before {
    display: inline-block;
    margin: 7px 6px 0 3px;
    width: 2px;
    height: 2px;
    background-color: #b3b3b3;
    border-radius: 50%;
    vertical-align: top;
    content: "";
}
</style>