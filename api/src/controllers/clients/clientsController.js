const User = require("../../models/userModel");
const asyncHnadler = require("express-async-handler");

const GetAllClients = asyncHnadler(async (req, res) => {
  const clients = await User.find({

  });
  if (!clients) {
    throw new Error("no data available");
  }
  res.json({
    message: "success",
    data: clients,
  });
});
const getClientById = asyncHnadler(async (req, res) => {
    const client = await User.findById(req.body.id)
    // res.json({id,Fname,Lname,Email,Phone})
    if (!client) {
      throw new Error("Client not found");
    }
    res.json({
        message: "success",
        id:client.id,
        Fname:client.Fname,
        Lname:client.Lname,
        CIN:client.CIN,
        Phone:client.phone,
        Birthday:client.Birthday,
        Email:client.Email,
        Gender:client.Gender,
        ImageName:client.ImageName,
        ImageData: client.ImageData

    });
  });

module.exports = { 
    GetAllClients,
    getClientById
};
