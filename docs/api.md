# 🔌 Medarcy REST API Documentation

## Overview

Medarcy exposes a lightweight REST API that enables communication between the React frontend and the FastAPI backend.

The API is intentionally designed to remain provider-agnostic, allowing future integration with multiple AI models.

---

# Base URL

```
http://localhost:8000
```

---

# Endpoints

## POST /chat

Generate an AI clinical response.

### Request

```json
{
  "question": "What is hypertension?"
}
```

### Successful Response

```json
{
  "response": "Hypertension is..."
}
```

---

## Health Check

```
GET /
```

Response

```json
{
    "status":"online"
}
```

---

# Status Codes

| Code | Meaning |
|------|---------|
|200|Success|
|400|Bad Request|
|422|Validation Error|
|429|Rate Limited|
|500|Internal Server Error|
|503|AI Provider Busy|

---

# Error Handling

Possible backend errors include

- Invalid request payload
- AI provider unavailable
- Network timeout
- Rate limiting
- Internal server exceptions

All errors are returned as structured JSON responses.

---

# Future API Endpoints

## Authentication

```
POST /login
POST /register
POST /logout
```

---

## Patient Management

```
GET /patients
POST /patients
GET /patients/{id}
```

---

## Research Module

```
POST /literature-search
POST /summarize-paper
POST /generate-review
```

---

## Clinical Decision Support

```
POST /diagnosis
POST /treatment
POST /drug-interactions
POST /risk-assessment
```

---

# API Design Principles

- RESTful
- Stateless
- JSON-based
- Versionable
- AI Provider Independent
- Easily extensible