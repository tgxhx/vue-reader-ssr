import * as types from './mutations-types'
import {api} from '../assets/js/utils'
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
    return axios.get(`${api}/booklist`).then(res => {
      commit('setBooklist', res.data)
    })
  },
  getBookDetail({commit, dispatch}, id) {
    return axios.get(`${api}/booklist?id=${id}`).then(res => {
      commit('setBookDetail', res.data)
      const likes = res.data.like.split('-')
      dispatch('getBookRelative', likes)
    })
  },
  getBookRelative({commit}, idArr) {
    const all = idArr.map(id => axios.get(`${api}/booklist?id=${id}`))
    return Promise.all(all)
      .then((relateive) => {
        commit('setBookRelative', relateive)
      })
  }
}
