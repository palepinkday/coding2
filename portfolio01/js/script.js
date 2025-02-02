

    class Stage {
      constructor() {
        this.renderParam = {
          width: window.innerWidth,
          height: window.innerHeight,
        }
        this.cameraParam = {
          fov: 100,
          near: 1,
          far: 100000
        }
        this.scene = null;
        this.rederer = null;
        this.camera = null;
        this.mesh = null;
        this.init()
      }
      init() {
        this._setScene();
        this._setRender();
        this._setCamera();
        this._setMesh();
        this._setFog();
        this._update();
        this._render();
        onresize = this._resize.bind(this);
      }
      _setScene() {
        this.scene = new THREE.Scene();
      }
      _setRender() {
        this.renderer = new THREE.WebGLRenderer({
          canvas: document.getElementById("webgl"),
          antialias: true,
          alpha: true
        });
        this.renderer.setSize(this.renderParam.width, this.renderParam.height);
        this.renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
      }
      _setCamera() {
        this.camera = new THREE.PerspectiveCamera(
          this.cameraParam.fov,
          this.renderParam.width / this.renderParam.height,
          this.cameraParam.near,
          this.cameraParam.far
        );
        this.camera.position.set(1, 10, 1000);
        this.camera.lookAt(new THREE.Vector3(1, 100, 1000));
      }
      _setMesh() {
        const vertices = [];
        const size = 3000;
        const length = 3000;
        const geometry = new THREE.BufferGeometry();
        const material = new THREE.PointsMaterial({
          color: 0xffffff,
          size: 2
        });
        for (let i = 0; i < length; i++) {
          const x = size * (Math.random() - 0.5);
          const y = size * (Math.random() - 0.5);
          const z = size * (Math.random() - 0.5);
          vertices.push(x, y, z);
        }
        geometry.setAttribute(
          "position",
          new THREE.Float32BufferAttribute(vertices, 3)
        );
        this.mesh = new THREE.Points(geometry, material);
        this.scene.add(this.mesh)
      }
      _setFog() {
        this.scene.fog = new THREE.Fog(0xffffff, 1, 2);
      }
      _update() {
        let rotation = 0;
        const radian = (rotation * Math.PI) / 180;
        rotation += 0.5;
        this.camera.position.x = 1 * Math.sin(rotation);
        this.camera.position.z = 2 * Math.cos(rotation);
        this.mesh.position.y += 1;
      }
      _render() {
        this._update();
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(this._render.bind(this))
      }
      _resize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
      }
    }
    (() => {
      const stage = new Stage();
})();
    
$(".btn_modal").click(function (e) {
  e.preventDefault();
  // $(this).parent().addClass("open");
    $(".modal").addClass("open");
});

$(".close").click(function (e) {
  e.preventDefault();
  // $(this).parent().parent().removeClass("open");
  $(".modal").removeClass("open");
});
