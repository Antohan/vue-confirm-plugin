const VueConfirmPlugin = {
  install(Vue) {
    Vue.prototype.$confirm = (component, dialogProps) => new Promise((resolve) => {
      const Dialog = Vue.extend(component);
      const instance = new Dialog({
        propsData: dialogProps,
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

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueConfirmPlugin);
}

export default VueConfirmPlugin;
