import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.join(__dirname, "../../data/db.json");

function readDatabase() {
  if (!fs.existsSync(dbPath)) {
    return {
      incidents: [],
      repositories: [],
      reports: [],
    };
  }

  return JSON.parse(fs.readFileSync(dbPath, "utf8"));
}

function writeDatabase(data) {
  fs.writeFileSync(
    dbPath,
    JSON.stringify(data, null, 2),
    "utf8"
  );
}

export function getCollection(name) {
  const db = readDatabase();
  return db[name] || [];
}

export function addToCollection(name, item) {
  const db = readDatabase();

  if (!db[name]) {
    db[name] = [];
  }

  db[name].push(item);

  writeDatabase(db);

  return item;
}