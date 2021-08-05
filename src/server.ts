import express from 'express';
import { categoriesRoutes } from './routes/categories.routes';
import { speficiationRoutes } from './routes/specifications.routes';

const app = express();

app.use(express.json())

app.use("/categories",categoriesRoutes);
app.use("/specification",speficiationRoutes)
app.listen(3333,()=>console.log('Server Running'))