const sozlar = ['yashil', 'qizil', 'kok', 'qizil'];

function searchWords(words) {
    for (let i = 0; i < words.length; i++) {
        if (words[i] === 'qizil') {
            console.log(`Element 'qidiruv' indexi: ${i}`);
            return; 
        }
    }
    console.log("-1");
}

searchWords(sozlar);
