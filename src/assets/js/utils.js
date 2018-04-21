/**
 * Created by 12 on 2017/7/6.
 */
// const api = location.href.indexOf('localhost') > -1 ? 'http://127.0.0.1/book': '/book'
export const api = 'http://localhost:8000/book'

export default {
  install(Vue, options) {
    Vue.prototype.common = {
      defaultImage(e) {
        e.target.src = 'http://www.zwdu.com/files/article/image/20/20962/20962s.jpg'
      },
      api
    }
  }
}

/*
* nginx配置
* http://127.0.0.1/book -> https://remove-server.com/book/
*location /book/ {
     rewrite /book/(.*) /book/$1 break;
     proxy_pass https://remote-server.com;
     proxy_redirect     off;
		}
 *  */


