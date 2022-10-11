import getBuildingNumbersFromTXT from "../services/buildingNumbersService.js"

export const getBuildingNumbers = (req, res) => {
    const start = req.query.start ?
        parseInt(req.query.start) :
        undefined;
    const end = req.query.end ?
        parseInt(req.query.end) :
        undefined;

    return res.send(getBuildingNumbersFromTXT(start, end))
}

