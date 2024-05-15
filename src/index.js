import { defineCustomElement } from 'vue'

import ChatCard from './components/ChatCard.ce.vue'
import HeaderComponent from './components/HeaderComponent.ce.vue'
import ComercLogo from '@/components/ComercLogo.ce.vue'

const componentsConfig = [
  { tagName: 'cm-chat-card', component: ChatCard },
  { tagName: 'comerc-top-header', component: HeaderComponent },
  { tagName: 'comerc-logo', component: ComercLogo }
]

componentsConfig.forEach((config) => {
  customElements.define(config.tagName, defineCustomElement(config.component))
})
