define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__child_thing = Object.create(null);
  const src__generic_thing = Object.create(null);
  const src__app = Object.create(null);
  let GenericThing = () => (GenericThing = dart.constFn(src__generic_thing.GenericThing$()))();
  let ChildThing = () => (ChildThing = dart.constFn(src__child_thing.ChildThing$()))();
  src__generic_thing.GenericThing$ = dart.generic(T => {
    class GenericThing extends core.Object {
      foo() {}
    }
    dart.addTypeTests(GenericThing);
    dart.setSignature(GenericThing, {
      methods: () => ({foo: dart.fnType(async.Future, [])})
    });
    return GenericThing;
  });
  src__generic_thing.GenericThing = GenericThing();
  src__child_thing.ChildThing$ = dart.generic(T => {
    class ChildThing extends src__generic_thing.GenericThing$(T) {
      foo() {
        super.foo();
      }
    }
    return ChildThing;
  });
  src__child_thing.ChildThing = ChildThing();
  src__app.AppComponent = class AppComponent extends core.Object {};
  dart.trackLibraries("packages/foo_app/lib__shared_0", {
    "package:foo_app/src/child_thing.dart": src__child_thing,
    "package:foo_app/src/generic_thing.dart": src__generic_thing,
    "package:foo_app/src/app.dart": src__app
  }, '{"version":3,"sourceRoot":"","sources":["src/child_thing.dart","src/app.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;YAOc;AACV,QAAA,AAAA,KAAK,MAAM;AAAC,OAEhB;;;;;ACNA;AAMA","file":"lib__shared_0.js"}');
  // Exports:
  return {
    src__child_thing: src__child_thing,
    src__generic_thing: src__generic_thing,
    src__app: src__app
  };
});

//# sourceMappingURL=lib__shared_0.js.map
