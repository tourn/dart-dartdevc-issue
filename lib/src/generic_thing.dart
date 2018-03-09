import 'dart:async';

export 'child_thing.dart';

abstract class GenericThing<T> {
  Future foo() { }

}
