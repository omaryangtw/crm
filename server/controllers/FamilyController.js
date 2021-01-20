const { Case, Client } = require("../models");
const { or, like } = require("sequelize").Op;
module.exports = {
  async post(req, res) {
    try {
      Client.findOne({ where: { id: req.body.targetId } }).then((u1) => {
        Client.findOne({ where: { id: req.body.sourceId } }).then((u2) => {
          u2.addFamily(u1, {
            through: { relationship: req.body.relationship },
          });
        });
      });
      const source = await Client.findOne({
        where: { id: req.body.sourceId },
      });
      var sourceSex = source.sex;
      var relationshipInverted = "";
      console.log(sourceSex);

      if (sourceSex === "male") {
        switch (req.body.relationship) {
          case "配偶": {
            relationshipInverted = "配偶";
            break;
          }
          case "同居人": {
            relationshipInverted = "同居人";
            break;
          }
          case "父": {
            relationshipInverted = "子";
            break;
          }
          case "母": {
            relationshipInverted = "子";
            break;
          }
          case "子": {
            relationshipInverted = "父";
            break;
          }
          case "女": {
            relationshipInverted = "父";
            break;
          }
          case "兄": {
            relationshipInverted = "弟";
            break;
          }
          case "弟": {
            relationshipInverted = "兄";
            break;
          }
          case "姊": {
            relationshipInverted = "弟";
            break;
          }
          case "妹": {
            relationshipInverted = "兄";
            break;
          }
          case "祖父": {
            relationshipInverted = "孫子";
            break;
          }
          case "祖母": {
            relationshipInverted = "孫子";
            break;
          }
          case "孫子": {
            relationshipInverted = "祖父";
            break;
          }
          case "孫女": {
            relationshipInverted = "祖父";
            break;
          }
          case "岳父": {
            relationshipInverted = "女婿";
            break;
          }
          case "岳母": {
            relationshipInverted = "女婿";
            break;
          }
          case "叔": {
            relationshipInverted = "姪子";
            break;
          }
          case "伯": {
            relationshipInverted = "姪子";
            break;
          }
          case "姑": {
            relationshipInverted = "姪子";
            break;
          }
          case "舅": {
            relationshipInverted = "外甥";
            break;
          }
          case "姨": {
            relationshipInverted = "外甥";
            break;
          }
          default:
            break;
        }
      } else {
        switch (relationship) {
          case "配偶": {
            relationshipInverted = "配偶";
            break;
          }
          case "同居人": {
            relationshipInverted = "同居人";
            break;
          }
          case "父": {
            relationshipInverted = "女";
            break;
          }
          case "母": {
            relationshipInverted = "女";
            break;
          }
          case "子": {
            relationshipInverted = "母";
            break;
          }
          case "女": {
            relationshipInverted = "母";
            break;
          }
          case "兄": {
            relationshipInverted = "妹";
            break;
          }
          case "弟": {
            relationshipInverted = "姊";
            break;
          }
          case "姊": {
            relationshipInverted = "妹";
            break;
          }
          case "妹": {
            relationshipInverted = "姊";
            break;
          }
          case "祖父": {
            relationshipInverted = "孫女";
            break;
          }
          case "祖母": {
            relationshipInverted = "孫女";
            break;
          }
          case "孫子": {
            relationshipInverted = "祖母";
            break;
          }
          case "孫女": {
            relationshipInverted = "祖母";
            break;
          }
          case "公公": {
            relationshipInverted = "子媳";
            break;
          }
          case "婆婆": {
            relationshipInverted = "子媳";
            break;
          }
          case "叔": {
            relationshipInverted = "姪女";
            break;
          }
          case "伯": {
            relationshipInverted = "姪女";
            break;
          }
          case "姑": {
            relationshipInverted = "姪女";
            break;
          }
          case "舅": {
            relationshipInverted = "外甥女";
            break;
          }
          case "姨": {
            relationshipInverted = "外甥女";
            break;
          }
          default:
            break;
        }
      }

      if (relationshipInverted != "") {
        Client.findOne({ where: { id: req.body.targetId } }).then((u1) => {
          Client.findOne({ where: { id: req.body.sourceId } }).then((u2) => {
            u1.addFamily(u2, {
              through: { relationship: relationshipInverted },
            });
          });
        });
      }

      res.send(
        req.body.sourceId +
          "," +
          req.body.targetId +
          "," +
          req.body.relationship
      );
    } catch (err) {
      res.status(500).send({
        error: "an error occured trying to create a relationship",
      });
    }
  },
  async delete(req, res) {
    try {
      Client.findOne({ where: { id: req.params.targetId } }).then((u1) => {
        Client.findOne({ where: { id: req.params.sourceId } }).then((u2) => {
          u2.removeFamily(u1);
        });
      });
      res.send(req.params);
    } catch (err) {
      res.status(500).send({
        error: "an error occured trying to create a relationship",
      });
    }
  },
};
