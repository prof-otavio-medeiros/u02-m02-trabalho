import http from "http";
import 'dotenv/config'

const SERVER_PORT = process.env.SERVER_PORT;

const jornadas = (req, res) => {
  let arrJornadas = [
    {
      nome: "Otávio Medeiros",
      diaSemana: "segunda-feira",
      feriado: true,
      jornadaTrabalhadaEmMinutos: 540,
    },
    {
      nome: "Jaqueline Barbosa ",
      diaSemana: "terça-feira",
      feriado: true,
      jornadaTrabalhadaEmMinutos: 600,
    },
    {
      nome: "Otávio Medeiros",
      diaSemana: "quarta-feira",
      feriado: false,
      jornadaTrabalhadaEmMinutos: 490,
    },
    {
      nome: "Marlon Praxedes",
      diaSemana: "quarta-feira",
      feriado: false,
      jornadaTrabalhadaEmMinutos: 400,
    },
    {
      nome: "Otávio Medeiros",
      diaSemana: "sexta-feira",
      feriado: false,
      jornadaTrabalhadaEmMinutos: 480,
    },
    {
      nome: "Catarina Sables",
      diaSemana: "sábado",
      feriado: false,
      jornadaTrabalhadaEmMinutos: 200,
    },
    {
      nome: "Otávio Medeiros",
      diaSemana: "sábado",
      feriado: false,
      jornadaTrabalhadaEmMinutos: 600,
    },
    {
      nome: "Otávio Medeiros",
      diaSemana: "domingo",
      feriado: false,
      jornadaTrabalhadaEmMinutos: 500,
    },
    {
      nome: "Otávio Medeiros",
      diaSemana: "quinta-feira",
      feriado: false,
      jornadaTrabalhadaEmMinutos: 480,
    },
  ];

  res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");

  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(JSON.stringify(arrJornadas));
  res.end();
};

function app(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Request-Method", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");

  switch (req.url) {
    case "/jornadas":
      jornadas(req, res);
      break;
    default:
      break;
  }
}

http.createServer(app).listen(SERVER_PORT);
