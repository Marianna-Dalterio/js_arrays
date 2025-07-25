const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = [];
for (let i = teachers.length - 1; i >= 0; i--) {
  const reversedTeachers = teachers[i]
  console.log(reversedTeachers)
};

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];
//usare un ciclo for per scorrere tutti i nomi dentro teachers
//serve un ciclo che parte da i = 0 e continua fino a quando i < teachers.length.
//il controllo con if va dentro il ciclo
for (let i = 0; i < teachers.length; i++) {
  //teachers[i] è un nome (es. "Nathan")
  //teachers[i].length ti dice quanti caratteri ha (es. 6)
  //Se quel valore è ≥ 5, allora va inserito nel nuovo array longNames.
  if (teachers[i].length >= 5) {
    longNames.push(teachers[i]);
  }
  //L’else dopo il ciclo non serve
}
console.log(longNames);

// 3. Rimuovi 'Ed' dall'array teachers
teachers.splice(1, 1)
console.log(teachers)

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = teachers.find(function (nome) {
  return nome === "Fabio";
})
console.log(isFabioPresent)

//METODO 2, con .includes restituisce TRUE se lo trova 
const isFabioPresent = teachers.includes("Fabio")
console.log(isFabioPresent)


// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = teachers.join(",");