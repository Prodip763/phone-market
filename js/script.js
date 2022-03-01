const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    // console.log(searchText);
    const url = `
    https://openapi.programming-hero.com/api/phones?search=${searchText}
    `;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhone(data.data));
}

const displayPhone = phone => {
    const searchResult = document.getElementById('search-result');
    // console.log(phone);
    // searchResult.textContent = '';
    phone.forEach(phone => {
        // console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadPhoneDetail(${phone.brand})" class="card h-100">
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${phone.phone_name}</h5>
          <p class="card-text">${phone.slug}</p>
        </div>
        </div>
                `;
        searchResult.appendChild(div);

    })
}
const loadPhoneDetail = Id => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
        .then(response => response.json())
        .then(data => displayPhoneDetail(data.data));
}
const displayPhoneDetail = phone => {
    console.log(phone);
    const mealDetails = document.getElementById('phone-details');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${phone.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${phone.phone_name}</h5>
      <p class="card-text">${phone.slug}</p>
      <a href=" <h2>Other Details</h2>${phone.mainFeatures.displaySize}, ${phone.mainFeatures.memory}, ${phone.releaseDate}" class="btn btn-primary ">Go somewhere</a>
                </div>
                `;
    mealDetails.appendChild(div);
}