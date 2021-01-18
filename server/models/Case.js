module.exports = (sequelize, DataTypes) => {
  const Case = sequelize.define("Case", {
    name: DataTypes.STRING,

    status: DataTypes.ENUM("處理中", "結案"),
    personInCharge: DataTypes.STRING,
    typesMajor: DataTypes.ENUM("一般", "法律", "急難救助"),
    typesMinor: DataTypes.ENUM(
      "一般",
      "求職",
      "陳情",
      "施政建議",
      "債務",
      "勞資",
      "車禍",
      "家事",
      "繼承"
    ),
    note: DataTypes.TEXT,
  });

  Case.associate = (models) => {
    Case.belongsTo(models.Client);
  };

  return Case;
};
