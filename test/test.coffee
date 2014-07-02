(chai = require 'chai').should()
{Obj} = require '../src/obj-utils'
class MyObj
  constructor:->
describe 'Obj-Utils Tests', ->
  it 'should transform Object to Query String', =>
    (Obj.objectToQuery {name:'test',value:'foo'}).should.equal 'name=test&value=foo'
  it 'should transform Query String to Object', =>
    (Obj.queryToObject 'name=test&value=foo' ).name.should.equal 'test'
  it 'should get typeof of Object', =>
    Obj.getTypeOf( [] ).should.equal 'Array'
  it 'should detect if Object object is of a particular type', =>
    Obj.isOfType( new MyObj(), MyObj).should.equal true