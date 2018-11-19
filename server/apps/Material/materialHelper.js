const Material = require('./materialModel');

exports.addNewMaterial = async (data) => {
    try {
        const material = new Material({
            name: data.name,
            weight: data.weight,
            value: data.value,
        });
        const resSavematerial = await material.save();
        const materialInfo = resSavematerial.materialInfo();
        return materialInfo;
    } catch (error) {
        throw error;
    }
};

exports.listAllMaterials = async (query) => {
    try {
        const resmaterialList = await Material.getAllMaterial(query);
        const materialInfo = resmaterialList.map(material => material.materialInfo());
        return materialInfo;
    } catch (error) {
        throw error;
    }
};

exports.onematerial = async (id) => {
    try {
        const resMaterialList = await Material.getOneMaterial(id);
        const materialInfo = resMaterialList.materialInfo();
        return materialInfo;
    } catch (error) {
        throw error;
    }
};
