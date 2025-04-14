import { Card, CardContent, Grid, Typography } from "@mui/material";

const CardGrid = () => {
  // Sample data for 10 cards
  const cards = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    title: `Card ${index + 1}`,
    content: `This is card number ${index + 1}`,
  }));

  return (
    <div style={{ padding: "20px" }}>
      <Grid container spacing={3}>
        {cards.map((card) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2.4} key={card.id}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Typography variant="h6" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.content}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CardGrid;
