// export const fetchIngredient = async (ingredient, pagePath) => {
//   try {
//     const endPoint = pagePath === '/meals'
//       ? `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
//       : `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`;
//     const data = await fetch(endPoint)
//       .then((response) => response.json())
//       .then((json) => json);
//     return data;
//   } catch (error) {
//     return error;
//   }
// };

// export const fetchName = async (name, pagePath) => {
//   const endPoint = pagePath === '/meals'
//     ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
//     : `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;
//   const data = await fetch(endPoint)
//     .then((response) => response.json())
//     .then((json) => json);
//   return data;
// };

// export const fetchLetter = async (letter, pagePath) => {
//   const endPoint = pagePath === '/meals'
//     ? `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`
//     : `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`;
//   const data = await fetch(endPoint)
//     .then((response) => response.json())
//     .then((json) => json);
//   return data;
// };

export const apiRequest = async (radio, text, pagePath) => {
  if (pagePath === '/meals') {
    if (radio === 'ingredientsRadio') {
      const ingrediente = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${text}`);
      return ingrediente.json();
    }

    if (radio === 'firstLetterRadio') {
      const primeiraLetra = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${text}`);
      return primeiraLetra.json();
    }

    const nome = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`);
    return nome.json();
  }
  if (radio === 'ingredientsRadio') {
    const ingrediente = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${text}`);
    return ingrediente.json();
  }
  if (radio === 'firstLetterRadio') {
    const primeiraLetra = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${text}`);
    return primeiraLetra.json();
  }

  const nome = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${text}`);
  return nome.json();
};

const recipeDetailsAPI = {
  '/meals/:id': async (id) => {
    const URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    const request = await fetch(URL);
    const response = await request.json();
    return response;
  },
  '/drinks/:id': async (id) => {
    const URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    const request = await fetch(URL);
    const response = await request.json();
    return response;
  },
};

export default recipeDetailsAPI;