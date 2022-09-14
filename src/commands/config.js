"use strict"
/*
 * [foonyah/fcli] config.js
 * Copyright 2022 Synquery Team and contributors all rights reserved.
 * 各種 config を設定／表示する
 */
const { Command, Flags } = require("@oclif/core");
const { BootstrapUtils, CommandUtils, ConfigService, Preset } = require('../service');
exports.default = class Config extends Command {
    static description = 'Command used to set up the configuration files and the nemesis block for the current network';
    static examples = [
        `$ fcli config -p bootstrap`,
        `$ fcli config -p testnet -a dual --password 1234`,
        `$ echo "$MY_ENV_VAR_PASSWORD" | fcli config -p testnet -a dual`,
    ];
    static resolveFlags = required => ({
        help: CommandUtils.helpFlag,
        target: CommandUtils.targetFlag,
        password: CommandUtils.passwordFlag,
        noPassword: CommandUtils.noPasswordFlag,
        preset: Flags.enum({
            char: 'p',
            description: `The network preset, can be provided via custom preset or cli parameter. ${
                required ? '' : 'If not provided, the value is resolved from the target/preset.yml file.'
            }`,
            options: Object.keys(Preset).map((v) => v in Preset),
            required,
        }),
        assembly: Flags.string({
            char: 'a',
            description: `The assembly, example "dual" for testnet. ${
                required ? '' : 'If not provided, the value is resolved from the target/preset.yml file.'
            }`,
            required,
        }),
        customPreset: Flags.string({
            char: 'c',
            description: `External preset file. Values in this file will override the provided presets`,
            required,
        }),
        reset: Flags.boolean({
            char: 'r',
            description: 'It resets the configuration generating a new one',
            default: ConfigService.defaultParams.reset,
        }),

        upgrade: Flags.boolean({
            description: `It regenerates the configuration reusing the previous keys. Use this flag when upgrading the version of bootstrap to keep your node up to date without dropping the local data. The original preset (-t), assembly (-a), and custom preset (-a) must be used. Backup the target folder before upgrading.`,
            default: ConfigService.defaultParams.reset,
        }),

        report: Flags.boolean({
            description: 'It generates reStructuredText (.rst) reports describing the configuration of each node.',
            default: ConfigService.defaultParams.report,
        }),

        user: Flags.string({
            char: 'u',
            description: `User used to run docker images when creating configuration files like certificates or nemesis block. "${BootstrapUtils.CURRENT_USER}" means the current user.`,
            default: BootstrapUtils.CURRENT_USER,
        }),
    });
    static flags = Config.resolveFlags(false);
    async run() {
      const { flags } = await this.parse(Config.flags);
      BootstrapUtils.showBanner();
      flags.password = await CommandUtils.resolvePassword(
          flags.password,
          flags.noPassword,
          CommandUtils.passwordPromptDefaultMessage,
          true,
      );
      // await new BootstrapService(this.config.root).config(flags);
    }
}
