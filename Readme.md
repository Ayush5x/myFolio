# 🚀 MyFolio – Personal Developer Portfolio

<p align="center">
  <img src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif" width="500" />
</p>

<p align="center">
  <b>A modern, responsive, and dynamic personal portfolio website</b><br>
  Built to showcase skills, projects, and creativity ✨
</p>

---

## 🌟 About MyFolio

**MyFolio** is a full-stack portfolio web application designed to represent **who I am as a developer**.
It is not just a static website — it is a **living profile** that stores contact data, renders dynamic pages, and reflects real-world web development practices.

Think of MyFolio as your **digital resume + personal brand website**, just like how companies have landing pages, developers need one too.

> 💡 **Real-life example:**
> When a recruiter clicks your GitHub profile and opens your portfolio link, MyFolio acts as your **first impression** — showing your skills, projects, and professionalism within seconds.

---

## 🎨 Features

✨ **Animated UI & Clean Design**
✨ **Dynamic Pages using EJS**
✨ **Express.js Backend**
✨ **MongoDB Database Integration**
✨ **Contact Form with Data Storage**
✨ **Reusable Components (Navbar, Footer)**
✨ **SEO-friendly Structure**
✨ **Custom Favicon & Branding**

---

## 🛠️ Tech Stack

| Layer         | Technology                 |
| ------------- | -------------------------- |
| 🎨 Frontend   | HTML, CSS, JavaScript, EJS |
| ⚙️ Backend    | Node.js, Express.js        |
| 🗄️ Database  | MongoDB (Mongoose)         |
| 🎭 Templating | EJS + ejs-mate             |
| 🔧 Tools      | Git, GitHub, VS Code       |

---

## 📁 Project Structure

```bash
myFolio/
│
├── public/          # Static files (CSS, Images, JS)
├── views/           # EJS templates
│   ├── includes/    # Navbar, Footer
│   ├── layouts/     # Layout files
│   └── index.ejs
├── models/          # MongoDB schemas
├── routes/          # Express routes
├── app.js           # Main server file
├── package.json
└── README.md
```

> 🧠 **Why this matters?**
> This structure follows **industry-level MVC practices**, making the project scalable and easy to maintain.

---

## ⚡ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/myFolio.git

# Navigate to project folder
cd myFolio

# Install dependencies
npm install

# Start MongoDB (locally)
mongod

# Run the project
node app.js
```

🌐 Open in browser:

```
http://localhost:3000
```

---

## 📬 Contact Form Flow (How it Works)

1️⃣ User fills the contact form on the website
2️⃣ Data is sent to the Express backend
3️⃣ MongoDB stores the data securely
4️⃣ Admin can later retrieve it for email or WhatsApp integration

> 📌 **Real-life use:**
> Just like business websites collect customer leads, MyFolio collects **recruiter or client messages**.

---

## 🔐 Environment Variables

Create a `.env` file:

```env
MONGO_URI=mongodb://127.0.0.1:27017/myFolio_db
PORT=3000
```

Add this to `.gitignore`:

```
node_modules
.env
```

---

## 🚧 Future Enhancements

🚀 Email notifications on form submission
🚀 WhatsApp Business API integration
🚀 Admin dashboard
🚀 Deployment on Render / Vercel
🚀 Dark mode 🌙

---

## 📸 Preview

<p align="center">
  <img src="https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif" width="400" />
</p>

---

## ❤️ Why MyFolio?

Because **your skills deserve a platform**, not just a PDF resume.

> "Your portfolio speaks before you do." 💬

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first.

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub — it really motivates me!

---

<p align="center">
  Built with ❤️ by <b>Ayush Patel</b>
</p>
