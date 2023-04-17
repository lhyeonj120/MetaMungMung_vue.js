<template>
  <div id="modal">
    <header>
      <h2>Customize your view</h2>
    </header>
    <main>
      <p>Background</p>
      <div class="radio-buttons">
        <label class="light">
          <input
            type="radio"
            checked
            name="background-option"
            data-theme="light"
          />
          <span>Light</span>
          <span class="border"></span>
        </label>
        <label class="dim">
          <input type="radio" name="background-option" data-theme="dim" />
          <span>Dim</span>
          <span class="border"></span>
        </label>
        <label class="dark">
          <input type="radio" name="background-option" data-theme="dark" />
          <span>Dark</span>
          <span class="border"></span>
        </label>
      </div>
      <p>Navigation style</p>
      <div class="radio-buttons">
        <label class="nav-style">
          <input type="radio" name="nav-style" data-nav="opened" />
          <span>Opened</span>
          <span class="border"></span>
        </label>
        <label class="nav-style">
          <input type="radio" checked name="nav-style" data-nav="closed" />
          <span>Closed</span>
          <span class="border"></span>
        </label>
      </div>
    </main>
  </div>
  <div id="modal-overlay"></div>

  <div id="more-popout-overlay"></div>
  <div id="more-popout" class="nav-closed">
    <div class="nav-item">
      <div class="icon-container">

      </div>
      <div class="nav-text">
        <p>Ian | Gibbu</p>
        <span>@Gibbu_</span>
      </div>
    </div>
    <div class="nav-item">
      <div class="icon-container">
        <i class="fas fa-bolt"></i>
      </div>
      <div class="nav-text">
        <p>Moments</p>
      </div>
    </div>
    <div class="nav-item">
      <div class="icon-container">
        <i class="fas fa-chart-bar"></i>
      </div>
      <div class="nav-text">
        <p>Twitter ADS</p>
      </div>
    </div>
    <div class="nav-item">
      <div class="icon-container">
        <i class="fas fa-cog"></i>
      </div>
      <div class="nav-text">
        <p>Settings & privacy</p>
      </div>
    </div>
    <div class="nav-item">
      <div class="icon-container">
        <i class="fas fa-question-circle"></i>
      </div>
      <div class="nav-text">
        <p>Help Center</p>
      </div>
    </div>
    <div class="nav-item display">
      <div class="icon-container">
        <i class="fas fa-palette"></i>
      </div>
      <div class="nav-text">
        <p>Display</p>
      </div>
    </div>
    <div class="nav-item logout">
      <div class="icon-container">
        <i class="fas fa-sign-out-alt"></i>
      </div>
      <div class="nav-text">
        <p>Logout</p>
      </div>
    </div>
  </div>

  <!-- <nav class="nav-closed">
	<div class="nav-item home" aria-label="Home" data-balloon-pos="right" data-balloon-blunt>
		<div class="icon-container">
			<i class="fab fa-twitter"></i>
		</div>
		<div class="nav-text">
			<p>Home</p>
		</div>
	</div>
	<div class="nav-item" aria-label="Explore" data-balloon-pos="right" data-balloon-blunt>
		<div class="icon-container">
			<i class="fas fa-hashtag"></i>
		</div>
		<div class="nav-text">
			<p>Explore</p>
		</div>
	</div>
	<div class="nav-item" aria-label="Notifications" data-balloon-pos="right" data-balloon-blunt>
		<div class="icon-container">
			<i class="fas fa-bell"></i>
		</div>
		<div class="nav-text">
			<p>Notifications</p>
		</div>
	</div>
	<div class="nav-item" aria-label="Messages" data-balloon-pos="right" data-balloon-blunt>
		<div class="icon-container">
			<i class="fas fa-envelope"></i>
		</div>
		<div class="nav-text">
			<p>Messages</p>
		</div>
	</div>
	<div class="nav-item" aria-label="Bookmarks" data-balloon-pos="right" data-balloon-blunt>
		<div class="icon-container">
			<i class="fas fa-bookmark"></i>
		</div>
		<div class="nav-text">
			<p>Bookmarks</p>
		</div>
	</div>
	<div class="nav-item" aria-label="Profile" data-balloon-pos="right" data-balloon-blunt>
		<div class="icon-container">
			<img src="https://pbs.twimg.com/profile_images/1153329245248053248/xONN2R7u_400x400.png">
		</div>
		<div class="nav-text">
			<p>Profile</p>
		</div>
	</div>
	<button class="nav-item" aria-label="More" data-balloon-pos="right" data-balloon-blunt>
		<span class="icon-container">
			<i class="fas fa-ellipsis-h"></i>
		</span>
		<p>More</p>
	</button>
</nav> -->

  <header class="nav-closed">
    <div class="wrapper" style="margin-left: 20px">
      <div class="top">
        <img
          src="data:image/jpeg;base64,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"
        />
        <div class="user">
          <h2 style="color: white">몽몽</h2>
        </div>
      </div>
      <div class="bottom">
        <a href="#">
          <p>총 게시글</p>
          <h3 style="color: white;text-align:center;">2</h3>
        </a>
        <a href="#">
          <p>멤버</p>
          <h3 style="color: white;text-align:center;">3</h3>
        </a>
      </div>
    </div>
  </header>

  <div id="container" class="wrapper nav-closed">
    <div id="timeline">
      <!-- 게시물 글 작성하는 곳  -->
      <div class="new-tweet" style="border: 1px solid;border-radius: 2em;color:	#C0C0C0">
        <textarea placeholder="새로운 소식을 남겨보세요."></textarea>
        <div class="registerModal">
          <!-- <RegisterModal @close="closeRegisterModal" v-if="registerModal" /> -->
        </div>
        <div class="btns">
          <div class="btn">
            <button>
              <img
                src="@/assets/images/onMeeting/upload-file-icon.png"
                alt=""
              />
            </button>
          </div>
          <div class="btn">
            <button @click="toggleMap">
              <img
                src="@/assets/images/onMeeting/map-icon2.png"
                alt=""
                width="25"
                height="25"
              />
            </button>
            <!-- <MapModal ref="map" @close="closeMapModal" /> -->
            <MapModal v-if="isOpen" @close-req="toggleMap" @send-addr="sendAddr" />
          </div>
          <div class="btn">
            <button>게시</button>
          </div>
        </div>
      </div>


        


      <!--게시물 올라오는 곳 --> <!--이게 반복되면 되는 것임!! -->
      <!-- 이거 클릭하면 해당 게시물 디테일 나오면 됨..--> 
      <div class="tweet">
        <div class="left">
          <img
            src="https://yt3.ggpht.com/-uJh4oSQAwak/AAAAAAAAAAI/AAAAAAAAAAA/AMGKfKvDP3w/s900-c-k-no-mo-rj-c0xffffff/photo.jpg"
          />
        </div>
        <div class="right">
          <div class="info">
            <p>강혜경</p>
            <time>11m</time>
          </div>
          <div class="message" @click="openBoardModal">
            <p>!!!!이곳에 게시물 내용이 들어가면 됩니다!!!!</p>
            <img
              src="https://img.dogpre.com/web/dogpre/event/popular_keyword_theme/43_pc_main_page_banner_0036.jpg"
            />
          </div>
          <div class="btns">
            <button class="blue" type="button">
              <img
                src="@/assets/images/onMeeting/reply-icon.png"
                height="20"
                width="20"
                style="margin-right: 10px"
              />2(댓글 갯수)
            </button>
          </div>
                <div>
                    <ReplyList/>
                </div>
                <div>
                    <CreateReply/>  
                </div>
         </div>
          <BoardDetail ref="boardDetail" @close="closeBoardModal" />
        </div>
        <!-- 하나의 트윗이 끝나는 곳-->
        <div class="tweet">
        <div class="left">
          <img
            src="https://yt3.ggpht.com/-uJh4oSQAwak/AAAAAAAAAAI/AAAAAAAAAAA/AMGKfKvDP3w/s900-c-k-no-mo-rj-c0xffffff/photo.jpg"
          />
        </div>
        <div class="right">
          <div class="info">
            <p>강혜경</p>
            <time>11m</time>
          </div>
          <div class="message" @click="openBoardModal">
            <p>!!!!이곳에 게시물 내용이 들어가면 됩니다!!!!</p>
            <img
              src="https://img.dogpre.com/web/dogpre/event/popular_keyword_theme/43_pc_main_page_banner_0036.jpg"
            />
          </div>
          <div class="btns">
            <button class="blue" type="button">
              <img
                src="@/assets/images/onMeeting/reply-icon.png"
                height="20"
                width="20"
                style="margin-right: 10px"
              />2(댓글 갯수)
            </button>
          </div>
                <div>
                    <ReplyList/>
                </div>
                <div>
                    <CreateReply/>  
                </div>

                    <!-- <BoardDetail @close="closeBoardModal" v-if="boardModal"/> -->
                    <BoardDetail ref="boardDetail" @close="closeBoardModal" />
         </div>
        </div>
        <footer>
            <!-- <i class="fab fa-twitter"></i>
            <button>Load More!!!</button> -->
        </footer>
    </div>
    <div id="right">
      <div class="search-container" style="border: 1px solid;border-radius: 2em;color:	#C0C0C0">
        <div class="search-input">
                <img src="@/assets/images/onMeeting/search-icon.png">
				<input id="search" type="search" placeholder="글 내용 검색" autocomplete="off">
				<!-- <i class="fas fa-search"></i> -->
		</div>
        <div class="search-results">
          <div class="result">
            <p>youtube</p>
          </div>
          <div class="result">
            <p>youtuber dog</p>
          </div>
          <div class="result">
            <p>youtube music</p>
          </div>
          <hr />
          <div class="result">

            <div class="right">
              <p>YouTube Gaming</p>
              <span>@YouTubeGaming</span>
            </div>
          </div>
          <div class="result">

            <div class="right">
              <p>YouTube</p>
              <span>@YouTube</span>
            </div>
          </div>
          <div class="result">

            <div class="right">
              <p>YouTube Creators</p>
              <span>@YTCreators</span>
            </div>
          </div>
          <div class="result">

            <div class="right">
              <p>YouTube TV</p>
              <span>@youtubemusic</span>
            </div>
          </div>
          <div class="result">
 
            <div class="right">
              <p>YouTube Music</p>
              <span>@youtubemusic</span>
            </div>
          </div>
          <hr />
          <div class="result">
            <p>Go to @YouTube</p>
          </div>
        </div>
      </div>
      <section>
        <header>
          <h3>뭉뭉뭉</h3>
        </header>
        <main>
          <a href="#" class="trend">
            <div class="trend-num"><span>1 - Trending</span></div>
            <div class="trend">
              <p>몽몽에 오신걸 환영합니다.</p>
            </div>
          </a>
          <hr>
          <p align="right" style="font-size:13px"><img src="@/assets/images/onMeeting/setting.png" style="width:15px;height:15px;margin-right:10px;">모임 설정</p>
        </main>
      </section>
      <section>
        <header>
          <h3>카페 멤버</h3>
          <a href="#">View All</a>
        </header>
        <main>
          <a href="#">
            <!--여기서 카페 멤버 반복으로 돌려주면 됨 -->
            <img
              src="https://www.petoria.co.kr/web/product/big/202302/b2fde590335a31b868394dc90006e99f.jpg"
            />
            <div class="user">
              <p>강혜경</p>
              <span>강아지를 사랑합니다.</span>
            </div>
          </a>
        </main>
      </section>
    </div>
  </div>
</template>

<script>
//import RegisterModal from '@/components/meeting/onMeeting/board/registerModal/registerModal.vue';
import MapModal from "@/components/meeting/onMeeting/board/registerModal/mapModal.vue";
import ReplyList from "@/components/meeting/onMeeting/board/reply/replyList.vue";
import CreateReply from "@/components/meeting/onMeeting/board/reply/createReply.vue";
import BoardDetail from "@/components/meeting/onMeeting/board/boardDetail.vue";
import { ref } from 'vue';


export default {
  name: "BoardList",
  components: {
    //RegisterModal,
    MapModal,
    ReplyList,
    CreateReply,
    BoardDetail,
  },
  data() {
    return {
      mapModal: false,
      boardModal: false,
      registerModal: false,
      openBoardModal: null,
    };
  },
  methods: {
    openMapModal() {
      this.mapModal = true;
    },
    closeMapModal() {
      this.mapModal = false;
    },
    openBoardModal() {
        base.openBoardModal();
    //     console.log("###")
    //   this.boardModal = true;
    },
    closeBoardModal() {
      this.boardModal = false;
    },
    openRegisterModal() {
      this.registerModal = true;
    },
    closeRegisterModal() {
      this.registerModal = false;
    },
  },
  mounted() {
      let base = this;
      base.openBoardModal = this.$refs.boardDetail.openBoardModalFunc;
     // base.openMapModal = this.$refs.map.openMapModalFunc;

     // console.log(`!!! ${base.openMapModal}`);

  },
  setup() {
    const isOpen = ref(false);

    const toggleMap = () => {
      console.log("KANG!!!")
            isOpen.value = !isOpen.value;
            // emit('toggle-modal', isOpen.value);
        }

    const sendAddr = (addr) => {
            address.value = addr;
        }



    return {
      isOpen,
      toggleMap,
      sendAddr,
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Nunito:300,400,600,700,800|Roboto:300,400,500,700");
* {
  outline-width: 0 !important;
  font-family: "Roboto";
}
body,
html {
  padding: 0;
  margin: 0;
}

body > header.nav-closed {
  margin-left: 64px;
}
body > header {
  background: url(https://source.unsplash.com/2560x1440/daily) center/cover;
  display: flex;
  align-items: center;
  position: relative;
  margin-left: 250px;
}

$nav: 64px;
$blue: #03a9f4;
$green: #4caf50;
$red: #ff2f20;
$bgImage: "https://app-storage-edge-003.cafe24.com/bannermanage2/woohua/2020/01/03/9ef96bbacc205f6a2b825e7fa0025b2d.jpg";

:root {
  --bg1: #e5e5e5;
  --bg2: #eee;
  --bg3: #fff;

  --color: #000;
}

#modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 12;
  opacity: 0;
  visibility: hidden;
  transition: 0.2s ease;
  background: var(--bg3);
  width: 550px;
  overflow: hidden;
  border-radius: 5px;
  header {
    border-bottom: 1px solid var(--bg2);
    padding: 15px;
    box-sizing: border-box;
    h2 {
      margin: 0;
      font-weight: 400;
      color: var(--color);
    }
  }
  main {
    padding: 15px;
    box-sizing: border-box;
    overflow-y: auto;
    > p {
      margin: 0 0 5px 0;
      color: var(--color);
    }
    .radio-buttons {
      display: flex;
      grid-gap: 15px;
      background: rgb(31, 39, 48);
      padding: 15px;
      box-sizing: border-box;
      label {
        flex: 1;
        display: flex;
        justify-content: center;
        cursor: pointer;
        position: relative;
        padding: 20px 0;
        span {
          color: #fff;
          display: block;
        }
        input {
          display: none;
          &:checked ~ .border {
            box-shadow: inset 0 0 0 2px $blue;
          }
        }
        .border {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          user-select: none;
          pointer-events: none;
        }
        &.light {
          background: #fff;
          span {
            color: #000;
          }
        }
        &.dim {
          background: #15202b;
        }
        &.dark {
          background: #111;
        }
        &.nav-style {
          background: var(--bg3);
          span {
            color: var(--color);
          }
        }
      }
    }
  }
  &.toggle {
    opacity: 1;
    visibility: visible;
  }
}
#modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  opacity: 0;
  visibility: hidden;
  transition: 0.2s ease;
  z-index: 11;
  &.toggle {
    opacity: 1;
    visibility: visible;
  }
}

#more-popout-overlay {
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  visibility: hidden;
  opacity: 0;
  transition: 0.2s ease;
  &.toggle {
    opacity: 1;
    visibility: visible;
  }
}
#more-popout {
  position: fixed;
  width: 250px;
  left: -1px;
  background: var(--bg3);
  height: 100%;
  z-index: 10;
  border-left: 1px solid var(--bg2);
  transition: 0.2s ease;
  .nav-item:first-of-type {
    border-bottom: 1px solid var(--bg2);
    .nav-text span {
      opacity: 0.5;
      font-size: 12px;
      display: block;
    }
  }
  &.nav-closed {
    left: -187px;
    &.toggle {
      left: 64px;
    }
  }
  &.toggle {
    left: 250px;
    &.nav-closed {
      left: 64px;
    }
  }
}

.wrapper {
  max-width: 1024px;
  margin: 0 auto;
  width: 100%;
  padding-left: 250px;
  &.nav-closed {
    padding-left: $nav;
  }
}

body {
  background: var(--bg1);
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: $nav;
  background: var(--bg3);
  height: 100vh;
  z-index: 10;
  &.nav-closed {
    width: $nav;
    .nav-item p {
      display: none;
    }
  }
}

.nav-item {
  width: 100%;
  height: $nav;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  color: var(--color);
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  user-select: none;
  &.home {
    border-bottom: 1px solid var(--bg2);
    color: $blue;
  }
  .icon-container {
    width: $nav;
    height: $nav;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  i {
    font-size: 18px;
  }
  img {
    width: 32px;
    height: 32px;
    display: block;
    border-radius: 50%;
  }
  p {
    margin: 0;
    font-size: 16px;
  }
  &:hover {
    background: var(--bg2);
  }
  &.logout {
    color: $red !important;
  }
}

header.nav-closed {
  background: url($bgImage) center/cover;
  display: flex;
  align-items: center;
  position: relative;
  margin-left: 250px;
  .wrapper {
    position: relative;
    padding-left: 0;
  }
  .top {
    display: flex;
    align-items: center;
    margin: 30px 0;
    img {
      width: 72px;
      height: 72px;
      display: block;
      border-radius: 50%;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }
    .user {
      margin-left: 15px;
      color: #fff;
      text-shadow: 0 2px 5px rgba(0, 0, 0, 1);
      h2 {
        margin: 0;
        font-weight: 400;
      }
      p {
        margin: 0;
        opacity: 0.5;
      }
    }
  }
  .bottom {
    display: flex;
    align-items: center;
    a {
      text-decoration: none;
      color: #fff;
      padding: 0 5px 10px;
      margin-right: 15px;
      text-shadow: 0 2px 5px rgba(0, 0, 0, 1);
      p {
        margin: 0;
        font-size: 14px;
        opacity: 0.5;
      }
      h3 {
        margin: 0;
        font-weight: 400;
      }
      &:hover {
        box-shadow: inset 0 -4px 0 #fff;
      }
    }
  }
  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 125px;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.6) 90%);
  }
  &.nav-closed {
    margin-left: $nav;
  }
}

#container {
  display: grid;
  grid-template-columns: 650px auto;
  grid-gap: 20px;
  align-items: flex-start;
  margin: 20px auto 50px;
}
#timeline {
  background: var(--bg3);
  border-radius: 5px;
  overflow: hidden;
  footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px 0;
    border-top: 1px solid var(--bg2);
    i {
      margin-bottom: 10px;
      color: var(--color);
    }
    button {
      background: transparent;
      border: none;
      padding: 10px 20px;
      cursor: pointer;
      font-weight: 600;
      border-radius: 5px;
      color: var(--color);
      &:hover {
        background: var(--bg2);
      }
    }
  }
}
.new-tweet {
  textarea {
    border: none;
    width: 100%;
    resize: none;
    padding: 15px;
    height: auto;
    box-sizing: border-box;
    height: 200px;
    cursor: pointer;
    color: var(--color);
    background: var(--bg3);
    &:focus,
    &:not(:placeholder-shown) {
      height: 200px;
      cursor: text;
    //   ~ .btns {
    //     height: 100%;
    //     padding: 0 15px 15px;
    //   }
    }
  }
  .btns {
    padding: 0 10px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    overflow: visible;
    height: 0;
    .btn {
      margin-right: 10px;
      button {
        margin-bottom: 50px;
        padding: 0;
        padding: 0;
        display: block;
        width: 32px;
        height: 32px;
        background: transparent;
        border: none;
        cursor: pointer;
        border-radius: 50%;
        color: var(--color);
        &:hover {
          background: var(--bg2);
        }
      }
      &:last-child {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        margin-right: 0;
        button {
          width: auto;
          border-radius: 3px;
          padding: 0 10px;
          background: #87cefa;
          color: #fff;
          &:hover {
            background: darken($blue, 3%);
          }
          i {
            margin-right: 10px;
          }
        }
      }
    }
  }
}
.tweet {
  border-top: 1px solid var(--bg2);
  padding: 15px;
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  .left {
    margin-right: 15px;
    img {
      width: 42px;
      height: 42px;
      display: block;
      object-fit: cover;
      border-radius: 50%;
      user-select: none;
    }
  }
  .right {
    width: 100%;
    .info {
      display: flex;
      align-items: center;
      color: var(--color);
      margin-bottom: 5px;
      p {
        margin: 0;
        display: flex;
        align-items: center;
        span {
          margin: 0 10px;
          font-size: 12px;
          opacity: 0.5;
        }
      }
      time {
        display: flex;
        align-items: center;
        font-size: 12px;
        opacity: 0.5;
        &:before {
          content: "";
          height: 2px;
          width: 2px;
          margin-right: 10px;
          border-radius: 50%;
          background: var(--color);
        }
      }
    }
    .message {
      p {
        margin: 0;
        color: var(--color);
        line-height: 20px;
      }
      img {
        display: block;
        width: 100%;
        border-radius: 5px;
        margin-top: 10px;
      }
    }
    .btns {
      margin-top: 15px;
      display: flex;
      align-items: center;
      button {
        background: transparent;
        border: none;
        padding: 0;
        display: flex;
        align-items: center;
        margin-right: 15px;
        cursor: pointer;
        color: var(--color);
        font-size: 12px;
        i {
          width: 32px;
          height: 32px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          margin-right: 5px;
          font-size: 16px;
        }
        &.blue:hover {
          i {
            background: rgba($blue, 0.1);
          }
          color: $blue;
        }
        &.green:hover {
          i {
            background: rgba($green, 0.1);
          }
          color: $green;
        }
        &.red:hover {
          i {
            background: rgba($red, 0.1);
          }
          color: $red;
        }
      }
    }
  }
  &:hover {
    background: var(--bg2);
  }
}
.iframe-container {
  overflow: hidden;
  padding-top: 56.25%;
  position: relative;
  border-radius: 5px;
  display: block;
  margin-top: 10px;
  iframe {
    border: 0;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
}

.search-container {
  margin-bottom: 20px;
  .search-input {
    width: 100%;
    position: relative;
    input {
      background: var(--bg3);
      position: relative;
      border: none;
      box-sizing: border-box;
      width: 100%;
      color: var(--color);
      padding: 15px 15px 15px 55px;
      border-radius: 5px;
      font-size: 14px;
      font-weight: 500;
      &:not(:placeholder-shown) ~ i {
        opacity: 1;
      }
    }
    i {
      position: absolute;
      left: 20px;
      top: 50%;
      transform: translateY(-50%);
      opacity: 0.4;
      pointer-events: none;
      user-select: none;
      color: var(--color);
    }
    img {
        position: absolute;
        display: flex;
        width: 20px;
        height: 20px;
        margin-top: 17px;
        margin-left: 20px;
    }
  }
  .search-results {
    border-top: 1px solid var(--bg2);
    background: var(--bg3);
    border-radius: 0 0 5px 5px;
    overflow: hidden;
    display: none;
    .result {
      padding: 10px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      color: var(--color);
      p {
        margin: 0;
      }
      img {
        width: 42px;
        height: 42px;
        display: block;
        margin-right: 15px;
        object-fit: cover;
        border-radius: 50%;
      }
      span {
        display: block;
        opacity: 0.5;
        font-size: 12px;
      }
      &:hover {
        background: var(--bg2);
        cursor: pointer;
      }
      &:last-child p {
        font-size: 12px;
      }
    }
    hr {
      border: none;
      height: 1px;
      background: var(--bg2);
      margin: 0;
    }
  }
}

#right {
  section {
    padding: 15px;
    box-sizing: border-box;
    border-bottom: 1px solid var(--bg2);
    background: var(--bg3);
    overflow: hidden;
    header {
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      h3 {
        flex: 1;
        font-weight: 400;
        margin: 0;
        color: var(--color);
      }
      button {
        padding: 0;
        border-radius: 50%;
        background: transparent;
        border: none;
        cursor: pointer;
        width: 24px;
        height: 24px;
        color: var(--color);
        &:hover {
          background: var(--bg2);
        }
      }
      a {
        text-decoration: none;
        font-size: 12px;
        color: $blue;
      }
    }
    &:first-of-type {
      border-radius: 3px 3px;
    }
    &:last-of-type {
      border-bottom: none;
      border-radius: 0 0 3px 3px;
    }
  }
  main {
    a {
      text-decoration: none;
      color: var(--color);
      margin-bottom: 15px;
      display: block;
      &:not(.trend) {
        display: flex;
        align-items: center;
      }
      img {
        width: 42px;
        height: 42px;
        display: block;
        object-fit: cover;
        border-radius: 50%;
      }
      .trend-num {
        font-size: 12px;
        opacity: 0.5;
      }
      .trend {
        p {
          margin: 2px 0;
        }
        span {
          display: block;
          opacity: 0.5;
          font-size: 12px;
        }
        .quote {
          border-radius: 5px;
          overflow: hidden;
          display: flex;
          align-items: center;
          border: 1px solid var(--bg2);
          margin-top: 5px;
          .info {
            flex: 1;
            padding: 10px;
            box-sizing: border-box;
            border-right: 1px solid var(--bg2);
          }
          img {
            border-radius: 0;
            width: 61px;
            height: 61px;
          }
          &:hover {
            background: var(--bg2);
            .info > p {
              color: $blue;
            }
          }
        }
      }
      .user {
        margin-left: 15px;
        p {
          margin: 0;
          display: flex;
          align-items: center;
          small {
            margin-left: 5px;
          }
        }
        span {
          font-size: 12px;
          opacity: 0.5;
          display: block;
        }
      }
      &:hover > .user p,
      &:hover > .trend > p {
        color: $blue;
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
