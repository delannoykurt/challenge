function abbrevName(name){

    let t = name.search(" ");
    let f = name[0];
    let l = name[t+1];
    return f.toUpperCase() + "." + l.toUpperCase();

}