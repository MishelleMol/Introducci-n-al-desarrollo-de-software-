const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3002;

app.use(cors());
app.use(express.json());


let testimonials = [
  {
    id: 1,
    author: "Juan Pérez",
    role: "Frontend Developer",
    company: "TechCorp",
    text: "Trabajar con Mishelle fue increíble, muy profesional.",
    avatarUrl: "",
    createdAt: new Date()
  },
  {
    id: 2,
    author: "Ana López",
    role: "Project Manager",
    company: "Innova",
    text: "Excelente comunicación y resultados de alta calidad.",
    avatarUrl: "",
    createdAt: new Date()
  }
];

let nextId = 3;


app.get('/testimonials', (req, res) => {
  res.json(testimonials);
});


app.get('/testimonials/:id', (req, res) => {
  const testimonial = testimonials.find(t => t.id === parseInt(req.params.id));

  if (!testimonial) {
    return res.status(404).json({ error: 'Testimonio no encontrado' });
  }

  res.json(testimonial);
});


app.post('/testimonials', (req, res) => {
  const { author, role, company, text, avatarUrl } = req.body;

  if (!author || !text) {
    return res.status(400).json({ error: 'author y text son requeridos' });
  }

  const newTestimonial = {
    id: nextId++,
    author,
    role,
    company,
    text,
    avatarUrl: avatarUrl || "",
    createdAt: new Date()
  };

  testimonials.push(newTestimonial);

  res.status(201).json(newTestimonial);
});


app.patch('/testimonials/:id', (req, res) => {
  const index = testimonials.findIndex(t => t.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).json({ error: 'Testimonio no encontrado' });
  }

  testimonials[index] = {
    ...testimonials[index],
    ...req.body
  };

  res.json(testimonials[index]);
});


app.delete('/testimonials/:id', (req, res) => {
  const index = testimonials.findIndex(t => t.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).json({ error: 'Testimonio no encontrado' });
  }

  const deleted = testimonials.splice(index, 1);

  res.json({
    message: 'Testimonio eliminado',
    testimonial: deleted[0]
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});