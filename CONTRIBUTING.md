# Contributing to BuddyBots.ai

Thank you for your interest in contributing to BuddyBots.ai! This document provides guidelines and information for contributors.

## 🚀 Getting Started

### Prerequisites
- Node.js 18 or higher
- npm or yarn
- Git

### Development Setup

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/buddybotsai.git
   cd buddybotsai
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## 📋 Development Guidelines

### Code Style
- Use TypeScript for all new code
- Follow the existing code formatting (Prettier configuration)
- Use meaningful variable and function names
- Add comments for complex logic
- Follow React best practices and hooks patterns

### Component Structure
- Keep components focused and single-purpose
- Use proper TypeScript interfaces for props
- Implement proper error boundaries where needed
- Follow the existing file structure in `src/components/`

### Styling Guidelines
- Use Tailwind CSS classes for styling
- Follow the existing design system colors and spacing
- Ensure responsive design for all screen sizes
- Test animations and interactions across devices

## 🐛 Bug Reports

When filing a bug report, please include:
- Clear description of the issue
- Steps to reproduce the problem
- Expected vs actual behavior
- Screenshots if applicable
- Browser and device information
- Console errors if any

## ✨ Feature Requests

For new features:
- Describe the feature and its benefits
- Explain the use case and target users
- Consider how it fits with existing functionality
- Provide mockups or examples if helpful

## 🔄 Pull Request Process

1. Create a feature branch from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes following the guidelines above

3. Test your changes thoroughly:
   ```bash
   npm run build
   npm run lint
   ```

4. Commit your changes with a clear message:
   ```bash
   git commit -m "Add: brief description of changes"
   ```

5. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

6. Create a Pull Request with:
   - Clear title and description
   - Reference any related issues
   - Screenshots of UI changes
   - Testing notes

### Pull Request Guidelines
- Keep PRs focused and atomic
- Update documentation if needed
- Ensure all tests pass
- Follow the existing code style
- Be responsive to feedback

## 🧪 Testing

- Test all functionality manually
- Verify responsive design on multiple devices
- Check browser compatibility (Chrome, Firefox, Safari, Edge)
- Test form submissions and interactions
- Validate accessibility features

## 📚 Documentation

When contributing:
- Update README.md if needed
- Add inline code comments for complex logic
- Update component documentation
- Include examples for new features

## 🎨 Design Contributions

For design-related contributions:
- Follow the existing design system
- Maintain consistency with current UI patterns
- Consider accessibility in color choices
- Test on various screen sizes
- Provide design rationale in PR description

## 📞 Getting Help

If you need help:
- Check existing issues and discussions
- Review the README.md for setup instructions
- Ask questions in issue comments
- Reach out to maintainers if needed

## 🏆 Recognition

Contributors will be:
- Listed in the project contributors
- Credited in release notes for significant contributions
- Invited to provide feedback on project direction

## 📄 Code of Conduct

Please be respectful and professional in all interactions. We're building an inclusive community where everyone can contribute effectively.

## 🔄 Release Process

1. Features are merged to `main` branch
2. Regular releases are tagged and deployed
3. Breaking changes are documented in release notes
4. Semantic versioning is followed

Thank you for contributing to BuddyBots.ai! 🚀