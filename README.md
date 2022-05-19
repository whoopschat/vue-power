# vue-power-show
> vue power check component


## Getting started
* make sure node and npm installed;

### Install
```
> npm install vue-power-show
```

### Usage
##### main.js
```javascript
import vue from 'vue';
import vue_power from 'vue-power-show';

// install
vue.use(vue_power);
// set report handler
vue_power.setPowerHandler((param) => {
    // check power
    return true;
})
```
##### app.vue
```javascript
<template>
  <div>
    <div v-power="power1">
    </div>
  </div>
</template>
```

## Development
* make sure node and npm installed;
* clone the repo to local;
* run `npm install` to install node modules;
* run `npm run build` to get an *unminified* build file at `lib` folder;