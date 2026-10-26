# 🌱 TerraPulse AI — Innovative Technologies for Restoring Soil Health Degradation

<div align="center">

![TerraPulse AI Banner](https://img.shields.io/badge/TerraPulse_AI-Soil_Health_Platform-2ecc71?style=for-the-badge&logo=leaf&logoColor=white)
![Status](https://img.shields.io/badge/Status-Active_Development-brightgreen?style=for-the-badge)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)

**An AI-powered, real-time soil health monitoring and regenerative agriculture intelligence platform**

*Precision AI Diagnostics & Soil Regeneration Intelligence*

</div>

---

## 📋 Table of Contents

- [🚀 Project Overview](#-project-overview)
- [🌍 Problem Statement](#-problem-statement)
- [💡 Our Solution: TerraPulse AI](#-our-solution-terrapulse-ai)
- [🏗️ Architecture](#️-architecture)
- [✨ Key Features](#-key-features)
- [🧪 Real-World Soil Test Data](#-real-world-soil-test-data)
- [🗺️ Indian Soil Types Coverage](#️-indian-soil-types-coverage)
- [🤖 AI & Technology Stack](#-ai--technology-stack)
- [📊 Validation & Accuracy](#-validation--accuracy)
- [🚀 Getting Started](#-getting-started)
- [📁 Project Structure](#-project-structure)
- [🌾 Agri-Science Behind TerraPulse](#-agri-science-behind-terrapulse)
- [🛣️ Roadmap](#️-roadmap)
- [👥 Team](#-team)
- [📄 License](#-license)

---

## 🚀 Project Overview

**TerraPulse AI** is a next-generation agricultural intelligence platform that combines **IoT sensor data**, **AI-driven diagnostics**, and **regenerative farming recommendations** to combat one of India's most pressing challenges: **soil health degradation**.

India loses an estimated **₹2.7 lakh crore** annually due to soil degradation. Over **30% of India's agricultural land** is classified as degraded, with alarming declines in organic carbon, nitrogen levels, and microbial diversity. TerraPulse AI directly addresses this crisis with precision technology.

> **Domain:** Precision Agriculture & Soil Health Intelligence
> **Focus Region:** Maharashtra & Deccan Plateau Vertisols
> **Department:** Agriculture, Government of Maharashtra

---

## 🌍 Problem Statement

Soil degradation in India is a multi-dimensional crisis:

| Challenge | Impact |
|-----------|--------|
| 🔴 **Organic Carbon Depletion** | India's average OC has dropped below 0.50% (critical threshold) in most agricultural districts |
| 🔴 **Nitrogen Deficit** | Over-reliance on urea causes leaching; 60% of tested plots show N < 280 kg/ha |
| 🟡 **Alkalinity & Salinity** | Black cotton soils in Maharashtra face pH > 8.0 and EC > 2.0 dS/m locking micronutrients |
| 🔴 **Zinc & Iron Deficiency** | Micronutrient deficiencies cause 20-40% yield loss annually |
| 🟡 **Soil Compaction** | Bulk density exceeding 1.40 g/cm³ restricts root penetration and oxygen flow |
| 🔴 **Microbial Diversity Loss** | Excessive chemical use decimates beneficial Mycorrhizae, Azotobacter, and Rhizobium populations |

**Current gaps in the existing system:**
- Soil Health Cards (SHC) are issued once every 2 years — far too infrequent
- Farmers lack real-time, actionable intelligence on their specific plots
- Laboratory reports use technical jargon inaccessible to most smallholder farmers
- No predictive modelling for future soil degradation trends

---

## 💡 Our Solution: TerraPulse AI

TerraPulse AI delivers a **real-time, AI-powered soil health intelligence dashboard** that:

1. **Monitors** live soil parameters (NPK, pH, Moisture, Organic Carbon) via simulated IoT sensors
2. **Diagnoses** soil health issues using AI trained on ICAR (Indian Council of Agricultural Research) data
3. **Prescribes** customised regenerative interventions — chemical, biological, and physical
4. **Predicts** future soil health trends using 24-hour sensor history and trend modelling
5. **Validates** AI predictions against certified laboratory data (NABL-accredited labs)
6. **Simulates** different stress scenarios (drought, salinity surge, nutrient collapse)

### 🎯 Impact Metrics
- **Target beneficiaries:** 2 crore+ smallholder farmers in Maharashtra
- **Soil restoration goal:** Raise Organic Carbon from 0.38% to 0.75% within 18 months
- **Yield improvement target:** 25-40% increase in sugarcane, wheat, and soybean yields
- **Cost reduction:** Eliminate ₹8,000-12,000/acre of unnecessary chemical fertilizer spending

---

## 🏗️ Architecture

```
TerraPulse AI Platform
├── IoT Sensor Module
├── AI Diagnosis Engine
├── Prescriptive Engine
└── Validation Reports

React 19 + TypeScript Frontend
├── Framer Motion (Animations)
├── Recharts (Analytics)
├── Three.js / R3F (3D Viz)
└── TailwindCSS v4
```

**Data Flow:**
```
IoT Soil Sensors → Real-time Stream → AI Inference → Dashboard UI
       ↓                                    ↓              ↓
 Lab Validation ←── NABL Report ←── Prescription ←── Farmer Actions
```

---

## ✨ Key Features

### 🔬 1. Real-Time Soil Health Dashboard
- Live monitoring of **6 critical parameters**: pH, EC, Organic Carbon, NPK levels, Moisture
- Dynamic colour-coded status indicators (🟢 Optimal | 🟡 Attention | 🔴 Critical)
- 24-hour sensor history visualized with interactive area charts

### 🧠 2. AI Diagnostic Engine
- Trained on ICAR reference data for all 6 major Indian soil types
- Identifies compound problems (e.g., alkalinity + zinc lockup interactions)
- Generates human-readable diagnostic verdicts in plain language

### 💊 3. Prescriptive Recommendation Engine
- **Chemical Remediation:** Gypsum dosage, fertilizer split schedules, micronutrient foliar sprays
- **Biological Inoculation:** Mycorrhiza, Azotobacter, Rhizobium bio-stimulant protocols
- **Physical Interventions:** Subsoiling schedules, drip irrigation optimisation
- **Organic Restoration:** Green manuring (Dhaincha/Sesbania), cover cropping plans

### 🦠 4. Microbial Health Monitor
- Tracks 4 key beneficial microbial populations in real time:
  - **Mycorrhizae** — Phosphorus solubilization & water uptake
  - **Trichoderma** — Bio-fungicide and root promoter
  - **Azotobacter** — Free-living nitrogen fixation
  - **Rhizobium** — Symbiotic nitrogen fixation in legumes

### 🌐 5. Scenario Simulation Engine
- **Standard Growth Mode** — baseline monitoring
- **Extreme Drought Simulation** — predicts moisture depletion cascades
- **Salinity Surge Model** — simulates EC rise impact on yield
- **Nutrient Collapse Warning** — early warning for NPK crash events

### ✅ 6. NABL Lab Validation Module
- Cross-validates AI predictions against certified laboratory results
- Tracks deviation percentage for each parameter
- Builds model trust and farmer confidence with transparent accuracy reporting

### 📈 7. Interactive Analytics
- Animated trend charts using Recharts + Framer Motion
- 3D soil visualizations powered by Three.js + 