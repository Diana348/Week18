let heroesBlock = document.getElementById("heroes-block");

const changeRating = (arr, rate) => {
  for (let index = 0; index < rate; index++) {
    arr[index].src = "./img/full-star.svg";
  }
  for (let index = rate; index < 5; index++) {
    arr[index].src = "./img/star.svg";
  }
};

superHeroesJSON.forEach((hero, id) => {
  const heroBlock = document.createElement("div");
  heroBlock.classList.add("hero-block");

  const heroName = document.createElement("h2");
  heroName.textContent = hero.name;
  heroBlock.appendChild(heroName);
  heroName.classList.add("hero-title");

  const heroUniverse = document.createElement("p");
  heroUniverse.innerHTML = `<b>Вселенная:</b> ${hero.universe}`;
  heroBlock.appendChild(heroUniverse);

  const heroAlterego = document.createElement("p");
  heroAlterego.innerHTML = `<b>Альтерэго:</b> ${hero.alterego}`;
  heroBlock.appendChild(heroAlterego);

  const heroOccupation = document.createElement("p");
  heroOccupation.innerHTML = `<b>Род деятельности:</b> ${hero.occupation}`;
  heroBlock.appendChild(heroOccupation);

  const heroFriends = document.createElement("p");
  heroFriends.innerHTML = `<b>Друзья:</b> ${hero.friends}`;
  heroBlock.appendChild(heroFriends);

  const heroSuperpowers = document.createElement("p");
  heroSuperpowers.innerHTML = `<b>Суперсилы:</b> ${hero.superpowers}`;
  heroBlock.appendChild(heroSuperpowers);

  const heroInfo = document.createElement("p");
  heroInfo.innerHTML = `<b>Описание:</b> ${hero.info}`;
  heroBlock.appendChild(heroInfo);

  const heroAvatar = document.createElement("img");
  heroAvatar.src = hero.url;
  heroAvatar.alt = "hero avatar";
  heroBlock.appendChild(heroAvatar);

  const heroStars = document.createElement("div");
  heroStars.classList.add("hero-stars");
  const heroRating = localStorage.getItem(hero.name);

  if (heroRating === null) {
    localStorage.setItem(hero.name, 0);
  }

  for (let index = 0; index < heroRating; index++) {
    const fullStar = document.createElement("img");
    fullStar.classList.add("star");
    fullStar.classList.add(`star-${id}`);
    fullStar.src = "./img/full-star.svg";
    heroStars.appendChild(fullStar);
  }
  for (let index = 0; index < 5 - heroRating; index++) {
    const emptyStar = document.createElement("img");
    emptyStar.classList.add("star");
    emptyStar.classList.add(`star-${id}`);
    emptyStar.src = "./img/star.svg";
    heroStars.appendChild(emptyStar);
  }

  heroBlock.append(heroStars);
  heroesBlock.appendChild(heroBlock);

  const starsArr = Array.from(document.getElementsByClassName(`star-${id}`));
  starsArr.forEach((star, i) => {
    star.addEventListener("mouseover", () => {
      let rating = i + 1;
      changeRating(starsArr, rating);
    });
    star.addEventListener("mouseout", () => {
      const heroRating = localStorage.getItem(hero.name);
      changeRating(starsArr, heroRating);
    });
    star.addEventListener("click", () => {
      localStorage.setItem(hero.name, i + 1);
      changeRating(starsArr, i + 1);
    });
  });
});
