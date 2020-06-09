Array.range = function(n) {
  // Array.range(5) --> [0,1,2,3,4]
  return Array.apply(null,Array(n)).map((x,i) => i)
};

const PostHelper = {
  chunk(stock, n) {
    let i,j,temp;
    let result = []
    for (i=0,j = stock.length; i < j; i+=n) {
      temp = stock.slice(i,i+n);
      result.push(temp)
    }
    return result;
  },
  calculateReadingTime(text) {
    const wordsPerMinute = 200; // Average case.
    let result;
    let textLength = text.split(" ").length; // Split by words
    if(textLength > 0){
      let value = Math.ceil(textLength / wordsPerMinute);
      result = `${value} min read`;
    }

    return result;
  }
}

export default PostHelper;
