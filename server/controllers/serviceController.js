import Service from "../models/Service.js";

// Create a new service
export const createService = async (req, res) => {
  try {
    const { title, description, icon } = req.body;

    const service = new Service({
      title,
      description,
      icon,
    });

    await service.save();

    res.status(201).json({
      success: true,
      message: "Service added successfully",
      service,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get all services
export const getServices = async (req, res) => {
  try {
    const services = await Service.find();

    res.status(200).json({
      success: true,
      services,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete a service
export const deleteService = async (req, res) => {
  try {
    await Service.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Service deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};