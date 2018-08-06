closedSuperBlocks = Array.from(document.getElementsByClassName("superblock")).filter(function(e){
    var isClosed = true;
    for(let i of e.classList){
      isClosed = isClosed && i !== "open";
    }
    return isClosed;
  })

for(let e of closedSuperBlocks){
  e.firstElementChild.click();
}

closedBlocks = Array.from(document.getElementsByClassName("block")).filter(function(e){
    var isClosed = true;
    for(let i of e.classList){
      isClosed = isClosed && i !== "open";
    }
    return isClosed;
  })

for(let e of closedBlocks){
  e.firstElementChild.click();
}