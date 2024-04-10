
let form = document.getElementById('pul');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let money = (document.getElementById('money').value);
    const pullar = [
        { pul: 500, say: 0, foto: "500.jpg" },
        { pul: 200, say: 0, foto: "200.jpg" },
        { pul: 100, say: 0, foto: "100.jpg" },
        { pul: 50, say: 0, foto: "50.jpg" },
        { pul: 20, say: 0, foto: "20.jpg" },
        { pul: 10, say: 0, foto: "10.jpg" },
        { pul: 5, say: 0, foto: "5.jpg" },
        { pul: 1, say: 0, foto: "1.jpg" }
    ];

    const resultDiv = document.getElementById('result');

    pullar.forEach(a => {
        if (money >= a.pul) {
            a.say = Math.floor(money / a.pul);
            money %= a.pul;
        }
    });

    pullar.forEach(a => {
        for (let i = 0; i < a.say; i++) {
            let img = document.createElement("img");
            img.src = a.foto;
            img.alt = a.pul;
            resultDiv.append(img);
        }
    });
});
