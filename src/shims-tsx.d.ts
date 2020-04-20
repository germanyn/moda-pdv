import Vue, { VNode } from 'vue'

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
}

import { Framework } from 'vuetify'
declare module 'vue/types/vue' {
  export interface Vue {
    $vuetify: Framework
  }
}