# **SeedLit**  
**SeedLit transforms complex ideas into imaginative, age-appropriate narratives that spark lifelong learning and meaningful family conversations.**  

This repository contains the **SeedLit** platform, designed to help parents introduce big ideas to their children through engaging stories, interactive experiences, and educational tools.

---

## **Project Overview**  

SeedLit is a multi-service platform that leverages AI to support the creation and distribution of shared stories and educational narratives, transforming complex ideas into engaging, age-appropriate stories. The system is built using **Docker**, **FastAPI**, **PostgreSQL**, and **Next.js** to provide a scalable and flexible development environment.

### **Tech Stack**
- **Backend**: [FastAPI](https://fastapi.tiangolo.com/) (Python)  
- **Database**: PostgreSQL  
- **Frontend**: Next.js (React)  
- **Containerization**: Docker & Docker Compose  
- **API Documentation**: Swagger UI (`/docs` endpoint)  

#### **Future Implementations:**  
- **Vector Database for RAG**: Implementing a vector database (e.g., ChromaDB, Weaviate, or Pinecone) to power Retrieval-Augmented Generation (RAG), enabling personalized and context-aware content retrieval.  
- **LLM Model(s) Integration**: Leveraging large language models (LLMs) to generate, refine, and adapt educational narratives dynamically, while also enhancing AI-driven features across the platform for a more seamless and engaging user experience.  

---

## **Getting Started**  

Follow the steps below to set up and run the SeedLit platform on your local machine.

### **Prerequisites**  
Ensure you have the following installed:  
- [Docker](https://www.docker.com/get-started)  
- [Docker Compose](https://docs.docker.com/compose/)  
- [Node.js](https://nodejs.org/) (required for running the frontend)  
- [npm](https://www.npmjs.com/) (comes with Node.js, but ensure it's installed for managing frontend dependencies)  

---

## **Setup and Running Services**

### **1. Add Local API Hostname**  
Modify your hosts file to map `api` to `127.0.0.1`:
```bash
sudo vim /etc/hosts
127.0.0.1 api
```

### **2. Start All Services**  
Run all services (database, API, and client) with:
```bash
docker compose up
```

### **3. Start Only the Backend (Postgres & API)**  
If you only need the database and API running:
```bash
docker compose up postgres api
```

### **4. Running the Frontend Separately**  
If you prefer to run the frontend manually:
```bash
cd services/client
npm install
npm run dev
```

---

## **Accessing Services**
Once the services are running, you can access them at the following URLs:
- Client (Frontend UI): http://localhost:3000
- API (Backend Server): http://localhost:8000
- API Documentation (Swagger UI): http://localhost:8000/docs

---

## **Managing Containers**
To stop and remove all SeedLit containers, images, volumes, and the frontend build:

```bash
docker container rm -f $(docker container ls -qa --filter "label=project=seedlit"); docker image rm -f $(docker image ls -q --filter "label=project=seedlit"); docker volume rm $(docker volume ls -q --filter "label=project=seedlit"); rm -rf ./services/client/.next
```

---

## **Project Structure**
The repository is organized as follows:
```bash
seedlit/
│── services/
│   ├── api/           # FastAPI backend
│   ├── client/        # Next.js frontend
│── docker-compose.yml # Docker configuration
│── README.md          # Project documentation
```
