import { ref } from "vue";
import { defineStore } from "pinia";
import type { IComment } from "@/models/IComment";
import type { IUser } from "@/models/IUser";

import data from "@/assets/data.json";

export const useStore = defineStore("mainStore", () => {
  const comments = ref<IComment[]>(data.comments);
  const currentUser = ref<IUser>(data.currentUser);

  function addComment(newComment: IComment) {
    comments.value.push(newComment);
  }
  return { comments, addComment, currentUser };
});
