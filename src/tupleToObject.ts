type TupleToObject<TTuple extends readonly any[]> = {
    [V in TTuple[number]]: V;
}

type tuple = ['tesla', 'model 3', 'model X', 'model Y'];

// { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
const result = {} as TupleToObject<tuple>;
const x = result['model 3'];
