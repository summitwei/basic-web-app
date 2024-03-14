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
  }

  return "";
}
