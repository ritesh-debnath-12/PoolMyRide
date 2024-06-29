# Contributing to PoolMyRide

Thank you for considering contributing to PoolMyRide! We welcome with open arms, towards your contributions to help improve our transport app.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **Python** (v3.8 or higher)
- **Flask** (latest version)
- **Firebase CLI** (for deployment and management)

### Setting Up the Project

1. **Fork the repository** and clone your fork:

   ```bash
   git clone https://github.com/ritesh-debnath-12/PoolMyRide.git
   cd PoolMyRide
   ```
2. **Install the dependencies**
    ```bash
    npm install
    ```
    **NOTE: If the above command throws an error, please use a --force after the command**
   ```bash
   npm install --force
   ```
3. **Set up python venv**
   ```bash
   python -m venv venv
   source venv/Scripts/activate
   pip install -r requirements.txt
   ```
4.  **Set up Firebase and Firebase Realtime**
   - Create a new Firebase project on the Firebase Console.
   - Set up your Firebase Realtime Database and obtain your configuration.
   - Replace Firebase config details in the project.
5. **Run the flask backend**
     ```bash
     python server/server.py
     ```
6. **Run the React frontend**
   ```bash
   npm run dev
   ```
## How to Contribute

  1. Create a new branch:
     ```bash
     git checkout -b feature/your-feature-name
     ```
  2. Make your changes:
    - Follow the code style and conventions used in the project.
    - Write clear, concise commit messages.

  3. Run tests (if applicable):
     ```bash
     npm test  # or yarn test
     ```
  4. Submit a Pull Request:
    - Push your branch:
     ```bash
     git push origin feature/your-feature-name
     ```
  - Go to the repository on GitHub and open a pull request.

  5. Review Process:
     - A project maintainer will review your PR.
     - Make any requested changes.
     - Your PR will be merged once approved.
