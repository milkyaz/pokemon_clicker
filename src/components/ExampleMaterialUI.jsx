import { Container, Typography, Paper, Box, Button } from "@mui/material";

const cardList = ["Card1", "Card2", "Card3"];

function ExampleMaterialUI() {
  return (
    <>
      <Container sx={{ bgcolor: "tomato", height: "100vh" }}>
        <Typography
          variant="h1"
          sx={{
            bgcolor: "darkgray",
            borderRadius: "8px",
            color: "white",
            ":hover": { bgcolor: "darkblue" },
          }}
        >
          Vite + React
        </Typography>
        <Typography variant="h3">List</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, //на маленьких размерах экрана xs будет column, а на средних размерах md будет row
            justifyContent: "space-between",
            pt: 4,
            gap: 4,
          }}
        >
          {cardList.map((el) => (
            <Paper key={el.id} elevetion={3} sx={{ width: { xs: 1, md: 320 } }}>
              <Box sx={{ m: 3 }}>
                <Typography variant="h3">{el}</Typography>
                <Typography sx={{ mt: 2 }} variant="p">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Iusto perferendis quis placeat ad sint, pariatur explicabo
                  voluptatibus quasi ullam? Ex mollitia iusto cumque dolor optio
                  possimus. Autem non impedit distinctio tempora tenetur hic
                  temporibus voluptate saepe, quod, voluptatem error corporis
                  pariatur quaerat voluptatibus sed eos vel quidem porro aliquam
                  modi!
                </Typography>
                <Button variant="outlined" sx={{ mt: 2 }}>
                  {" "}
                  Learn more
                </Button>
              </Box>
            </Paper>
          ))}
        </Box>
      </Container>
    </>
  );
}

export default ExampleMaterialUI;
