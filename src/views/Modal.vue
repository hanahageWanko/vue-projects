<template>
  <div>
    <button @click="openModal">Click</button>
    {{ showContent }}
    <modalwindow :showflg="showContent" @onCloseModal="onCloseModal" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import modalwindow from "@/components/modal";

export default defineComponent({
  components: {
    modalwindow,
  },
  setup() {
    const showContent = ref(false);
    const openModal = () => {
      showContent.value = true;
    };

    const onCloseModal = () => {
      showContent.value = false;
    };

    return {
      showContent,
      openModal,
      onCloseModal,
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
