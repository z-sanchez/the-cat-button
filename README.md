# 🐾 The Cat Button – Full Stack PWA Project

A Progressive Web App where users press a button to receive a unique cat with a photo, name, age, hobby, and backstory.

---

## 📦 Tech Stack

- **Frontend:** React + Vite + TypeScript + Zustand + TailwindCSS
- **Backend:** Node.js + Express
- **Database:** MongoDB (AWS-hosted)
- **Image Processing:** `sharp` (server-side)
- **AI Generation:** ChatGPT API
- **Image Source:** Unsplash API
- **Hosting:**
  - Frontend: DigitalOcean
  - Backend & DB: AWS
- **Future:** Docker, JWT Auth, SSR

---

## ✅ Core Features

- [ ] Press button to generate/view a cat
- [ ] Display cat card (image, name, age, hobby, backstory)
- [ ] Save cats to localStorage
- [ ] Backend logic to pull/generate cat
- [ ] Process and center images using `sharp`
- [ ] MongoDB to store cats
- [ ] Fully functional PWA with installability

---

## 📁 API Endpoints

| Method | Endpoint        | Description                    |
| ------ | --------------- | ------------------------------ |
| GET    | `/api/cats`     | Return a random or stored cat  |
| POST   | `/api/cats`     | Save a new cat                 |
| GET    | `/api/cats/:id` | Get specific cat by ID         |
| GET    | `/api/image`    | Return centered Unsplash image |

---

## 🗓️ Development Schedule

### Week 1: Frontend Setup

- [x] Vite + Tailwind + Zustand + TypeScript scaffold
- [x] Home UI with Cat Button
- [x] Zustand store for `currentCat` and `savedCats`
- [x] Save cats to localStorage
- [x] CatCard component with placeholder data

---

### Week 2: Backend + DB

- [x] Setup Express server
- [ ] Connect to MongoDB (Atlas or self-hosted)
- [ ] Build `/api/cats` endpoint (generation logic)
- [ ] ChatGPT & Unsplash integration
- [ ] Store cat object in DB
- [ ] `/api/image` returns centered cat image using `sharp`

---

### Week 3: Integration + PWA

- [ ] Connect frontend to backend
- [ ] Fetch and display real cat data
- [ ] VitePWA setup for install prompt & offline mode
- [ ] Polish UI interactions & state handling

---

### Week 4: Deployment

- [x] Deploy frontend to DigitalOcean
- [x] Deploy backend to AWS (EC2 or ECS)
- [ ] Secure backend routes with environment variables
- [ ] Confirm MongoDB connection works in prod

---

### Week 5-6: Authentication

- [ ] Implement JWT login/signup
- [ ] Hash passwords (bcrypt)
- [ ] Auth-protected route to save cats per user
- [ ] View saved cats when logged in

---

### Week 7: Dockerization

- [ ] Dockerfile for frontend
- [ ] Dockerfile for backend
- [ ] `docker-compose.yml` to run full app locally
- [ ] Push images to Docker Hub
- [ ] Deploy with Docker to DigitalOcean or AWS

---

## 🧪 Testing & Utilities

- [ ] Postman collection for backend API
- [ ] Jest tests (optional) for backend routes
- [ ] Lighthouse for PWA performance

---

## 🌱 Future Ideas

- [ ] Cat rarity tiers (Legendary, Common, etc.)
- [ ] Shareable cat cards (social links or export)
- [ ] Audio narration of backstories
- [ ] Dark mode toggle
- [ ] Cat collection gallery

---

## 🧠 Notes

- Centering images with `sharp`: crop to square + auto center subject
- Use Zustand middleware for state debugging/persistence
- Secure API keys with `.env` and proxy them when needed
