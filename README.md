# 🎓 Student Achievement Verification DApp

A decentralized student achievement verification application built on the Stellar blockchain using Soroban Smart Contracts.

## Project Description

Student Achievement Verification DApp is a blockchain-based application that allows student achievements to be securely recorded and verified using Stellar Smart Contracts. The system provides transparent, tamper-resistant, and decentralized academic record verification.

The application demonstrates how educational achievement records can be stored and validated through blockchain technology, improving trust and reducing the risk of data manipulation.

## Key Features

1. **Record Achievement** - Store student achievement information on the Stellar blockchain.
2. **Verify Achievement** - Retrieve and validate achievement records securely.
3. **Smart Contract Integration** - Built using Stellar Soroban Smart Contracts.
4. **Mainnet Deployment** - Smart contract deployed on Stellar Mainnet.
5. **Responsive Frontend** - Modern React-based user interface.
6. **Decentralized Verification** - Blockchain-backed academic record verification.

## Smart Contract

### Contract ID (Mainnet)

```text
CBUHNZ437VIDHU3VWI3IC35UGUBHPUOUWGSIETUQM2UT34K4LGHNYOIS
```

### Network

Stellar Mainnet

### Available Functions

```rust
save_achievement(
    student_name,
    achievement,
    year
)
```

```rust
get_achievement()
```

## Tech Stack

### Frontend

- React.js
- Vite
- CSS3

### Blockchain

- Stellar Soroban Smart Contracts
- Rust
- Stellar CLI
- Stellar SDK

## Live Demo

https://certificate-verification.vercel.app

## Stellar Explorer

https://stellar.expert/explorer/public/contract/CBUHNZ437VIDHU3VWI3IC35UGUBHPUOUWGSIETUQM2UT34K4LGHNYOIS

## How to Run

### Clone Repository

```bash
git clone https://github.com/selviamelaniputri/certificate-verification.git
```

### Go to Frontend Directory

```bash
cd frontend
```

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Open Browser

```text
http://localhost:5173
```

## Project Structure

```text
certificate-verification/
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── student-achievement-verification/
│   └── contracts/
│       └── hello-world/
│           └── src/lib.rs
│
├── Screenshot (599).png
└── README.md
```

## Frontend Screenshot

### Homepage

![Homepage](./Screenshot%20(599).png)

## Developer

**Selvia Melani Putri**

## Workshop Information

This project was developed as part of a Stellar Smart Contract Workshop using Soroban SDK and Stellar Mainnet deployment.

## Verification Links

### Live Application

https://certificate-verification.vercel.app

### Mainnet Contract

```text
CBUHNZ437VIDHU3VWI3IC35UGUBHPUOUWGSIETUQM2UT34K4LGHNYOIS
```

### Stellar Expert Explorer

https://stellar.expert/explorer/public/contract/CBUHNZ437VIDHU3VWI3IC35UGUBHPUOUWGSIETUQM2UT34K4LGHNYOIS
