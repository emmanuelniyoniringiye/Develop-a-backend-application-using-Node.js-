let even = 1,
    odd = 1;
while (even <= 10) {
    console.log(even);
    if (even % 2 === 0) {
        console.log(even);
    }
}
while (odd <= 10) {
    console.log(`${even}`);
    if (odd % 2 === 1) {
        console.log(odd);
    }
}