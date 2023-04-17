<template>
    <div class="homeMyBandList gMat20 gPab35 _myBandListWrap" style="">
        <h2>나의 모임</h2>
        <div class="mainWrap  _bandListRegion">
            <ul data-viewname="DBandCollectionView" class="bandCardList gMab25">

                <li class="bandCardItem" id="createOnMeetingCard">
                    <div class="uCover -main -notCover">
                        <div class="bandInner">
                            <router-link :to="{name: 'OnMeetingCreate'}" class="bandCreate  _link">
                                <div class="cover">
                                    <span class="iconBg">
                                        <span class="uIconBandCreate">+</span>
                                    </span>
                                </div>
                                <div class="bandName">
                                    <span class="uriText">만들기</span>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </li>
                
                <li v-for="onMeet in myOnMeetings" :key="onMeet.id" class="bandCardItem">
                    <div class="uCover -main">
                        <div class="bandInner">
                            <router-link :to="{name: 'OnMeetingDetail', params: {id: onMeet.id}}" class="bandCover _link">
                                <div class="cover">
                                    <div class="uCoverImage -border -w186 ">
                                        <span class="coverInner">
                                            <img class="coverImg" :src="onMeet.url" alt="">
                                        </span> 
                                    </div>
                                </div>
                                <div class="bandName">
                                    <p class="uriText">
                                        {{onMeet.name}}
                                    </p>
                                    <span class="member">
                                        
                                        멤버 <em>{{onMeet.memberCnt}}</em>
                                        
                                    </span>
                                </div>    
                            </router-link>
                        </div>
                    </div>
                </li>

                <!-- <li class="bandCardItem">
                    <div class="uCover -main">
                        <div class="bandInner">
                            <a href="/band/86246851" class="bandCover _adBandCover _link">
                                <div class="cover">
                                    <div class="uCoverImage -border -w186 ">
                                        <span class="coverInner">
                                            <img src="https://partnercenter-phinf.pstatic.net//MjAyMzAyMTNfMjE4/MDAxNjc2MjUzOTAxMjc1.zwF_DKvoVwxU9DGIydEQ419o76wOlzeH90XUadekfGgg.fp7sebXYmcB1hJbc7B-7hWz3zXzbctJy_Ty5Xgso_swg.PNG/image.png" height="135" class="coverImg _advertisement_image" alt="">
                                        </span>
                                    </div>
                                </div>
                                <div class="bandName">
                                    <p class="uriText">국내산 들기름 가격보고 놀라요</p>
                                    <span class="preview">
                                        AD<em class="dot"></em>밴드 미리보기
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                </li> -->
            </ul>
        </div>
    </div>
</template>

<script>
import {reactive} from 'vue';

export default {
    setup(){
        const myOnMeetings = reactive([{
            id: 1,
            name: '뭉뭉',
            url: 'https://coresos-phinf.pstatic.net/a/34g0j0/b_fa2Ud018adm10u2w62ocihzm_5ksoqj.png?type=cover_a264',
            memberCnt: 3
        },
        {
            id: 2,
            name: '갱얼쥐꒪ꄱ꒪',
            url: 'https://rgo4.com/files/attach/images/2681740/682/850/029/5993dcd644b29c202130d9204e876693.jpeg',
            memberCnt: 2400
        }]);

        return{
            myOnMeetings
        }
    }
}
</script>

<style scoped>
.homeMyBandList{
    padding: 35px 0 20px 0;
}
h2{
    font-size: 30px;
    font-weight: 800;
    display: inline-block;
}
.bandCardList {
    display: -webkit-box;
    display: flex;
    flex-wrap: wrap;
    gap: 26px 25px;
    padding-bottom: 35px;
    margin-top: 20px;
}
.mainWrap {
    position: relative;
    max-width: 1034px;
    margin: 0 auto;
}
.uCover .bandCover .bandName {
    position: relative;
    height: 100px;
    padding: 11px 12px 14px;
    background-color: #fff;
}
ol, ul {
    list-style: none;
}
.uCover .bandCover .cover .uCoverImage .coverInner {
    border-radius: 2px 2px 0 0;
    text-align: left;
    -webkit-transform: translateY(0);
    transform: translateY(0);
}
.uCoverImage.-w186 .coverInner {
    width: 186px;
    height: 135px;
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
.uCover:not(.-notCover) .bandCover, .uCover:not(.-notCover) .bandFolderCover {
    overflow: hidden;
    border-radius: 20px;
    background: #fff;
    -webkit-box-shadow: 0 5px 20px rgba(0,0,0,.1);
    box-shadow: 0 5px 20px rgba(0,0,0,.1);
}
.uCover .bandCover {
    display: block;
    position: relative;
}
.uCover .bandCreate .cover {
    padding-top: 55px;
    text-align: center;
}
.uCover .bandCreate .bandName {
    height: 85px;
    padding-top: 15px;
    text-align: center;
}
.uCover .bandCreate .cover .iconBg {
    display: -webkit-inline-box;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #F5F6F8;
}
.uCover .bandInner {
    position: relative;
}
.uCover {
    font-size: 13px;
    font-weight: 400;
    position: relative;
    display: inline-block;
    width: 186px;
    vertical-align: top;
    border-radius: 2px;
}
.uCover .bandCover .bandName .member {
    font-size: 12px;
    font-weight: 400;
    color: #888;
    display: block;
    margin-top: 3px;
    line-height: 1.1;
}
.uCover .bandCreate .bandName .uriText {
    font-size: 18px;
    font-weight: 600;
    color: #222;
}
button, dd, dl, dt, fieldset, ol, p, ul {
    margin: 0;
    padding: 0.1px;
}
.uCover .bandCover .bandName .preview {
    font-size: 11px;
    font-weight: 400;
    color: #0DCB67;
    display: block;
    overflow: hidden;
    max-width: 100%;
    white-space: nowrap;
    word-break: normal;
    overflow-wrap: normal;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    margin-top: 6px;
    line-height: 1.1;
}
#createOnMeetingCard{
    /* border: 1px solid; */
    border-radius: 20px;
    -webkit-box-shadow: 0 5px 20px rgba(0,0,0,.1);
    box-shadow: 0 5px 20px rgba(0,0,0,.1);
    background-color: rgba(137,203,235,.3);
}
</style>