Live Project vercel - https://zoom-theta-flame.vercel.app/
Live Prject netlify - https://zomeet.netlify.app/

# ZoomClone — Real-Time Video Calls & Chat (React + Tailwind + ZegoCloud)

> **One-on-one & group video calls with integrated chat — Zoom-like experience built with React, Tailwind CSS, and ZegoCloud.**

## 🔖 Short tagline

**ZegoMeet — lightweight, low-latency video conferencing with chat (React + Tailwind + ZegoCloud).**

---

## ✨ What this repo contains

A full-stack-ready (frontend-first) web application that provides:

* One-on-one video calls
* Multi-party (group) video conferencing
* Real-time chat alongside video
* Basic controls: mute/unmute, toggle video, leave, and (optional) screen sharing

This project is built as a React frontend using Tailwind for UI and ZegoCloud SDK for real-time audio/video + chat.

---

## 🚀 Features

* Fast WebRTC-based streams via ZegoCloud
* Group rooms and private/one-on-one rooms
* Client-side state management for participants, streams, and messages
* Responsive UI (mobile + desktop)
* Demo mode (dev-friendly: run without a backend)

---

## 🧰 Tech Stack

* **Frontend:** React.js
* **Styling:** Tailwind CSS
* **RTC & Chat:** ZegoCloud SDK
* **Build / Deploy:** Vercel / Netlify (recommended)

---

## ✅ Quick One-line Install (copy-paste)

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
npm install
# add env vars (see below), then:
npm start
```

---

## 📋 Step-by-step Installation (User-friendly)

Follow these steps to get the app running locally.

### 1) Prerequisites

* Node.js (v16+) and npm or yarn
* ZegoCloud account (to get an AppID and ServerSecret)

### 2) Clone the repo

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 3) Install dependencies

```bash
npm install
# or
# yarn install
```

### 4) Create `.env` (development/demo)

Create a `.env` file in the project root with these values (replace placeholders):

```
REACT_APP_ZEGO_APP_ID=YOUR_ZEGO_APP_ID
# OPTIONAL (demo only) — do NOT use this for production
REACT_APP_ZEGO_SECRET=YOUR_ZEGO_SERVER_SECRET
```

> **Important:** Frontend environment variables in Create React App must begin with `REACT_APP_`. Also, do **not** store server secrets in frontend for production usage — see "Security" below.

### 5) Local config helper (recommended)

You can centralize access to env vars in `src/config.js` — example:

```javascript
// src/config.js
export const APP_ID = process.env.REACT_APP_ZEGO_APP_ID;
export const SECRET = process.env.REACT_APP_ZEGO_SECRET; // demo-only
```

```

### 6) Run locally

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) and open another browser/incognito to test multi-user calls.

---

