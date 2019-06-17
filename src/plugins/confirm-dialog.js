const ConfirmDialog = {
  install(Vue) {
    // eslint-disable-next-line no-param-reassign
    Vue.prototype.$confirm = component => new Promise((resolve) => {
      const Dialog = Vue.extend(component);
      const instance = new Dialog({
        propsData: { dialog: true },
        destroyed() {
          document.body.removeChild(instance.$el);
          resolve(instance.choice);
        },
      });

      instance.$mount();

      document.body.appendChild(instance.$el);
    });
  },
};

export default ConfirmDialog;
