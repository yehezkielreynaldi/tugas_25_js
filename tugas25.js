function sortir() {
    let deretAngka = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
    console.log(`Sebelumnya : ${deretAngka}`);

    deretAngka = deretAngka.sort();

    console.log(`Ascending : ${deretAngka}`);

    deretAngka = deretAngka.reverse();

    console.log(`Descending : ${deretAngka}`);

    let saring = deretAngka.filter(deretAngka => {
        return deretAngka > 10;
    });

    console.log(`Filter > 10 : ${saring}`);

}

sortir();
// console.log(sortir());

