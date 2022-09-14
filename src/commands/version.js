"use strict"
/*
 * [foonyah/fcli] version.js
 * Copyright 2022 Synquery Team and contributors all rights reserved.
 * package.json からバージョンを表示する
 */
const { Command, Flags } = require("@oclif/core");
const { BootstrapUtils } = require('../service');
// import { CommandUtils } from '../service/CommandUtils';
// import Clean from './clean';
// import Compose from './compose';
// import Config from './config';
// import Run from './run';
exports.default = class Version extends Command {
  static description = 'Single command that aggregates config, compose and run in one line!';
  static examples = [
    `$ fcli version`
  ];
  async run() {
    await BootstrapUtils.showBanner();
  }
};
