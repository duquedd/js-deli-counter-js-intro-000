function takeANumber(katzDeliLine,newPersonInLine){
  katzDeliLine.push(newPersonInLine)
  return `Welcome, ${newPersonInLine}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length>0) {
    return `Currently serving ${katzDeliLine[0]}.`
    katzDeliLine.shift()
  }else {
    return `There is nobody waiting to be served!`
  }      //Verified length function can never be negative
}

function currentLine(katzDeliLine){

}
