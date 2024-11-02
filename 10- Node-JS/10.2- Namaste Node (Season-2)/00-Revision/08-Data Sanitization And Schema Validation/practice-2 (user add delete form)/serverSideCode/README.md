# Multi-Step User Registration API

This project is a backend application for a multi-step user information collection system. The system collects user details in three distinct steps and stores them in a MongoDB database. Each step is handled by separate CRUD APIs, enabling users to gradually complete their registration.

## Project Overview

The idea is to gather user information in multiple stages, allowing data validation and secure storage for each part of the user data. This design provides modularity and ensures sensitive information like passwords is securely managed.

## NOTE

In Episode-8 Revision, we'll be collecting BasicDetails information
In Episode-9 Revision, we'll make password hashing in Basic Details Collecting
..... further we'll plan later

---

## Steps for User Data Collection

### Step 1: Basic Details

In the first step, we collect basic user details, which include:

- **Fields**:
  - `firstName`
  - `middleName`
  - `lastName`
  - `emailId` (unique, validated as a proper email)
  - `gender` (enum validation)
  - `password` (hashed for security)
  - `dateOfBirth` (format: `yyyy-mm-dd`)
- **Validation**:
  - Password should be hashed.
  - Validations are applied to ensure data accuracy, such as email format and date type.
- **Related File**: `user.js`

---

### Step 2: Address Details

In the second step, we collect the user’s address information, including:

- **Fields**:
  - **Current Address**: `flat`, `area`, `city`, `state`
  - **Permanent Address**: A boolean field (`isSameAsCurrent`) to indicate if the permanent address is the same as the current address. If not, additional fields (`flat`, `area`, `city`, `state`) will be required for the permanent address.
- **Validation**:
  - Addresses should follow a structured schema for consistency.

---

### Step 3: Photo and Signature

In the third step, we gather any additional required information, such as:

- **Fields**:
  - `photo` (image file or URL link)
  - `signature` (image file or URL link)
- **Storage**:
  - Photos and signatures are stored securely, either as encoded images or file URLs.

---

## Project Structure

- **Routes**:
  - Each step is managed by separate routes to handle CRUD operations for collecting user data.
- **Database**:
  - MongoDB is used for storage, with Mongoose schemas defining each data step.

---

## Setup and Installation
