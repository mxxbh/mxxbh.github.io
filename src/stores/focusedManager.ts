import { defineStore } from "pinia";
import { ref } from "vue";

export const useFocusedManager = defineStore("focusedManager", () => {
  const focusedIdx = ref(0);
  const setFocusedIdx = (idx: number) => {
    if (typeof idx !== "number" || idx < 0) {
      focusedIdx.value = 0;
    } else {
      focusedIdx.value = idx;
    }
  };
  return {
    focusedIdx,
    setFocusedIdx,
  };
});
