# 🛍️ Next.js Product Catalog Benchmark Project

## 🚀 Project Overview

This project compares **three major Next.js rendering strategies** by building the same product catalog application in:

* **CSR (Client-Side Rendering)**
* **SSR (Server-Side Rendering)**
* **SSG (Static Site Generation + ISR)**

The goal is to evaluate:

* Performance
* SEO
* Time to First Byte (TTFB)
* Largest Contentful Paint (LCP)
* Total Blocking Time (TBT)
* Real-world deployment trade-offs

---

# 📌 Live Deployments

| Version | Live URL                                                                                           |
| ------- | -------------------------------------------------------------------------------------------------- |
| CSR     | [https://product-catalog-csr.vercel.app/products](https://product-catalog-csr.vercel.app/products) |
| SSR     | [https://product-catalog-ssr.vercel.app/products](https://product-catalog-ssr.vercel.app/products) |
| SSG     | [https://product-catalog-ssg.vercel.app/products](https://product-catalog-ssg.vercel.app/products) |

---

# 🧠 Tech Stack

| Category        | Technologies             |
| --------------- | ------------------------ |
| Framework       | Next.js                  |
| Language        | JavaScript               |
| Styling         | CSS Modules / Global CSS |
| API             | DummyJSON API            |
| Deployment      | Vercel                   |
| Benchmarking    | Google Lighthouse        |
| Version Control | Git + GitHub             |

---

# 🏗️ Project Structure

```bash
product-catalog/
│
├── csr-app/              # Client-side rendering version
├── ssr-app/              # Server-side rendering version
├── ssg-app/              # Static generation version
│
├── parse-results.js      # Lighthouse parser script
├── ANALYSIS.md           # Benchmark analysis report
└── README.md             # Project documentation
```

---

# ⚙️ Features Implemented

## Shared Features Across All Versions

* Responsive product grid
* Product detail pages
* Search functionality
* Dynamic routing
* API integration
* Reusable components
* Performance benchmarking

---

# 🔍 Rendering Strategy Breakdown

## CSR (Client-Side Rendering)

### Workflow:

1. Browser loads minimal HTML shell
2. JavaScript bundle downloads
3. React hydrates app
4. Products fetched client-side
5. UI rendered in browser

### Pros:

* Rich interactivity
* Good for dashboards
* Lower server load

### Cons:

* Slower initial load
* Poor SEO
* Higher LCP

---

## SSR (Server-Side Rendering)

### Workflow:

1. Request sent to server
2. Server fetches data
3. HTML generated server-side
4. Full page sent to browser
5. Hydration occurs

### Pros:

* Better SEO
* Faster first paint
* Dynamic data freshness

### Cons:

* Higher server cost
* Slower repeated requests

---

## SSG (Static Site Generation + ISR)

### Workflow:

1. Pages prebuilt at build time
2. Static HTML served via CDN
3. ISR updates periodically

### Pros:

* Fastest performance
* Excellent SEO
* Lowest TTFB
* Scalable

### Cons:

* Build complexity
* Less real-time dynamic data

---

# 📊 Benchmark Metrics

| Metric            | CSR             | SSR             | SSG             |
| ----------------- | --------------- | --------------- | --------------- |
| Performance Score | Best after test | Best after test | Best after test |
| TTFB              | Higher          | Medium          | Lowest          |
| LCP               | Slower          | Faster          | Fastest         |
| SEO               | Moderate        | Strong          | Excellent       |
| Scalability       | Good            | Medium          | Excellent       |

> Actual measured values should be updated from Lighthouse results.

---

# 🖼️ Architectural Workflow

## CSR Flow

```text
Browser → JS Bundle → API Fetch → Render Products
```

## SSR Flow

```text
Browser → Server → API Fetch → Server Render → Browser
```

## SSG Flow

```text
Build Time → Static HTML → CDN → Browser
```

---

# 🛠️ Installation Guide

## Clone Repository

```bash
git clone https://github.com/blessynookathati/product-catalog.git
cd product-catalog
```

---

## Run CSR App

```bash
cd csr-app
npm install
npm run dev
```

---

## Run SSR App

```bash
cd ssr-app
npm install
npm run dev
```

---

## Run SSG App

```bash
cd ssg-app
npm install
npm run dev
```

---

# 🌍 Deployment Guide

Each app deployed separately using:

* Root Directory: `csr-app`
* Root Directory: `ssr-app`
* Root Directory: `ssg-app`

Platform:

* Vercel

---

# 📈 Lighthouse Benchmark Commands

```bash
lighthouse <deployment-url> --output=json --output-path=./results/output.json --preset=desktop --chrome-flags="--headless"
```

---

# 📄 Analysis Deliverables

Included:

* `ANALYSIS.md`
* `parse-results.js`
* Deployment URLs
* Lighthouse Reports
* Decision Matrix

---

# 🧪 Key Learnings

* CSR is suitable for highly interactive applications
* SSR balances SEO with dynamic content
* SSG provides the best overall performance for catalog-style apps
* Deployment architecture significantly impacts performance
* Lighthouse benchmarking helps make informed architectural decisions

---

# 📌 Final Recommendation

## Best for Product Catalogs:

# **SSG + ISR**

Because it offers:

* Fastest loading speed
* Excellent SEO
* Low server cost
* High scalability
* Strong Lighthouse performance

---

# 🏆 Conclusion

This project demonstrates practical frontend architecture analysis using Next.js by implementing and benchmarking three rendering strategies. It showcases not only development ability, but also performance engineering, SEO optimization, deployment, and architectural decision-making skills.
