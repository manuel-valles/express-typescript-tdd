import { Request, Response } from 'express';
import UserInstance from '../models/user';

class UserController {
  getAll = async (_: Request, res: Response) => {
    try {
      const users = await UserInstance.findAll();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: 'Failed to read records' });
    }
  };

  getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const foundUser = await UserInstance.findByPk(id);

      if (foundUser) {
        res.json(foundUser);
      } else {
        res.status(404).json({ msg: `User with ID '${id}' not found` });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: 'Failed to read the user' });
    }
  };
}

export default new UserController();
