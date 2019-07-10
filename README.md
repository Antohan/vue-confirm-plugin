# Vue Confirm Plugin

Vue Confirm Plugin is async wrapper for Vue component.

## Installation
### Add package
```bash
# yarn
yarn add vue-confirm-plugin

# npm
npm i vue-confirm-plugin
```

### Install plugin
```javascript
import Vue from 'vue';
import VueConfirmPlugin from 'vue-confirm-plugin';

Vue.use(VueConfirmPlugin);
```

## Usage

[Example of usage with Material Design](https://github.com/Antohan/confirm-plugin-example)

1. Import you component:
```javascript
import ConfirmDialog from './components/confirm-dialog';
```

2. Pass your component in to `this.$confirm()`
```javascript
this.$confirm(ConfirmDialog).then(res => {
  // res is answer from dialog.
});
```
or with props (**the plugin get props as data object**)
```javascript
const dialogProps = {
  question: this.confirmMessage,
};

this.$confirm(ConfirmDialog, dialogProps).then(res => {
  // res is answer from dialog.
});
```

Also you can use `async/await` syntax.

If you pass additional props, you should describe this in the dialog component props.

```javascript
{
...
  name: 'ConfirmDialog',
  props: {
    // dialogProps
    question: {
      type: String,
      required: true,  
    },
  },
...
}
```

And has method choose which calling by dialog actions
```javascript
methods: {
/**
 * Set user choice and
 * destroy the dialog.
 *
 * @param {boolean} value User choise.
 */
  choose(value) {
    this.choice = value;
    this.$destroy();
  }
},
```

Value which get to `this.choice` was taking in `this.$confirm` as result.