function openModal(planId) {
    var modal = document.getElementById("myModal");
    var planName = document.getElementById("plan-name");
    var planAssets = document.getElementById("plan-assets");

    if (planId === 1) {
        planName.innerHTML = "Plan Adı: Yatırım Planı 1";
        planAssets.innerHTML = "Alınacak Varlıklar: Altın: 100 gr, Hisse: 50 adet, Fon: 200₺, Kripto: 1 BTC";
    } else if (planId === 2) {
        planName.innerHTML = "Plan Adı: Yatırım Planı 2";
        planAssets.innerHTML = "Alınacak Varlıklar: Altın: 150 gr, Hisse: 100 adet, Fon: 400₺, Kripto: 0.5 BTC";
    }

    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function completePlan() {
    var modal = document.getElementById("myModal");
    var progressBar = document.getElementById("progress-bar1"); // Default plan is 1, you can modify for each plan
    var progressValue = progressBar.style.width;

    if (progressValue === "25%") {
        progressBar.style.width = "50%"; // Increase progress for plan 1
    } else if (progressValue === "50%") {
        progressBar.style.width = "75%"; // Increase progress for plan 2
    }

    closeModal(); // Close modal after clicking "Tamamla"
}
