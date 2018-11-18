const Material = require('./materialModel');

exports.addNewmaterial = async (data) => {
    try {
        const material = new Material({
            email: data.email,
            password: data.password,
        });
        const resSavematerial = await material.save();
        const materialInfo = resSavematerial.materialInfo();
        return materialInfo;
    } catch (error) {
        throw error;
    }
};

exports.listAllmaterials = async (query) => {
    try {
        const resmaterialList = await Material.getAllmaterial(query);
        const materialInfo = resmaterialList.map(material => material.materialInfo());
        return materialInfo;
    } catch (error) {
        throw error;
    }
};

exports.onematerial = async (id) => {
    try {
        const resMaterialList = await Material.getOnematerial(id);
        const materialInfo = resMaterialList.materialInfo();
        return materialInfo;
    } catch (error) {
        throw error;
    }
};
