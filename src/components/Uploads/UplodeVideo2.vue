<template>
  <div class="uplodeImage">
    <base-card>
      <div class="chooseImage">
        <transition name="fadeInUp" mode="out-in">
          <video v-if="video.video_src" :src="video.video_src" controls />
          <img v-else src="@/assets/images/Uploads/upload.png" />
        </transition>
        <input
          ref="uplode_file"
          class="file_input"
          type="file"
          accept="video/*"
          name="imageToUplode"
          @change="chooseImage"
        />
      </div>
    </base-card>
  </div>
</template>

<script>
export default {
  emits: ["inputChanged"],

  data() {
    return {
      video: {
        video_file: null,
        video_src: "",
      },
    };
  },

  methods: {
    chooseImage(e) {
      this.video.video_file = e.target.files[0];

      if (this.video.video_file) {
        this.video.video_src = URL.createObjectURL(this.video.video_file);
        this.uplodeDisabled = false;
      }

      this.$emit("inputChanged", this.video);
      e.target.value = null;
    },
  },
};
</script>

<style lang="scss" scoped>
.uplodeImage {
  .chooseImage {
    position: relative;
    width: 40rem;
    text-align: center;
    cursor: pointer;
    margin: 1rem auto;

    img,
    video {
      position: relative;
      top: 0;
      left: 0;
      z-index: 0;
      width: 100%;
      height: 100%;
      padding: 0.6rem 0;
      display: inline-block;
      font-size: 1.5rem;
      text-transform: uppercase;
      cursor: pointer;
    }

    .file_input {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      width: 100%;
      height: 100%;
      display: inline-block;
      opacity: 0;
      cursor: pointer;
    }
  }
}
</style>
