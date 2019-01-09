import Controller from '@ember/controller';

export default Controller.extend({
  collapsed: true,

  actions: {
    toggleMenu() {
      this.toggleProperty('collapsed');
    }
  }
});
