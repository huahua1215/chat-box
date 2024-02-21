<script>
import { ref, nextTick } from "vue";
export default {
  setup() {
    const bobMessage = ref("");
    const youMessage = ref("");
    const messages = ref([
      {
        body: "Welcome to the chat, I'm Bob!",
        author: "bob",
      },
      {
        body: "Thank you Bob",
        author: "you",
      },
      {
        body: "You're most welcome",
        author: "bob",
      },
    ]);
    const sendMessage = (direction) => {
      if (!youMessage.value && !bobMessage.value) {
        return;
      }
      if (direction === "out") {
        messages.value.push({ body: youMessage.value, author: "you" });
        youMessage.value = "";
      } else if (direction === "in") {
        messages.value.push({ body: bobMessage.value, author: "bob" });
        bobMessage.value = "";
      } else {
        alert("something went wrong");
      }
      nextTick(() => {
        let messageDisplay = this.$refs.chatArea;
        messageDisplay.scrollTop = messageDisplay.scrollHeight;
      });
    };
    const clearAllMessages = () => {
      messages.value = [];
    };
    return {
      bobMessage,
      youMessage,
      messages,
      sendMessage,
      clearAllMessages,
    };
  },
};
</script>

<template>
  <h1 class="text-center text-black font-thin">Vue.js Chat Box</h1>

  <main id="app">
    <section
      ref="chatArea"
      class="bg-white h-96 p-8 overflow-auto max-w-screen-sm mx-auto mb-8 shadow"
    >
      <p
        v-for="message in messages"
        class="rounded-xl p-2 text-sm"
        :class="{
          'bg-blue text-white ml-50percent': message.author === 'you',
          'bg-gray text-black mr-50percent': message.author !== 'you',
        }"
      >
        {{ message.body }}
      </p>
    </section>

    <section class="flex justify-between">
      <form class="px-20" @submit.prevent="sendMessage('in')" id="person1-form">
        <label class="block text-left" for="person1-input">Bob</label>
        <input
          v-model="bobMessage"
          class="p-2 my-2 border border-gray rounded-lg"
          id="person1-input"
          type="text"
          placeholder="Type your message"
        />
        <button class="border bg-gray rounded-lg ml-3" type="submit">
          Send
        </button>
      </form>
      <button @click="clearAllMessages">Clear All</button>
      <form
        class="px-20"
        @submit.prevent="sendMessage('out')"
        id="person2-form"
      >
        <label class="block text-left" for="person2-input">You</label>
        <input
          v-model="youMessage"
          class="p-2 my-2 border border-gray rounded-lg"
          id="person2-input"
          type="text"
          placeholder="Type your message"
        />
        <button class="ml-3 border bg-blue text-white rounded-lg" type="submit">
          Send
        </button>
      </form>
    </section>
  </main>
</template>
<!-- scoped限定樣式的作用範圍 -->
