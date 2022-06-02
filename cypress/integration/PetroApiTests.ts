import apiController from "../api/petroApiController";
import getStatusSchema from "../jsonSchemas/getStatusSchema.json";

import {validate} from "jsonschema";

describe("Status API tests", () => {
    let statusObj = {
        "version": "1",
        "status": "success",
        "data": {
            "stage": "READY",
            "documentMediaTypes": [{"Id": "1", "Title": "Other"}, {"Id": "15", "Title": "Clinical Unknown"}]
        }
    };
    it("GET status", () => {
        apiController.getStatus().then(response => {
            expect(response.status).to.be.equal(200);

            let result = validate(response.body, getStatusSchema);
            expect(result.valid, result.errors.toString()).to.be.true;

            statusObj = response.body;
        });
    });

    it("Update status", () => {
        let version = parseInt(statusObj.version);
        let newVersion = version + 1;
        let newVersionStr = newVersion.toString();
        statusObj.version = newVersionStr;
        if (statusObj.status === "success") {
            statusObj.status = "failure";
        } else {
            statusObj.status = "success";
        }
        apiController.postStatus(statusObj).then(response => {
            expect(response.status).to.be.equal(201);
            validateResponse(response)
        });
        apiController.getStatus().then(response => {
            expect(response.status).to.be.equal(200);
            validateResponse(response);
        });

        function validateResponse(response) {
            let result = validate(response.body, getStatusSchema);
            expect(result.valid, result.errors.toString()).to.be.true;
            expect(response.body.version).to.deep.equal(statusObj.version);
            expect(response.body.status).to.deep.equal(statusObj.status);
        }
    });
})