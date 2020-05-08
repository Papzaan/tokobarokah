 const express = require("express");
 const user = require("../models/user.model");

 const index = async (req, res) => {
     try{
         const dataUser = await user.find();
         res.status(200).send({ status: 200, message: "succes", data: dataUser});
     } catch (err){
         res.status(500).send({message: err});

     }
 };

 const create = async (req, res) => {
     try{
         const dataUser = await user({
             name: req.body.name,
             email: req.body.email,
             password: req.body.password,
             create_at: req.body.create_at,
         });

         dataUser.save();
         res.status(200).send({status: 200, message: "user berhasil ditambah", data: dataUser});
     } catch (err) {
         res.status(500).send({ message: err});

     };
 }

 module.exports = {index, create};