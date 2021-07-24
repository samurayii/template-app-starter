import { Controller, Get, IFastifyContext } from "fastify-helpers";

@Controller()
export class HealthcheckController {

    @Get("/healthcheck")
    healthcheck(context: IFastifyContext): void {
        context.reply.code(200);
        context.reply.send("Healthy");
    }
}
