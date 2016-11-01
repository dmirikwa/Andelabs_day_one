function dataTypes(i){
  if(typeof i==="string"){
    
    return i.length;
  }
  else if(typeof i==="undefined"){
    return "no value";
  }
  else if(typeof i==="boolean"){
    return i;
  }
  else if(typeof i==="number"){
    if(i<100)
    return "less than 100";
    else if(i==100)
    return "equal to 100";
    else
    return "more than 100";
  }
  else if(Array.isArray(i) ){
  if(i.length===0)
  return undefined;
  else if(i.length<3)
  return undefined;
  else
  return i[2];
  }
  else if(typeof i==="function"){
    return i(true);
  }
  else
  return "no value";
}
