# vuex-store
This is simple example about how to use Vuex store. 
1. Vuex is used to manage state
2. Vuex store is Vuex container, which include state and action to interact with state
3. Vuex is made up from `state`, `mutations`, `actions` and `getters`.
4. `state` is the current value of data inside a running application
5. `mutations` is used to update the state. The characteristics of `mutations` are as follows:
- Mutations edit the state object directly.
-  Mutations must be called with the commit function.
-  In the Vuex pattern, mutations are the only way to make changes to a store state.
-  Mutations must be synchronous—they can’t contain actions like API calls or
database connections.

6.`actions` is like mutations but it can also be used for asynchronous processing. The action features are as follows: 
- Actions are asynchronous.
- Actions can commit mutations.
- Actions have access to the store instance.
- Actions must be called with the dispatch function.

7. `getters` are functions used to calculate the value of state

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
