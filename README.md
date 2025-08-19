# BRAT Portfolio - Dynamic Project Scanner

A brutal terminal-style portfolio that automatically scans and displays projects from a `projects` folder structure.

## Project Structure

The application now automatically scans for projects in the following structure:

```
projects/
├── lusu/
│   ├── src/
│   │   ├── main.js
│   │   └── utils.js
│   ├── package.json
│   └── README.md
├── brutal-api/
│   ├── src/
│   │   ├── server.js
│   │   └── routes/
│   │       └── chaos.js
│   └── package.json
└── terminal-games/
    ├── src/
    │   └── snake.js
    └── README.md
```

## Features

### Automatic Project Detection
- Scans the `projects` folder for subfolders
- Each subfolder is treated as a separate project
- Automatically extracts project metadata from `package.json` and `README.md`

### Smart Technology Detection
- Detects technologies based on file extensions
- Supports: JavaScript, TypeScript, React, Node.js, Python, Go, Rust, and more
- Automatically categorizes projects based on their tech stack

### Dynamic File Tree
- Generates interactive file trees for each project
- Supports nested folder structures
- Displays actual file contents in the VS Code-like viewer

### Easy Project Addition
To add a new project:
1. Create a new folder in the `projects` directory
2. Add your source code files
3. Include a `package.json` or `README.md` for metadata
4. The project will automatically appear in the portfolio

## Supported File Types
- JavaScript: `.js`, `.jsx`
- TypeScript: `.ts`, `.tsx`
- Markup: `.html`, `.md`, `.txt`
- Styles: `.css`, `.scss`
- Config: `.json`, `.yml`, `.yaml`, `.xml`
- Scripts: `.sh`, `.py`, `.go`, `.rs`
- And many more...

## Excluded Files/Folders
- `node_modules`
- `.git`
- `dist`, `build`
- `.cache`, `coverage`
- Lock files

## Usage

The portfolio automatically loads and displays all projects from the `projects` folder. No manual configuration needed!

## Development

```bash
npm install
npm run dev
```

## Adding New Projects

Simply create a new folder in the `projects` directory with your source code. The system will automatically:
- Detect the project
- Extract metadata
- Generate the file tree
- Make it available in the "VIEW CODE" modal

Example project structure:
```
projects/my-new-project/
├── src/
│   └── index.js
├── package.json
└── README.md
```

The project will automatically appear in your portfolio with:
- Auto-generated name and description
- Technology detection based on files
- Interactive code viewer
- GitHub link generation# Brat
