const sozlar = ['salom', 'dunyo', 'yaxshi', 'qidiruv'];

function searchWords(words) {
    for (let i = 0; i < words.length; i++) {
        if (words[i] === 'qidiruv') {
            console.log(`Element 'qidiruv' indexi: ${i}`);
            return; 
        }
    }
    console.log("-1");
}

searchWords(sozlar);
