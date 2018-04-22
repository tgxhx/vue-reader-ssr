import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import localEvent from './local'

Vue.use(Vuex)

let i = 0
// 声明在外部会导致每次访问都是同一个state
// const state = {}

export function createStore () {
  // 每次调用createStore都使用新的state
  const state = {
    index: ++i,
    bar: false,
    font_panel: false,
    font_icon: false,
    bg_color: 1,
    bg_night: false,
    fz_size: 18,
    curChapter: 1,
    windowHeight: '',
    list_panel: false,
    curBookDetailId: 1,
    curBookContentId: 1,
    abc: [],
    bookList: [],
    bookDetail: {},
    bookRelative: [],
    categoryList: [],
    bookContent: {
      title: '',
      content: [],
      chapterList: []
    }
  }
  return new Vuex.Store({
    state,
    mutations,
    actions
  })
}
