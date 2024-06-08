import { type Name } from "../../Naming";

import { Scala3Renderer } from "./Scala3Renderer";

export class BorerRenderer extends Scala3Renderer {
    protected emitClassDefinitionMethods(): void {
        this.emitLine(") derives Codec ");
    }

    protected emitEnumHeader(name: Name): void {
        this.emitLine("case", name, " derives Codec.All:");
    }

    protected emitHeader(): void {
        super.emitHeader();

        this.emitLine("import io.bullet.borer.Codec");
        this.emitLine("import io.bullet.borer.derivation.MapBasedCodecs.*");
        this.ensureBlankLine();
    }
}
