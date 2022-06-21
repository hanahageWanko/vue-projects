# viewer

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### vue3 setup構文
``` javascript
const props = defineProps(["item", "item2"]);
const emit = defineEmits(["@emitEvent1", "@emitEvent2"]);
emit("@emitEvent1", {key:data});
```
