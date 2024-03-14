export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  } else if (query.toLowerCase().includes("andrew")) {
    return "Your (my) Andrew ID is elwei.";
  } else if (query.toLowerCase().includes("name")) {
    return "summit";
  } else if (query.includes("largest")) {
    var words = query.split(" ");
    var maxV = 0;
    for(var i = 0; i < words.length; i++){
      if(!isNaN(parseInt(words[i]))){
        maxV = Math.max(maxV, parseInt(words[i]));
      }
    }
    return maxV.toString();
  } else if (query.includes("plus")) {
    var words = query.split(" ");
    var sum = 0;
    for(var i = 0; i < words.length; i++){
      if(!isNaN(parseInt(words[i]))){
        sum += parseInt(words[i]);
      }
    }
    return sum.toString();
  } else if (query.includes("multiplied")) {
    var words = query.split(" ");
    var product = 1;
    for(var i = 0; i < words.length; i++){
      if(!isNaN(parseInt(words[i]))){
        product *= parseInt(words[i]);
      }
    }
    return product.toString();
  } else if (query.includes("square") && query.includes("cube")) {
    var words = query.split(" ");
    var resp = "";
    for(var i = 0; i < words.length; i++){
      if(!isNaN(parseInt(words[i]))){
        var num = parseInt(words[i]);
        if(Math.pow(Math.round(Math.pow(num, 1/6)), 6) === num){
          if(resp !== ""){
            resp += " ";
          }
          resp += num.toString();
        }
      }
    }
    return resp;
  } else if (query.includes("primes")) {
    var words = query.split(" ");
    var resp = "";
    for(var i = 0; i < words.length; i++){
      if(!isNaN(parseInt(words[i]))){
        var num = parseInt(words[i]);
        var isPrime = true;
        for(var j=2; j<num; j++){
          if(num % j === 0){
            isPrime = false;
          }
        }
        if(isPrime){
          if(resp !== ""){
            resp += " ";
          }
          resp += num.toString();
        }
      }
    }
    return resp;
  } else if (query.includes("minus")) {
    var words = query.split(" ");
    var ans = 0;
    var seenNum = false;
    for(var i = 0; i < words.length; i++){
      if(!isNaN(parseInt(words[i]))){
        var num = parseInt(words[i]);
        if(seenNum){
          ans -= num;
        } else{
          ans += num;
          seenNum = true;
        }
      }
    }
    return ans.toString();
  } else if (query.includes("power")) {
    var words = query.split(" ");
    var ansBigInt = BigInt(1);
    var factor = BigInt(1);
    var seenNum = false;
    for(var i = 0; i < words.length; i++){
      if(!isNaN(parseInt(words[i]))){
        var num = parseInt(words[i]);
        if(seenNum){
          for(var j=0; j<num; j++){
            ansBigInt = ansBigInt * factor;
          }
        } else{
          factor = BigInt(num);
          seenNum = true;
        }
      }
    }
    return ansBigInt.toString();
  }

  return "";
}
