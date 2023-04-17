<template>
  <!-- Modal -->
  <div
    class="modal fade joinMemberModal"
    id="exampleModalLong"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLongTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">...</div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Close
          </button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";

export default {
  setup() {
    const modal = document.getElementsByClassName("joinMemberModal");

    const openJoinMemberModal = () => {
      modal[0].style.display = "block";
    };

    const closeJoinMemberModal = () => {
      modal[0].style.display = "none";
    };

    onMounted(() => {
      window.onclick = function (event) {
        if (event.target == modal[0]) {
          modal[0].style.display = "none";
        }
      };
    });
    return {
      openJoinMemberModal,
      closeJoinMemberModal,
    };
  },
};
</script>

<style scoped>
.joinMemberModal {
  z-index: 5;
}
</style>
