export type Includes<TArr extends any[], TVal> = TVal extends TArr[number] ? true : false;

type isPillarMen1 = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
type isPillarMen2 = Includes<['Kars', 'Esidisi', 'Wamuu', 'Dio'], 'Dio'> // expected to be `true`
