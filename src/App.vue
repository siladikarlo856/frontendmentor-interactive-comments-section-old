<template>
  <header>
    <!-- There is not header in this app but this will stay as a placeholder. -->
  </header>

  <main>
    <Comments />
    <div class="new-comment-container">
      <img class="user-avatar-container" src="@/assets/images/avatars/image-juliusomo.webp" />

      <textarea
        name="new-comment-content"
        id="new-comment-content"
        rows="4"
        placeholder="Add a comment..."
        v-model="newCommentContent"
      ></textarea>

      <button id="new-comment-form" class="new-comment-button" @click="addComment()">SEND</button>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Comments from "@/components/CommentsList.vue";
import { useStore } from "@/stores/store";

export default defineComponent({
  setup() {
    const mainStore = useStore();
    const newCommentContent = ref("");

    function addComment() {
      // Prevent adding a comment without the content.
      if (newCommentContent.value !== "") {
        mainStore.addComment(newCommentContent.value);
        // Reset input field after adding comment.
        newCommentContent.value = "";
      }
    }

    return {
      mainStore,
      newCommentContent,
      addComment,
    };
  },
  components: {
    Comments,
  },
});
</script>

<style>
@import "./assets/base.css";
#app {
  margin: 0 auto;
}

body {
  display: flex;
  place-items: center;
}

.new-comment-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: var(--paragraph-fs);
  width: 100%;
  border: none;
  border-radius: var(--boder-radius);
  background-color: white;
  padding: 1.5rem;
}

#new-comment-content {
  font-family: var(--main-font-family), sans-serif;
  font-size: var(--paragraph-fs);
  min-height: 3ch;
  width: 48ch;
  padding: 1rem;
  border: 1px solid rgb(211, 211, 211);
  border-radius: var(--boder-radius);
  resize: none;
}

.user-avatar-container {
  width: 3rem;
  height: 3rem;
}

.new-comment-button {
  height: 3rem;
  padding: 1em 1.5em;
  border: none;
  border-radius: var(--boder-radius);
  font-size: var(--paragraph-fs);

  color: white;
  font-weight: 500;
  background-color: var(--primary-moderate-blue);
}
</style>
