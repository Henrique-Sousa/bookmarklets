closedSuperBlocks = Array.from(document.getElementsByClassName("superblock")).filter(x=>! x.getAttribute("class").includes("open"))

for(let e of closedSuperBlocks){
  e.firstElementChild.click();
}

closedBlocks = Array.from(document.getElementsByClassName("block")).filter(x=>! x.getAttribute("class").includes("open"))

for(let e of closedBlocks){
  e.firstElementChild.click();
}