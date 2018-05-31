var ver = {
  ng: '5.2.6'
};

System.config({
  //use typescript for compilation
  transpiler: 'typescript',
  //typescript compiler options
  typescriptOptions: {
    emitDecoratorMetadata: true
  },
  meta: {
    'typescript': {
      "exports": "ts"
    }
  },
  paths: {
    'npm:': 'https://unpkg.com/'
  },
  map: {

    'app': './src',

    '@angular/core': 'npm:@angular/core@' + ver.ng + '/bundles/core.umd.js',
    '@angular/common': 'npm:@angular/common@' + ver.ng + '/bundles/common.umd.js',
    '@angular/common/http': 'npm:@angular/common@' + ver.ng + '/bundles/common-http.umd.js',
    '@angular/compiler': 'npm:@angular/compiler@' + ver.ng + '/bundles/compiler.umd.js',
    '@angular/platform-browser': 'npm:@angular/platform-browser@' + ver.ng + '/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic@' + ver.ng + '/bundles/platform-browser-dynamic.umd.js',
    '@angular/http': 'npm:@angular/http@' + ver.ng + '/bundles/http.umd.js',
    '@angular/router': 'npm:@angular/router@' + ver.ng + '/bundles/router.umd.js',
    '@angular/forms': 'npm:@angular/forms@' + ver.ng + '/bundles/forms.umd.js',

    'rxjs': 'npm:rxjs@^5.5.2',
    'rxjs/operators': 'npm:rxjs@^5.5.2/operators/index.js',
    'tslib': 'npm:tslib/tslib.js',
    'typescript': 'npm:typescript@2.4.2/lib/typescript.js',

    '@ng-bootstrap/ng-bootstrap': 'npm:@ng-bootstrap/ng-bootstrap@1.0.0/bundles/ng-bootstrap.js'
  },
  packages: {
    app: {
      main: './main.ts',
      defaultExtension: 'ts'
    },
    rxjs: {
      defaultExtension: 'js'
    }
  }
});
