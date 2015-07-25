import { Scene, PerspectiveCamera, AmbientLight } from 'three';

const game = {
  create() {
    this.scene = new Scene();
    this.camera = new PerspectiveCamera(75, 0, 0.1, 1000);
    this.camera.aspect = this.app.width / this.app.height;
    this.camera.updateProjectionMatrix();
    this.car = this.app.objects['camero-2010-low-poly'].clone();
    this.scene.add(this.car);
    this.scene.add(new AmbientLight(0xffcc88));
    this.camera.position.y = 2;
  },

  step(dt) {
    this.camera.position.x = Math.cos(this.app.lifetime) * 3;
    this.camera.position.z = Math.sin(this.app.lifetime) * 3;
    this.camera.lookAt(this.car.position);
  },

  render() {
    this.app.renderer.render(this.scene, this.camera);
  },

  resize() {
    this.camera.aspect = this.app.width / this.app.height;
    this.camera.updateProjectionMatrix();
  }
};

export default game;
