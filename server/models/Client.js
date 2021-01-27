module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define("Client", {
    name: DataTypes.STRING,
    nameAlt: DataTypes.STRING,
    IDN: DataTypes.STRING,
    sex: DataTypes.ENUM("male", "femail"),
    birthday: DataTypes.DATEONLY,
    isDead: DataTypes.BOOLEAN,

    age: {
      type: new DataTypes.VIRTUAL(DataTypes.STRING, ["birthday"]),
      get: function () {
        if (this.birthday) {
          return (
            parseInt(new Date().getUTCFullYear()) - parseInt(this.birthday)
          );
        }
      },
    },
    birthYear: {
      type: new DataTypes.VIRTUAL(DataTypes.STRING, ["birthday"]),
      get: function () {
        if (this.birthday) {
          return this.birthday.slice(0, 4);
        }
      },
    },
    birthMonth: {
      type: new DataTypes.VIRTUAL(DataTypes.STRING, ["birthday"]),
      get: function () {
        if (this.birthday) {
          return this.birthday.slice(5, 7);
        }
      },
    },

    incomeStatus: DataTypes.ENUM("low", "mid-low", "mid-low-elderly"),
    disabledStatus: DataTypes.ENUM("light", "mid", "heavy"),

    group: DataTypes.ENUM(
      "Amis",
      "Atayal",
      "Bunun",
      "Kanakanavu",
      "Kavalan",
      "Paiwan",
      "Puyuma",
      "Rukai",
      "Saaroa",
      "Saisiyat",
      "Sakizaya",
      "Seediq",
      "Taroku",
      "Thao",
      "Tsou",
      "Yami"
    ),
    tribe: DataTypes.STRING,
    plainMountain: DataTypes.ENUM("plain", "mountain"),

    canCall: DataTypes.BOOLEAN,
    phone: DataTypes.STRING,
    phoneNote: DataTypes.STRING,
    phoneAlt: DataTypes.STRING,
    phoneAltNote: DataTypes.STRING,
    mobile: DataTypes.STRING,
    mobileNote: DataTypes.STRING,
    mobileAlt: DataTypes.STRING,
    mobileAltNote: DataTypes.STRING,

    canMail: DataTypes.BOOLEAN,
    city: DataTypes.STRING,
    cityAlt: DataTypes.STRING,
    dist: DataTypes.STRING,
    distAlt: DataTypes.STRING,
    vill: DataTypes.STRING,
    villAlt: DataTypes.STRING,
    addr: DataTypes.STRING,
    addrAlt: DataTypes.STRING,
    addrNote: DataTypes.STRING,
    addrAltNote: DataTypes.STRING,
    note: DataTypes.TEXT,
  });

  const ClinetClients = sequelize.define(
    "ClientClients",
    {
      relationship: DataTypes.TEXT,
    },
    { timestamps: false }
  );

  Client.associate = (models) => {
    Client.hasMany(models.Case, { onDelete: "cascade" });
    Client.hasMany(models.Contact, { onDelete: "cascade" });
    Client.belongsToMany(models.Client, {
      as: "Family",
      through: "ClientClients",
    });
  };

  Client.getYear = function (date) {
    try {
      return date.toISOString().slice(0, 4);
    } catch (err) {
      console.log(err);
    }
  };

  return Client;
};
