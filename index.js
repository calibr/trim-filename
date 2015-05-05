module.exports = function( fileName, toSize ) {
  if( fileName.length <= toSize ){
    return fileName;
  }
  var tmp = fileName.match( /^(.+?)\.([^\.]{1,10})$/ );
  var newName = "";
  if( tmp ){
    newName = tmp[1].substr( 0, toSize - tmp[2].length - 1 ) + "." + tmp[2];
  }
  else{
    newName = fileName.substr( 0, toSize );
  }
  return newName;
};