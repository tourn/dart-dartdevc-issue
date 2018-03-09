import 'dart:async';

import 'generic_thing.dart';

class ChildThing extends GenericThing {

  @override
  Future foo() async{
    super.foo(); //this makes requirejs go NUTS
  }


}
