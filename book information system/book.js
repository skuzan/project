const books = {
  title: "Sefiller",
  author: "Victor Hugo",
  year: 1862,
  genres: ["Roman", "Dram", "Klasik"],

  showInfo() {
    console.log("Kitap Bilgileri :");
    console.log("-------------------");
    console.log(
      `Kitap adı : ${this.title} \nYazarı : ${this.author}\nYılı : ${this.year}\nTürü :${this.genres}`
    );
  },

  updateYear(year) {
    this.year = year;
    console.log("-------------------");
    console.log(`${this.title} adlı kitabın yılı ${year} olarak güncellendi.`);
  },

  addGenre(genre) {
    this.genres.push(genre);
    console.log("-------------------");
    console.log(`${this.title} adlı kitaba ${genre} türü eklendi.`);
  },
};

books.showInfo();
books.updateYear(1863);
books.addGenre("Polisiye");
books.showInfo();
