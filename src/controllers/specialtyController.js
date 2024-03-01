import specialtyService from "../services/specialtyService";

let createSpecialty = async (req, res) => {
  console.log("data specialty  :", req.body);
  try {
    let infor = await specialtyService.createSpecialty(req.body);
    return res.status(200).json(infor);
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from the server ",
    });
  }
};

module.exports = {
  createSpecialty: createSpecialty,
};
