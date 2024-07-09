# AIT Reusable Component React

A fully-fledged Table module created for React apps. Provides table component, search field, paging mode and more!

# Overview
* [Introduction](#introduction)
* [Installation](#installation)
  * [System Requirement](#system-requirement)
  * [Install The Module](#install-the-module)
  * [Tailwind CSS Configuration](#tailwind-css-configuration)
* [Components](#components)
  * [Table](#table)
  * [TableRow](#tablerow)
  * [TableHead](#tablehead)
  * [TableBody](#tablebody)
  * [TableCell](#tablecell)
  * [ActionButton](#actionbutton)
  * [Typography](#typography)
  * [Paging](#paging)
  * [InputSearch](#inputsearch)
* [Example](#example)
* [Developers](#developers)

# Introduction

**AIT Reusable Component React** provide You to use components that adapted to AIT standards. Its fully customizeable, realabel, integrated with Tailwind CSS.

### [Demo](https://ait-reusable-table-react.sandbait.work/)

# Installation

## System Requirements

| Module | Version |
| --- | --- |
| Node.js | ^18.19.1 |
| React | ^18.2.0 |
| Tailwind CSS | ^3.4.1 |
| react-router-dom | ^6.22.3 |

## Install The Module

With NPM

```bash
npm install ait-reusable-component-react
```

With Yarn

```bash
yarn add ait-reusable-component-react
```

## Install Tailwind CSS

This project uses Tailwind CSS for UI Framework. [You can refer this link to install Tailwind CSS](https://tailwindcss.com/docs/guides/create-react-app)

## Tailwind CSS Configuration

Add the **AIT Reusable Component React** content path to **tailwind.config.js**

```js
import { aitTailwindContent } from 'ait-reusable-component-react/utils';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    aitTailwindContent()
  ],
  ...
}
```

Add extends color `primary`, `secondary`, `tertiary`, `danger`, `success`, `warning`, `info`  to **tailwind.config.js**

<details>
<summary>Expand Example</summary>

```js
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7C5BFA',
          light: {
            1: '#F1EBFE',
            2: '#F8F5FF',
          },
          dark: {
            1: '#2D1D90',
            2: '#1D1177',
          },
          //v2 color base template
          25: '#F8F5FF',
          50: '#F1EBFE',
          100: '#E7DEFE',
          200: '#CFBDFE',
          300: '#B59CFD',
          400: '#9F83FB',
          500: '#7C5BFA',
          600: '#5E42D7',
          700: '#432DB3',
          800: '#2D1D90',
          900: '#1D1177',
          //end v2 color base template
        },
        secondary: {
          //v2 color base template
          25: '#F9FDF7',
          50: '#F3FCED',
          100: '#EDFCE4',
          200: '#D8FACA',
          300: '#B9F0AC',
          400: '#9AE191',
          500: '#6FCE6D',
          600: '#4FB156',
          700: '#369444',
          800: '#227736',
          900: '#14622D',
          //end v2 color base template
        },
        tertiary: {
          //v2 color base template
          25: '#f2fffb',
          50: '#e3fcf4',
          100: '#c9fcef',
          200: '#95f9e9',
          300: '#5fede2',
          400: '#37dcdc',
          500: '#00b5c6',
          600: '#008daa',
          700: '#006b8e',
          800: '#004c72',
          900: '#00375f',
          //end v2 color base template
        },
        danger: {
          DEFAULT: '#FF5454',
          light: {
            1: '#FFCCBA',
            2: '#FDEFE8',
          },
          dark: {
            1: '#B72A42',
            2: '#7A1034',
          },
          //v2 color base template
          25: '#FDEFE8',
          50: '#FEEFE7',
          100: '#FFE8DC',
          200: '#FFCCBA',
          300: '#FFAA98',
          400: '#FF897E',
          500: '#FF5454',
          600: '#DB3D4B',
          700: '#B72A42',
          800: '#931A3A',
          900: '#7A1034',
          //end v2 color base template
        },
        success: {
          DEFAULT: '#09c380',
          light: {
            1: '#5ee1b2',
            2: '#cff6e8',
          },
          dark: {
            1: '#069d66',
            2: '#098c5d',
          },
          //v2 color base template
          25: '#f8fff2',
          50: '#effce3',
          100: '#dff9cf',
          200: '#b9f3a2',
          300: '#84dc6d',
          400: '#53ba45',
          500: '#1b8c17',
          600: '#107816',
          700: '#369444',
          800: '#075117',
          900: '#044317',
          //end v2 color base template
        },
        warning: {
          DEFAULT: '#F2D12B',
          light: {
            1: '#FEFAD4',
            2: '#FCFAE8',
          },
          dark: {
            1: '#AE8F15',
            2: '#745A08',
          },
          //v2 color base template
          25: '#FCFAE8',
          50: '#FDFADE',
          100: '#FEFAD4',
          200: '#FDF4AA',
          300: '#FBEA7F',
          400: '#F7E05E',
          500: '#F2D12B',
          600: '#D0AF1F',
          700: '#AE8F15',
          800: '#8C700D',
          900: '#745A08',
          //end v2 color base template
        },
        info: {
          DEFAULT: '#009CF7',
          light: {
            1: '#CBF8FE',
            2: '#E3F9FC',
          },
          dark: {
            1: '#005AB1',
            2: '#002D76',
          },
          //v2 color base template
          25: '#E3F9FC',
          50: '#D9F8FD',
          100: '#CBF8FE',
          200: '#98EBFE',
          300: '#65D7FC',
          400: '#3EC0FA',
          500: '#009CF7',
          600: '#0079D4',
          700: '#005AB1',
          800: '#00408F',
          900: '#002D76',
          //end v2 color base template
        }
      }
    },
  },
  ...
}
```

</details>

# Components

## Table

```tsx
import { Table } from 'ait-reusable-component-react'
```

| Parameter | Type | Description | Default Value | Required |
| --- | --- | --- | --- | :---: |
| children | ReactNode | Children Component | undefined | No |
| classNames | [TableClassNames](#tableclassnames) | Class name that apply to Table component | undefined | No |
| onUpdateParams | (params: [TableContextValueParams](#tablecontextvalueparams)) => void | Fired when TableCell with order props was clicked | undefined | No |
| params | [x: string]: any | value that apply to TableCell with order props | undefined | No |

*All common `table` props can be apply to this component*

<details>
<summary>Interface</summary>

#### TableClassNames

| Name | Type | Required |
| --- | --- | :---: |
| container | string | No |
| table | string | No |

#### TableContextValueParams

| Name | Type | Required |
| --- | --- | :---: |
| [x: string] | any | No |

</details>

---

## TableRow

```tsx
import { TableRow } from 'ait-reusable-component-react'
```

*All common `tr` props can be apply to this component*

---

## TableHead

```tsx
import { TableHead } from 'ait-reusable-component-react'
```

*All common `thead` props can be apply to this component*

---

## TableBody

```tsx
import { TableBody } from 'ait-reusable-component-react'
```

*All common `tbody` props can be apply to this component*

---

## TableCell

**Table > TableHead > TableRow > TableCell**

| Parameter | Type | Description | Default Value | Required |
| --- | --- | --- | --- | :---: | 
| children | ReactNode | Children Component | undefined | No |
| classNames | [TableCellClassNames](#tablecellclassnames) | Class name that apply to TableCell component | undefined | No |
| index | boolean | Set TableCell behavior as index | false | No |
| order | string | Can be used to provide sort-order function | undefined | No |
| orderPrefix | string | apply prefix to order value, useful if you want to apply multiple sort-order | undefined | No |
| action | boolean | Set TableCell behavior as action | false | No |

**Table > TableBody > TableRow > TableCell**

| Parameter | Type | Description | Default Value | Required |
| --- | --- | --- | --- | :---: | 
| children | ReactNode | Children Component | undefined | No |
| classNames | [TableCellClassNames](#tablecellclassnames) | Class name that apply to TableCell component | undefined | No |
| index | number | Set TableCell index | undefined | No |
| value | any | Set TableCell children with validation. If validation is fail, placeholder will be appear instead, prefer to use this props instead of children if your given children posibly undefined | undefined | No |
| validate | (value: T) => boolean | custom validation | undefined | No |
| placeholder | string | appear while return validate is false | - | No |
| renderValue | (value: T) => ReactNode | Render custom value. Useful if you want to mapping value of Array or Object | undefined | No |
| action | boolean | Set TableCell behavior as action | false | No |

*All common `tbody` props can be apply to this component*

<details>
<summary>Interface</summary>

#### TableCellClassNames

| Name | Type | Required |
| --- | --- | :---: |
| actionDivider | string | No |
| actionWrapper | string | No |
| cell | string | No |
| ascIcon | string | No |
| descIcon | string | No |
| icon | string | No |

</details>

---

## ActionButton

```tsx
import { ActionButton } from 'ait-reusable-component-react'
```

Used for `TableCell` action

| Parameter | Type | Description | Default Value | Required |
| --- | --- | --- | --- | :---: |
| variant | ReactNode | Set behavior of ActionButton | undefined | No |
| loading | boolean | Set loading state | undefined | No |
| to | string | route to destination page. make sure **react-router-dom v6** was installed | undefined | No |

*All common `button` props can be apply to this component*

---

## Typography

```tsx
import { Typography } from 'ait-reusable-component-react'
```

| Parameter | Type | Description | Default Value | Required |
| --- | --- | --- | --- | :---: |
| children | ReactNode | Children Component | undefined | No |
| variant | 'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6' \| 'body1' \| 'body2' \| 'subtitle1' \| 'subtitle2' \| 'caption' | Set behavior of Typography | body1 | No |
| type | 'light' \| 'normal' \| 'medium' \| 'semibold' \| 'bold' | Set type of Typography | normal | No |

*All common `HTMLAttributes` can be apply to this component*

---

## TextField

```tsx
import { TextField } from 'ait-reusable-component-react'
```

| Parameter | Type | Description | Default Value | Required |
| --- | --- | --- | --- | :---: |
| label | string | label that apply to TextField | undefined | No |
| classNames | [TextFieldClassNames](#textfieldclassnames) | Class name that apply to TableCell component | undefined | No |
| helperText | string | TextField helper text | undefined | No |
| startIcon | ComponentType<SVGProps<SVGSVGElement>> | prefix TextField icon | undefined | No |
| endIcon | ComponentType<SVGProps<SVGSVGElement>> | suffix TextField icon | undefined | No |
| onClickEndIcon | MouseEventHandler<SVGSVGElement> | Fired when end icon was clicked | undefined | No |
| prefix | string \| number | prefix TextField | undefined | No |
| suffix | string \| number | suffix TextField | undefined | No |
| sizing | 'sm' \| 'md' \| 'lg' | size of TextField | 'md' | No |
| error | boolean | Tell to TextField that style behavior must be danger style | undefined | No |

*All common `input` props can be apply to this component*

<details>
<summary>Interface</summary>

#### TextFieldClassNames

| Name | Type | Required |
| --- | --- | :---: |
| container | string | No |
| helperText | string | No |
| startIconWrapper | string | No |
| startIcon | string | No |
| endIconWrapper | string | No |
| endIcon | string | No |
| wrapper | string | No |
| input | string | No |

</details>

---

## Paging

```tsx
import { Paging } from 'ait-reusable-component-react'
```

| Parameter | Type | Description | Default Value | Required |
| --- | --- | --- | :---: | :---: |
| onChangePage | (data: [PagingParams](#pagingparams)) => void | Fired when paging was changed | undefined | Yes |
| page | number | Current page | 1 | No |
| limit | number | Total data to display per page | 10 | No |
| total | number | Total data | 0 | No |
| loading | boolean | Props to temporary disable paging while data on load | false | No |

<details>
<summary>Interface</summary>

#### PagingParams

| Name | Type | Required |
| --- | --- | :---: |
| page | number | Yes |
| limit | number | Yes |

</details>

---

## Search

```tsx
import { InputSearch } from 'ait-reusable-component-react'
```

| Parameter | Type | Description | Default Value | Required |
| --- | --- | --- | --- | :---: |
| onChangeText | (value: string) => void | Fired while value is changed | undefined | No |
| value | string | set controlled value for this component | undefined | No |

*All common `input` props can be apply to this component*

# Example

How to use it

#### [Demo](https://ait-reusable-table-react.sandbait.work/common-usage)

### Common Usage

```jsx
import {
  useState
} from "react";

import {
  ActionButton,
  Content,
  ContentBody,
  ContentHeader,
  InputSearch,
  Paging,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  ToggleDarkMode
} from "ait-reusable-component-react";
import {
  Wrapper
} from "../../components";

export function ExamplePage() {

  const [params, setParams] = useState({
    total: 1000,
    size: 10,
    page: 1
  });

  const updateParams = (value: typeof params) => {
    setParams((_) => ({ ..._, ...value }));
  };

  const renderTableItem = (_: any, index: number) => {
    return (
      <TableRow key={index}>
        <TableCell {...{ index }} />
        <TableCell>First Name</TableCell>
        <TableCell>Last Name</TableCell>
        <TableCell>Username</TableCell>
        <TableCell>Email</TableCell>
        <TableCell action={true}>
          <ActionButton variant="detail" />
          <ActionButton variant="edit" />
          <ActionButton variant="delete" />
        </TableCell>
      </TableRow>
    );
  };

  return (
    <Wrapper>
      <Content>
        <ContentHeader title="Table Example">
          <ToggleDarkMode />
        </ContentHeader>
        <ContentBody>
          <InputSearch />
          <Table onUpdateParams={(_: any) => updateParams(_)} {...{ params }}>
            <TableHead>
              <TableRow>
                <TableCell index={true} />
                <TableCell order="first_name">First Name</TableCell>
                <TableCell order="last_name">Last Name</TableCell>
                <TableCell order="username">Username</TableCell>
                <TableCell orderPrefix="example" order="email">Email</TableCell>
                <TableCell className="w-[160px]" action={true}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Array.from({ length: params.size }, renderTableItem)}
            </TableBody>
          </Table>
          <Paging
            onChangePage={(_: any) => updateParams(_)}
            total={params.total}
            size={params.size}
            page={params.page}
          />
        </ContentBody>
      </Content>
    </Wrapper>
  );
}
```

### Integrating with Query Params

#### [Demo](https://ait-reusable-table-react.sandbait.work/example-with-query-params)

See [src/examples/modules/ExampleWithQueryParams](https://github.com/PT-Akar-Inti-Teknologi/ait_reusable_component_react/blob/main/src/examples/modules/ExampleWithQueryParams)

### Integrating with Query Params and React Query

**Make sure your Backend was following AIT standard.**

#### [Demo](https://ait-reusable-table-react.sandbait.work/)

See [src/examples/modules/ExampleWithReactQuery](https://github.com/PT-Akar-Inti-Teknologi/ait_reusable_component_react/tree/main/src/examples/modules/ExampleWithReactQuery)

# Developers

[muhammad-f-huda-ait](https://github.com/muhammad-f-huda-ait)
