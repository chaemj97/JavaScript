"use strict";

const socket = io();

const nickname = document.querySelector("#nickname");
const chatList = document.querySelector(".chatting-list");
const chatInput = document.querySelector(".chatting-input");
const sendButton = document.querySelector(".send-button");
const displayContainer = document.querySelector(".display-container");

// 엔터쳐서 전송하고 싶음
chatInput.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    send();
  }
});

function send() {
  const param = {
    name: nickname.value,
    msg: chatInput.value,
  };
  // 서버로 보내기
  socket.emit("chatting", param);
  // 인풋 창 초기화
  chatInput.value = "" ;
}

sendButton.addEventListener("click", send);

// 서버에서 받기
socket.on("chatting", (data) => {
  const { name, msg, time } = data;
  // 초기화, 인스턴스화
  const item = new LiModel(name, msg, time);
  item.makeLi();
  displayContainer.scrollTo(0, displayContainer.scrollHeight);
});

function LiModel(name, msg, time) {
  this.name = name;
  this.msg = msg;
  this.time = time;

  this.makeLi = () => {
    const li = document.createElement("li");
    li.classList.add(nickname.value === this.name ? "sent" : "received");
    const dom = `
      <span class="profile">
        <span class="user">${this.name}</span>
        <img
          src="https://placeimg.com/50/50/any"
          class="image"
          alt="any"
        />
      </span>
      <span class="message">${this.msg}</span>
      <span class="time">${this.time}</span>`;
    li.innerHTML = dom;
    chatList.appendChild(li);
  };
}
