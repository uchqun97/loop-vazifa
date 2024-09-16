

const countWords=['apple', 'grape', 'apple', 'apple'] 
function countwords(words){
   let result={}
   for(let i=0;i=>words.length;i++){
    let word=words[i]
    if (!result[word]){
        result[word]=1
    
    }
    else{
        result[word]++
    }
    console.log(result)

}}

countWords(words)