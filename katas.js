function areYouPlayingBanjo(name) {
  for(let i = 0; i < name.length; i++){
    if(name[i] == "R" || name[i] == "r"){
      return name + " plays banjo";
    } else {
      return name + " does not play banjo";
    }
  }
}