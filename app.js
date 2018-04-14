class Algorithm {
    evenNumber(){
        let result = 0;
        for (let i = 0; i <= 10; i +=1) {
            if (i % 2 === 0) {
                result += i;
            }
        }
        return result;
    }
}