# vuex-store
Đây là sample đơn giản về việc sử dụng Vuex store. Giải thích đơn giản về store như sau
1. Vuex là thư viện quản lý state
2. Vuex store là Vuex container mà bao gồm state và method để tương tác với state
3. Vuex được tạo thành từ `state`, `mutations`, `actions`  và `getters`.
4. `State` là giá trị hiện tại của data bên trong 1 ứng dụng đang chạy (state is the current value of data inside a running application)
5. `mutations` được sử dụng để update state. Đặc điểm của `mutations` như sau:
- Mutations edit the state object directly.
-  Mutations must be called with the commit function.
-  In the Vuex pattern, mutations are the only way to make changes to a store state.
-  Mutations must be synchronous—they can’t contain actions like API calls or
database connections.

6. `actions` giống như mutations nhưng có thể được dùng cho cả xử lý không đồng bộ. Đặc điểm của action như sau:
- Actions are asynchronous.
- Actions can commit mutations.
- Actions have access to the store instance.
- Actions must be called with the dispatch function.

7. `getters` là các functions được sử dụng để tính toán giá trị của state 

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
