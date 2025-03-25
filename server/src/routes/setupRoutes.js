import express from 'express';
import SetupService from '../services/setupService.js';

const router = express.Router();

// Initialize database
router.get('/initialize', async (req, res) => {
  try {
    const setupService = new SetupService();
    await setupService.setup();
    
    res.status(200).json({
      message: 'Database initialized successfully',
      status: 'ready'
    });
  } catch (error) {
    console.error('Database initialization error:', error);
    res.status(500).json({
      message: 'Failed to initialize database',
      error: error.message
    });
  }
});

// Check database connection
router.get('/health', async (req, res) => {
  try {
    const setupService = new SetupService();
    await setupService.connect();
    await setupService.close();
    
    res.status(200).json({
      message: 'Database connection successful',
      status: 'healthy'
    });
  } catch (error) {
    console.error('Database health check failed:', error);
    res.status(500).json({
      message: 'Database connection failed',
      error: error.message
    });
  }
});

// Reset database (for development/testing)
router.post('/reset', async (req, res) => {
  try {
    const setupService = new SetupService();
    await setupService.connect();
    
    // Drop existing tables
    await new Promise((resolve, reject) => {
      setupService.db.run('DROP TABLE IF EXISTS stocks', (err) => {
        if (err) reject(err);
        setupService.db.run('DROP TABLE IF EXISTS options_chain', (err) => {
          if (err) reject(err);
          setupService.db.run('DROP TABLE IF EXISTS market_indicators', (err) => {
            if (err) reject(err);
            resolve();
          });
        });
      });
    });

    // Reinitialize schema
    await setupService.initializeSchema();
    await setupService.close();
    
    res.status(200).json({
      message: 'Database reset successfully',
      status: 'reset'
    });
  } catch (error) {
    console.error('Database reset error:', error);
    res.status(500).json({
      message: 'Failed to reset database',
      error: error.message
    });
  }
});

export default router;
