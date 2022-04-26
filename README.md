# ftl-dependency-analyzer

Analyze FreeMarker Template Language (FTL).

## CLI

```
$ ftl-dependency-analyze ./src/index.ftl
|--includes-01.ftl
  |--/includes-02.ftl
    |--/basic-01.ftl
    |--/basic-02.ftl
  |--/basic-03.ftl

```
### Options

#### `--format`, `-f`

#### `--base`, `-b`

## API

### `parse`

### `visit`

### `analyzeIncludeDirective`
