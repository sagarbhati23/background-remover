const imageInput = document.getElementById("imageInput");
const removeBtn = document.getElementById("removeBtn");
const resultImage = document.getElementById("resultImage");
const downloadLink = document.getElementById("downloadLink");
const fileName = document.getElementById("fileName");


imageInput.addEventListener("change", () => {
    if (imageInput.files.length > 0) {
        fileName.textContent = imageInput.files[0].name;
    } else {
        fileName.textContent = "No file chosen";
    }
});

removeBtn.addEventListener("click", async () => {
    const file = imageInput.files[0];

    if (!file) {
        alert("Please select an image first.");
        return;
    }

    console.log("Selected file:", file.name);

    const formData = new FormData();
    formData.append("file", file);

    try {
        const response = await fetch("http://localhost:8000/remove-bg", {
            method: "POST",
            body: formData
        });

        if (!response.ok) {
            console.log("Backend error:", response.status);
            console.log(await response.text());
            return;
        }

        console.log("Backend response:", response.status);
        console.log("Content type:", response.headers.get("content-type"));

        const blob = await response.blob();
        const imageUrl = URL.createObjectURL(blob);

        resultImage.src = imageUrl;
        downloadLink.href = imageUrl;
        downloadLink.download = "background-removed.png";
        downloadLink.style.display = "inline";
    } catch (error) {
        console.error("Request failed:", error);
    }
});
