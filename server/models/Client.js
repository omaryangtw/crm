module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define("Client", {
    name: DataTypes.STRING,
    nameAlt: DataTypes.STRING,
    IDN: DataTypes.STRING,
    sex: DataTypes.ENUM("男", "女"),
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
      "阿美",
      "泰雅",
      "布農",
      "卡那卡那富",
      "噶瑪蘭",
      "排灣",
      "卑南",
      "魯凱",
      "拉阿魯哇",
      "賽夏",
      "撒奇萊雅",
      "賽德克",
      "太魯閣",
      "邵",
      "鄒",
      "雅美"
    ),
    tribe: DataTypes.STRING,
    plainMountain: DataTypes.ENUM("平原", "山原"),

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
