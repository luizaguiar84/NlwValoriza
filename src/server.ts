import express from "express";
//para rodar > yarn dev

const app = express();

app.get("/test", (request,response) =>{
  //request > entrando
  // response > saindo
  return response.send("Olá NLW");
});

app.post("/test-post", (request, response)=> {
return response.send("Teste POST");
});

//localhost:3000
app.listen(3000, () => console.log(`server ir running...`));