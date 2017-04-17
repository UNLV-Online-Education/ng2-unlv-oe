export default {
  entry: 'dist/index.js',
  dest: 'dist/bundles/ng2-unlv-oe.umd.js',
  sourceMap: false,
  format: 'umd',
  moduleName: 'ng.unlvoe',
  globals: {
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common',
    '@angular/http': 'ng.http',
    'rxjs/Observable': 'Rx',
    'rxjs/add/operator/map': 'Rx.Observable.prototype'
  }
}
