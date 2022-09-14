"use strict"
/*
 * [foonyah/fcli] service/CommandUtils.js
 * Copyright 2022 Synquery Team and contributors all rights reserved.
 * よく使う関数を一括管理
 */
const { flags } = require('@oclif/command');
const BootstrapUtils = require('./BootstrapUtils');
/*
const { IOptionFlag } from '@oclif/command/lib/flags';
const { prompt } from 'inquirer';
const { Account, Convert, NetworkType, PublicAccount } from 'symbol-sdk';
const { LogType } from '../logger';
const Logger from '../logger/Logger';
const LoggerFactory from '../logger/LoggerFactory';
const { CertificatePair } from '../model';
const { BootstrapUtils } from './BootstrapUtils';
const { KeyName } from './ConfigService';
const logger: Logger = LoggerFactory.getLogger(LogType.System);
*/
const Static = {
  /**
   * @returns IOptionFlag<string | undefined>
   */
  getPasswordFlag
};
exports.default = class CommandUtils {

  static passwordPromptDefaultMessage = `Enter the password used to encrypt and decrypt custom presets, addresses.yml, and preset.yml files. When providing a password, private keys will be encrypted. Keep this password in a secure place!`;

  static getPasswordFlag = Static.getPasswordFlag;
  static helpFlag = flags.help({ char: 'h', description: 'It shows the help of this command.' });
  
  static targetFlag = flags.string({
      char: 't',
      description: 'The target folder where the symbol-bootstrap network is generated',
      default: BootstrapUtils.defaultTargetFolder,
  });

  static passwordFlag = CommandUtils.getPasswordFlag(
      `A password used to encrypt and decrypt private keys in preset files like addresses.yml and preset.yml. Bootstrap prompts for a password by default, can be provided in the command line (--password=XXXX) or disabled in the command line (--noPassword).`,
  );

  static noPasswordFlag = flags.boolean({
      description: 'When provided, Bootstrap will not use a password, so private keys will be stored in plain text. Use with caution.',
      default: false,
  });
  
  /**
   * @returns <boolean | string>
   */
  static isValidPassword = (input/*input: string | undefined*/)=>{
      if (!input || input === '') {
          return true;
      }
      if (input.length >= 4) return true;
      return `Password must have at least 4 characters but got ${input.length}`;
  }

  /**
   * @returns <boolean | string>
   */
  static isValidPrivateKey = (input/*input: string*/)=>{
      return Convert.isHexString(input, 64) ? true : 'Invalid private key. It must have 64 hex characters.';
  }

  /**
   * @returns <Promise>
   */
  static resolvePrivateKey = async (
      /*
      networkType: NetworkType,
      account: CertificatePair | undefined,
      keyName: KeyName,
      nodeName: string,
      operationDescription: string
      */
  )=>{
    if (!account) {
        return '';
    }
    if (!account.privateKey) {
      while (true) {
        console.log();
        console.log(`${keyName} private key is required when ${operationDescription}.`);
        const address = PublicAccount.createFromPublicKey(account.publicKey, networkType).address.plain();
        const nodeDescription = nodeName === '' ? `of` : `of the Node's '${nodeName}'`;
        const responses = await prompt([
          {
            name: 'value',
            message: `Enter the 64 HEX private key ${nodeDescription} ${keyName} account with Address: ${address} and Public Key: ${account.publicKey}:`,
            type: 'password',
            mask: '*',
            validate: CommandUtils.isValidPrivateKey,
          },
        ]);
        const privateKey = responses.value === '' ? undefined : responses.value.toUpperCase();
        if (!privateKey) {
          console.log('Please provide the private key.');
        } else {
          const enteredAccount = Account.createFromPrivateKey(privateKey, networkType);
          if (enteredAccount.publicKey.toUpperCase() !== account.publicKey.toUpperCase()) {
            console.log(
              `Invalid private key. Expected address is ${address} but you provided the private key for address ${enteredAccount.address.plain()}.\n`,
            );
            console.log(`Please re-enter private key.`);
          } else {
            account.privateKey = privateKey;
            return privateKey;
          }
        }
      }
    }
    return account.privateKey.toUpperCase();
  }

  /**
   * @returns Promise<string | undefined>
   */
  static resolvePassword = async (/*
      providedPassword: string | undefined,
      noPassword: boolean,
      message: string,
      log: boolean,
  */)=>{
      if (!providedPassword) {
          if (noPassword) {
              if (log) logger.warn(`Password has not been provided (--noPassword)! It's recommended to use one for security!`);
              return undefined;
          }
          const responses = await prompt([
              {
                  name: 'password',
                  mask: '*',
                  message: message,
                  type: 'password',
                  validate: CommandUtils.isValidPassword,
              },
          ]);
          if (responses.password === '' || !responses.password) {
              if (log) logger.warn(`Password has not been provided (empty text)! It's recommended to use one for security!`);
              return undefined;
          }
          if (log) logger.info(`Password has been provided`);
          return responses.password;
      }
      if (log) logger.info(`Password has been provided`);
      return providedPassword;
  }
}
function getPasswordFlag (description/*description: string*/) {
  return flags.string({
    description,
    parse: (/*input: string*/)=>{
        const result = !input || CommandUtils.isValidPassword(input);
        if (result === true) return input;
        throw new Error(`--password is invalid, ${result}`);
    },
  });
}
