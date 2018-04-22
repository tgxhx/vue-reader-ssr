import axios from 'axios'
import {api}from '../assets/js/utils'

function fetch(url, method = 'get') {
  return new Promise((resolve, reject) => {
    const config = {
      method,
      url
    }
    axios(config)
      .then(res => {
        if (res.status === 200) {
          resolve(res.data)
        } else {
          resolve(res)
        }
      })
      .catch(err => {
        console.error(err)
        reject(err)
      })
  })
}

export const fetchBooklist = () => fetch(`${api}/booklist`)

export const fetchBookDetail = (id) => fetch(`${api}/booklist?id=${id}`)

export const fetchBookCategory = (type) => fetch(`${api}/type?type=${type}`)

export const fetchBookContent = (id, chapter) => fetch(`${api}/book?book=${id}&id=${chapter}`)

export const fetchBookChapters = (id) => fetch(`${api}/titles?id=${id}`)
