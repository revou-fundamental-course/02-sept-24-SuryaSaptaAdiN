function tampilkanForm() {
    const jenisSegitiga = document.getElementById('jenisSegitiga').value;
    const gambarSegitiga = document.getElementById('gambarSegitiga');
    const inputField = document.getElementById('inputField');
    const hasilDiv = document.getElementById('hasil');
    const caraPengerjaanDiv = document.getElementById('caraPengerjaan');

    gambarSegitiga.style.display = 'none';
    hasilDiv.style.display = 'none';
    hasilDiv.innerHTML = '';  
    caraPengerjaanDiv.innerHTML = '';  
    inputField.innerHTML = '';  

    if (jenisSegitiga) {
        gambarSegitiga.style.display = 'block'; 

        if (jenisSegitiga === 'samasisi') {
            gambarSegitiga.src = 'images/Segitiga_Sama_Sisi.png';
            inputField.innerHTML = `
                <label for="sisi">Sisi (cm):</label>
                <input type="number" id="sisi" required><br>
            `;
        } else if (jenisSegitiga === 'samakaki') {
            gambarSegitiga.src = 'images/Segitiga_Sama_Kaki.png';
            inputField.innerHTML = `
                <label for="alas">Alas (cm):</label>
                <input type="number" id="alas" required><br>
                <label for="tinggi">Tinggi (cm):</label>
                <input type="number" id="tinggi" required><br>
                <label for="sisi">Sisi (cm):</label>
                <input type="number" id="sisi" required><br>
            `;
        } else if (jenisSegitiga === 'semb') {
            gambarSegitiga.src = 'images/Segitiga_Sembarang.png';
            inputField.innerHTML = `
                <label for="alas">Alas (cm):</label>
                <input type="number" id="alas" required><br>
                <label for="tinggi">Tinggi (cm):</label>
                <input type="number" id="tinggi" required><br>
                <label for="sisi">Sisi Miring (cm):</label>
                <input type="number" id="sisi" required><br>
            `;
        } else if (jenisSegitiga === 'sikusiku') {
            gambarSegitiga.src = 'images/Segitiga_Sikusiku.png';
            inputField.innerHTML = `
                <label for="alas">Alas (cm):</label>
                <input type="number" id="alas" required><br>
                <label for="tinggi">Tinggi (cm):</label>
                <input type="number" id="tinggi" required><br>
            `;
        }
    }
}

function hitung(event) {
    event.preventDefault();

    const jenisSegitiga = document.getElementById('jenisSegitiga').value;
    const hasilDiv = document.getElementById('hasil');
    const caraPengerjaanDiv = document.getElementById('caraPengerjaan');
    let luas, keliling, caraPengerjaan;

    if (jenisSegitiga === 'samasisi') {
        const sisi = parseFloat(document.getElementById('sisi').value);
        luas = (Math.sqrt(3) / 4) * Math.pow(sisi, 2);
        keliling = 3 * sisi;

        caraPengerjaan = `
            <p><strong>Langkah 1:</strong> Diketahui sisi segitiga = ${sisi} cm.</p>
            <div class="step"><span class="step-number">1.</span> Hitung luas dengan rumus: <strong>(√3 / 4) * sisi²</strong></div>
            <p>Substitusi nilai: (√3 / 4) * ${sisi}² = ${luas.toFixed(2)} cm².</p>
            <div class="step"><span class="step-number">2.</span> Hitung keliling dengan rumus: <strong>3 * sisi</strong></div>
            <p>Substitusi nilai: 3 * ${sisi} = ${keliling.toFixed(2)} cm.</p>
        `;

    } else if (jenisSegitiga === 'samakaki') {
        const alas = parseFloat(document.getElementById('alas').value);
        const tinggi = parseFloat(document.getElementById('tinggi').value);
        const sisi = parseFloat(document.getElementById('sisi').value);
        luas = (alas * tinggi) / 2;
        keliling = 2 * sisi + alas;

        caraPengerjaan = `
            <p><strong>Langkah 1:</strong> Diketahui alas = ${alas} cm, tinggi = ${tinggi} cm, dan sisi yang sama = ${sisi} cm.</p>
            <div class="step"><span class="step-number">1.</span> Hitung luas dengan rumus: <strong>1/2 * alas * tinggi</strong></div>
            <p>Substitusi nilai: 1/2 * ${alas} * ${tinggi} = ${luas.toFixed(2)} cm².</p>
            <div class="step"><span class="step-number">2.</span> Hitung keliling dengan rumus: <strong>2 * sisi + alas</strong></div>
            <p>Substitusi nilai: 2 * ${sisi} + ${alas} = ${keliling.toFixed(2)} cm.</p>
        `;

    } else if (jenisSegitiga === 'semb') {
        const alas = parseFloat(document.getElementById('alas').value);
        const tinggi = parseFloat(document.getElementById('tinggi').value);
        const sisi = parseFloat(document.getElementById('sisi').value);
        luas = (alas * tinggi) / 2;
        keliling = alas + tinggi + sisi;

        caraPengerjaan = `
            <p><strong>Langkah 1:</strong> Diketahui alas = ${alas} cm, tinggi = ${tinggi} cm, dan sisi miring = ${sisi} cm.</p>
            <div class="step"><span class="step-number">1.</span> Hitung luas dengan rumus: <strong>1/2 * alas * tinggi</strong></div>
            <p>Substitusi nilai: 1/2 * ${alas} * ${tinggi} = ${luas.toFixed(2)} cm².</p>
            <div class="step"><span class="step-number">2.</span> Hitung keliling dengan menjumlahkan semua sisi: <strong>alas + tinggi + sisi</strong></div>
            <p>Substitusi nilai: ${alas} + ${tinggi} + ${sisi} = ${keliling.toFixed(2)} cm.</p>
        `;

    } else if (jenisSegitiga === 'sikusiku') {
        const alas = parseFloat(document.getElementById('alas').value);
        const tinggi = parseFloat(document.getElementById('tinggi').value);
        const sisiMiring = Math.sqrt(Math.pow(alas, 2) + Math.pow(tinggi, 2));
        luas = (alas * tinggi) / 2;
        keliling = alas + tinggi + sisiMiring;

        caraPengerjaan = `
            <p><strong>Langkah 1:</strong> Diketahui alas = ${alas} cm dan tinggi = ${tinggi} cm.</p>
            <div class="step"><span class="step-number">1.</span> Hitung luas dengan rumus: <strong>1/2 * alas * tinggi</strong></div>
            <p>Substitusi nilai: 1/2 * ${alas} * ${tinggi} = ${luas.toFixed(2)} cm².</p>
            <div class="step"><span class="step-number">2.</span> Hitung sisi miring menggunakan Teorema Pythagoras: <strong>√(alas² + tinggi²)</strong></div>
            <p>Substitusi nilai: √(${alas}² + ${tinggi}²) = ${sisiMiring.toFixed(2)} cm.</p>
            <div class="step"><span class="step-number">3.</span> Hitung keliling dengan menjumlahkan semua sisi: <strong>alas + tinggi + sisi miring</strong></div>
            <p>Substitusi nilai: ${alas} + ${tinggi} + ${sisiMiring.toFixed(2)} = ${keliling.toFixed(2)} cm.</p>
        `;
    }

    hasilDiv.innerHTML = `Luas: ${luas.toFixed(2)} cm², Keliling: ${keliling.toFixed(2)} cm`;
    hasilDiv.style.display = 'block';
    caraPengerjaanDiv.innerHTML = caraPengerjaan;
}
