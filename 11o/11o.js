const sozlar = ['salom', 'dunyo', 'yaxshi']
 function  searchWords(words){
      for (let i =0 ; i <= words.length; i++) {
        if (words[i] === 'qidiruv'){
                console.log(words[i])
             }else{
                 console.log(-1)
             }
        }
 }

 searchWords(sozlar)