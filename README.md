ofs-utils
=========

Object, Function and String Utilities

[![Build Status](https://travis-ci.org/webfreshener/ofs-utils.png)](https://travis-ci.org/webfreshener/ofs-utils)
[![NPM Version](http://img.shields.io/npm/v/ofs-utils.svg)](https://www.npmjs.org/package/ofs-utils)


Methods
-----------

#### getTypeOf(object)
Returns name of Object type as string

*example:*
```
console.log( Obj.getTypeOf( [] ) ); // prints 'Array'
```

#### isOfType(object, kind)
Returns `boolean` based on object passed as object params matching

*example:*
```
var MyClass;

MyClass = (function() {
  function MyClass() {}

  return MyClass;

})();
console.log( Obj.isOfType(new MyClass, MyClass) ); // prints 'true'
```

#### objectToQuery(object)
Transforms Object to name value paired Query String

*example:*
```
console.log( Obj.objectToQuery({name:'test',value:'foo'}) ); // prints 'name=test&value=foo'
```

#### queryToObject(string)
Transforms name value paired Query String to Object

*example:*
```
console.log( Obj.queryToObject('name=test&value=foo') ); // prints '{name:\'test\',value:\'foo\'}' 
```