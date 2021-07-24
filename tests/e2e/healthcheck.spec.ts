import fetch from "node-fetch";
import { expect } from "chai";
import jtomler from "jtomler";
import { IAppConfig } from "../../src/lib/config.interfaces";
import * as path from "path";

describe("Healthcheck", () => {

    const config: IAppConfig = <IAppConfig>jtomler.parseFileSync(path.resolve(__dirname, "config.toml"));

    it("GET /healthcheck", async () => {

        const response = await fetch(`http://localhost:${config.api.port}${config.api.prefix}/healthcheck`, {
            method: "GET"
        });
        expect(response.status).equal(200);
        const data = await response.text();
        expect(data).equal("Healthy");

    });

    it("GET /_ping", async () => {

        const response = await fetch(`http://localhost:${config.api.port}${config.api.prefix}/_ping`, {
            method: "GET"
        });
        expect(response.status).equal(200);

    });

});