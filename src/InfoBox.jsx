import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function InfoBox({ recipes }) {
  // Extract ingredients dynamically
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipes[`strIngredient${i}`];
    const measure = recipes[`strMeasure${i}`];

    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(`${ingredient} - ${measure}`);
    }
  }

  return (
    <Card
      sx={{
        maxWidth: 500,
        margin: "20px auto",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.86)",
        borderRadius: 3,
      }}
    >
      <CardMedia
        component="img"
        height="250"
        image={recipes.strMealThumb}
        alt={recipes.strMeal}
      />
      <CardContent>
        <Typography variant="h4" gutterBottom>
          {recipes.strMeal}
        </Typography>

        <Typography variant="h6" color="text.secondary" gutterBottom>
          <strong>Category:</strong> {recipes.strCategory}
        </Typography>

        <Typography variant="h6" gutterBottom>
          <strong>Ingredients:</strong>
        </Typography>

        <ul
          style={{
            paddingLeft: "20px",
            listStyleType: "none",
            lineHeight: "1.6",
          }}
        >
          {ingredients.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>

        <Typography variant="body1" sx={{ marginTop: "10px" }}>
          <strong>Instructions:</strong> {recipes.strInstructions}
        </Typography>
      </CardContent>
    </Card>
  );
}
