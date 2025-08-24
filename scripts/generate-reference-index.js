const fs = require("fs/promises")
const path = require("path")

async function collectMarkdownFiles(dir, base, result) {
	const entries = await fs.readdir(dir, { withFileTypes: true })
	for (const entry of entries) {
		const fullPath = path.join(dir, entry.name)
		if (entry.isDirectory()) {
			await collectMarkdownFiles(fullPath, base, result)
		} else if (entry.isFile() && entry.name.endsWith(".md") && entry.name !== "index.md") {
			result.push(path.relative(base, fullPath).replace(/\\/g, "/"))
		}
	}
}

async function main() {
	const docsDir = path.join(process.cwd(), "docs", "reference")
	const files = []
	await collectMarkdownFiles(docsDir, docsDir, files)
	files.sort()
	const lines = ["# API Reference", ""]
	for (const file of files) {
		const label = file.replace(/\.md$/, "")
		lines.push(`- [${label}](./${file})`)
	}
	await fs.writeFile(path.join(docsDir, "index.md"), lines.join("\n"))
}

main().catch((err) => {
	console.error(err)
	process.exit(1)
})
