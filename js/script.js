const searchPhone = () => {
        const searchField = document.getElementById('search-field');
        const searchText = searchField.value;
        searchField.value = '';
        // console.log(searchText);
        const url = `
    https://openapi.programming-hero.com/api/phones?search=${searchText}
    `;
        fetch(url)
            .then(res => res.json())
            .then(data => displayPhone(data.data[0]));
    }
    // searchPhone();
const displayPhone = phones => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    // console.log();
    phones.forEach(phone => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
                <div onclick="phoneDetails(${phone.brand})" class="card h-100">
                    <img src="${phone.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${phone.phone_name}</h5>
                        <p class="card-text">${phone.slug}</p>
                    </div>
                </div>
            `;
        searchResult.appendChild(div);

    });
}





// const searchFood = () => {
//     const searchField = document.getElementById('search-field');
//     const searchText = searchField.value;
//     searchField.value = '';
//     if (searchText == '') {
//         // please write something
//         console.log('there is no food');
//     } else {
//         const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
//         fetch(url)
//             .then(response => response.json())
//             .then(data => displayFood(data.meals));
//     }
// }

// const displayFood = meals => {
//     const searchResult = document.getElementById('search-result');
//     searchResult.textContent = '';
//     // if (meals.length == 0) {
//     //     // show no result found
//     // }
//     meals.forEach(meal => {
//         // console.log(meal);
//         const div = document.createElement('div');
//         div.classList.add('col');
//         div.innerHTML = `
//                 <div onclick="foodDetails(${meal.idMeal})" class="card h-100">
//                     <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
//                     <div class="card-body">
//                         <h5 class="card-title">${meal.strMeal}</h5>
//                         <p class="card-text">${meal.strInstructions.slice(0, 250)}</p>
//                     </div>
//                 </div>
//             `;
//         searchResult.appendChild(div);
//     })
// }
// const foodDetails = mealId => {
//     const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
//     fetch(url)
//         .then(response => response.json())
//         .then(data => displayFoodDetail(data.meals[0]));
// }
// const displayFoodDetail = meal => {
//     console.log(meal);
//     const mealDetails = document.getElementById('meal-details');
//     const div = document.createElement('div');
//     div.classList.add('card');
//     div.innerHTML = `
//                 <img src="${meal.strMealThumb}" class="card-img-top " alt="... ">
//                 <div class="card-body ">
//                     <h5 class="card-title ">${meal.strMeal}</h5>
//                     <p class="card-text ">${meal.strTnstructions.slice(0, 150)}</p>
//                     <a href="${meal.strYoutube}" class="btn btn-primary ">Go somewhere</a>
//                 </div>
//                 `;
//     mealDetails.appendChild(div);
// }