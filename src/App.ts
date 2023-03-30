import express from 'express';
import { Request, Response, Application } from 'express';

class App {
  public express;

  constructor () {
    this.express = express();
    this.mountRoutes();
  }

  private mountRoutes (): void {
    const router = express.Router()
    router.get('/', (req: Request, res: Response): void => {
      res.json({
        message: 'Hello World!'
      })
    })
    this.express.use('/', router)
  }
}

export default new App().express
