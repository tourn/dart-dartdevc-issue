define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__child_thing = Object.create(null);
  const src__generic_thing = Object.create(null);
  const src__app = Object.create(null);
  const super$foo = Symbol("super$foo");
  src__generic_thing.GenericThing = class GenericThing extends core.Object {
    foo() {
      return dart.async(function*() {
      }, dart.dynamic);
    }
  };
  dart.setSignature(src__generic_thing.GenericThing, {
    methods: () => ({foo: dart.fnType(async.Future, [])})
  });
  src__child_thing.ChildThing = class ChildThing extends src__generic_thing.GenericThing {
    foo() {
      return dart.async((function*() {
        this[super$foo]();
      }).bind(this), dart.dynamic);
    }
    [super$foo]() {
      return super.foo();
    }
  };
  src__app.AppComponent = class AppComponent extends core.Object {};
  dart.trackLibraries("packages/foo_app/lib__shared_0", {
    "package:foo_app/src/child_thing.dart": src__child_thing,
    "package:foo_app/src/generic_thing.dart": src__generic_thing,
    "package:foo_app/src/app.dart": src__app
  }, '{"version":3,"sourceRoot":"","sources":["src/generic_thing.dart","src/child_thing.dart","src/app.dart"],"names":[],"mappings":";;;;;;;;;;;;oCAKe;OACf;;;;;;ACFA;;qCAGe;AACX,QAAA,iBAAW;AAAC,OAEhB;;;YAFI,MAAK;;;ACJT,ADSA;ACHA","file":"lib__shared_0.js"}');
  // Exports:
  return {
    src__child_thing: src__child_thing,
    src__generic_thing: src__generic_thing,
    src__app: src__app
  };
});

//# sourceMappingURL=lib__shared_0.js.map
