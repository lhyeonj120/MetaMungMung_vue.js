<template>
  <div class="services_section layout_padding">
    <div class="container">
      <h1 class="services_taital">
        <span>스토어</span>
        <img
          src="@/assets/images/offMeeting/paw-print.png"
          style="width: 70px"
        />
        <span style="color: #1f1f1f">멍멍스토어</span>
      </h1>
      <!--일반-->
      <div class="bn-line"></div>
      <div class="top-line"></div>

      <!-- 카테고리 -->
      <article class="product">
        <section>
          <div class="mo-into-title">
            <div style="min-width: 700px" class="sub-title">
              <span
                style="text-algin: center; width: 100px; height: 50px"
                class="box ivory"
                >간식 / 사료</span
              >
            </div>

            <div style="margin-bottom: -30px" class="main-title">
              <h3>[냠냠] 펫밀크 퓨추라 럭스</h3>
              <!-- <h3 style="color: black; font-weight: bolder">15,000원</h3> -->
            </div>
          </div>

          <div class="detail">
            <div class="detail-photo">
              <img
                id="detail-img"
                src="https://images-dev.wefluffy.co.kr/product-option/8149/1000011210_detail_069.webp"
              />
            </div>
            <form class="option-box">
              <div style="margin-top: 30px" class="price">
                <span
                  class="sale"
                  style="color: red; fone-weight: bold; font-size: 20px"
                  >20<span>%</span></span
                >
                <span class="cost-price">15000원</span>
                <span style="color: black" class="sale-price">15000원</span>
              </div>

              <div class="quantity">
                <span>수량</span>
                <input type="text" value="1" />
                <span class="minus">-</span>
                <span class="plus">+</span>
              </div>

              <div class="mo-btn-box">
                <button id="pd-detail-btn" type="button" name="cart">
                  장바구니
                </button>
                <button type="button" id="pd-detail-btn" name="justdoit">
                  바로 구매
                </button>
              </div>

              <div class="pc-btn-box">
                <button id="pd-detail-btn" type="button" name="justdoit">
                  바로 구매
                </button>
                <div class="pc-side-btn">
                  <button id="pd-detail-btn" type="button" name="cart">
                    장바구니
                  </button>
                  <button id="pd-detail-btn" type="button" name="wish">
                    위시리스트
                  </button>
                </div>
              </div>
              <img
                src="https://images-dev.wefluffy.co.kr/product-detail/1000011210/82608_detail1.webp"
                alt=""
              />
            </form>
            <!-- 상품정보 -->
            <table class="table">
              <tr>
                <td>제품명</td>
                <td>배고파?</td>
                <td>식품의 유형</td>
                <td>기타</td>
              </tr>
              <tr>
                <td>브랜드</td>
                <td>일단밥을먹어</td>
                <td>배송타입</td>
                <td>뇸뇸뇸</td>
              </tr>
              <tr>
                <td>제조년월일</td>
                <td>제조일로부터 일주일이내 포장된 제품으로 발송됩니다.</td>
                <td>품질유지기한</td>
                <td>제조일로부터 120일</td>
              </tr>
            </table>
          </div>

          <div class="infomation">
            <div class="infomation-container">
              <div style="margin-bottom: -50px" class="pc-into-title">
                <div class="sub-title">
                  <span
                    style="margin-top: -30px; width: 100px; height: 50px"
                    class="box ivory"
                    >간식 / 사료</span
                  >
                </div>

                <div class="main-title">
                  <h2>펫밀크</h2>
                  <span
                    style="color: black; font-weight: bold; font-size: 20px"
                    class="orange"
                    >15000원</span
                  >
                </div>
              </div>

              <div class="pickup">
                <div class="stop-pickup">
                  <p>매장 픽업 서비스가 한시적으로 중단됩니다.</p>
                  <span class="line">자세히 보기</span>
                </div>
              </div>

              <div class="custom">
                <div class="color-style">
                  <p>• 상품명 : 블랙/블랙/화이트</p>
                  <p>• 카테고리 : DR7194-010</p>
                  <p>• 브랜드 : DR7194-010</p>
                  <p>• 용량 : DR7194-010</p>
                  <span class="line" onclick="하잉()">더 보기</span>
                </div>
              </div>

              <div class="infomation-accordion">
                <div class="acco-wrapper">
                  <div class="acco-section open">
                    <h4 class="acco-title">고객안내</h4>
                    <div class="acco-content">
                      <strong> 간편결제 이벤트 안내 </strong>
                      <p>
                        PAYCO 충전포인트 결제 시, 추가 적립 혜택이 제공됩니다.
                      </p>
                      <span class="line">이벤트 자세히 보기</span>
                    </div>
                  </div>
                </div>

                <div class="acco-wrapper">
                  <div class="acco-section close">
                    <h4 class="acco-title">리뷰</h4>
                    <div class="acco-content">
                      <span class="line">리뷰 작성하기</span>
                      <h3>★★★★☆<br />18개의 REVIEWS</h3>

                      <div class="review">
                        <p class="bold">컬러</p>
                        <div class="review-value">
                          <div class="gage">
                            <span class="gage-color-dot"></span>
                          </div>

                          <div class="value-txt">
                            <span class="left-txt">화면보다 밝은</span>
                            <span class="right-txt">화면보다 어두운</span>
                          </div>
                        </div>
                      </div>

                      <div class="review">
                        <p class="bold">사이즈</p>
                        <div class="review-value">
                          <div class="gage">
                            <span class="gage-size-dot"></span>
                          </div>

                          <div class="value-txt">
                            <span class="left-txt">작은</span>
                            <span class="right-txt">큰</span>
                          </div>
                        </div>
                      </div>

                      <div class="real-review">
                        <div class="review-summary">
                          <strong>생각보다 작음요</strong>
                          <p>★★★★★</p>
                          <div class="small-gray">
                            <h5>채뭉길</h5>
                            <h5>2022.09.15</h5>
                            <h5>DR7194-010</h5>
                            <h5>L</h5>
                          </div>
                          <p>
                            휘뚜루마뚜루 막 들고 다니기 좋아요. 와이프
                            조공용으로 굿. 각잡힌 건줄 알았는데 그건 아니네여..
                          </p>
                        </div>

                        <div class="review-summary">
                          <strong>들고다니기 깜찍하고 좋아여</strong>
                          <p>★★★★★</p>
                          <div class="small-gray">
                            <h5>신동민</h5>
                            <h5>2022.09.15</h5>
                            <h5>DR7194-010</h5>
                            <h5>M</h5>
                          </div>
                          <p>이쁘고 깜찍하네요~ 가격대비 좀 작긴 한듯ㅎㅅㅎ</p>
                        </div>

                        <span class="line">더 많은 리뷰 보기</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="acco-wrapper">
                  <div class="acco-section close">
                    <h4 class="acco-title">친환경 소재 더 알아보기</h4>
                    <div class="acco-content">
                      <p>
                        나이키 제품에 사용되는 재생 폴리에스터는 재활용
                        플라스틱병을 세척한 후 조각으로 분쇄한 알갱이로
                        만듭니다. 이 알갱이들은 나이키 제품에 사용되는 새로운
                        고품질 원사로 재탄생하여 최상의 성능을 발휘하는 동시에
                        환경에 미치는 영향은 줄입니다. 재생 폴리에스터는
                        폐기물을 줄여줄 뿐 아니라 기존 폴리에스터보다 탄소
                        배출량을 최대 30% 감축합니다. 나이키는 쓰레기 매립지와
                        수로에 쌓여있는 연평균 약 10억 개의 플라스틱 병을
                        재활용하고 있습니다.
                      </p>
                      <p><br /></p>
                      <p>
                        우리가 스포츠를 즐기며 살아가는 지구의 미래를 보호하기
                        위해 지속 가능성을 염두에 둔 제품 디자인 과정 등 탄소
                        제로와 폐기물 제로를 향한 나이키의
                        <span class="blackline">Move to Zero</span> 에 대해 더
                        자세히 알아보세요.
                      </p>
                      <p><br /></p>
                      <strong>제품 특징</strong>
                      <p>
                        이 제품은 65% 이상 재생 폴리에스터 섬유로
                        제작되었습니다.
                      </p>
                      <p><br /></p>
                      <span class="blackline">지속 가능 컬렉션 구매하기</span>
                    </div>
                  </div>
                </div>

                <div class="acco-wrapper">
                  <div class="acco-section close">
                    <h4 class="acco-title">배송</h4>
                    <div class="acco-content">
                      <strong>일반배송 안내</strong>
                      <ul class="delivery">
                        <li>• 배송지역 : 전국(일부 지역 제외)</li>
                        <li>
                          • 배송비 : 상품의 구매금액에 상관없이 모든 상품
                          무료배송
                        </li>
                        <li>
                          • 배송기간 : 결제 후 약 3일 이내 (토요일, 공휴일 제외)
                        </li>
                        <li>
                          • 배송안내 : 상품의 출고지 또는 물류센터 보관장소에
                          따라 분리 배송
                        </li>
                      </ul>

                      <strong
                        >오늘도착 안내
                        <span class="back-black">나이키멤버 전용</span></strong
                      >
                      <ul class="delivery">
                        <li>
                          • 이용시간 : 13시까지 결제 시, 당일도착(공휴일제외)
                        </li>
                        <li>
                          • 이용가능상품 : 상품 상세 페이지
                          <img
                            src="https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/theme/c-commerce/assets/images/icon-sameday.png"
                            alt="오늘도착 배송 아이콘"
                          />
                          <span class="back-black">오늘도착</span> 표기 제품
                        </li>
                        <li>• 이용가능수량 : 1회 주문 시, 최대 수량 2개</li>
                        <li>
                          • 이용방법 : 결제화면 배송방식 선택 시, "오늘도착"
                          배송 선택
                        </li>
                        <li>
                          • 배송지역 : 서울∙과천∙의왕∙군포∙수원∙성남∙안양시
                          전체, 부천시 중동, 상동, 심곡동, 용인시 수지구∙기흥구
                        </li>
                        <li>• 서비스비용 : 5,000원</li>
                        <li class="notice">
                          • 오늘도착 안내사항
                          <span class="line">자세히 보기</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="acco-wrapper">
                  <div class="acco-section close">
                    <h4 class="acco-title">반품 / AS</h4>
                    <div class="acco-content">
                      <strong>무료반품 서비스</strong>
                      <ul class="service">
                        <li>
                          • 상품의 구매금액에 상관없이 무료반품서비스를 제공하고
                          있습니다.
                        </li>
                      </ul>

                      <strong>매장 반품 접수</strong>
                      <ul class="service">
                        <li>• 매장 반품 서비스가 한시적으로 중단됩니다.</li>
                      </ul>

                      <strong>반품 안내</strong>
                      <ul class="service">
                        <li>
                          • 반품접수는 상품수령 후 7일 이내에 상품 미훼손 및
                          미사용한 경우에만 해당됩니다.
                        </li>
                        <li>
                          • 색상/사이즈 불만족, 고객 변심 반품의 경우, 오늘도착
                          서비스 (배송)비용에 대한 배송비는 환불되지 않음을
                          유의해 주시기 바랍니다.
                        </li>
                        <li>
                          • 나이키닷컴 [마이페이지 > 취소/반품]에서 반품 접수
                          부탁드립니다. 택배사 어플 등을 통한 개별 반품 접수 시
                          추가 시일이 소요될 수 있습니다.
                        </li>
                        <li><span class="line">자세히 보기</span></li>
                      </ul>

                      <strong>AS 안내</strong>
                      <ul class="service">
                        <li>
                          • 나이키닷컴에서 구매하신 제품에 대해 A/S 접수를
                          원하실 경우에는 마이페이지 내 A/S 신청·조회 페이지를
                          이용해 주세요.
                        </li>
                        <li><span class="line">자세히 보기</span></li>
                      </ul>

                      <strong>미성년자 권리보호 안내</strong>
                      <ul class="service">
                        <li>
                          • 미성년 고객께서 상품을 주문(계약) 하시는 경우,
                          법정대리인(부모님 등)의 동의가 없으면 미성년자 본인
                          또는 법정대리인(부모님 등)이 그 주문(계약)을 취소하실
                          수 있습니다.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="product-modal">
                <a class="modal-close" onclick="빠잉()">✕</a>

                <div class="item-name">
                  <div class="item-image">
                    <img
                      src="https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DR7194-010/835e3635-a0bd-42e6-8fab-1b980527b67b_primary.jpg?thumbnail"
                      alt="작은 이미지"
                    />
                  </div>
                  <div class="item-txt">
                    <p>펫밀크</p>
                    <span style="color: #808080" class="orange"
                      >브랜드 : cj</span
                    >
                    <p>15,000원</p>
                  </div>
                </div>

                <div class="item-guide">
                  <strong>상품정보제공고시</strong>
                  <div class="item-guide-detail">
                    <p class="bold">종류</p>
                    <p class="gray">아이템 백</p>

                    <p class="bold">소재</p>
                    <p class="gray">폴리에스터 100%</p>

                    <p class="bold">색상</p>
                    <p class="gray">블랙/화이트</p>

                    <p class="bold">크기</p>
                    <p class="gray">
                      정확한 제품의 크기와 중량 정보는 배송 받으신 제품의 라벨을
                      참고하시기 바랍니다.
                    </p>

                    <p class="bold">제조자</p>
                    <p class="gray">Nike inc.</p>

                    <p class="bold">제조국</p>
                    <p class="gray">
                      정확한 제조국은 배송 받으신 제품의 라벨을 참고하시기
                      바랍니다.
                    </p>

                    <p class="bold">품질보증기준</p>
                    <p class="gray">관련법 및 소비자분쟁해결 규정에 따름</p>

                    <p class="bold">A/S 책임자와 전화번호</p>
                    <p class="gray">
                      (유)나이키스포츠 온라인 스토어 고객센터 / 080-022-0182
                    </p>
                  </div>
                </div>

                <div class="item-notice">
                  <strong>취급시 주의사항</strong>
                  <ul>
                    <li>• 일부 제품은 세탁이 불가합니다.</li>
                    <li>• 필요 시 천을 사용하여 닦아주십시오.</li>
                    <li>• 표백제 및 강력효소제는 절대 사용하지 마십시오.</li>
                    <li>• 다림질을 하지 마십시오.</li>
                    <li>• 드라이 클리닝을 하지 마십시오.</li>
                    <li>• 사용 전 취급주의사항을 보고 사용하여 주십시오.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>

      <!-- <script type="text/javascript" src="script.js"></script> -->
    </div>
  </div>
</template>

<script>
import ProductCategory from "@/components/store/product/ProductCategory.vue";
import { onMounted } from "vue";
export default {
  components: {
    ProductCategory,
  },
  setup() {
    onMounted(() => {
      checkFunc();
    });

    const checkFunc = () => {
      let overlay = null;
      let headerSection = null;

      check();

      function check() {
        if (overlay == null) {
          overlay = document.getElementsByClassName("overlay")[0];
        }
        if (headerSection == null) {
          headerSection = document.getElementsByClassName("header_section")[0];
        }
      }

      headerSection.classList.add("background_bg");
      document.getElementById("bannerDiv").style.display = "none";
    };

    return {
      checkFunc,
    };
  },
};
</script>

<style scoped>
@import "@/assets/css/store/product/list/product-list.css";
/* @import "@/assets/css/store/product/detail/product-detail.css"; */

strong {
  display: block;
  font-size: 1.1rem;
  padding-top: 10px;
}

.menu-box-1 {
  text-align: center;
}
.menu-box-1 > ul > li {
  width: calc(100% / 7);
}
.menu-box-1 ul > li > a {
  display: block;
  padding: 5px 0;
  font-weight: bold;
}
.menu-box-1 ul > li:hover > a {
  color: red;
  text-decoration: underline;
}
.menu-box-1 > ul ul {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  z-index: 1;
}
.menu-box-1 > ul ul::after {
  content: "";
  background-color: rgba(200, 200, 200, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-top: 1px solid gray;
  z-index: -1;
}
.menu-box-1 > ul ul > li > a {
  font-weight: normal;
  font-size: 0.8rem;
  padding: 3px 0;
}
.menu-box-1 ul > li {
  position: relative;
}
.menu-box-1 > ul > li:hover > ul {
  display: block;
}

/* 메뉴 구분선 */
.menu-box-1 > ul > li > a::after {
  content: "";
  width: 2px;
  height: 50%;
  /* background-color: black; */
  position: absolute;
  top: 50%;
  right: 0;
  transform: translatey(-50%);
}
.menu-box-1 > ul > li:first-child > a::before {
  content: "";
  width: 2px;
  height: 50%;
  /* background-color: black; */
  position: absolute;
  top: 50%;
  left: 0;
  transform: translatey(-50%);
}

@media (max-width: 1000px) {
  .menu-box-1,
  .logo-bar {
    display: none;
  }
  .top-bar {
    display: block;
  }
}

/*--------- default setting ---------*/

h2 {
  font-family: "SLEIGothicTTF";
  font-size: 2rem;
  line-height: 2.8rem;
  padding: 15px 0;
}

h3 {
  font-size: 1.5rem;
  line-height: 2.5rem;
  padding: 30px 0;
}

h4 {
  font-size: 1.3rem;
  line-height: 2rem;
}

h5 {
  font-size: 0.95rem;
  line-height: 1.5rem;
  font-weight: 400;
}

#pd-detail-btn {
  display: inline-block;
  padding: 15px 0;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  background: none;
  border: 1px solid #888;
  transition: 0.3s;
  cursor: pointer;
}

#pd-detail-btn:hover {
  background: #e5e5e5;
  border: 1px solid #000;
}

li {
  list-style: none;
}

#detail-img {
  width: 100%;
  vertical-align: top;
}

/*--------- common class setting ---------*/
.bold {
  font-weight: bold;
}

.gray {
  color: #777;
}

.small-gray {
  color: #777;
  font-size: 0.75rem;
}

.orange {
  font-weight: bold;
  color: #dd602a;
}

.line {
  display: block;
  color: #777;
  font-size: 0.9rem;
  margin-top: 15px;
  text-decoration: underline;
  cursor: pointer;
  transition: 0.2s;
}

.line:hover {
  color: #000;
  font-weight: bold;
}

.blackline {
  color: #000;
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
  transition: 0.2s;
}

.blackline:hover {
  color: #dd602a;
}

.back-black {
  background-color: #000;
  color: #fff;
  font-size: 0.9rem;
  padding: 0 2px;
}

.size,
.quantity,
.mo-btn-box,
.pc-btn-box,
.stop-pickup,
.color-style {
  padding: 30px 5%;
}

.acco-title,
.acco-content {
  padding: 20px 5%;
}

.detail,
.option-box,
.pickup,
.custom,
.acco-wrapper {
  border-bottom: 1px solid #d5d5d5;
}

.acco-content,
.real-review {
  border-top: 1px solid #d5d5d5;
}

/*--------- product ---------*/
.product {
  padding: 50px 0;
  margin: 0 auto;
}

.product .mo-into-title,
.infomation .pc-into-title {
  padding: 30px 5%;
}

.product .mo-into-title .sub-title,
.infomation .pc-into-title .sub-title {
  display: flex;
  justify-content: space-between;
}

.product .follow-btn-box {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px 5%;
  background: #fff;
  border-top: 1px solid #ddd;
  z-index: 3;
}

.follow-btn-box #pd-detail-btn[name="justdoit"] {
  background: #dd602a;
}

.detail {
  width: 100%;
  padding-bottom: 50px;
}

.detail-photo {
  position: relative;
}

.infomation .pc-into-title {
  display: none;
}

.size h5 {
  background-color: #f5f5f5;
}

.size #pd-detail-btn {
  width: 80px;
  margin-top: 20px;
  border-radius: 5px;
}

.size-wrapper {
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
}

.size-wrapper .line {
  margin-top: 0;
}

.quantity {
  border-bottom: 1px solid #ddd;
}

.quantity span {
  display: inline-block;
  font-size: 1.2rem;
  vertical-align: middle;
  margin-right: 10px;
}

.quantity input {
  height: 35px;
  width: 60px;
  text-align: center;
  font-size: 1.2rem;
  border: 0;
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
}

.minus,
.plus {
  padding: 2px 0;
  width: 40px;
  text-align: center;
  border: 2px solid #ddd;
  background: #f5f5f5;
  border-radius: 10px;
  font-size: 2rem !important;
  line-height: 2rem;
  cursor: pointer;
}

.product .follow-btn-box,
.mo-btn-box {
  display: flex;
  justify-content: space-between;
}

.product .follow-btn-box #pd-detail-btn,
.mo-btn-box #pd-detail-btn {
  width: 46%;
  border-radius: 50px;
}

.pc-btn-box {
  display: none;
}

#pd-detail-btn[name="justdoit"] {
  border: 3px solid #fff;
  background: #000;
  color: #fff;
}

#pd-detail-btn[name="justdoit"]:hover {
  border: 3px solid #dd602a;
  background: rgba(221, 96, 42, 0.3);
  color: #000;
}

/*--------- product accordion part---------*/
.acco-content h3 {
  padding: 10px 0;
}

.review {
  margin: 20px 0;
}

.review .gage {
  position: relative;
  width: 100%;
  height: 4px;
  margin: 15px 0;
  background-color: #ddd;
}

.review .gage-color-dot,
.review .gage-size-dot {
  position: absolute;
  top: -3px;
  width: 10px;
  height: 10px;
  background-color: #000;
  border-radius: 50%;
}

.review .gage-color-dot {
  left: 50%;
}

.review .gage-size-dot {
  left: 26%;
}

.review .review-value .value-txt {
  display: flex;
  justify-content: space-between;
}

.real-review {
  padding: 30px 0 10px;
}

.real-review .review-summary {
  padding-bottom: 40px;
}

.review-summary * {
  display: block;
  padding: 5px 0;
}

.review-summary .small-gray {
  display: flex;
}

.review-summary .small-gray h5 {
  margin-right: 15px;
}

.acco-wrapper .acco-title {
  font-family: "Happiness-Sans-Title";
  position: relative;
  transition: 0.3s;
  cursor: pointer;
}

.acco-wrapper .acco-title:after {
  content: "﹀";
  position: absolute;
  display: block;
  width: 30px;
  height: 30px;
  top: 27px;
  right: 20px;
}

.delivery,
.service {
  padding: 20px 0 30px;
}

.delivery img {
  width: 35px;
  vertical-align: middle;
}

.delivery .notice {
  display: flex;
}

.delivery .notice .line {
  margin: 0 0 0 8px;
}

/*--------- product modal part---------*/
.product-modal {
  width: 100%;
  height: 100vh;
  padding: 50px 5%;
  background-color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  position: fixed;
  overflow: scroll;
  display: none;
}

.modal-close {
  position: absolute;
  top: 20px;
  right: 3%;
  font-size: 25px;
  font-weight: bold;
  padding: 7px;
  text-align: center;
  vertical-align: middle;
  transition: 0.4s;
  cursor: pointer;
}

.modal-close:hover {
  background: #444;
  color: #fff;
  border-radius: 5px;
}

.item-name {
  display: flex;
  padding-bottom: 30px;
  border-bottom: 1px solid #ddd;
}

.item-txt {
  margin-left: 10px;
}

.item-guide {
  padding: 20px 0;
  border-bottom: 1px solid #ddd;
}

.item-guide-detail {
  padding: 20px 10px;
}

.item-guide-detail .gray:not(:last-child) {
  margin-bottom: 15px;
}

.item-notice {
  padding: 20px 0;
}

.item-notice ul {
  padding-top: 20px;
}

/*--------- product JS class---------*/
.acco-section {
  display: block;
}

.acco-section.close {
  height: 70px;
}

.close .acco-content {
  height: 0px;
  transition: height 1s ease-out;
  transform: scaleY(0);
}

.open .acco-content {
  width: 100%;
  display: block;
  transform: scaleY(1);
  transform-origin: top;
  transition: transform 0.4s ease;
}

.open .acco-title {
  margin: 0px;
  background-color: rgba(221, 96, 42, 0.2);
  border: 1px solid #dd602a;
}

/*--------- recommend ---------*/
.recommend {
  position: relative;
  padding: 50px 10%;
  width: 100%;
}

.recommend .pre,
.recommend .next {
  position: absolute;
  top: 45%;
  font-size: 2rem;
  line-height: 2rem;
  font-weight: bold;
  color: white;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 10%;
  padding: 5px;
  text-align: center;
  cursor: pointer;
  transition: 0.4s;
  z-index: 3;
}

.recommend .pre:hover,
.recommend .next:hover {
  background: #000;
}

.recommend .pre {
  left: 1px;
}

.recommend .next {
  right: 1px;
}

.recommend h2 {
  padding: 0 0 30px;
  text-align: center;
}

.recommend .slide-container {
  overflow: hidden;
}

.recommend .slider {
  margin: 0 auto;
  width: 100%;
  display: flex;
  transition: all 0.5s ease-in-out;
}

.slide-item,
.slide-img,
.slide-txt {
  width: 140px;
}

.slide-txt {
  padding-top: 10px;
}

.slide-item:not(:last-child) {
  margin-right: 10px;
}

.slide-item {
  cursor: pointer;
}

.slide-img {
  overflow: hidden;
  border: 2px solid white;
  transition: 0.4s;
}

.slide-img img {
  transition: 0.4s;
  transform: scale(1);
}

.slide-item:hover .slide-img {
  border: 2px solid #dd602a;
}

.slide-item:hover .slide-img img {
  transform: scale(1.2);
}

.recommend .slide-txt .gray {
  display: block;
}

/*--------- pc ver. ---------*/
@media screen and (min-width: 1366px) {
  .product {
    width: 100%;
    margin: 0 auto;
  }

  .mo-into-title,
  .product .follow-btn-box,
  .mo-btn-box {
    display: none;
  }

  .product > section {
    display: flex;
    justify-content: space-between;
  }

  .product .detail {
    width: 65%;
    border: 0;
  }

  .product .infomation {
    width: 33%;
  }

  .infomation .pc-into-title,
  .pc-btn-box {
    display: block;
  }

  .pc-side-btn {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }

  .pc-side-btn #pd-detail-btn {
    width: 48%;
    border-radius: 50px;
  }

  #pd-detail-btn[name="justdoit"] {
    width: 100%;
    border: 3px solid #fff;
    background: #000;
    color: #fff;
    border-radius: 50px;
  }

  #pd-detail-btn[name="wish"] {
    background: url("https://cdn-icons-png.flaticon.com/512/1076/1076818.png")
      no-repeat;
    background-size: 25px auto;
    background-position: 130px;
    padding-right: 15px;
  }

  #pd-detail-btn[name="wish"]:hover {
    background: url("https://cdn-icons-png.flaticon.com/512/290/290583.png")
      no-repeat;
    background-color: lavenderblush;
    background-size: 25px auto;
    background-position: 130px;
  }

  .recommend {
    width: 1250px;
    margin: 0 auto;
    padding: 100px 0;
  }

  .recommend h2 {
    padding-bottom: 50px;
  }

  .recommend .pre,
  .recommend .next {
    font-size: 2.5rem;
    line-height: 2.5rem;
  }

  .recommend .pre {
    left: -40px;
  }

  .recommend .next {
    right: -40px;
  }

  .slide-item,
  .slide-img,
  .slide-txt {
    width: 350px;
  }

  .slide-item:not(:last-child) {
    margin-right: 30px;
  }
}

.price {
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 16px;
}
.price:after {
  display: block;
  content: "";
  clear: both;
}
.cost-price {
  float: left;
  margin: 5px 0 0 20px;
  font-size: 15px;
  color: #5a5a5a;
  text-decoration: line-through;
}
.sale-price {
  float: left;
  margin: 15px 0 0 -55px;
  font-family: "Tahoma";
  font-weight: bold;
  font-size: 25px;
}
.price ~ .manufact,
.categori,
.origin {
  padding: 16px 0 16px 10px;
  border-bottom: 1px solid #e6e6e6;
  font-size: 18px;
  white-space: pre;
}
.price ~ .manufact span,
.categori span,
.origin span {
  color: #6a6a6a;
}

.box {
  border-radius: 15px 15px 15px 15px;
  width: 150px;
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
</style>
