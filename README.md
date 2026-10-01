# Background Remover

A simple web app that removes the background from an uploaded image and returns a transparent PNG.

## Preview

### Uploaded Image

![Uploaded image](upload_image.png)

### Downloaded Result

![Background removed result](download_image.png)

## Installation

To make your own copy, click **Fork** on GitHub, then clone your fork:

```powershell
git clone https://github.com/sagarbhati23/background-remover.git
cd background-remover
```

Install Python, then run:

```powershell
cd backend
python -m venv env
.\env\Scripts\Activate.ps1
pip install -r requirements.txt
```

## Run the project

Start the backend from the `backend` folder:

```powershell
.\env\Scripts\Activate.ps1
uvicorn api.main:app --reload
```

Keep the terminal running while using the app.

Open `index.html` in your browser to use the frontend.

The backend runs at:

```text
http://127.0.0.1:8000
```

## API

- `GET /health` checks whether the backend is running.
- `POST /remove-bg` accepts an image and returns the image with its background removed.

## Project structure

```text
background-remover/
├── .gitignore
├── README.md
├── index.html
├── styles.css
├── app.js
├── upload_image.png
├── download_image.png
└── backend/
    ├── api/
    │   └── main.py
    └── requirements.txt
```

Do not upload the `backend/env` folder to GitHub. It is created locally when you set up the project.

## Contributions

Contributions are welcome!

Create a new branch before making changes:

```powershell
git checkout -b feature/your-change
```

After making and testing your changes, commit and push them:

```powershell
git add .
git commit -m "describe your change"
git push -u origin feature/your-change
```

Then open a pull request from your branch to the original repository.
