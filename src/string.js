/**
 * @param string
 * @returns capitalized string
 */
Str.capitalize = function(string){
  if (string === null) { return ""; }
  if (typeof string !== 'string') { string = string.toString(); }
  return string.split(/[\s]{1,}/).map((_)=>{
    return `${_.charAt(0).toUpperCase()}${_.slice(1)}`;
  }).join(" ");
};
/**
 *
 * @param string
 * @returns strng with null chars removed
 */
Str.stripNull = function(string){
  if (typeof string === 'undefined') { return ''; }
  return string.replace(/\0/g, '');
};
