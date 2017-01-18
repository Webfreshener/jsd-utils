//### getTypeOf(object)
// returns  name of Object type as string
wfUtils.Obj.getTypeOf = obj=> Object.prototype.toString.call(obj).slice(8, -1);
//### isOfType(object, kind)
// returns `boolean` based on object passed as object param matching  object passed as kind param
wfUtils.Obj.isOfType = function(value, kind){
  return (this.getTypeOf(value)) === (wfUtils.Fun.getFunctionName(kind)) || value instanceof kind;
};
//### objectToQuery(object)
// Transforms Object to name value paired Query String
wfUtils.Obj.objectToQuery = function(object={}){
  let pairs = [];
  let keys  = Object.keys(object);
  for (let i of __range__(0, (keys.length - 1), true)) {
    pairs[i] = [keys[i], object[keys[i]]];
  }
  return (pairs.map((v,k) => v.join('=')) ).join('&');
};
//### queryToObject(string)
// Transforms name value paired Query String to Object 
wfUtils.Obj.queryToObject = function(string){
  let o={};
  decodeURIComponent(string).replace('?','').split('&').forEach((v,k)=> { let p;
  if ((p = v.split('=')).length === 2) { return o[p[0]] = p[1]; } });
  return o;
};
function __range__(left, right, inclusive) {
  let range = [];
  let ascending = left < right;
  let end = !inclusive ? right : ascending ? right + 1 : right - 1;
  for (let i = left; ascending ? i < end : i > end; ascending ? i++ : i--) {
    range.push(i);
  }
  return range;
}