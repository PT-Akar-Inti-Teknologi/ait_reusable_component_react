# AIT Reusable Table React

A fully-fledged Table module created for React apps. Provides table component, search field, paging mode and more!

# Overview
* [Introduction](#introduction)
* [Installation](#installation)
  * [Install The Module](#install-the-module)
  * [System Requirement](#system-requirement)
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

## System Requirements

| Module | Version |
| --- | --- |
| Node.js | ^18.19.1 |
| React | ^18.2.0 |
| Tailwind CSS | ^3.4.1 |
| react-router-dom | ^6.22.3 |

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
