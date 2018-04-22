import * as types from './mutations-types'
import {
  fetchBooklist,
  fetchBookDetail,
  fetchBookCategory,
  fetchBookContent,
  fetchBookChapters
} from '../api'
import axios from 'axios'

export default {
  toggleBar({commit}) {
    commit(types.TOGGLE_BAR)
  },
  showListPanel({commit}) {
    commit(types.SHOW_LIST_PANEL)
  },
  showFontPanel({commit}) {
    commit(types.SHOW_FONT_PANEL)
  },
  fzSizeAdd({commit}) {
    commit(types.FZ_SIZE_ADD)
  },
  fzSizeSub({commit}) {
    commit(types.FZ_SIZE_SUB)
  },
  switchNight({commit}) {
    commit(types.SWITCH_NIGHT)
  },
  prevChapter({commit}) {
    commit(types.PREV_CHAPTER)
  },
  nextChapter({commit, maxChapter}) {
    commit(types.NEXT_CHAPTER, maxChapter)
  },
  chooseBook({commit}, id) {
    commit(types.CHOOSE_BOOK, id)
  },
  showBookDetail({commit}, obj) {
    commit(types.SHOW_BOOK_DETAIL, obj)
  },
  curChapter({commit}, num) {
    commit(types.CUR_CHAPTER, num)
  },
  getBooklist({commit}) {
    return fetchBooklist().then(res => {
      commit('setBooklist', res)
    })
  },
  getBookDetail({commit, dispatch}, id) {
    return fetchBookDetail(id)
      .then(res => {
        commit('setBookDetail', res)
        const ids = res.like.split('-')
        // dispatch('getBookRelative', ids)
        const all = ids.map(id => fetchBookDetail(id))
        return Promise.all(all)
      })
      .then(relative => {
        commit('setBookRelative', relative)
      })
  },
  getBookRelative({commit}, ids) {
  
  },
  getBookCategory({commit}, type) {
    return fetchBookCategory(type)
      .then(res => {
        commit('setBookCategory', res)
      })
  },
  getBookContent({commit, dispatch}, {id, chapter}) {
    return fetchBookContent(id, chapter)
      .then(res => {
        commit('setBookContent', {
          title: res.title,
          content: res.content.split('-')
        })
        // return fetchBookChapters(id)
      })
      /*.then(res => {
        /!*commit('setBookContent', {
          chapterList: res
        })*!/
      })*/
      .catch(err => {
        console.log(err)
      })
  }
}
