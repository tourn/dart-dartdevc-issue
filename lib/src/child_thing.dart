import 'dart:async';

import 'generic_thing.dart';

class ChildThing<T> extends GenericThing<T> {

  @override
  Future foo() async{
    super.foo(); //this makes requirejs go NUTS
  }


}
