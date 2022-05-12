# 0512-workshop



### vuex-persistedstate

- Vuex state를 자동으로 부라우저의 LocalStorage에 저장해주는 라이브러리 중 하나

- 페이지가 새로고침 되어도 Vuex state를 유지

```
$ npm i vuex-persistedstate
```



```
# index.js

import createPersistedState from 'vuex-persistedstate'

export default new Vuex.Store({
  plugins:[
    createPersistedState(),
  ],
```

