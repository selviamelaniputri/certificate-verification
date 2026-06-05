# 🎓 Student Achievement Verification

Student Achievement Verification adalah aplikasi berbasis **Stellar Blockchain Smart Contracts** yang digunakan untuk mencatat dan memverifikasi prestasi mahasiswa secara aman, transparan, dan terdesentralisasi.

## 📌 Features

* Record student achievements on Stellar Blockchain
* Verify achievement data securely
* Smart Contract integration using Soroban
* Modern React frontend
* Responsive user interface
* Deployed on Vercel

## 🛠️ Technologies Used

### Frontend

* React.js
* Vite
* CSS3

### Blockchain

* Stellar Soroban Smart Contracts
* Rust
* Stellar CLI

## 📂 Project Structure

```text
ProjectStellar/
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── student-achievement-verification/
    └── contracts/
        └── hello-world/
            └── src/lib.rs
```

## 🔗 Smart Contract Information

**Network:** Stellar Testnet

**Contract ID:**

```text
CAHFMDMJOFSHCGX6X4JNR7WV564NDNAP5RGWZ4ARJDUNKIHA3JSX2AKK
```

### Available Functions

#### Save Achievement

```rust
save_achievement(
    student_name,
    achievement,
    year
)
```

#### Get Achievement

```rust
get_achievement()
```

## 🌐 Live Demo

Website:

https://certificate-verification.vercel.app

## 📸 Screenshots

Frontend interface and deployment screenshots are available in this repository.

## 👩‍💻 Developer

Selvia Melani Putri

## 📚 Project Purpose

This project was developed as part of a blockchain and smart contract learning workshop using the Stellar ecosystem. The application demonstrates how academic achievement records can be stored and verified through decentralized technology.
