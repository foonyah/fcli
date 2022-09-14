fcli
=================

foonyah command line interface tools

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/fcli.svg)](https://npmjs.org/package/fcli)
[![CircleCI](https://circleci.com/gh/oclif/fcli/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/fcli/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/fcli.svg)](https://npmjs.org/package/fcli)
[![License](https://img.shields.io/npm/l/fcli.svg)](https://github.com/oclif/fcli/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)

<!-- tocstop -->
# Usage

<!-- usage -->
```sh-session
$ npm install -g fcli
$ fcli COMMAND
running command...
$ fcli (--version)
fcli/0.0.0 darwin-x64 node-v18.7.0
$ fcli --help [COMMAND]
USAGE
  $ fcli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`fcli version`](#fcli-version-command)
* [`fcli config`](#fcli-config-command)
* [`fcli help [COMMAND]`](#fcli-help-command)

## `fcli hello PERSON`

Say hello

```
USAGE
  $ fcli hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/fcli/index.ts](https://github.com/foonyah/fcli/blob/v0.0.0/dist/commands/hello/index.ts)_

## `fcli version`

0.0.0

```
USAGE
  $ fcli version

DESCRIPTION
  See fcli version

EXAMPLES
  $ fcli version
  0.0.0 (./src/commands/verion.js)
```

## `fcli help [COMMAND]`

Display help for fcli.

```
USAGE
  $ fcli help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for fcli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.12/src/commands/help.ts)_

## `fcli plugins`

List installed plugins.

```
USAGE
  $ fcli plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ fcli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `fcli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ fcli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ fcli plugins add

EXAMPLES
  $ fcli plugins:install myplugin 

  $ fcli plugins:install https://github.com/someuser/someplugin

  $ fcli plugins:install someuser/someplugin
```

## `fcli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ fcli plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ fcli plugins:inspect myplugin
```

## `fcli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ fcli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ fcli plugins add

EXAMPLES
  $ fcli plugins:install myplugin 

  $ fcli plugins:install https://github.com/someuser/someplugin

  $ fcli plugins:install someuser/someplugin
```

## `fcli plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ fcli plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ fcli plugins:link myplugin
```

## `fcli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ fcli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ fcli plugins unlink
  $ fcli plugins remove
```

## `fcli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ fcli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ fcli plugins unlink
  $ fcli plugins remove
```

## `fcli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ fcli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ fcli plugins unlink
  $ fcli plugins remove
```

## `fcli plugins update`

Update installed plugins.

```
USAGE
  $ fcli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
