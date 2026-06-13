const fs = require("node:fs/promises");
const path = require("path");

// go ONE level up from "data" folder
const dataPath = path.join(__dirname, "..", "items.json");

async function getStoredItems() {
  try {
    const rawFileContent = await fs.readFile(dataPath, "utf-8");
    const data = JSON.parse(rawFileContent);
    return data.items ?? [];
  } catch (err) {
    console.log("READ ERROR:", err.message);
    return [];
  }
}

function storeItems(items) {
  return fs.writeFile(
    dataPath,
    JSON.stringify({ items: items || [] }, null, 2),
  );
}

module.exports = {
  getStoredItems,
  storeItems,
};
