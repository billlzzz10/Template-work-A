# 🚀 GitHub Action Template

A comprehensive template for creating GitHub Actions with Node.js, TypeScript support, and modern development practices.

## 🎯 Template Features

- ⚡ **Ready-to-use GitHub Action structure**
- 🔧 **Built with TypeScript and the GitHub Actions Toolkit**
- 🧪 **Comprehensive testing with Jest**
- 🔄 **CI/CD workflow for self-testing**
- 📝 **Proper error handling and logging**
- 🎨 **Code quality tools (ESLint, Prettier)**
- 📚 **Complete documentation and examples**
- 🔒 **Security scanning with GitHub CodeQL**
- 🔄 **Automatic dependency updates with Dependabot**
- 🛡️ **TypeScript support with strict type checking**

## 🚀 Quick Start (Template Usage)

### Option 1: Use GitHub's "Use this template" button
1. Click the green "Use this template" button above
2. Choose "Create a new repository"
3. Name your new repository
4. Start developing your GitHub Action!

### Option 2: Clone and customize
```bash
# Clone the template
git clone https://github.com/yourusername/github-action-template.git my-action
cd my-action

# Remove template-specific files
rm -rf .git
git init

# Install dependencies
npm install

# Start customizing!
```

## 📝 Customization Guide

### 1. Update Metadata
- Edit `package.json` - change name, description, author
- Edit `action.yml` - update action name, description, inputs/outputs
- Edit `README.md` - customize documentation

### 2. Choose Your Language
**JavaScript (Default):**
- Use `src/index.js` as your main file
- Run: `npm run build`

**TypeScript (Recommended):**
- Rename `src/index.js` to `src/index.ts`
- Update `action.yml` main path to `dist/index.js`
- Run: `npm run build:ts`

### 3. Implement Your Logic
- Modify `src/index.js` (or `src/index.ts` for TypeScript)
- Add your business logic
- Update tests in `src/test/`

### 4. Configure CI/CD
- Customize `.github/workflows/test.yml` for your needs
- Add additional workflows if needed

## 🔧 Development

### Prerequisites
- Node.js (16.x or later)
- npm or yarn

### Setup
```bash
# Install dependencies
npm install

# JavaScript Development
npm run build
npm test
npm run lint
npm run format

# TypeScript Development
npm run build:ts
npm run test:ts
npm run lint:ts
npm run format:ts
npm run type-check
```

## 📦 Publishing

1. **Build**: `npm run build` (or `npm run build:ts` for TypeScript)
2. **Commit**: Include the `dist` directory
3. **Tag**: `git tag -a v1.0.0 -m "Release v1.0.0"`
4. **Push**: `git push --tags`

## 🎯 Template Structure

```
├── .github/
│   ├── workflows/          # CI/CD workflows
│   │   ├── test.yml       # Main test workflow
│   │   └── codeql.yml     # Security scanning
│   └── dependabot.yml     # Dependency updates
├── src/                   # Source code
│   ├── index.js          # Main action logic (JavaScript)
│   ├── index.ts          # Main action logic (TypeScript)
│   └── test/             # Test files
│       ├── index.test.js # JavaScript tests
│       ├── index.test.ts # TypeScript tests
│       └── setup.ts      # Test setup
├── dist/                 # Built files (generated)
├── action.yml            # Action metadata
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── jest.config.js        # Jest configuration
├── .eslintrc.js          # ESLint configuration
├── .prettierrc           # Prettier configuration
└── README.md            # Documentation
```

## 📚 Advanced Features

### TypeScript Support
The template includes full TypeScript support:
- **Strict type checking** with comprehensive `tsconfig.json`
- **Type-safe testing** with `ts-jest`
- **ESLint integration** for TypeScript
- **Build process** optimized for TypeScript

To use TypeScript:
1. Rename `src/index.js` to `src/index.ts`
2. Update `action.yml` main path to `dist/index.js`
3. Use TypeScript commands: `npm run build:ts`, `npm run test:ts`

### Security Features
- **GitHub CodeQL** - Automated security analysis
- **npm audit** - Dependency vulnerability scanning
- **Scheduled security checks** - Weekly automated scans

### Dependency Management
- **Dependabot** - Automatic dependency updates
- **Weekly updates** - Scheduled every Monday
- **Smart filtering** - Ignores major updates for critical dependencies

### Code Quality
- **ESLint** - JavaScript and TypeScript linting
- **Prettier** - Code formatting
- **Jest** - Comprehensive testing framework
- **Coverage reporting** - Test coverage analysis

## 🤝 Contributing

1. Fork the template
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

---

**💡 Pro Tip**: This template follows GitHub's best practices for Actions. Use it as a foundation for building reliable, maintainable GitHub Actions!

**🔒 Security Note**: The template includes automated security scanning. Make sure to review and address any security alerts in your repository.