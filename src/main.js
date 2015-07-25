import { Application as PlaygroundApplication } from 'playground.js/build/commonjs/playground-base';
import mixins from 'mixins-decorator';
import playgroundThreeMixin from 'playground.js/plugins/playground.three.js';
import { WebGLRenderer } from 'three';
import game from './game';

mixins(playgroundThreeMixin)(PlaygroundApplication);

new PlaygroundApplication({
  create() {
    this.renderer = new WebGLRenderer();
    this.container.appendChild(this.renderer.domElement);
    this.renderer.setClearColor(0x552200);
    this.loadObject('camero-2010-low-poly');
  },
  resize() {
    this.renderer.setSize(this.width, this.height);
  },
  ready() {
    this.setState(game);
  },
  container: document.getElementById('container')
});
