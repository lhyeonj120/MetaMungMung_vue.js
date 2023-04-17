<!--댓글쓰고 댓글달기 버튼있는 곳 -->
<template>
  <div class="reply">
      <span>
          <textarea
            placeholder="댓글을 입력하세요"
            v-model="context"
            style="border: 1px solid;border-radius: 2em;color:#C0C0C0;"
            ></textarea>
      </span>
      <span>
          <button @click="createComment" style="border: 1px solid;border-radius: 2em;color:#fff">보내기</button>
      </span>
  </div>
</template>

<script>
// import data from "@/data"
export default {
    name:"PrCommentCreate",
    props:{
        contentId:Number,
        reload:Function
    },
    data(){
        return{
        context:'',
        replyList: []
        }
    },
    methods:{
        createComment(){
            const replyObj = {
                comment_id: replyList[replyList.length - 1].comment_id + 1,
                user_id: 1,
                content_id: this.contentId,
                context: this.context,
                created_at: '2019-03-29 14:11:11',
                updated_at: null
            }
            replyList.push(replyObj);
        // data.Comment.push(
        //     {
        //         comment_id: data.Comment[data.Comment.length - 1].comment_id + 1,
        //         user_id: 1,
        //         content_id: this.contentId,
        //         context: this.context,
        //         created_at: '2019-03-29 14:11:11',
        //         updated_at: null
        //     }
        // )
        this.reload();
        console.log(replyObj)
        }
    },
}
</script>

<style scoped>
.reply
    textarea{
        width: 80%;
        height: 32px;
        resize: none;
        overflow:hidden;
        font-size: 15px;
        vertical-align:middle;
    }
    button {
        width: 20%;
        vertical-align:middle;
        background-color: #87cefa;
	    color: black;
    }
</style>