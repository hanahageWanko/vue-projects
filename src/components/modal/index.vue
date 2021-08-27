<template>
  <div id="overlay" v-show="show" @click="closeModal">
    <div id="content">
      <p>これがモーダルウィンドウです。</p>
      <p><button @click="closeModal">close</button></p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, SetupContext } from "vue";
type Props = {
  showflg: boolean;
};

export default defineComponent({
  name: "modal",
  props: {
    showflg: {
      type: Boolean,
      default: false,
      require: true,
    },
  },
  setup(props: Props, context: SetupContext) {
    const show = computed(() => props.showflg);
    const closeModal = () => {
      context.emit("onCloseModal");
    };
    return {
      show,
      closeModal,
    };
  },
});
</script>
<style lang="scss" scoped>
#overlay {
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;
}

#content {
  z-index: 2;
  width: 50%;
  padding: 1em;
  background: #fff;
}
</style>
