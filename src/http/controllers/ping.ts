import { Controller, Get, IFastifyContext } from "fastify-helpers";

@Controller()
export class PingController {

    @Get("/_ping")
    ping(context: IFastifyContext): void {
        context.reply.code(200);
        context.reply.send("pong 🎾");
    }

}
