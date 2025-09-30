const member = {
  name: "Sinan Kuzan",
  age: 32,
  membershipType: "Gold",
  isActive: false,

  showInfo() {
    console.log("Üyelik Bilgileri :");
    console.log("-------------------");
    console.log(
      `Üye adı : ${this.name} \nYaş : ${this.age}\nÜyelik Tipi : ${this.membershipType}\nDurumu :${this.isActive}`
    );
  },

  activateMembership() {
    if (this.isActive === true) {
      console.log("-------------------");
      console.log(`${this.name} adlı kişinin üyeliği zaten aktif.`);
    } else {
      this.isActive = true;
      console.log("-------------------");
      console.log(`${this.name} adlı kişinin üyeliği aktif edildi.`);
      console.log("-------------------");
    }
  },

  deactivateMembership() {
    if (this.isActive === false) {
      console.log("-------------------");
      console.log(`${this.name} adlı kişinin üyeliği zaten pasif.`);
    } else {
      this.isActive = false;
      console.log("-------------------");
      console.log(`${this.name} adlı kişinin üyeliği pasif hale getirildi.`);
      console.log("-------------------");
    }
  },
};

member.showInfo();
member.activateMembership();
member.showInfo();
member.deactivateMembership();
member.showInfo();
