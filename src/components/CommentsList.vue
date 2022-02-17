<template>
  <div class="comments-container" v-for="comment in comments" :key="comment.id">
    <div class="comment-container">
      <div class="vote-container">
        <button class="upvote-button">+</button>
        <div class="score">{{ comment.score }}</div>
        <button class="downvote-button">-</button>
      </div>
      <div class="content-container">
        <div class="info-container">
          <div class="user-info-container">
            <img
              class="user-avatar"
              :src="getUserAvatar(comment.user.image.webp)"
              alt="User avatar"
            />
            <div class="user-name">{{ comment.user.username }}</div>
            <div class="created-at">{{ comment.createdAt }}</div>
          </div>
          <div class="action-button-container">
            <button class="reply-button">
              <img src="@/assets/images/icon-reply.svg" alt="" />Reply
            </button>
          </div>
        </div>
        <div class="text-container">
          {{ comment.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/stores/store";

export default defineComponent({
  setup() {
    const mainStore = useStore();

    function getUserAvatar(imageUrl: string): URL {
      return new URL(`../${imageUrl}`, import.meta.url);
    }

    return {
      comments: mainStore.comments,
      getUserAvatar,
    };
  },
});
</script>

<style>
@import "@/assets/base.css";

.comments-container {
  margin-bottom: 1rem;
}

.comment-container,
.info-container,
.user-info-container,
.action-button-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: var(--paragraph-fs);
}

.comments-container {
  border-radius: 5px;
  background-color: white;
  padding: 1.2rem;
  max-width: 80ch;
}

.vote-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--neutral-very-light-gray);
  border-radius: 5px;
  padding: 5px;
}

.vote-container button {
  cursor: pointer;
  background-color: transparent;
  border: none;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--primary-light-grayish-blue);
}

.vote-container button:hover {
  color: var(--primary-moderate-blue);
}

.score {
  color: var(--primary-moderate-blue);
  font-weight: 500;
  margin: 0.5rem 0;
}

.content-container {
  margin-left: 1.5rem;
}

.info-container {
  justify-content: space-between;
  margin-bottom: 1rem;
}

.user-avatar {
  height: 2rem;
}

.user-name {
  margin-left: 1rem;
  color: black;
  font-weight: 500;
}

.created-at {
  margin-left: 1rem;
  color: var(--neutral-grayish-blue);
}

.reply-button {
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: var(--primary-moderate-blue);
  font-family: var(--main-font-family), sans-serif;
  font-weight: 500;
  font-size: 1rem;
}
.reply-button img {
  margin-right: 0.5rem;
}

.reply-button:hover {
  filter: opacity(0.5);
}

.text-container {
  color: var(--neutral-grayish-blue);
  width: 60ch;
  line-height: 1.25rem;
}
</style>
