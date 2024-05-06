import { defineCustomElement } from 'vue'

import ChatCard from './components/ChatCard.ce.vue'

const componentsConfig = [
  { tagName: 'cm-chat-card', component: ChatCard},
]

componentsConfig.forEach((config) => {
  customElements.define(config.tagName, defineCustomElement(config.component))
})
