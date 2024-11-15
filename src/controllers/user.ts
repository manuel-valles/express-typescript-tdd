import { Request, Response } from 'express';

class UserController {
  getAll = (_: Request, res: Response) => {
    try {
      res.json([{}]);
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: 'Failed to read records' });
    }
  };

  getById = (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      res.json({});
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: `Failed to read the user with ID: ${id}` });
    }
  };
}

export default new UserController();
