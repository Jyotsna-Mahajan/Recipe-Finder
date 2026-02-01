import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import "./RecipeFinder.css";
import FlatwareIcon from "@mui/icons-material/Flatware";
import { Typography } from "@mui/material";

export default function RecipeFinder() {
  const [recipes, setRecipes] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  async function handleSearch(query) {
    

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setRecipes(data.meals);
    } catch (err) {
      console.error("Fetch failed", err);
      setRecipes(null);
    }
    finally{
      setHasSearched(true); // mark that user has searched
    }
  }

  return (
    <div className="container">
      <h1 style={{ fontSize: "40px" }}>
        <FlatwareIcon
          style={{
            fontSize: "50px",
            marginRight: "10px",
            verticalAlign: "middle",
          }}
        />
        Recipe Finder App
      </h1>

      <SearchBox onSearch={handleSearch} />

      {/* Show nothing before search, then show message only if search done */}
      {hasSearched && recipes === null && (
        <Typography
          variant="h6"
          align="center"
          color="error"
          sx={{ mt: 4, fontWeight: "bold" }}
        >
          No such recipe found !
        </Typography>
      )}

      {/* Show results only if available */}
      {recipes &&
        recipes.map((recipe) => (
          <InfoBox key={recipe.idMeal} recipes={recipe} />
        ))}
    </div>
  );
}
