import sqlite3 from 'sqlite3';
import path from 'path';
import fs from 'fs';

// Database initialization and setup service
class SetupService {
  constructor(dbPath = path.resolve('./database/options_scanner.sqlite')) {
    this.dbPath = dbPath;
    this.db = null;
  }

  // Initialize database connection
  async connect() {
    return new Promise((resolve, reject) => {
      // Ensure database directory exists
      const dbDir = path.dirname(this.dbPath);
      if (!fs.existsSync(dbDir)) {
        fs.mkdirSync(dbDir, { recursive: true });
      }

      this.db = new sqlite3.Database(this.dbPath, (err) => {
        if (err) {
          console.error('Database connection error:', err);
          reject(err);
        } else {
          console.log('Connected to the SQLite database.');
          resolve(this.db);
        }
      });
    });
  }

  // Create initial database schema
  async initializeSchema() {
    const queries = [
      `CREATE TABLE IF NOT EXISTS stocks (
        symbol TEXT PRIMARY KEY,
        name TEXT,
        sector TEXT,
        last_updated DATETIME DEFAULT CURRENT_TIMESTAMP
      )`,

      `CREATE TABLE IF NOT EXISTS options_chain (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        symbol TEXT,
        contract_type TEXT,
        strike_price REAL,
        expiration_date TEXT,
        open_interest INTEGER,
        volume INTEGER,
        implied_volatility REAL,
        last_price REAL,
        FOREIGN KEY(symbol) REFERENCES stocks(symbol)
      )`,

      `CREATE TABLE IF NOT EXISTS market_indicators (
        symbol TEXT,
        date TEXT,
        ema_short REAL,
        ema_long REAL,
        rsi REAL,
        PRIMARY KEY(symbol, date),
        FOREIGN KEY(symbol) REFERENCES stocks(symbol)
      )`
    ];

    return new Promise((resolve, reject) => {
      this.db.serialize(() => {
        queries.forEach(query => {
          this.db.run(query, (err) => {
            if (err) {
              console.error('Schema creation error:', err);
              reject(err);
            }
          });
        });

        console.log('Database schema initialized.');
        resolve();
      });
    });
  }

  // Close database connection
  async close() {
    return new Promise((resolve, reject) => {
      if (this.db) {
        this.db.close((err) => {
          if (err) {
            console.error('Database close error:', err);
            reject(err);
          } else {
            console.log('Database connection closed.');
            resolve();
          }
        });
      } else {
        resolve();
      }
    });
  }

  // Perform initial setup
  async setup() {
    try {
      await this.connect();
      await this.initializeSchema();
      return this.db;
    } catch (error) {
      console.error('Setup failed:', error);
      throw error;
    }
  }
}

export default SetupService;
