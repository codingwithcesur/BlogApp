"use strict";

module.exports = (req, res, next) => {
  // Searching
  const search = req.query?.search || {};
  for (let key in search) search[key] = { $regex: search[key], $options: "i" };
  // Sorting
  const sort = req.query?.sort || {};
  console.log(sort);

  // Pagination
  let limit = Number(req.query?.limit || process.env?.PAGE_SIZE);
  limit = limit > 0 ? limit : Number(process.env?.PAGE_SIZE) || 20; // Limit must be positive number
  // console.log("limit", limit);
  let page = Number(req.query?.limit);
  page = page > 0 ? page : 1; // Page must be positive number

  let skip = Number(req.query?.skip); // FrontEnd can send skip number
  skip = skip > 0 ? skip : page * limit;

  req.getModelList = async (Model, populate = null) => {
    return await Model.find(search)
      .sort(sort)
      .skip(skip)
      .limit(limit)
      .populate(populate);
  };
  next();
};
