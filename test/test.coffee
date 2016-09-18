(chai = require 'chai').should()
{Fun, Obj, Str} = (require '../lib/wf-utils').wf.wfUtils

class MyObj
  constructor:->
    
class Funct
  constructor:->
    
describe 'Fun-Utils Tests', ->
  @fun = (foo,bar)-> console.log "#{foo} #{bar}"
  it 'should stringify a function', =>
    (@str = Fun.toString( @fun )).replace(/[\n\t]*/g, '').replace(/[\s]{2,}/g,' ').should.equal 'function (foo, bar) { return console.log(foo + " " + bar); }'
  it 'should revive a function from a string', =>
    Fun.fromString(@str).should.be.a 'function'
  it 'should encode a Native Object', =>
    Fun.toString(Date).should.equal 'Native::Date'
  it 'should create a Native Object from reference', =>
    Fun.fromString('Native::Date').should.equal Date
  it 'should get the constructor name',=>
    Fun.getConstructorName(new Funct).should.equal 'Funct'
    Fun.getConstructorName(Funct).should.equal 'Funct'
    Fun.getConstructorName(Number).should.equal 'Number'
  it 'should get a function name',=>
    f = `function testing() {}`
    Fun.getFunctionName(f).should.equal 'testing'
  it 'should exec a Constructor', =>
    (Fun.construct( Date, '5/Nov/1605' )).toString().should.equal 'Sat Nov 05 1605 00:00:00 GMT-0700 (PDT)'
  it 'should create and exec a Function', =>
    (Fun.factory ['a,b', 'return a + b'])(2,2).should.equal 4
    
describe 'Obj-Utils Tests', ->
  it 'should transform Object to Query String', =>
    (Obj.objectToQuery {name:'test',value:'foo'}).should.equal 'name=test&value=foo'
  it 'should transform Query String to Object', =>
    (Obj.queryToObject 'name=test&value=foo' ).name.should.equal 'test'
  it 'should get typeof of Object', =>
    Obj.getTypeOf( [] ).should.equal 'Array'
  it 'should detect if Object object is of a particular type', =>
    Obj.isOfType( new MyObj(), MyObj).should.equal true
    Obj.isOfType( [], Array).should.equal true
    
describe 'Str-Utils Tests', ->
  it 'should capitalize string', =>
    (Str.capitalize 'test').should.eq 'Test'
  it 'should strip null characters', =>
    (Str.stripNull "A\0Z").length.should.eq 2
