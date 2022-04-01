const findAll = async (req, res) => {
    try {
        const result = await req.context.models.propinsi.findAll();
        return res.send(result);
    } catch (error) {
        return res.status(404).json({ msg: "no data found" });
    }
};

const findRowById = async (req, res) => {
    const result = await req.context.models.propinsi.findByPk(req.params.id);
    return res.send(result);
};

const createPropinsi = async (req, res) => {
    const { files, fields } = req.fileAttrb;

    try {
        const result = await req.context.models.propinsi.create({
            prop_key: fields[0].value,
            prop_value: fields[1].value,
            prop_url_image: files[0].file.newFilename,
        });
        return res.send(result);
    } catch (error) {
        return res.status(404).json({
            message: error.message,
        });
    }
};

const updatePropinsi = async (req, res) => {
    const { files, fields } = req.fileAttrb;
    try {
        const result = await req.context.models.propinsi.update(
            {
                prop_key: fields[0].value,
                prop_value: fields[1].value,
                prop_url_image: files[0].file.newFilename,
            },
            {
                returning: true,
                where: { prop_id: req.params.id },
            }
        );
        return res.send(result);
    } catch (error) {
        return res.status(404).send("no data update");
    }
};

const deleteRow = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await req.context.models.propinsi.destroy({
            where: { prop_id: parseInt(id) },
        });
        return res.send("delete " + result + " rows.");
    } catch (error) {
        return res.sendStatus(404).send("Data not found.");
    }
};

export default {
    findAll,
    findRowById,
    createPropinsi,
    updatePropinsi,
    deleteRow,
};
