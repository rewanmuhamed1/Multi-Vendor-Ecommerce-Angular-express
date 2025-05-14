const formidable = require("formidable");
const { responseReturn } = require("../../‎utiles/response");
const cloudinary = require("cloudinary").v2;
const categoryModel = require("../../‎models/categoryModel");

class categoryController {
  add_category = async (req, res) => {
  //  console.log("catergory success1");

    const form = formidable();

    form.parse(req, async (err, fields, files) => {
     // console.log("catergory success");
      if (err) {
        responseReturn(res, 404, { error: "something went wrong" });
      } else {
        let { catName } = fields;
        let { catImage } = files;
        let catNameLowerCase = catName.trim().toLocaleLowerCase();
        const slug = catNameLowerCase.split(" ").join("-");

        cloudinary.config({
          cloud_name: process.env.cloud_name,
          api_key: process.env.api_key,
          api_secret: process.env.api_secret,
          secure: true,
        });

        try {
          const result = await cloudinary.uploader.upload(catImage.filepath, {
            folder: "categorys",
          });

          if (result) {
            const category = await categoryModel.create({
              name: catName,
              slug,
              image: result.url,
            });
            responseReturn(res, 201, {
              category,
              message: "Category Added Successfully",
            });
          } else {
            responseReturn(res, 404, { error: "Image Upload File" });
          }
        } catch (error) {
          responseReturn(res, 500, { error: "Internal Server Error" });
        }
      }
    });
  };

  get_category = async (req, res) => {
    const { page, searchValue, parPage } = req.query;
    const skipPage = parseInt(parPage) * (parseInt(page) - 1); // mean first items like 20 , .. to start from

    try {
      if (searchValue) {
        const categorys = await categoryModel
          .find({
            $text: { $search: searchValue },
          })
          .skip(skipPage)
          .limit(parPage)
          .sort({ createdAt: -1 });
        const totalCategory = await categoryModel
          .find({
            $text: { $search: searchValue },
          })
          .countDocuments();
        responseReturn(res, 200, { categorys, totalCategory });
      } else {
        const categorys = await categoryModel
          .find({})
          .skip(skipPage)
          .limit(parPage)
          .sort({ createdAt: -1 });
        const totalCategory = await categoryModel.find({}).countDocuments();
        responseReturn(res, 200, { categorys, totalCategory });
      }
    } catch (error) {}
  };

update_category = async (req, res) => {
    const form = formidable();
    form.parse(req, async (err, fields, files) => {
      if (err) {
        responseReturn(res, 404, { error: "something went wrong" });
      } else {
        let { catName } = fields;
        let { catImage } = files;
        const { id } = req.params;
  
        catName = catName.trim();
        const slug = catName.split(" ").join("-");
  
        try {
          let result = null;
          if (catImage) {
            cloudinary.config({
              cloud_name: process.env.cloud_name,
              api_key: process.env.api_key,
              api_secret: process.env.api_secret,
              secure: true,
            });
  
            result = await cloudinary.uploader.upload(catImage.filepath, {
              folder: "categorys",
            });
          }
  
          const updateData = {
            name : catName,
            slug,
          };
  
          if (result) {
            updateData.image = result.url;
          }
  
          const category = await categoryModel.findByIdAndUpdate(id, updateData, {
            new: true,
          });
          responseReturn(res, 200, {
            category,
            message: "Category Updated successfully",
          });
        } catch (error) {
          responseReturn(res, 500, { error: "Internal Server Error" });
        }
      }
    });
};

// end method

delete_category = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const deleteCategory = await categoryModel.findByIdAndDelete(categoryId);

    if (!deleteCategory) {
      console.log(`Cateogry with id ${categoryId} not found`);
      return res.status(404).json({ message: "Category not found" });
    }
    res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    console.log(`Error delete category with id ${categoryId}:`, error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
// end method
}

module.exports = new categoryController();
