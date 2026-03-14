import { Request, Response } from 'express';
import connection from '../config/db';
import * as jwt from 'jsonwebtoken'; 
import jwtConfig from '../config/jwtConfig';

// A interface precisa estar aqui para o arquivo ser consistente
interface Usuario {
  id: number;
  nome: string;
  email: string;
  senha?: string;
}

// O 'export' aqui é o que transforma o arquivo em um módulo
export const login = (req: Request, res: Response) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ error: 'Email e senha são obrigatórios' });
  }

  const sql = 'SELECT * FROM usuarios WHERE email = ? AND senha = ?';
  
  connection.query(sql, [email, senha], (err, results: any) => {
    if (err) {
      console.error('Erro na consulta:', err);
      return res.status(500).json({ error: 'Erro no servidor' });
    }

    const rows = results as Usuario[];
    if (rows.length === 0) {
      return res.status(401).json({ error: 'Email ou senha inválidos' });
    }

    const user = rows[0];
    const token = jwt.sign(
      { id: user.id, email: user.email },
      jwtConfig.secret, 
      { expiresIn: jwtConfig.expiresIn as any } 
    );

    res.json({
      message: 'Login bem-sucedido',
      token,
      user: { id: user.id, nome: user.nome, email: user.email }
    });
  });
};