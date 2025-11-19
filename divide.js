function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error('Cannot divide by zero');
        }
        const result = a / b;
        console.log(`${a} / ${b} = ${result}`);
        return result;
        
    } catch (error) {
        console.error(`Error: ${error.message}`);
        return null;
    }
}

divide(10, 2);        
divide(15, 3);
divide(10, 0);       
divide('10', 2);      
divide(20, 'abc');    
divide(7, 2);         
