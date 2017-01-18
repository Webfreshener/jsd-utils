wfUtils.Str.capitalize = function(string){
  if (string == null) { return ''; }
  if (typeof string !== 'string') { string = string.toString(); }
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
};
wfUtils.Str.stripNull = function(string){
  if (typeof string === 'undefined') { return ''; }
  return string.replace(/\0/g, '');
};