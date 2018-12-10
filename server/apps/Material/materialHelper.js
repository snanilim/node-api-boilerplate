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

exports.updateOneMaterial = async (materialID, data) => {
    try {
        const resSaveMaterial = await Material.update(materialID, data);
        const materialInfo = resSaveMaterial.materialInfo();
        return materialInfo;
    } catch (error) {
        throw Material.checkDuplicateEmail(error);
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

exports.oneMaterial = async (id) => {
    try {
        const resMaterialList = await Material.getOneMaterial(id);
        const materialInfo = resMaterialList.materialInfo();
        return materialInfo;
    } catch (error) {
        throw error;
    }
};

exports.deleteMaterial = async (id) => {
    try {
        await Material.delete(id);
        return true;
    } catch (error) {
        throw error;
    }
};
