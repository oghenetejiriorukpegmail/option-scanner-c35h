# Options Scanner C35H

A streamlined, lightweight application for retail traders to identify and analyze trading opportunities in volatile stocks using options data and technical analysis.

## Prerequisites

Before installation, ensure you have the following:
- Node.js (v14 or later)
- npm (v6 or later)
- Git

## Installation Instructions

### Windows Installation

#### Method 1: Direct Installation
1. Open Command Prompt or PowerShell
2. Clone the repository:
   ```powershell
   git clone https://github.com/oghenetejiriorukpegmail/option-scanner-c35h.git
   cd option-scanner-c35h
   ```
3. Install dependencies:
   ```powershell
   npm run install:all
   ```
4. Copy environment template:
   ```powershell
   copy .env.example .env
   ```
5. Start the application:
   ```powershell
   npm start
   ```

#### Method 2: Using Windows Subsystem for Linux (WSL)
1. Enable WSL and install a Linux distribution
2. Open WSL terminal
3. Follow Linux installation instructions

### macOS Installation

1. Open Terminal
2. Clone the repository:
   ```bash
   git clone https://github.com/oghenetejiriorukpegmail/option-scanner-c35h.git
   cd option-scanner-c35h
   ```
3. Install dependencies:
   ```bash
   npm run install:all
   ```
4. Copy environment template:
   ```bash
   cp .env.example .env
   ```
5. Start the application:
   ```bash
   npm start
   ```

### Linux Installation

#### Ubuntu/Debian
1. Open Terminal
2. Install dependencies:
   ```bash
   sudo apt update
   sudo apt install git nodejs npm
   ```
3. Clone the repository:
   ```bash
   git clone https://github.com/oghenetejiriorukpegmail/option-scanner-c35h.git
   cd option-scanner-c35h
   ```
4. Install project dependencies:
   ```bash
   npm run install:all
   ```
5. Copy environment template:
   ```bash
   cp .env.example .env
   ```
6. Start the application:
   ```bash
   npm start
   ```

## Dependency Management and Security

### Addressing Vulnerabilities
1. Regularly update dependencies:
   ```bash
   npm run audit:fix
   ```

2. Check for known vulnerabilities:
   ```bash
   npm audit
   ```

3. If vulnerabilities are detected:
   - Review the vulnerability details
   - Update specific packages
   - Consider manual updates for critical security issues

### Recommended Security Practices
- Keep Node.js and npm updated to the latest LTS versions
- Regularly run `npm audit`
- Use `npm audit fix` to automatically resolve minor vulnerabilities
- For critical vulnerabilities, manually update or replace packages
- Consider using tools like Snyk or npm audit for comprehensive security scanning

## Troubleshooting

- Ensure Node.js and npm are correctly installed
- Check that all dependencies are installed correctly
- Verify your `.env` file is properly configured
- For any installation issues, check the project's GitHub issues

## Configuration

1. Open `.env` file
2. Add your API keys and configuration settings
3. Save the file before starting the application

## Running Tests

```bash
npm test
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
